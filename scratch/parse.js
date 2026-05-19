const fs = require('fs');

const rawPets = `Bagel Bunny
Bagel Bunny
Common
Black Bird
Black Bird
Common
Bunny
Bunny
Common
Chipmunk
Chipmunk
Common
Crab
Crab
Common
Crow
Crow
Common
Dairy Cow
Dairy Cow
Common
Dog
Dog
Common
Gecko
Gecko
Common
GIANT Robin
GIANT Robin
Common
Golden Lab
Golden Lab
Common
Ladybug
Ladybug
Common
Oxpecker
Oxpecker
Common
Pumpkin Rat
Pumpkin Rat
Common
Rainbow Cardinal
Rainbow Cardinal
Common
Rainbow Cuckoo
Rainbow Cuckoo
Common
Rainbow Oxpecker
Rainbow Oxpecker
Common
Rainbow Snow Bunny
Rainbow Snow Bunny
Common
Red Dragon
Red Dragon
Common
Robin
Robin
Common
Seagull
Seagull
Common
Sheckling
Sheckling
Common
Snow Bunny
Snow Bunny
Common
Starfish
Starfish
Common
Termite
Termite
Common
Angora Goat
Angora Goat
Uncommon
Bacon Pig
Bacon Pig
Uncommon
Bat
Bat
Uncommon
Bee
Bee
Uncommon
Black Bunny
Black Bunny
Uncommon
Blue Jay
Blue Jay
Uncommon
Bumblebee
Bumblebee
Uncommon
Cardinal
Cardinal
Uncommon
Cat
Cat
Uncommon
Chicken
Chicken
Uncommon
Chocolate Bunny
Chocolate Bunny
Uncommon
Clam
Clam
Uncommon
Deer
Deer
Uncommon
Elk
Elk
Uncommon
Farmer Chipmunk
Farmer Chipmunk
Uncommon
French Hen
French Hen
Uncommon
Ghostly Bat
Ghostly Bat
Uncommon
Ghostly Scarab
Ghostly Scarab
Uncommon
Gilded Choc Chocolate Bunny
Gilded Choc Chocolate Bunny
Uncommon
Goat
Goat
Uncommon
Hyena
Hyena
Uncommon
Hyrax
Hyrax
Uncommon
Jackalope
Jackalope
Uncommon
Maneki-neko
Maneki-neko
Uncommon
New Year's Bird
New Year's Bird
Uncommon
Pink Bunny
Pink Bunny
Uncommon
Rainbow Bacon Pig
Rainbow Bacon Pig
Uncommon
Rainbow Blue Jay
Rainbow Blue Jay
Uncommon
Rainbow Bumblebee
Rainbow Bumblebee
Uncommon
Rainbow Clam
Rainbow Clam
Uncommon
Rainbow Elk
Rainbow Elk
Uncommon
Rainbow Farmer Chipmunk
Rainbow Farmer Chipmunk
Uncommon
Rainbow French Hen
Rainbow French Hen
Uncommon
Rainbow Maneki-neko
Rainbow Maneki-neko
Uncommon
Rainbow New Year's Bird
Rainbow New Year's Bird
Uncommon
Rainbow Pink Bunny
Rainbow Pink Bunny
Uncommon
Rainbow Unicycle Monkey
Rainbow Unicycle Monkey
Uncommon
Salmon
Salmon
Uncommon
Scarab
Scarab
Uncommon
Shiba Inu
Shiba Inu
Uncommon
Sunny-Side Chicken
Sunny-Side Chicken
Uncommon
Tsuchinoko
Tsuchinoko
Uncommon
Unicycle Monkey
Unicycle Monkey
Uncommon
Wasp
Wasp
Uncommon
Armadillo
Armadillo
Rare
Badger
Badger
Rare
Beaver
Beaver
Rare
Bone Dog
Bone Dog
Rare
Cape Buffalo
Cape Buffalo
Rare
Carpenter Bee
Carpenter Bee
Rare
Chubby Chipmunk
Chubby Chipmunk
Rare
Easter Egg Chick
Easter Egg Chick
Rare
Festive Partridge
Festive Partridge
Rare
Festive Turtle Dove
Festive Turtle Dove
Rare
Firemite
Firemite
Rare
Firework Sprite
Firework Sprite
Rare
Flame Bee
Flame Bee
Rare
Flamingo
Flamingo
Rare
Geode Turtle
Geode Turtle
Rare
Ghost Bear
Ghost Bear
Rare
Ghostly Bone Dog
Ghostly Bone Dog
Rare
GIANT Armadillo
GIANT Armadillo
Rare
GIANT Badger
GIANT Badger
Rare
GIANT Firemite
GIANT Firemite
Rare
GIANT Snowman Soldier
GIANT Snowman Soldier
Rare
Gift Rat
Gift Rat
Rare
Gilded Choc Easter Egg Chick
Gilded Choc Easter Egg Chick
Rare
Gilded Choc Spring Bee
Gilded Choc Spring Bee
Rare
Glass Cat
Glass Cat
Rare
Glass Dog
Glass Dog
Rare
Goblin
Goblin
Rare
Hedgehog
Hedgehog
Rare
Honey Bee
Honey Bee
Rare
Hummingbird
Hummingbird
Rare
Kiwi
Kiwi
Rare
Messenger Pigeon
Messenger Pigeon
Rare
Monkey
Monkey
Rare
Nihonzaru
Nihonzaru
Rare
Nurse Bee
Nurse Bee
Rare
Orange Tabby
Orange Tabby
Rare
Orangutan
Orangutan
Rare
Pancake Mole
Pancake Mole
Rare
Partridge
Partridge
Rare
Performer Seal
Performer Seal
Rare
Pig
Pig
Rare
Pixie
Pixie
Rare
Rainbow Firework Sprite
Rainbow Firework Sprite
Rare
Rainbow Fortune Squirrel
Rainbow Fortune Squirrel
Rare
Rainbow Nurse Bee
Rainbow Nurse Bee
Rare
Rainbow Performer Seal
Rainbow Performer Seal
Rare
Rainbow Zebra
Rainbow Zebra
Rare
Red Squirrel
Red Squirrel
Rare
Rooster
Rooster
Rare
Sea Turtle
Sea Turtle
Rare
Seal
Seal
Rare
Smithing Dog
Smithing Dog
Rare
Snowman Soldier
Snowman Soldier
Rare
Spotted Deer
Spotted Deer
Rare
Spring Bee
Spring Bee
Rare
Tarantula Hawk
Tarantula Hawk
Rare
Topaz Snail
Topaz Snail
Rare
Toucan
Toucan
Rare
Tree Frog
Tree Frog
Rare
Turtle Dove
Turtle Dove
Rare
Wind-Up Rat
Wind-Up Rat
Rare
Woodpecker
Woodpecker
Rare
Zebra
Zebra
Rare
Amethyst Beetle
Amethyst Beetle
Legendary
Ash Raven
Ash Raven
Legendary
Bald Eagle
Bald Eagle
Legendary
Bear on Bike
Bear on Bike
Legendary
Blood Hedgehog
Blood Hedgehog
Legendary
Blood Kiwi
Blood Kiwi
Legendary
Brown Mouse
Brown Mouse
Legendary
Calico
Calico
Legendary
Capybara
Capybara
Legendary
Caterpillar
Caterpillar
Legendary
Celebration Puppy
Celebration Puppy
Legendary
Champion Beetle
Champion Beetle
Legendary
Cheetah
Cheetah
Legendary
Christmas Gorilla
Christmas Gorilla
Legendary
Corrupted Kodama
Corrupted Kodama
Legendary
Cow
Cow
Legendary
Cuckoo
Cuckoo
Legendary
Emerald Snake
Emerald Snake
Legendary
Festive Reindeer
Festive Reindeer
Legendary
Festive Santa Bear
Festive Santa Bear
Legendary
Football
Football
Legendary
Fortune Squirrel
Fortune Squirrel
Legendary
Frog
Frog
Legendary
Gardener Bee
Gardener Bee
Legendary
German Shepherd
German Shepherd
Legendary
Ghostly Spider
Ghostly Spider
Legendary
Ghostly Tomb Marmot
Ghostly Tomb Marmot
Legendary
GIANT Ash Raven
GIANT Ash Raven
Legendary
GIANT Grizzly Bear
GIANT Grizzly Bear
Legendary
GIANT Silver Dragonfly
GIANT Silver Dragonfly
Legendary
GIANT Snowman Builder
GIANT Snowman Builder
Legendary
Gilded Choc Jerboa
Gilded Choc Jerboa
Legendary
Gilded Choc Marshmallow Lamb
Gilded Choc Marshmallow Lamb
Legendary
Giraffe
Giraffe
Legendary
Gnome
Gnome
Legendary
Gorilla Chef
Gorilla Chef
Legendary
Grey Mouse
Grey Mouse
Legendary
Grizzly Bear
Grizzly Bear
Legendary
Gummy Bear
Gummy Bear
Legendary
Hippo
Hippo
Legendary
Honey Badger
Honey Badger
Legendary
Hotdog Daschund
Hotdog Daschund
Legendary
Idol Chipmunk
Idol Chipmunk
Legendary
Iguana
Iguana
Legendary
Iguanodon
Iguanodon
Legendary
Imp
Imp
Legendary
Jerboa
Jerboa
Legendary
Kodama
Kodama
Legendary
Magpie
Magpie
Legendary
Mallard
Mallard
Legendary
Mandrake
Mandrake
Legendary
Marmot
Marmot
Legendary
Marshmallow Lamb
Marshmallow Lamb
Legendary
Meerkat
Meerkat
Legendary
Mole
Mole
Legendary
Moon Cat
Moon Cat
Legendary
Moth
Moth
Legendary
Ostrich
Ostrich
Legendary
Pachycephalosaurus
Pachycephalosaurus
Legendary
Panda
Panda
Legendary
Parasaurolophus
Parasaurolophus
Legendary
Peacock
Peacock
Legendary
Petal Bee
Petal Bee
Legendary
Pine Beetle
Pine Beetle
Legendary
Pink Panda
Pink Panda
Legendary
Polar Bear
Polar Bear
Legendary
Professor Bee
Professor Bee
Legendary
Radioactive Stegosaurus
Radioactive Stegosaurus
Legendary
Rainbow Bear on Bike
Rainbow Bear on Bike
Legendary
Rainbow Black Bird
Rainbow Black Bird
Legendary
Rainbow Celebration Puppy
Rainbow Celebration Puppy
Legendary
Rainbow Christmas Gorilla
Rainbow Christmas Gorilla
Legendary
Rainbow Gardener Bee
Rainbow Gardener Bee
Legendary
Rainbow Giraffe
Rainbow Giraffe
Legendary
Rainbow Hotdog Daschund
Rainbow Hotdog Daschund
Legendary
Rainbow Idol Chipmunk
Rainbow Idol Chipmunk
Legendary
Rainbow Iguanodon
Rainbow Iguanodon
Legendary
Rainbow Kodama
Rainbow Kodama
Legendary
Rainbow Magpie
Rainbow Magpie
Legendary
Rainbow Mandrake
Rainbow Mandrake
Legendary
Rainbow Pachycephalosaurus
Rainbow Pachycephalosaurus
Legendary
Rainbow Parasaurolophus
Rainbow Parasaurolophus
Legendary
Rainbow Shroomie
Rainbow Shroomie
Legendary
Rainbow Stag Beetle
Rainbow Stag Beetle
Legendary
Raptor
Raptor
Legendary
Reindeer
Reindeer
Legendary
Sand Snake
Sand Snake
Legendary
Santa Bear
Santa Bear
Legendary
Scarlet Macaw
Scarlet Macaw
Legendary
Sea Otter
Sea Otter
Legendary
Seedling
Seedling
Legendary
Shroomie
Shroomie
Legendary
Silver Dragonfly
Silver Dragonfly
Legendary
Silver Monkey
Silver Monkey
Legendary
Silver Piggy
Silver Piggy
Legendary
Snail
Snail
Legendary
Snowman Builder
Snowman Builder
Legendary
Specter
Specter
Legendary
Spider
Spider
Legendary
Squirrel
Squirrel
Legendary
Stag Beetle
Stag Beetle
Legendary
Stegosaurus
Stegosaurus
Legendary
Stork
Stork
Legendary
Sushi Bear
Sushi Bear
Legendary
Tanchozuru
Tanchozuru
Legendary
Tanuki
Tanuki
Legendary
Tomb Marmot
Tomb Marmot
Legendary
Trapdoor Spider
Trapdoor Spider
Legendary
Triceratops
Triceratops
Legendary
Turtle
Turtle
Legendary
Wisp
Wisp
Legendary
Wolf
Wolf
Legendary
Woody
Woody
Legendary
Albino Peacock
Albino Peacock
Mythical
Ankylosaurus
Ankylosaurus
Mythical
Apple Gazelle
Apple Gazelle
Mythical
Arctic Fox
Arctic Fox
Mythical
Axolotl
Axolotl
Mythical
Barn Owl
Barn Owl
Mythical
Bear Bee
Bear Bee
Mythical
Black Cat
Black Cat
Mythical
Brontosaurus
Brontosaurus
Mythical
Brown Owl
Brown Owl
Mythical
Butterfly
Butterfly
Mythical
Camel
Camel
Mythical
Candy Squirrel
Candy Squirrel
Mythical
Chicken Zombie
Chicken Zombie
Mythical
Chimpanzee
Chimpanzee
Mythical
Cocoa Cat
Cocoa Cat
Mythical
Cooked Owl
Cooked Owl
Mythical
Crocodile
Crocodile
Mythical
Dark Spriggan
Dark Spriggan
Mythical
Dilophosaurus
Dilophosaurus
Mythical
Drake
Drake
Mythical
Echo Frog
Echo Frog
Mythical
Eggnog Chick
Eggnog Chick
Mythical
Elemental Bee
Elemental Bee
Mythical
Festive Frost Squirrel
Festive Frost Squirrel
Mythical
Festive Moose
Festive Moose
Mythical
Festive Nutcracker
Festive Nutcracker
Mythical
Firefly
Firefly
Mythical
Frost Squirrel
Frost Squirrel
Mythical
Galah Cockatoo
Galah Cockatoo
Mythical
Ghostly Black Cat
Ghostly Black Cat
Mythical
Ghostly Dark Spriggan
Ghostly Dark Spriggan
Mythical
Giant Ant
Giant Ant
Mythical
GIANT Barn Owl
GIANT Barn Owl
Mythical
GIANT Firefly
GIANT Firefly
Mythical
GIANT Mantis Shrimp
GIANT Mantis Shrimp
Mythical
Gilded Choc Nyala
Gilded Choc Nyala
Mythical
Glimmering Sprite
Glimmering Sprite
Mythical
Goblin Gardener
Goblin Gardener
Mythical
Goblin Miner
Goblin Miner
Mythical
Golden Bee
Golden Bee
Mythical
Golden Piggy
Golden Piggy
Mythical
Golem
Golem
Mythical
Hamster
Hamster
Mythical
Hazehound
Hazehound
Mythical
Hootsie Roll
Hootsie Roll
Mythical
Hyacinth Macaw
Hyacinth Macaw
Mythical
Junkbot
Junkbot
Mythical
Kappa
Kappa
Mythical
Koi
Koi
Mythical
Lemon Lion
Lemon Lion
Mythical
Lyrebird
Lyrebird
Mythical
Mantis Shrimp
Mantis Shrimp
Mythical
Mimic Octopus
Mimic Octopus
Mythical
Mistletoad
Mistletoad
Mythical
Mochi Mouse
Mochi Mouse
Mythical
Moose
Moose
Mythical
New Year's Chimp
New Year's Chimp
Mythical
Night Owl
Night Owl
Mythical
Nutcracker
Nutcracker
Mythical
Nyala
Nyala
Mythical
Owl
Owl
Mythical
Pack Bee
Pack Bee
Mythical
Pack Mule
Pack Mule
Mythical
Peach Wasp
Peach Wasp
Mythical
Penguin
Penguin
Mythical
Praying Mantis
Praying Mantis
Mythical
Pterodactyl
Pterodactyl
Mythical
Rainbow Ankylosaurus
Rainbow Ankylosaurus
Mythical
Rainbow Arctic Fox
Rainbow Arctic Fox
Mythical
Rainbow Brown Owl
Rainbow Brown Owl
Mythical
Rainbow Dilophosaurus
Rainbow Dilophosaurus
Mythical
Rainbow Elemental Bee
Rainbow Elemental Bee
Mythical
Rainbow Hazehound
Rainbow Hazehound
Mythical
Rainbow Mistletoad
Rainbow Mistletoad
Mythical
Rainbow New Year's Chimp
Rainbow New Year's Chimp
Mythical
Rainbow Rhino
Rainbow Rhino
Mythical
Rainbow Show Pony
Rainbow Show Pony
Mythical
Red Giant Ant
Red Giant Ant
Mythical
Rhino
Rhino
Mythical
Sapphire Macaw
Sapphire Macaw
Mythical
Show Pony
Show Pony
Mythical
Spaghetti Sloth
Spaghetti Sloth
Mythical
Spriggan
Spriggan
Mythical
Sugar Glider
Sugar Glider
Mythical
Summer Kiwi
Summer Kiwi
Mythical
Bearded Dragon
Bearded Dragon
Divine
Blood Owl
Blood Owl
Divine
Carnival Elephant
Carnival Elephant
Divine
Cerberus
Cerberus
Divine
Chimera
Chimera
Divine
Chinchilla
Chinchilla
Divine
Christmas Spirit
Christmas Spirit
Divine
Cockatrice
Cockatrice
Divine
Diamond Dragonfly
Diamond Dragonfly
Divine
Diamond Panther
Diamond Panther
Divine
Disco Bee
Disco Bee
Divine
Dragonfly
Dragonfly
Divine
Easter Bunny
Easter Bunny
Divine
Elephant
Elephant
Divine
Empress Bee
Empress Bee
Divine
Fennec Fox
Fennec Fox
Divine
Festive Wendigo
Festive Wendigo
Divine
Festive Yeti
Festive Yeti
Divine
French Fry Ferret
French Fry Ferret
Divine
Frost Dragon
Frost Dragon
Divine
Ghostly Mummy
Ghostly Mummy
Divine
GIANT Swan
GIANT Swan
Divine
Gilded Choc Easter Bunny
Gilded Choc Easter Bunny
Divine
Golden Goose
Golden Goose
Divine
Green Bean
Green Bean
Divine
Griffin
Griffin
Divine
Hex Serpent
Hex Serpent
Divine
Hydra
Hydra
Divine
Jandel Monkey
Jandel Monkey
Divine
King Bee
King Bee
Divine
Krampus
Krampus
Divine
Lich
Lich
Divine
Lion
Lion
Divine
Lioness
Lioness
Divine
Lobster Thermidor
Lobster Thermidor
Divine
Luminous Sprite
Luminous Sprite
Divine
Mizuchi
Mizuchi
Divine
Mummy
Mummy
Divine
Orchid Mantis
Orchid Mantis
Divine
Phoenix
Phoenix
Divine
Queen Bee
Queen Bee
Divine
Raccoon
Raccoon
Divine
Raiju
Raiju
Divine
Rainbow Bearded Dragon
Rainbow Bearded Dragon
Divine
Rainbow Carnival Elephant
Rainbow Carnival Elephant
Divine
Rainbow Cerberus
Rainbow Cerberus
Divine
Rainbow Chinchilla
Rainbow Chinchilla
Divine
Rainbow Elephant
Rainbow Elephant
Divine
Rainbow Empress Bee
Rainbow Empress Bee
Divine
Rainbow Frost Dragon
Rainbow Frost Dragon
Divine
Rainbow Griffin
Rainbow Griffin
Divine
Rainbow Hydra
Rainbow Hydra
Divine
Rainbow Krampus
Rainbow Krampus
Divine
Rainbow Lobster Thermidor
Rainbow Lobster Thermidor
Divine
Rainbow Mizuchi
Rainbow Mizuchi
Divine
Rainbow Phoenix
Rainbow Phoenix
Divine
Rainbow Spinosaurus
Rainbow Spinosaurus
Divine
Rainbow Star Wolf
Rainbow Star Wolf
Divine
Reaper
Reaper
Divine
Red Fox
Red Fox
Divine
Red Panda
Red Panda
Divine
Red Rose Fox
Red Rose Fox
Divine
Red-Nosed Reindeer
Red-Nosed Reindeer
Divine
Ruby Squid
Ruby Squid
Divine
Space Squirrel
Space Squirrel
Divine
Spinosaurus
Spinosaurus
Divine
Star Wolf
Star Wolf
Divine
Swan
Swan
Divine
T-Rex
T-Rex
Divine
Tiger
Tiger
Divine
Water Buffalo
Water Buffalo
Divine
Wendigo
Wendigo
Divine
White Tiger
White Tiger
Divine
Wind Wyvern
Wind Wyvern
Divine
Yeti
Yeti
Divine
Birb
Birb
Prismatic
Black Spotty Dragon
Black Spotty Dragon
Prismatic
Blue Whale
Blue Whale
Prismatic
Corrupted Kitsune
Corrupted Kitsune
Prismatic
Festive Ice Golem
Festive Ice Golem
Prismatic
Ghostly Headless Horseman
Ghostly Headless Horseman
Prismatic
Giant Scorpion
Giant Scorpion
Prismatic
Gilded Choc Peryton
Gilded Choc Peryton
Prismatic
Gold Finch
Gold Finch
Prismatic
Headless Horseman
Headless Horseman
Prismatic
Ice Golem
Ice Golem
Prismatic
Kitsune
Kitsune
Prismatic
New Year's Dragon
New Year's Dragon
Prismatic
Peryton
Peryton
Prismatic
Rainbow Birb
Rainbow Birb
Prismatic
Rainbow Corrupted Kitsune
Rainbow Corrupted Kitsune
Prismatic
Rainbow Gold Finch
Rainbow Gold Finch
Prismatic
Rainbow New Year's Dragon
Rainbow New Year's Dragon
Prismatic`;

