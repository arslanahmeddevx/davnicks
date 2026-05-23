const fs = require('fs');
const data = fs.readFileSync('scratch/egg_html.txt', 'utf8');

// Looking for pairs of alt text and src in the HTML.
// e.g. alt="Anti Bee Egg" loading="lazy" width="150" height="150" decoding="async" data-nimg="1" class="..." src="/_next/image?url=https%3A%2F%2Ftr.rbxcdn.com%2F..."
const regex = /alt="([^"]+ Egg)"[^>]*src="([^"]+)"/g;
let match;
const eggs = {};
while ((match = regex.exec(data)) !== null) {
  let url = match[2];
  if (url.includes('url=')) {
    url = decodeURIComponent(url.split('url=')[1].split('&')[0]);
  }
  eggs[match[1]] = url;
}

console.log(eggs);
fs.writeFileSync('scratch/egg_urls.json', JSON.stringify(eggs, null, 2));
