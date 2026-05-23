const fs = require('fs');
const path = require('path');

let searchDataContent = fs.readFileSync(path.join(__dirname, '../src/data/petAbilitySearchData.ts'), 'utf-8');
searchDataContent = searchDataContent.replace(/export interface PetAbility \{[\s\S]*?\}/, '')
                                     .replace('export const abilityPets: PetAbility[] = ', 'module.exports = ');
  
fs.writeFileSync(path.join(__dirname, 'temp_data.js'), searchDataContent);
const oldPets = require('./temp_data.js');
  
const text = `Pine Beetle
Pine Beetle

Legendary

Pine Beetle Duel: Occasionally initiates a battle with another player's Beetle. If your beetle wins you get a reward! The higher level and heavier the beetle the more likely it is to win. Pine Beetles can give a beetle reward exclusive to it!

Playful
Gives Items
Pink Bunny
Pink Bunny

Uncommon

Buttercup Muncher: Runs to buttercup, eats them, and drops two buttercup seeds

Pink Panda
Pink Panda

Legendary

Loveboo: Waddles to bamboo, and gives it the heartstuck mutation

Pixie
Pixie

Rare

Pixie Dust: Occasionally spreads pixie dust for a duration, all plants within range will advance growth an extra 30 seconds every second. Also makes nearby players levitate

Increases Plant Growth
Playful
Polar Bear
Polar Bear

Legendary

Polar Express: Occasionally sets a random nearby fruit cold, turning it into Chilled with a small chance for Frozen

Applies Plant Mutations
Praying Mantis
Praying Mantis

Mythical

Zen Zone: Prays, then gives plants in AOE Buff that increases the chance of fruit variants from plants

Increases Variants Chances
Professor Bee
Professor Bee

Legendary

Bee-raniac: Bee type pets gain bonus XP per second

Pterodactyl
Pterodactyl

Mythical

Sky Reptile: Occasionally applies Windstruck mutation to multiple nearby fruits! & Air Time: Player has increased jump height

Applies Plant Mutations
Playful
Pumpkin Rat
Pumpkin Rat

Common

Pumpkin Carver: Occasionally converts a Pumpkin in your garden into a random Jack-O-Lantern cosmetic! Collect all 5 variants!

Consumes Plants
Gives Items
Queen Bee
Queen Bee

Divine

Queen Pollinator: Occasionally pollinates fruit instantly & For the Queen: Occasionally refrehes the pet with the highest cooldown ability

Applies Plant Mutations
Repeats Abilities
Raccoon
Raccoon

Divine

Rascal: Occasionally steals (duplicates) fruit from other player's plot and hands it to you

Duplicates Plants
Radioactive Stegosaurus
Radioactive Stegosaurus

Legendary

Developer RemorsEcoDe's pet

Applies Plant Mutations
Playful
Raiju
Raiju

Divine

Lightning Beast: Occasionally devours a fruit with Shocked for bonus value, spits a chain lightning that mutates fruit with Static or Shocked if its a Thunderstorm

Applies Plant Mutations
Consumes Plants
Sells Plants
Rainbow Ankylosaurus
Rainbow Ankylosaurus

Mythical

Armored Defender: When a player steals a fruit from you, grants a chance you get the stolen fruit as well.

Protects Stolen Fruit
Rainbow Arctic Fox
Rainbow Arctic Fox

Mythical

Rainbow Arctic Scoundrel: Occasionally steals 24 random unique fruit from your garden and restocks the seed shop! Ignores favorited fruit.

Consumes Plants
Duplicates Shop Purchases
Rainbow Bacon Pig
Rainbow Bacon Pig

Uncommon

Rainbow Bacon Frenzy: Emits an aura granting chance for new fruit to grow as variants

Increases Variants Chances
Rainbow Bear on Bike
Rainbow Bear on Bike

Legendary

Rainbow One Bear Act: Occasionally goes to a random fruit in your garden and does a trick on it, applying the Whimsical mutation!

Rainbow Bearded Dragon
Rainbow Bearded Dragon

Divine

Rainbow Egg Stash: Occasionally eats all fruit on a Divine and higher rarity plant and grants a random egg from the egg shop!

Consumes Plants
Gives Items
Rainbow Birb
Rainbow Birb

Prismatic

Rainbow Birb: Occassionally greatly speeds up your egg hatch times.

Rainbow Black Bird
Rainbow Black Bird

Legendary

Rainbow Dark Chirp: Grants pets hatched from eggs an increased age bonus

Rainbow Blue Jay
Rainbow Blue Jay

Uncommon

Rainbow Berry Friend: All Berry type plants grow faster!

Increases Plant Growth
Rainbow Brown Owl
Rainbow Brown Owl

Mythical

Rainbow Big Eyes: Grants increased bonus experience per second gain to all active pets.

Rainbow Bumblebee
Rainbow Bumblebee

Uncommon

Rainbow Bumble Pollinator: Occasionally pollinates fruit

Rainbow Cardinal
Rainbow Cardinal

Common

Magical Friend: All Magical type plants have increased variant chance

Increases Variants Chances
Rainbow Carnival Elephant
Rainbow Carnival Elephant

Divine

Rainbow The Show Must Go On: When a pet finishes their ability: There is a small chance the ability is activated again. You cannot have two pets of the same type for this passive to activate. (Except Carnival Elephants)

Rainbow Celebration Puppy
Rainbow Celebration Puppy

Legendary

Rainbow Celebration's Best Friend: Occasionally has chance to dig up a random New Year’s themed cosmetic.

Gives Items
Rainbow Cerberus
Rainbow Cerberus

Divine

Rainbow Trial by Fire: Occasionally devours a fruit with Ash, Haze, Burnt & Flaming mutations and then spits out Smoldering mutation at another fruit, also has a chance to increase the level of a random pet in your garden! & Rainbow Flame Diety: When selling fruits with Smoledring mutation: There is a chance a random mutation from that fruit will be applied to a fruit in your garden!

Rainbow Chinchilla
Rainbow Chinchilla

Divine

Rainbow Dust Bath: Occasionally goes to another pet, rolls around in dust and makes that pet perform its ability multiple times in a row!

Repeats Abilities
Rainbow Christmas Gorilla
Rainbow Christmas Gorilla

Legendary

Rainbow Cold Belly: Occasionally has grabs fruits with Cold type mutations to reduce cooking time of a random cooking pot!

Consumes Plants
Reduces Cooking Time
Rainbow Clam
Rainbow Clam

Uncommon

Rainbow Water Reserve: When using watering cans, there is a chance it is not consumed!

Reduces Tool Consumption
Rainbow Corrupted Kitsune
Rainbow Corrupted Kitsune

Prismatic

Rainbow Nine-Tailed Curse: Occasionally, applies Corrupted Chakra to 9 different fruit with a very rare chance for Corrupted Foxfire Chakra instead!

Applies Plant Mutations
Rainbow Cuckoo
Rainbow Cuckoo

Common

Rainbow Cuckoo Luck: Grants to get quintuple the seeds when getting a Lucky Harvest

Rainbow Dilophosaurus
Rainbow Dilophosaurus

Mythical

Frilled Reptile: Occasionally opens its frills and spits out venom! The venom spreads to other random pets, advancing cooldown OR granting bonus xp

Advances Cooldown
Boosts Pet XP
Rainbow Elemental Bee
Rainbow Elemental Bee

Mythical

Rainbow Beelemental: Occasionally mutates a random fruit in your garden with 1 of 4 elemental mutations!

Rainbow Elephant
Rainbow Elephant

Divine

Rainbow Jumbo Blessing: Occasionally resets a pet's age back to 1 but increases its base weight by 0.1KG if its base weight is less than a certain value!

Increases Base Weight (kg)
Rainbow Elk
Rainbow Elk

Uncommon

Rainbow Elk Forester: Chance berry fruit stays after collecting! Rarer plants haves have rarer chance to replant

Duplicates Plants
Rainbow Empress Bee
Rainbow Empress Bee

Divine

Rainbow For the Empress: Occasionally refreshes the ability cooldowns for other random pets!

Rainbow Farmer Chipmunk
Rainbow Farmer Chipmunk

Uncommon

Rainbow Nuturalist: All Nutty type plants grow faster!

Increases Plant Growth
Rainbow Firework Sprite
Rainbow Firework Sprite

Rare

Rainbow Firework Fairy: Occasionally gives you some fireworks!

Gives Items
Rainbow Fortune Squirrel
Rainbow Fortune Squirrel

Rare

RAINBOW CHA-CHING: Occasioally has a chance to apply the Jackpot mutation

Applies Plant Mutations
Rainbow French Hen
Rainbow French Hen

Uncommon

Rainbow Christmas Hen: Christmas type plants within range have increased size multiplier!

Increases Plant Sizes
Rainbow Frost Dragon
Rainbow Frost Dragon

Divine

Rainbow Glacial Dragon: Occasionally converts all nearby Frozen mutations within 30 studs to Glacial mutation. For every mutation converted: XP is granted to all other pets in your garden! & Frost Diety: When selling fruits with Glacial mutation: There is a chance a random mutation from that fruit will be applied to a fruit in your garden!

Applies Plant Mutations
Boosts Pet XP
Rainbow Gardener Bee
Rainbow Gardener Bee

Legendary

Rainbow Beetanist: Occasionally transfers a Pollinated mutation from a fruit (Ignores favorited) to other random fruits! The plants that have these fruits advance growth!

Rainbow Giraffe
Rainbow Giraffe

Legendary

Rainbow Great Grazer: Occasionally, Eats fruit from high sources for more sell value. The plant it ate from advances growth!

Consumes Plants
Gives Sheckles
Sells Plants
Increases Plant Growth
Applies Plant Mutations
Rainbow Gold Finch
Rainbow Gold Finch

Prismatic

Rainbow Sparkle Squack: Occasionally applies the Goldsparkle mutation with increased frequency

Rainbow Griffin
Rainbow Griffin

Divine

Rainbow Glorious Wings: Flaunts its wings releasing a cyclone in a random directions. Pets struck have cooldown advanced and fruits struck get Cyclonic mutation

Advances Cooldown
Applies Plant Mutations
Rainbow Hazehound
Rainbow Hazehound

Mythical

Rainbow of Ash: Occasionally applies Ash mutation to a random fruit & Rainbow Hound of Haze: Occasionally applies Haze mutation to a random fruit.

Rainbow Hotdog Daschund
Rainbow Hotdog Daschund

Legendary

Rainbow Loaded Dog: Drops a mustard or ketchup puddle. Pets that stand in mustard get faster cooldown and pets that step on ketchup gain more experience

Advances Cooldown
Boosts Pet XP
Rainbow Hydra
Rainbow Hydra

Divine

Rainbow Three-Headed: Ages itself up by 1 then fully hatches an egg then mutates a random fruit with Terran. Cannot be mimicked or refreshed. & Earth Diety: When selling fruits with Terran mutation, there is chance a random mutation from that fruit will be applied to a fruit in your garden!

Ages Pets
Applies Plant Mutations
Reduces Egg Hatch Time
Rainbow Idol Chipmunk
Rainbow Idol Chipmunk

Legendary

Rainbow Chip-Hop: Occasionally performs a concert for a duration and all your pets gain hunger percentage per second

Restores Pet Hunger
Playful
Rainbow Iguanodon
Rainbow Iguanodon

Legendary

Dino Herd: Grants bonus experience per second gain to all Dinosaur type active pets

Boosts Pet XP
Boosts Self XP
Rainbow Kodama
Rainbow Kodama

Legendary

Rainbow Tree Spirit: Collecting Zen type fruits have a chance to mutate with Tranquil.

Applies Plant Mutations
Rainbow Krampus
Rainbow Krampus

Divine

Rainbow Coal Sack: Occasionally consumes a percentage of your sheckles to punish another random player. Greater punishments are rarer and consume more sheckles.

Playful
Duplicates Plants
Rainbow Lobster Thermidor
Rainbow Lobster Thermidor

Divine

Rainbow Boiling Point: Chance a nearby fruit becomes Molten! Chance a nearby fruit becomes Meteoric!

Applies Plant Mutations
Rainbow Magpie
Rainbow Magpie

Legendary

Rainbow Shiny Eye: Selling silver fruit has a chane to grant a random reward!

Gives Items
Rainbow Mandrake
Rainbow Mandrake

Legendary

Rainbow Mandrake Essence: Harvesting Mandrake crops have a chance to mutate a random fruit in your garden with Rot mutation

Applies Plant Mutations
Rainbow Maneki-neko
Rainbow Maneki-neko

Uncommon

Rainbow Fortune Cat: Occasionally does a wave of good luck and grants increased chance to get your fruit back after selling it

Duplicates Plants
Rainbow Mistletoad
Rainbow Mistletoad

Mythical

Rainbow Jolly Croak: Occasionally croaks at a random nearby plant, advancing growth for each Christmas type pet and applies Chilled mutation to all fruits of that plant!

Increases Plant Growth
Applies Plant Mutations
Rainbow Mizuchi
Rainbow Mizuchi

Divine

Rainbow Water Diety: When selling fruits with Azure mutation, there is chance a random mutation from that fruit will be applied to a fruit in your garden! & Rainbow Azure Surge: Occasionally roars on a random nearby fruit, with a small chance of applying Azure mutation!

Applies Plant Mutations
Rainbow New Year's Bird
Rainbow New Year's Bird

Uncommon

Rainbow New Year's Bird: Occasionally flies around and launches fireworks everywhere to celebrate the new year!

Playful
Rainbow New Year's Chimp
Rainbow New Year's Chimp

Mythical

Rainbow Primate Productivity: Occasionally grabs a fruit from your garden and delivers it to one of four different things for a random bonus effects!

Consumes Plants
Applies Plant Mutations
Boosts Pet XP
Gives Items
Reduces Egg Hatch Time
Rainbow New Year's Dragon
Rainbow New Year's Dragon

Prismatic

Rainbow Breath of Fireworks: Occasionally breathes fireworks on 20 - 26 different fruits in your garden with Fireworks mutation & Rainbow Resolution: Occasionally consumes fruit with Firework mutation to give you the Dragon's Firework.

Applies Plant Mutations
Gives Items
Rainbow Nurse Bee
Rainbow Nurse Bee

Rare

Rainbow Beeler Healer: Occasionally, grabs a Pollinated fruit (Ignores favorited) and gives it to another Pet. The pet gets either XP or restores hunger!

Rainbow Oxpecker
Rainbow Oxpecker

Common

Rainbow Safari Support: When Safari type pets finish their abilities, they will start their next cooldown with less!

Advances Cooldown
Rainbow Pachycephalosaurus
Rainbow Pachycephalosaurus

Legendary

Crafty Dome: Grants a small chance to duplicate the crafted item.

Duplicates Crafts
Rainbow Parasaurolophus
Rainbow Parasaurolophus

Legendary

Crowbar Head: Occasionally, goes to the cosmetic crate with the highest time and reduces time to open!

Reduces Crate Time
Rainbow Performer Seal
Rainbow Performer Seal

Rare

Rainbow Play Ball: Occasionally plays ball with you. Every time you succesfully recieve the ball a random plant in your garden advances growth or a random pet gets bonus XP!

Rainbow Phoenix
Rainbow Phoenix

Divine

Bird of Rebirth: Pets taken from the mutation machine have a bonus to their age & Icarus: Goes to random fruits to apply flaming mutation, fruits passed along the way have a chance to get the Flaming mutation

Ages Pets
Applies Plant Mutations
Rainbow Pink Bunny
Rainbow Pink Bunny

Uncommon

Rainbow Buttercup Muncher: Runs to buttercup, eats them, and drops three buttercup seeds

Rainbow Rhino
Rainbow Rhino

Mythical

Rainbow Rhino Ram: Occasionally charges into a random egg in your garden: 50% chance the egg hatch time is halved, otherwise the egg hatch time increases!

Applies Plant Mutations
Reduces Egg Hatch Time
Rainbow Show Pony
Rainbow Show Pony

Mythical

Rainbow Pony Parade: Every 30m on the clock, All your Ponies form a line and Parade towards the Gear Shop, Egg Shop or Seed Shop and has a chance to restock 1 random item. Each Pony in the parade grants extra restock luck.

Rainbow Shroomie
Rainbow Shroomie

Legendary

Mushroom Madness: All nearby plants will have increased size bonus for every Mushroom planted in your garden

Increases Plant Sizes
Rainbow Snow Bunny
Rainbow Snow Bunny

Common

Rainbow Christmas Carrot: Eats Carrots for more sheckle value and all other Bunnies and Rabbits gain bonus experience!

Consumes Plants
Gives Sheckles
Sells Plants
Boosts Pet XP
Rainbow Spinosaurus
Rainbow Spinosaurus

Divine

Occasionally, devours a random mutation from random fruits in your garden each, roars and applies it to 1 other random fruit in your garden!

Applies Plant Mutations
Rainbow Stag Beetle
Rainbow Stag Beetle

Legendary

Rainbow Beetle Duel: Occasionally initiates a battle with another player's Beetle. If your beetle wins you get a reward! The higher level and heavier the beetle the more likely it is to win.

Gives Items
Playful
Rainbow Star Wolf
Rainbow Star Wolf

Divine

Rainbow Celestial Howl: Occasionally consumes random Moonlit mutations from crops, howls, and calls down shooting stars on your garden that mutate fruits into Celestial!

Applies Plant Mutations
Rainbow Unicycle Monkey
Rainbow Unicycle Monkey

Uncommon

Rainbow Unicycling: Makes you ride a unicycle and grants increased movement speed!

Rainbow Zebra
Rainbow Zebra

Rare

Rainbow Zebra Stampede: Every 30 minutes on the clock: All zebras run back and forth from the Seed Shop to Gear Shop or vice-versa. Grants you a random Safari related reward! Has a chance to trigger again on each run!

Gives Items
Raptor
Raptor

Legendary

Clever Claws: Small chance fruit gets Amber mutation after collecting! & Raptor Dance: Player has increased movement speed

Applies Plant Mutations
Playful
Reaper
Reaper

Divine

Reap What You Sow: Occasionally sacrifices random 4 fruits in your garden to apply a Medium Passive Boost or Medium XP Boost to a random pet in your garden!

Consumes Plants
Applies Pet Boosts
Red Dragon
Red Dragon

Common

Scorched Soil: Occasionally sets a random nearby fruit ablaze, turning it into Burnt

Applies Plant Mutations
Red Fox
Red Fox

Divine

Scoundrel: Occasionally goes to another player's plot and tries to steal a seed from a random plant. The rarer the plant, the harder it is to succeed

Generates Extra Seeds
Red Giant Ant
Red Giant Ant

Mythical

For the Red Colony: Small chance to duplicate harvested plant & Fruit Harvester: Increased chance to duplicate harvested fruit type plant

Duplicates Plants
Red Panda
Red Panda

Divine

Adorable Haggler: Occasionally, goes to the Gear or Seed Shop or Pet Egg Shop and restocks a random stock. Rarer items have rarer chance to stock.

Duplicates Shop Purchases
Red Rose Fox
Red Rose Fox

Divine

Tough Love: Occasionally goes to other player's fruit, mutates with Cute or Hearbound and steals it, then hands it to you

Red Squirrel
Red Squirrel

Rare

Squirrel Support: When Fall type pets finish their abilities, they will start their next cooldown with less

Advances Cooldown
Red-Nosed Reindeer
Red-Nosed Reindeer

Divine

Red-Nosed Reindeer: Occasionally grants XP to a random non-Reindeer Pet in your garden for every Reindeer in your garden! & Shiny Nose: Occasionally mutates fruit up to the number of Reindeer in your garden with Ornamented mutation!

Boosts Pet XP
Applies Plant Mutations
Reindeer
Reindeer

Legendary

Sleigh Synergy: Gains additional XP/s for every Reindeer in your garden! & Beast of Snow: Occasionally has a chance to mutate nearby fruits with Snowy!

Boosts Pet XP
Boosts Self XP
Applies Plant Mutations
Rhino
Rhino

Mythical

Rhino Ram: Occasionally charges into a random egg or plant in your garden: Rammed eggs have hatched time halved while plants get Mirage mutation!

Applies Plant Mutations
Reduces Egg Hatch Time
Robin
Robin

Common

Tiny Bird: Grants decreased player size

Playful
Rooster
Rooster

Rare

Eggcelerator: Decreases the time needed to hatch other eggs

Reduces Egg Hatch Time
Ruby Squid
Ruby Squid

Divine

Ruby Ink: Continously copies 1 random pet's passive! (non-cooldown based)

Repeats Abilities
Salmon
Salmon

Uncommon

Salmon School: Gets bonus experience for every other Salmon in your garden

Boosts Self XP
Sand Snake
Sand Snake

Legendary

Coiled Commerce: Buying from the seed/gear shop has a small chance to duplicate the bought item!

Duplicates Shop Purchases
Santa Bear
Santa Bear

Legendary

Merry Beary: Occasionally spawns a random Christmas gift! Find it to get a reward!

Gives Items
Applies Plant Mutations
Sapphire Macaw
Sapphire Macaw

Mythical

Crystalised Bird: Occasionally has a chance to mutate nearby fruits Crystalized!

Applies Plant Mutations
Scarab
Scarab

Uncommon

Spooky Scarab: Nearby Spooky type plants have increased growth size!

Increases Plant Sizes
Scarlet Macaw
Scarlet Macaw

Legendary

Verdant Bird: Occasionally has a chance to mutate nearby fruits Verdant

Applies Plant Mutations
Sea Otter
Sea Otter

Legendary

Water Spray: Water's plants randomly like a watering can

Increases Plant Growth
Sea Turtle
Sea Turtle

Rare

Shell Share: Occasionally shares its wisdom to a random active pet granting bonus experience & Water Splash: Occasionally has a chance to Wet a nearby fruit

Boosts Pet XP
Applies Plant Mutations
Seagull
Seagull

Common

Scavenger: Grants to get double the seeds when getting a Lucky Harvest

Generates Extra Seeds
Seal
Seal

Rare

Seal the Deal: When selling pets, has a small chance to get the pet back as its egg equivalent

Returns Eggs
Seedling
Seedling

Legendary

Sprout: Swaps mutations between two different random fruits. Ignores favorited fruits

Copies Mutations
Sheckling
Sheckling

Common

Shecklenator: Grants Sheckles per second! Coinfruit Lover: goes to a Coinfruit plant and mutates all fruits on the Coinfruit with 'Coin' mutation!

Gives Sheckles
Applies Plant Mutations
Shiba Inu
Shiba Inu

Uncommon

Man's Best Tomodachi: Occasionally digs up a random seed at a higher chance

Gives Items
Show Pony
Show Pony

Mythical

Pony Parade: Every 30m on the clock, All your Ponies form a line and Parade towards the Gear Shop, Egg Shop or Seed Shop and has a chance to restock 1 random item. Each Pony in the parade grants extra restock luck.

Shroomie
Shroomie

Legendary

Mushroom Madness: All nearby plants will have increased size bonus for every Mushroom planted in your garden

Increases Plant Sizes
Silver Dragonfly
Silver Dragonfly

Legendary

Silver Transmutation: Occasionally, turns a random fruit Silver

Applies Variants
Silver Monkey
Silver Monkey

Legendary

Premium Cheeky Refund: Chance to get your fruit back when you sell it

Duplicates Plants
Sells Plants
Silver Piggy
Silver Piggy

Legendary

For every Silver Ingot Cosmetic you have in your garden, nearby plants in a radius grow faster!

Uses Cosmetics
Increases Plant Growth
Smithing Dog
Smithing Dog

Rare

Smithing Digging: Occasionally digs up a coal!

Gives Items
Snail
Snail

Legendary

Slow and Steady: Increased lucky harvest chance

Generates Extra Seeds
Snow Bunny
Snow Bunny

Common

Christmas Carrot: Eats Carrots for more sheckle value and all other Bunnies and Rabbits gain bonus experience!

Consumes Plants
Boosts Pet XP
Gives Sheckles
Sells Plants
Snowman Builder
Snowman Builder

Legendary

Icy Fortifications: Occasionally consumes crops with any cold type mutations and grants a Snow-Fort based cosmetic reward!

Consumes Plants
Gives Items
Snowman Soldier
Snowman Soldier

Rare

Snow-munition: Occasionally grants Snowballs.

Gives Items
Space Squirrel
Space Squirrel

Divine

A Space Odd-Nut-sy: Occasionally, has chance to apply the Voidtouched mutation!

Applies Plant Mutations
Spaghetti Sloth
Spaghetti Sloth

Mythical

Al dente: Occasionally applies Pasta, Sauce or Meatball mutation

Applies Plant Mutations
Specter
Specter

Legendary

Haunt: Occasionally haunts fruit and has a chance to apply the Vamp or rare chance for Spooky or even rarer chance for Ghostly mutation!

Applies Plant Mutations
Spider
Spider

Legendary

Web Weave: Occasionally weaves a web for a duration. All Pets on the web advance cooldown faster and all plants on the web grow faster.

Advances Cooldown
Increases Plant Growth
Spinosaurus
Spinosaurus

Divine

Occasionally, devours a random mutation from random fruits in your garden each, roars and applies it to 1 other random fruit in your garden!

Copies Mutations
Spotted Deer
Spotted Deer

Rare

Forester: When harvesting berry plants, there is a chance the fruit will remain

Duplicates Plants
Spriggan
Spriggan

Mythical

Overgrowth: Occasionally spreads it's roots and all nearby fruit have a chance to get the Bloom mutation

Applies Plant Mutations
Spring Bee
Spring Bee

Rare

Beeter Pollinator: Occasionally pollinates fruit! & Bloom Bee: Occasionally has a chance to apply the Bloom mutation!

Squirrel
Squirrel

Legendary

Seed Stash: Grants a chance to not consume a use when using the reclaimer & Nutty Apology: Gains additional XP per second

Boosts Self XP
Reduces Tool Consumption
Stag Beetle
Stag Beetle

Legendary

Beetle Duel: Occasionally initiates a battle with another player's Beetle. If your beetle wins you get a reward! The higher level and heavier the beetle the more likely it is to win.

Gives Items
Playful
Star Wolf
Star Wolf

Divine

Celestial Howl: Occasionally consumes random Moonlit mutations from crops, howls, and calls down shooting stars on your garden that mutate fruits into Celestial!

Applies Plant Mutations
Starfish
Starfish

Common

You're a Star: Gains additional XP per second

Boosts Self XP
Stegosaurus
Stegosaurus

Legendary

Prehistoric Doubling: Small chance to duplicate harvested fruit & Prehistoric Harvester: Increased chance to duplicate harvested prehistoric type plant

Duplicates Plants
Stork
Stork

Legendary

Stork Delivery: Occasionally grabs a random fruit in your garden and delivers it to another player's pet: to give XP, or a Small Passive Boost!

Sugar Glider
Sugar Glider

Mythical

Sugar Gliding: Occasionally glides from random different mutated fruits. Copies 1 mutation from each fruit and applies it to the next.

Copies Mutations
Summer Kiwi
Summer Kiwi

Mythical

Yellow Christmas: Occasionally mutates fruit with Sandy with a rare chance for Snowy & Summer Cradle: Occasionally reduces the egg hatch time & Better Eggcelerator: Boosts egg hatch speed

Applies Plant Mutations
Reduces Egg Hatch Time
Sunny-Side Chicken
Sunny-Side Chicken

Uncommon

Better Eggcelerator: Decreases the time needed to hatch eggs

Reduces Egg Hatch Time
Sushi Bear
Sushi Bear

Legendary

Sushi Express: Occasionally sets a random nearby fruit cold, turning it Chilled or rarely Frozen & Sushi Time: Occasionally throws sushi towards a pet, feeding it

Applies Plant Mutations
Restores Pet Hunger
Swan
Swan

Divine

Swan Song: Occasionally goes to another player's pet and befriends it and performs its ability & Bird of Grace: Occasionally applies Graceful mutation

Applies Plant Mutations
T-Rex
T-Rex

Divine

Apex Predator: Occasionally eats a random mutation from a fruit in your garden then roars and applies that mutation to other fruits in your garden.

Copies Mutations
Tanchozuru
Tanchozuru

Legendary

Balance and Harmony: Occasionally channels tranquility and has a chance to mutate nearby fruits into Tranquil

Applies Plant Mutations
Tanuki
Tanuki

Legendary

Mischief: Occasionally causes mischief doing random actions in your garden

Applies Plant Mutations
Boosts Self XP
Advances Cooldown
Gives Sheckles
Tarantula Hawk
Tarantula Hawk

Rare

Wasp Pollinator: Occasionally pollinates fruit & Tarantula Stinger: Occasionally stings pet with highest cooldown advancing cooldown

Applies Plant Mutations
Advances Cooldown
Termite
Termite

Common

Level Eater: Occasionally, reduces a random pet's level by 1!

Ages Pets
Tiger
Tiger

Divine

Tiger Call: Occasionally roars and shares XP to all pets and calles them to the Tiger & King of the Jungle: Roars and 3 random mutations from your garden will be replaced with another mutation. Ignores favorited fruit.

Copies Mutations
Applies Plant Mutations
Tomb Marmot
Tomb Marmot

Legendary

Tomb Raid: Occasionally burrows down in the ground and hides in a Tombstone! Finding the tombstone grants a random Graveyard cosmetic!

Gives Items
Topaz Snail
Topaz Snail

Rare

Shard and Steady: When getting a Lucky Harvest there is a chance to get a Cleansing Pet Shard!

Gives Items
Toucan
Toucan

Rare

Tropical Lover: Makes all nearby Tropical type plants have increased variant chance and grow bigger

Increases Plant Growth
Increases Plant Sizes
Trapdoor Spider
Trapdoor Spider

Legendary

Web Supply: Occasionally eats a random fruit in your garden and all fruits within close range have a chance to mutate with the Webbed Mutation!

Consumes Plants
Applies Plant Mutations
Tree Frog
Tree Frog

Rare

Mini Croak: Advances the growth of a random plant.

Increases Plant Growth
Triceratops
Triceratops

Legendary

Tri-Horn: Rams into random plants and advances their growth

Increases Plant Growth
Tsuchinoko
Tsuchinoko

Uncommon

Fat Snake: Increased lucky harvest chance!

Generates Extra Seeds
Turtle
Turtle

Legendary

Turtle Tinkerer: Slowing aura that makes sprinklers last longer

Affects Sprinklers
Turtle Dove
Turtle Dove

Rare

Christmas Dove: Nearby Christmas type plants within range have increased variant chance!

Increases Variants Chances
Unicycle Monkey
Unicycle Monkey

Uncommon

Unicycling: Makes you ride a unicycle and grants increased movement speed!

Wasp
Wasp

Uncommon

Wasp Pollinator: Occasionally pollinates fruit & Stinger: Occasionally stings pet with highest cooldown advancing cooldown

Applies Plant Mutations
Advances Cooldown
Water Buffalo
Water Buffalo

Divine

Honest Labor: Occasionally harvests a random fruit and gives it to you! Has a chance for the fruit to stay.

Consumes Plants
Duplicates Plants
Wendigo
Wendigo

Divine

Gnawing Hunger: Always loses hunger and loses more hunger per second and gains bonus effects the higher the current hunger level!

Boosts Pet XP
White Tiger
White Tiger

Divine

Tiger Call: Occasionally roars and shares XP to all pets and calles them to the Tiger & King of the Jungle: Roars and 3 random mutations from your garden will be replaced with another mutation. Ignores favorited fruit.

Boosts Pet XP
Applies Plant Mutations
Wind Wyvern
Wind Wyvern

Divine

Gale Wyvern: Occasionally converts all nearby Windstruck mutations within 30 studs to Gale mutation. For every mutation converted: Cooldown advancment is granted to all other pets in your garden! & Wind Diety: When selling fruits with Gale mutation: There is a chance a random mutation from that fruit will be applied to a fruit in your garden!

Applies Plant Mutations
Advances Cooldown
Wind-Up Rat
Wind-Up Rat

Rare

Mechanical Rodent: Occasionally converts Buttercups into a random Mechanical themed cosmetic! Collect all 5!

Consumes Plants
Gives Items
Wisp
Wisp

Legendary

Will-o’-the-Wisp: As long as you have a Wisp Well in your garden: Pets gain additional bonus experience per second

Boosts Pet XP
Uses Cosmetics
Wolf
Wolf

Legendary

Wolf Howl: Occasionally howls, mutating some nearby fruit into moonlit and turns you into a Werewolf for a short duration, granting bonus movement speed and jump height!

Applies Plant Mutations
Playful
Woodpecker
Woodpecker

Rare

Woodpecking: Ocassionally goes to a Woody type plant and pecks at it, which grants a chance for Woody type fruit to duplicate! Rarer crops have lower chance to duplicate.

Duplicates Plants
Woody
Woody

Legendary

Vampire Doggy: Occasionally goes to fruit and applies the Leeched mutation!

Applies Plant Mutations
Yeti
Yeti

Divine

Yeti Night: Occasionally devours a fruit with atleast 24 mutations to summon the Yeti Night weather! Ignores favorited fruit!

Consumes Plants
Applies Weather
Zebra
Zebra

Rare

Zebra Stampede: Every 30 minutes on the clock: All zebras run back and forth from the Seed Shop to Gear Shop or vice-versa. Grants you a random Safari related reward! Has a chance to trigger again on each run!`;
const lines = text.split('\n').map(l => l.trim());

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
