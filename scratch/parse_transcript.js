const fs = require('fs');
const readline = require('readline');
const path = require('path');

const logPath = 'C:\\Users\\Palwasha Ali\\.gemini\\antigravity\\brain\\93c94dcc-eafc-416a-9eda-30a001fdfe66\\.system_generated\\logs\\transcript.jsonl';

async function processTranscript() {
  const fileStream = fs.createReadStream(logPath);
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  let lastUserInput = '';

  for await (const line of rl) {
    if (!line.trim()) continue;
    try {
      const parsed = JSON.parse(line);
      if (parsed.type === 'USER_INPUT' && parsed.content) {
        lastUserInput = parsed.content;
      }
    } catch(e) {
      // ignore
    }
  }

  // Now extract the raw text inside <USER_REQUEST> ... </USER_REQUEST>
  const match = lastUserInput.match(/<USER_REQUEST>([\s\S]*?)<\/USER_REQUEST>/);
  if (!match) {
    console.error("Could not find USER_REQUEST in the last user input.");
    return;
  }

  const rawText = match[1];
  
  // Parse the text!
  // The format is roughly:
  // Pet Name
  // Pet Name
  // \n
  // Rarity
  // \n
  // Description
  // \n
  // Tag1
  // Tag2...
  
  const lines = rawText.split('\n').map(l => l.trim());
  const parsedPets = {};
  
  let currentPet = null;
  let state = 'EXPECTING_NAME1';
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (!line) continue;
    
    // Check if this line and the next line are identical. That indicates a new pet.
    let nextLine = '';
    for(let j = i+1; j < lines.length; j++) {
        if (lines[j]) { nextLine = lines[j]; break; }
    }

    if (line === nextLine && line !== "Playful" && line !== "Gives Items" && line.length > 2) {
      // New pet started
      if (currentPet && currentPet.name) {
        parsedPets[currentPet.name] = currentPet;
      }
      currentPet = { name: line, tags: [] };
      state = 'NAME2'; // we found name1, next non-empty is name2
      continue;
    }
    
    if (state === 'NAME2') {
      if (line === currentPet.name) {
        state = 'RARITY';
      }
      continue;
    }
    
    if (state === 'RARITY') {
      currentPet.rarity = line;
      state = 'DESCRIPTION';
      continue;
    }
    
    if (state === 'DESCRIPTION') {
      currentPet.description = line;
      state = 'TAGS';
      continue;
    }
    
    if (state === 'TAGS') {
      // It's a tag, until we hit a double-name again (handled by the if at the top)
      currentPet.tags.push(line);
    }
  }
  
  if (currentPet && currentPet.name) {
    parsedPets[currentPet.name] = currentPet;
  }
  
  console.log("Parsed", Object.keys(parsedPets).length, "pets from transcript!");
  
  // Now merge with our existing database to get images
  let existingContent = fs.readFileSync('src/data/petAbilityData.ts', 'utf-8');
  const petsRegex = /\{\s*"name":\s*"([^"]+)",\s*"rarity":\s*"([^"]+)",\s*"image":\s*"([^"]+)"\s*\}/g;
  
  const fullPets = [];
  let m;
  while ((m = petsRegex.exec(existingContent)) !== null) {
    const name = m[1];
    let d = parsedPets[name];
    if (d) {
      fullPets.push({
        name,
        rarity: d.rarity || m[2],
        image: m[3],
        description: d.description || "Ability details not available.",
        tags: d.tags || []
      });
    } else {
      fullPets.push({
        name,
        rarity: m[2],
        image: m[3],
        description: "Ability details not available.",
        tags: []
      });
    }
  }
  
  const code = "export interface PetAbility {\\n" +
  "  name: string;\\n" +
  "  rarity: string;\\n" +
  "  image: string;\\n" +
  "  description: string;\\n" +
  "  tags: string[];\\n" +
  "}\\n\\n" +
  "export const abilityPets: PetAbility[] = " + JSON.stringify(fullPets, null, 2) + ";\\n";
  
  fs.writeFileSync('src/data/petAbilitySearchData.ts', code);
  console.log("Merged and wrote", fullPets.length, "pets to src/data/petAbilitySearchData.ts");

}

processTranscript().catch(console.error);
