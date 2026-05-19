const fs = require('fs');

const html = fs.readFileSync('site_pet-ability-calculator.html', 'utf-8');

// Regex to match <img src="URL" alt="NAME"
const regex = /<img src="([^"]+)" alt="([^"]+)"/g;

let match;
const imageMap = {};

while ((match = regex.exec(html)) !== null) {
  const src = match[1];
  const alt = match[2];
  
  if (src.includes('tr.rbxcdn.com')) {
    imageMap[alt] = src;
  }
}

const { pets, mutations, boosts } = require('../src/data/petAbilityData.js'); // Wait, petAbilityData is TS, we need to read it and rewrite it.

const tsContent = fs.readFileSync('src/data/petAbilityData.ts', 'utf-8');

// The easiest way is to read the raw list of pets from earlier or just parse it.
// I will just use eval or regex to extract it, or I can just import it in a .mjs script or parse the JSON if I generate it as JSON.
// Let's just create a new petAbilityData.ts by doing string replacement on the old one.