const lines = rawPets.split('\\n').map(l => l.trim()).filter(l => l !== '' && l !== '🔥' && l !== 'New!');
const pets = [];
for (let i = 0; i < lines.length; i += 3) {
  if (lines[i] === lines[i+1]) {
    pets.push({ name: lines[i], rarity: lines[i+2] });
  } else {
    // maybe missing duplicate
    console.log("Mismatch at", i, lines[i], lines[i+1]);
  }
}

const mutations = ["Normal", "Silver", "Golden", "Rainbow", "Shocked", "Shiny", "Windy", "Frozen", "Inverted", "Mega", "Tiny", "IronSkin", "Radiant", "Ascended", "Tranquil", "Corrupted", "Fried", "Aromatic", "GiantBean", "Glimmering", "Luminous", "Nutty", "Dreadbound", "Soulflame", "Spectral", "Nightmare", "Tethered", "Aurora", "JUMBO", "Rhino", "Oxpecker", "Lion", "Giraffe", "Crocodile", "Forger", "HyperHunger", "Nocturnal", "Peppermint", "ChristmasRally", "MerryNursery", "JollyDecorator", "GiantGolem", "SpiritSparkle", "Fiery", "Venom", "Alienated", "UFO", "Blossoming", "Everchanted", "RoyalJelly"];

const boosts = [
  { name: "Small Toy", rarity: "Rare", value: "+10% Passive Boost" },
  { name: "Medium Toy", rarity: "Legendary", value: "+20% Passive Boost" },
  { name: "Large Toy", rarity: "Divine", value: "+30% Passive Boost" },
  { name: "Grandmaster Sprinkler", rarity: "Prismatic", value: "+4 kg Weight Boost" }
];

const fileContent = "export const pets = " + JSON.stringify(pets, null, 2) + ";\nexport const mutations = " + JSON.stringify(mutations, null, 2) + ";\nexport const boosts = " + JSON.stringify(boosts, null, 2) + ";\n";

fs.writeFileSync('C:/Users/Palwasha Ali/OneDrive/Desktop/calculator/src/data/petAbilityData.ts', fileContent);
console.log('done');
