const fs = require('fs');
const html = fs.readFileSync('scratch/tier_html.txt', 'utf8');

const regex = /<div class="bg-\[[^\]]+\][^>]*>([SABCDEF])<\/div><div[^>]*>(.*?)<\/div><\/div>/g;
let match;
const tiers = [];

// Since the divs might be nested differently, let's use a simpler approach.
// Find ">S<", ">A<", ">B<", ">C<", ">D<", ">E<", ">F<" and the following images.

const ranks = ['S', 'A', 'B', 'C', 'D', 'E', 'F'];
ranks.forEach(rank => {
  const searchStr = `>${rank}<`;
  const idx = html.indexOf(searchStr);
  if (idx !== -1) {
    let endIdx = html.indexOf('</div></div>', idx);
    if (endIdx === -1) endIdx = html.indexOf('<div class="grid', idx);
    if (endIdx === -1) endIdx = html.length;
    
    const chunk = html.substring(idx, endIdx);
    const imgMatches = chunk.match(/src="(https:\/\/tr\.rbxcdn\.com\/[^"]+)"/g);
    
    const pets = [];
    if (imgMatches) {
      imgMatches.forEach(img => {
        pets.push(img.replace('src="', '').replace('"', ''));
      });
    }
    
    tiers.push({
      rank,
      pets
    });
  }
});

console.log(JSON.stringify(tiers, null, 2));
