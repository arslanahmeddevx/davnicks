const fs = require('fs');
const data = fs.readFileSync('scratch/egg_html.txt', 'utf8');

const urls = [...new Set(data.match(/https:\/\/tr\.rbxcdn\.com\/[^"'\\]+/g))].filter(u => u.includes('150/150/Image'));
console.log(`Found ${urls.length} unique 150x150 images.`);

const pageText = fs.readFileSync('src/app/egg-hatch-calculator/page.tsx', 'utf8');

let urlIdx = 0;
const newPageText = pageText.replace(/icon: "https:\/\/tr\.rbxcdn\.com\/[^"]+"/g, (match) => {
  const newUrl = urls[urlIdx % urls.length] || match.split('"')[1];
  urlIdx++;
  return `icon: "${newUrl}"`;
});

fs.writeFileSync('src/app/egg-hatch-calculator/page.tsx', newPageText);
console.log("Updated page.tsx with distinct image URLs.");
