const fs = require('fs');
const path = require('path');

let searchDataContent = fs.readFileSync(path.join(__dirname, '../src/data/petAbilitySearchData.ts'), 'utf-8');
searchDataContent = searchDataContent.replace('export interface PetAbility {', 'interface PetAbility {')
                                     .replace('export const abilityPets: PetAbility[] = ', 'module.exports = ');
  
fs.writeFileSync(path.join(__dirname, 'temp_data.js'), searchDataContent);
const oldPets = require('./temp_data.js');
  
const text = fs.readFileSync(path.join(__dirname, 'merge_pets.js'), 'utf-8');
const textDataMatch = text.match(/const text = `([\s\S]*?)`;/);
if (!textDataMatch) return;
const lines = textDataMatch[1].split('\n').map(l => l.trim());

const parsedPets = {};
let currentPet = null;
let state = 'EXPECTING_NAME1';

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (!line) continue;
  
  let nextLine = '';
  for(let j = i+1; j < lines.length; j++) {
      if (lines[j]) { nextLine = lines[j]; break; }
  }

  if (line === nextLine && line !== "Playful" && line !== "Gives Items" && line.length > 2) {
    if (currentPet && currentPet.name) parsedPets[currentPet.name] = currentPet;
    currentPet = { name: line, tags: [] };
    state = 'NAME2';
    continue;
  }
  
  if (state === 'NAME2') { if (line === currentPet.name) state = 'RARITY'; continue; }
  if (state === 'RARITY') { currentPet.rarity = line; state = 'DESCRIPTION'; continue; }
  if (state === 'DESCRIPTION') { currentPet.description = line; state = 'TAGS'; continue; }
  if (state === 'TAGS') { currentPet.tags.push(line); }
}

if (currentPet && currentPet.name) parsedPets[currentPet.name] = currentPet;

let updatedCount = 0;
oldPets.forEach(p => {
  let newInfo = parsedPets[p.name];
  if (newInfo) {
    p.description = newInfo.description;
    p.tags = newInfo.tags;
    p.rarity = newInfo.rarity;
    updatedCount++;
  }
});

const code = "export interface PetAbility {\n" +
"  name: string;\n" +
"  rarity: string;\n" +
"  image: string;\n" +
"  description: string;\n" +
"  tags: string[];\n" +
"}\n\n" +
"export const abilityPets: PetAbility[] = " + JSON.stringify(oldPets, null, 2) + ";\n";

fs.writeFileSync(path.join(__dirname, '../src/data/petAbilitySearchData.ts'), code);
console.log("Updated", updatedCount, "pets with the new text blob.");
