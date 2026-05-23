const fs = require('fs');

const transcribed = {
  "Candy Squirrel": {
    desc: "Candy Craze: Occasionally applies the Candy mutation!",
    tags: []
  },
  "Cape Buffalo": {
    desc: "Safari Renewal: Chance to duplicate harvested plants & Safari Harvester: Increased chance to duplicate Safari type plants",
    tags: ["Duplicates Plants"]
  },
  "Capybara": {
    desc: "Chill Zone: Nearby pets' hunger will not go down and they will gain additional xp per second",
    tags: ["Boosts Pet XP"]
  },
  "Cardinal": {
    desc: "Magical Friend: All Magical type plants grow faster!",
    tags: ["Increases Plant Growth"]
  },
  "Carnival Elephant": {
    desc: "The Show Must Go On: When a pet finishes their ability: There is a small chance the ability is activated again. You cannot have two pets of the same type for this passive to activate. (Except Carnival Elephants)",
    tags: []
  },
  "Carpenter Bee": {
    desc: "Hive Workshop: Occasionally converts a Pollinated fruit into a bee castle-themed cosmetic.",
    tags: []
  },
  "Brown Owl": {
    desc: "Big Eyes: Grants bonus experience per second gain to all active pets.",
    tags: []
  },
  "Bumblebee": {
    desc: "Bumble Pollinator: Occasionally pollinates fruit",
    tags: []
  },
  "Bunny": {
    desc: "Carrot Chomper: Runs to carrots, eats them, and grants bonus sheckles (more than normal value)",
    tags: ["Consumes Plants", "Sells Plants"]
  },
  "Butterfly": {
    desc: "Rainbow Flutter: Occasionally flies to a fruit with 4+ mutations, removes all mutations from it and converts it into rainbow. Ignores favorited fruit",
    tags: ["Applies Variants"]
  },
  "Calico": {
    desc: "Calico Nap: Naps in a random spot in your farm, emitting an aura that boosts nearby fruit size and affected fruits have a chance to get Sleepy mutation!",
    tags: ["Applies Plant Mutations", "Increases Plant Sizes"]
  },
  "Camel": {
    desc: "Camel Caravan: Occasionally gathers random Prickly type fruit, forms a caravan with all other camels to travel around the map. Drops one package per fruit along its path. Collect packages for random rewards! Rarer fruit/better variant/more camels gives better rewards.",
    tags: ["Gives Items"]
  },
  "Blood Owl": {
    desc: "Monarch of Midnight: Grants bonus experience per second gain to all active pets",
    tags: ["Boosts Pet XP"]
  },
  "Blue Jay": {
    desc: "Berry Friend: All Berry type plants grow faster!",
    tags: ["Increases Plant Growth"]
  },
  "Blue Whale": {
    desc: "Whale Waters: Occasionally eats heavy fruit and summons the Whale Waters weather!",
    tags: ["Applies Plant Mutations", "Consumes Plants"]
  },
  "Bone Dog": {
    desc: "Gravedigger: Occasionally digs up seeds.",
    tags: ["Gives Items"]
  },
  "Brontosaurus": {
    desc: "Giant Incubator: Pets hatched from eggs have higher base weight",
    tags: ["Increases Base Weight (kg)"]
  },
  "Brown Mouse": {
    desc: "Whiskier Wisdom: Occasionally gains bonus experience & Cheese Hop: Increase player jump height",
    tags: ["Playful", "Boosts Self XP"]
  },
  "Black Bird": {
    desc: "Dark Chirp: Grants pets hatched from eggs an age bonus",
    tags: []
  },
  "Black Bunny": {
    desc: "Carrot Devourer: Runs to carrots, eats them, and grants bonus sheckles (more than normal value)",
    tags: ["Consumes Plants", "Sells Plants"]
  },
  "Black Cat": {
    desc: "Witch's Nap: Occasionally goes to a Witch's Cauldron cosmetic and naps near it for a duration. New fruit within radius have bonus size!",
    tags: ["Uses Cosmetics", "Increases Plant Sizes"]
  },
  "Black Spotty Dragon": {
    desc: "Striking Spots: Occasionally releases striking pink and blue spots on fruits mutating them with Spotty!",
    tags: []
  },
  "Blood Hedgehog": {
    desc: "Sanguine Spike: Makes nearby prickly fruit have increased variant chance and grow bigger",
    tags: ["Increases Variants Chances", "Increases Plant Sizes"]
  },
  "Blood Kiwi": {
    desc: "Crimson Cradle: Occasionally reduces the egg hatch time and boosts egg hatch speed",
    tags: ["Reduces Egg Hatch Time"]
  },
  "Beaver": {
    desc: "The Wood Works: Occasionally goes to a Woody type fruit in your garden to convert it into a random wooden-based building cosmetic.",
    tags: []
  },
  "Bee": {
    desc: "Pollinator: Occasionally pollinates fruit",
    tags: ["Applies Plant Mutations"]
  },
  "Birb": {
    desc: "Occasionally greatly speeds up your egg hatch times.",
    tags: []
  }
};

let content = fs.readFileSync('src/data/petAbilityData.ts', 'utf-8');
const petsRegex = /\{\s*"name":\s*"([^"]+)",\s*"rarity":\s*"([^"]+)",\s*"image":\s*"([^"]+)"\s*\}/g;
const fullPets = [];
let match;
while ((match = petsRegex.exec(content)) !== null) {
  const name = match[1];
  let d = transcribed[name];
  if (d) {
    fullPets.push({
      name,
      rarity: match[2],
      image: match[3],
      description: d.desc,
      tags: d.tags
    });
  } else {
    fullPets.push({
      name,
      rarity: match[2],
      image: match[3],
      description: "Ability details not available.",
      tags: []
    });
  }
}

// Write the new dataset
const code = "export interface PetAbility {\n" +
"  name: string;\n" +
"  rarity: string;\n" +
"  image: string;\n" +
"  description: string;\n" +
"  tags: string[];\n" +
"}\n\n" +
"export const abilityPets: PetAbility[] = " + JSON.stringify(fullPets, null, 2) + ";\n";

fs.writeFileSync('src/data/petAbilitySearchData.ts', code);
console.log("Written", fullPets.length, "pets to src/data/petAbilitySearchData.ts");
