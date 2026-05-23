const fs = require('fs');
const data = fs.readFileSync('scratch/stock_html.txt', 'utf8');
const urls = [...new Set(data.match(/https:\/\/tr\.rbxcdn\.com\/[^"'\\]+/g))].filter(u => u.includes('150/150/Image'));
console.log('Found URLs:', urls.length);
if (urls.length > 0) {
  fs.writeFileSync('scratch/stock_image_urls.json', JSON.stringify(urls, null, 2));
  console.log('Saved to scratch/stock_image_urls.json');
}
