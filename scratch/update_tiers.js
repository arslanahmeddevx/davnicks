const fs = require('fs');
const html = fs.readFileSync('scratch/tier_html.txt', 'utf8');

const ranks = ['S', 'A', 'B', 'C', 'D', 'E', 'F'];
const colors = {
  'S': 'bg-[#ff7f7f] text-black',
  'A': 'bg-[#ffbf7f] text-black',
  'B': 'bg-[#ffff7f] text-black',
  'C': 'bg-[#bfff7f] text-black',
  'D': 'bg-[#7fff7f] text-black',
  'E': 'bg-[#7fffbf] text-black',
  'F': 'bg-[#7fffff] text-black'
};

const tiers = [];

for (let i = 0; i < ranks.length; i++) {
  const rank = ranks[i];
  const nextRank = i < ranks.length - 1 ? ranks[i + 1] : null;
  
  const startIdx = html.indexOf(`>${rank}<`);
  if (startIdx === -1) continue;
  
  let endIdx = nextRank ? html.indexOf(`>${nextRank}<`) : html.length;
  if (endIdx === -1) endIdx = html.length;
  
  const chunk = html.substring(startIdx, endIdx);
  const imgMatches = chunk.match(/src="(https:\/\/tr\.rbxcdn\.com\/[^"]+)"/g);
  
  const pets = [];
  if (imgMatches) {
    imgMatches.forEach(img => {
      pets.push(img.replace('src="', '').replace('"', ''));
    });
  }
  
  // Dedup pets just in case the regex pulled duplicates
  const uniquePets = [...new Set(pets)];
  
  tiers.push({
    rank,
    color: colors[rank],
    pets: uniquePets
  });
}

// Read the current page.tsx and replace the tiers array
let pageTsx = fs.readFileSync('src/app/pet-tier-list/page.tsx', 'utf8');

const arrayStart = pageTsx.indexOf('const tiers = [');
const arrayEnd = pageTsx.indexOf('];', arrayStart) + 2;

const newArrayStr = 'const tiers = ' + JSON.stringify(tiers, null, 2).replace(/"([^"]+)":/g, '$1:') + ';';

pageTsx = pageTsx.substring(0, arrayStart) + newArrayStr + pageTsx.substring(arrayEnd);

fs.writeFileSync('src/app/pet-tier-list/page.tsx', pageTsx);
console.log("Updated page.tsx with fetched tiers!");
