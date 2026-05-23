const fs = require('fs');

const eggsData = [
  { name: "Anti Bee Egg", c1: "#FFD700", c2: "#111111" },
  { name: "Bee Egg", c1: "#111111", c2: "#FFD700" },
  { name: "Bug Egg", c1: "#7CFC00", c2: "#8B4513" },
  { name: "Common Egg", c1: "#D3D3D3", c2: "#808080" },
  { name: "Common Summer Egg", c1: "#FFD700", c2: "#F4A460" },
  { name: "Dinosaur Egg", c1: "#FFA500", c2: "#2E8B57" },
  { name: "Enchanted Egg", c1: "#FF69B4", c2: "#8A2BE2" },
  { name: "Fall Egg", c1: "#FF8C00", c2: "#A52A2A" },
  { name: "Gem Egg", c1: "#00FFFF", c2: "#0000FF" },
  { name: "Gourmet Egg", c1: "#FFFFFF", c2: "#FFD700" },
  { name: "Jungle Egg", c1: "#32CD32", c2: "#006400" },
  { name: "Legendary Egg", c1: "#FFD700", c2: "#DC143C" },
  { name: "Mythical Egg", c1: "#00FFFF", c2: "#800080" },
  { name: "Night Egg", c1: "#000000", c2: "#000080" },
  { name: "Oasis Egg", c1: "#00FFFF", c2: "#EDC9AF" },
  { name: "Paradise Egg", c1: "#FFFF00", c2: "#FF1493" },
  { name: "Primal Egg", c1: "#FF0000", c2: "#8B4513" },
  { name: "Rare Egg", c1: "#ADD8E6", c2: "#0000FF" },
  { name: "Rare Summer Egg", c1: "#FFFF00", c2: "#0000FF" },
  { name: "Safari Egg", c1: "#008000", c2: "#F0E68C" },
  { name: "Spooky Egg", c1: "#FFA500", c2: "#4B0082" },
  { name: "Sprout Egg", c1: "#90EE90", c2: "#008000" },
  { name: "Uncommon Egg", c1: "#90EE90", c2: "#228B22" },
  { name: "Zen Egg", c1: "#ADD8E6", c2: "#FFFFFF" }
];

const getEggSvg = (c1, c2) => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><radialGradient id="g_${c1.substring(1)}_${c2.substring(1)}" cx="50%" cy="50%" r="50%" fx="30%" fy="30%"><stop offset="0%" style="stop-color:${c1};stop-opacity:1" /><stop offset="100%" style="stop-color:${c2};stop-opacity:1" /></radialGradient></defs><ellipse cx="50" cy="50" rx="35" ry="45" fill="url(#g_${c1.substring(1)}_${c2.substring(1)})" /></svg>`;
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`;
};

let pageText = fs.readFileSync('src/app/egg-hatch-calculator/page.tsx', 'utf8');

eggsData.forEach(egg => {
  const uri = getEggSvg(egg.c1, egg.c2);
  const regex = new RegExp(`{ name: "${egg.name}", time: (\\d+), icon: "[^"]+" }`, 'g');
  pageText = pageText.replace(regex, `{ name: "${egg.name}", time: $1, icon: "${uri}" }`);
});

fs.writeFileSync('src/app/egg-hatch-calculator/page.tsx', pageText);
console.log("Updated page.tsx with generated SVG eggs.");
