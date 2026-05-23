const https = require('https');

https.get('https://www.growagardencalculator.ca/egg-hatch-calculator', (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    require('fs').writeFileSync('scratch/egg_html.txt', data);
    const regex = /"name":"([^"]+)","time":\d+,"icon":"(https:\/\/tr\.rbxcdn\.com\/[^"]+)"/g;
    let match;
    const eggs = {};
    while ((match = regex.exec(data)) !== null) {
      eggs[match[1]] = match[2];
    }
    
    // Also try to find any image urls near egg names if the structure is different
    if (Object.keys(eggs).length === 0) {
       console.log("No exact JSON matches. Looking for img tags or basic text.");
       console.log("Total rbxcdn links:", data.match(/https:\/\/tr\.rbxcdn\.com\/[^"'\\]+/g)?.length);
    } else {
       console.log(eggs);
       require('fs').writeFileSync('scratch/egg_urls.json', JSON.stringify(eggs, null, 2));
    }
  });
}).on('error', (err) => console.log('Error:', err.message));
