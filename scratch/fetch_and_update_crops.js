const fs = require('fs');
const https = require('https');

const raw = fs.readFileSync('scratch/crops.txt', 'utf8').split('\n').map(l => l.trim()).filter(Boolean);
const cropList = [];
for (let i = 0; i < raw.length; i += 2) {
    if (raw[i] && raw[i+1]) {
        cropList.push({ name: raw[i], value: parseInt(raw[i+1].replace(/[^0-9]/g, '')) });
    }
}

// Fetch images from the site
https.get('https://www.growagardencalculator.ca/crop-value-calculator', (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    // Also load from egg_html.txt as fallback just in case
    let fallbackHtml = '';
    try { fallbackHtml = fs.readFileSync('scratch/egg_html.txt', 'utf8'); } catch (e) {}
    
    const combinedHtml = data + ' ' + fallbackHtml;
    
    // We want to map names to urls. 
    // Usually alt="Crop Name" ... src="url" or vice versa.
    // Or we just extract all URLs.
    const urlRegex = /https:\/\/tr\.rbxcdn\.com\/[^"'\\]+/g;
    const allUrls = [...new Set(combinedHtml.match(urlRegex))].filter(u => u.includes('150/150/Image'));
    
    // As a simple robust fallback, we will just assign unique URLs to crops from the list if we can't find an exact alt match.
    // Let's attempt to find exact matches if possible, by parsing the raw DOM text.
    // E.g. alt="Ackee" loading="lazy" width="150" height="150" decoding="async" data-nimg="1" src="https://tr.rbxcdn.com/..."
    
    const cropsObjList = cropList.map((c, index) => {
      // Find matching url in HTML
      // Search for alt="Name" ... src="url"
      let imgUrl = null;
      
      const altRegex1 = new RegExp(`alt="${c.name}"[^>]+src="(https:\\\\/\\\\/tr\\\\.rbxcdn\\\\.com[^"]+)"`, 'i');
      const altRegex2 = new RegExp(`src="(https:\\\\/\\\\/tr\\\\.rbxcdn\\\\.com[^"]+)"[^>]+alt="${c.name}"`, 'i');
      
      const m1 = combinedHtml.match(altRegex1);
      const m2 = combinedHtml.match(altRegex2);
      
      if (m1) imgUrl = m1[1];
      else if (m2) imgUrl = m2[1];
      else {
        // Fallback: just use a unique image from the pile, or a specific placeholder
        imgUrl = allUrls[index % allUrls.length] || 'https://placehold.co/150x150/444/FFF?text=' + encodeURIComponent(c.name.charAt(0));
      }
      
      // Some URLs from Next.js might be encoded like _next/image?url=...
      // but tr.rbxcdn URLs don't usually need decoding if we grabbed them raw.
      
      return `  { name: "${c.name.replace(/"/g, '\\"')}", value: ${c.value}, icon: "${imgUrl}" }`;
    });
    
    // Replace in page.tsx
    let page = fs.readFileSync('src/app/crop-value-calculator/page.tsx', 'utf8');
    
    const cropsArrayStr = `const crops = [\n${cropsObjList.join(',\n')}\n];`;
    page = page.replace(/const crops = \[[\s\S]*?\];/, cropsArrayStr);
    
    fs.writeFileSync('src/app/crop-value-calculator/page.tsx', page);
    console.log(`Updated page.tsx with ${cropsObjList.length} crops!`);
  });
}).on('error', (e) => {
  console.error("Error fetching: ", e);
});
