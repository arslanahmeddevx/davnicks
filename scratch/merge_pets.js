const fs = require('fs');

const text = `Albino Peacock
Albino Peacock

Mythical

Pure Beauty: Occasionally fans its feathers and all nearby pets will advance ability cooldowns and get xp to half the amount

Advances Cooldown
Amethyst Beetle
Amethyst Beetle

Legendary

Beetle Duel: Occasionally initiates a battle with another player's Beetle. If your beetle wins you get a reward! The higher level and heavier the beetle the more likely it is to win.

Gives Items
Playful
Angora Goat
Angora Goat

Uncommon

Angora Ram: Occasionally goes to a random player and rams them, knocking and launching them away! Rammed players have a chane to get a single harvest seed from the seed shop. Rarer seeds have rarer chance

Playful
Generates Extra Seeds
Ankylosaurus
Ankylosaurus

Mythical

Armored Defender: When a player steals a fruit from you, grants a chance you get the stolen fruit as well.

Protects Stolen Fruit
Apple Gazelle
Apple Gazelle

Mythical

Apple Harvester: Fruits that have apple in the name have a chance to duplicate when collected & Sugar Warp: Harvesting Sugar Apples have a chance to apply Warped mutation to a random fruit in your garden

Applies Plant Mutations
Duplicates Plants
Arctic Fox
Arctic Fox

Mythical

Arctic Scoundrel: Occasionally steals 24 random unique fruit from your garden and restocks the seed shop! Ignores favorited fruit.

Consumes Plants
Duplicates Shop Purchases
Armadillo
Armadillo

Rare

Armadillo Roll: Occasionally rolls into a ball and transforms you into a armadillo ball for a duration!

Playful
Ash Raven
Ash Raven

Legendary

Ashened Furnishing: Occasionally goes to a random fruit with Ash and/or Burnt mutation and converts it into a random Ash-themed castle cosmetic! Ignores favorited fruit.

Axolotl
Axolotl

Mythical

Summer Regeneration: Summer type fruits have a chance to stay after collecting!

Duplicates Plants
Bacon Pig
Bacon Pig

Uncommon

Bacon Frenzy: Emits an aura granting chance for new fruit to grow as variants

Increases Variants Chances
Badger
Badger

Rare

Earthquake Excavator: Occasionally digs around and spreads mud has a chance to mutate nearby fruits with Cracked

Applies Plant Mutations
Bagel Bunny
Bagel Bunny

Common

Bagel and Carrots: Runs to carrots, eats them, and grants bonus sheckles multiplier

Sells Plants
Consumes Plants
Bald Eagle
Bald Eagle

Legendary

Wings of Freedom: Every 7:04m, takes flight and spreads its wings. All eggs advanced their hatch time by 70.4s. There's a 7.04% chance for the effect to be multiplied

Reduces Egg Hatch Time
Barn Owl
Barn Owl

Mythical

Wise Shopper: Pets bought from shops directly have a chance to get an extra base weight & Prince of Fall: All Fall type pets gain bonus XP per second

Boosts Pet XP
Increases Base Weight (kg)
Bat
Bat

Uncommon

Spooky Bat: Grants nearby Spooky type plants a variant chance bonus.

Increases Variants Chances
Bear Bee
Bear Bee

Mythical

Wanna-Bee: Occasionally tries to pollinate fruit, but it just ends up being HoneyGlazed

Applies Plant Mutations
Bear on Bike
Bear on Bike

Legendary

One Bear Act: Occasionally goes to a random fruit in your garden and does a trick on it, applying the Whimsical mutation!

Bearded Dragon
Bearded Dragon

Divine

Egg Stash: Occasionally eats all fruit on a Divine and higher rarity plant and grants a random egg from the egg shop!

Consumes Plants
Gives Items
Beaver
Beaver

Rare

The Wood Works: Occasionally goes to a Woody type fruit in your garden to convert it into a random wooden-based building cosmetic.

Bee
Bee

Uncommon

Pollinator: Occasionally pollinates fruit

Applies Plant Mutations
Birb
Birb

Prismatic

Occassionally greatly speeds up your egg hatch times.

Black Bird
Black Bird

Common

Dark Chirp: Grants pets hatched from eggs an age bonus

Black Bunny
Black Bunny

Uncommon

Carrot Devourer: Runs to carrots, eats them, and grants bonus sheckles (more than normal value)

Consumes Plants
Sells Plants
Black Cat
Black Cat

Mythical

Witch's Nap: Occasionally goes to a Witch's Cauldron cosmetic and naps near it for a duration. New fruit within radius have bonus size!

Uses Cosmetics
Increases Plant Sizes
Black Spotty Dragon
Black Spotty Dragon

Prismatic

Striking Spots: Occasionally releases striking pink and blue spots on fruits mutating them with Spotty!

Blood Hedgehog
Blood Hedgehog

Legendary

Sanguine Spike: Makes nearby prickly fruit have increased variant chance and grow bigger

Increases Variants Chances
Increases Plant Sizes
Blood Kiwi
Blood Kiwi

Legendary

Crimson Cradle: Occasionally reduces the egg hatch time and boosts egg hatch speed

Reduces Egg Hatch Time
Blood Owl
Blood Owl

Divine

Monarch of Midnight: Grants bonus experience per second gain to all active pets

Boosts Pet XP
Blue Jay
Blue Jay

Uncommon

Berry Friend: All Berry type plants grow faster!

Increases Plant Growth
Blue Whale
Blue Whale

Prismatic

Whale Waters: Occasionally eats heavy fruit and summons the Whale Waters weather!

Applies Plant Mutations
Consumes Plants
Bone Dog
Bone Dog

Rare

Gravedigger: Occasionally digs up seeds.

Gives Items
Brontosaurus
Brontosaurus

Mythical

Giant Incubator: Pets hatched from eggs have higher base weight

Increases Base Weight (kg)
Brown Mouse
Brown Mouse

Legendary

Whiskier Wisdom: Occasionally gains bonus experience & Cheese Hop: Increase player jump height

Playful
Boosts Self XP
Brown Owl
Brown Owl

Mythical

Big Eyes: Grants bonus experience per second gain to all active pets.

Bumblebee
Bumblebee

Uncommon

Bumble Pollinator: Occasionally pollinates fruit

Bunny
Bunny

Common

Carrot Chomper: Runs to carrots, eats them, and grants bonus sheckles (more than normal value)

Consumes Plants
Sells Plants
Butterfly
Butterfly

Mythical

Rainbow Flutter: Occasionally flies to a fruit with 4+ mutations, removes all mutations from it and converts it into rainbow. Ignores favorited fruit

Applies Variants
Calico
Calico

Legendary

Calico Nap: Naps in a random spot in your farm, emitting an aura that boosts nearby fruit size and affected fruits have a chance to get Sleepy mutation!

Applies Plant Mutations
Increases Plant Sizes
Camel
Camel

Mythical

Camel Caravan: Occasionally gathers random Prickly type fruit, forms a caravan with all other camels to travel around the map. Drops one package per fruit along its path. Collect packages for random rewards! Rarer fruit/better variant/more camels gives better rewards.

Gives Items
Candy Squirrel
Candy Squirrel

Mythical

Candy Craze: Occasionally applies the Candy mutation!

Cape Buffalo
Cape Buffalo

Rare

Safari Renewal: Chance to duplicate harvested plants & Safari Harvester: Increased chance to duplicate Safari type plants

Duplicates Plants
Capybara
Capybara

Legendary

Chill Zone: Nearby pets' hunger will not go down and they will gain additional xp per second

Boosts Pet XP
Cardinal
Cardinal

Uncommon

Magical Friend: All Magical type plants grow faster!

Increases Plant Growth
Carnival Elephant
Carnival Elephant

Divine

The Show Must Go On: When a pet finishes their ability: There is a small chance the ability is activated again. You cannot have two pets of the same type for this passive to activate. (Except Carnival Elephants)

Carpenter Bee
Carpenter Bee

Rare

Hive Workshop: Occasionally converts a Pollinated fruit into a bee castle-themed cosmetic.

Cat
Cat

Uncommon

Cat Nap: Cat naps in a random spot in your farm, emitting an aura that boosts nearby fruit size

Increases Plant Sizes
Caterpillar
Caterpillar

Legendary

Leaf Lover Passive: Boost nearby Leafy plants growth rate

Increases Plant Growth
Celebration Puppy
Celebration Puppy

Legendary

Celebration's Best Friend: Occasionally has chance to dig up a random New Year’s themed cosmetic.

Gives Items
Cerberus
Cerberus

Divine

Trial by Fire: Occasionally devours a fruit with Ash, Haze, Burnt & Flaming mutations and then spits out Smoldering mutation at another fruit, also has a chance to increase the level of a random pet in your garden! & Flame Diety: When selling fruits with Smoledring mutation: There is a chance a random mutation from that fruit will be applied to a fruit in your garden!

Champion Beetle
Champion Beetle

Legendary

Champion Beetle Duel: Occasionally initiates a battle with another player's Beetle. If your beetle wins you get a reward! The higher level and heavier the beetle the more likely it is to win. Champion Beetles can give a beetle reward exclusive to it!

Gives Items
Playful
Cheetah
Cheetah

Legendary

Master of Faster: Occasionally turns you into a cheetah for a duration. Harvested fruit during this time have a chance to get the Wildfast mutation!

Applies Plant Mutations
Playful
Chicken
Chicken

Uncommon

Eggcelerator: Decreases the time needed to hatch other eggs

Reduces Egg Hatch Time
Chicken Zombie
Chicken Zombie

Mythical

Zombify: Occasionally has a chance to zombify a nearby random fruit & Eggcelerator: Decreases the time needed to hatch other eggs

Applies Plant Mutations
Reduces Egg Hatch Time
Chimera
Chimera

Divine

Chimera Powers: Combined abilities of Lion, Goat and Sand Snake with bonuses!

Playful
Advances Cooldown
Duplicates Shop Purchases
Chimpanzee
Chimpanzee

Mythical

Primate Profit: Grabs a random fruit from your garden and goes to the sell stall and sells it for you. There is a chance the fruit does not get harvested. Ignores favorited fruit.

Sells Plants
Duplicates Plants
Chinchilla
Chinchilla

Divine

Dust Bath: Occasionally goes to another pet, rolls around in dust and makes that pet perform its ability multiple times in a row!

Repeats Abilities
Chipmunk
Chipmunk

Common

Harvest Stash: Grants a chance to not consume a use when using a Harvest Tool

Reduces Tool Consumption
Chocolate Bunny
Chocolate Bunny

Uncommon

Choc Chomper: Occasionally eats any Carrot plant with Choc mutation and spreads it to two other random fruits in your garden. Ignores favorited fruit.

Christmas Gorilla
Christmas Gorilla

Legendary

Cold Belly: Occasionally has grabs fruits with Cold type mutations to reduce cooking time of a random cooking pot!

Consumes Plants
Reduces Cooking Time
Christmas Spirit
Christmas Spirit

Divine

The Christmas Spirit: Christmas plants within range have increased variant chance, fruit size and growth speed & The Christmas Cheer: Occasionally mutates fruits in your garden with Festive mutation & Christmas Rally: Christmas type pets gain bonus XP per second

Increases Plant Growth
Increases Plant Sizes
Increases Variants Chances
Applies Plant Mutations
Boosts Pet XP
Chubby Chipmunk
Chubby Chipmunk

Rare

Chubby Chimpunk: Occasionally eats a random fruit in your garden and gains weight. Also spawns a Acorn somewhere which upon collected grants a random reward!

Consumes Plants
Gives Items
Clam
Clam

Uncommon

Water Reserve: When using watering cans, there is a chance it is not consumed!

Reduces Tool Consumption
Cockatrice
Cockatrice

Divine

Silver Screech: Occasionally lets out a screech that has a chance to convert nearby fruit to Silver or Gold & Venom Spit: Spits venom at different fruit/egg/pets which apply bonuses

Applies Variants
Applies Plant Mutations
Reduces Egg Hatch Time
Boosts Pet XP
Cocoa Cat
Cocoa Cat

Mythical

Cocoa Nap: Occasionally goes to a Hot Chocolate Mug cosmetic and naps near it for a duration. New fruit within radius have bonus size!

Increases Plant Sizes
Uses Cosmetics
Cooked Owl
Cooked Owl

Mythical

Let Him Cook: Occasionally burns or cook a random nearby fruit & King of the Grill: Grants bonus experience per second gain to all active pets. Also very tasty!

Applies Plant Mutations
Boosts Pet XP
Corrupted Kitsune
Corrupted Kitsune

Prismatic

Nine-Tailed Curse: Occasionally, applies Corrupted Chakra to 9 different fruit with a very rare chance for Corrupted Foxfire Chakra instead!

Applies Plant Mutations
Corrupted Kodama
Corrupted Kodama

Legendary

Corrupted Tree Spirit: Collecting Zen type fruits have a chance to mutate with Corrupt.

Applies Plant Mutations
Cow
Cow

Legendary

Milk of the Land: Fertilizing aura that boosts nearby plant growth speed

Increases Plant Growth
Crab
Crab

Common

Pinch Pocket: Occasionally goes to another player and pinches them and grants you a small amount of sheckles

Playful
Gives Sheckles
Crocodile
Crocodile

Mythical

Croc Roll: Occasionally bites a random plant or pet for a duration. Plants get high bonus growth s/s and Pets get high bonus XP/s

Increases Plant Growth
Boosts Pet XP
Crow
Crow

Common

Spooky Crow: Nearby Spooky type plants have increased growth speed!

Increases Plant Growth
Cuckoo
Cuckoo

Legendary

Cuckoo Luck: Grants to get triple the seeds when getting a Lucky Harvest

Dairy Cow
Dairy Cow

Common

Milk of the Land: Fertilizing aura that boosts nearby plant growth speed & Trade-In: Selling this pet has a small chance to get a Beanstalk seed

Increases Plant Growth
Gives Items
Dark Spriggan
Dark Spriggan

Mythical

Dark Overgrowth: Occasionally spreads it's roots and all nearby fruit have a chance to get the Blight mutation!

Applies Plant Mutations
Deer
Deer

Uncommon

Forester: When harvesting berry plants, there is a chance the fruit will remain

Duplicates Plants
Diamond Dragonfly
Diamond Dragonfly

Divine

Diamond Transmutation: Occasionally, turns a random fruit diamond

Applies Variants
Diamond Panther
Diamond Panther

Divine

12 Carats: Harvesting a fruit with 12 mutations has a chance to age a pet up by 1!

Ages Pets
Dilophosaurus
Dilophosaurus

Mythical

Frilled Reptile: Occasionally opens its frills and spits out venom! The venom spreads to other random pets, advancing cooldown OR granting bonus xp

Advances Cooldown
Boosts Pet XP
Disco Bee
Disco Bee

Divine

Disco Disco: Occasionally has a chance to turn a nearby fruit into Disco

Applies Plant Mutations
Dog
Dog

Common

Digging Buddy: Occasionally digs up a random seed

Gives Items
Dragonfly
Dragonfly

Divine

Transmutation: Occasionally, turns a random fruit gold

Applies Plant Mutations
Drake
Drake

Mythical

Flambe: Goes to a Cooking Kit and breathes fire on it, helping the cooking process and boosting cooking speed

Uses Cosmetics
Easter Bunny
Easter Bunny

Divine

Egg Hunt: Occasionally hides an Easter Egg reward in a random spot. Finding the Easter Egg grants great rewards/very positive effects

Easter Egg Chick
Easter Egg Chick

Rare

Easter Eggcelerator: Occasionally goes to a random un-hatched egg, and reduces its hatch time. Bonus hatch time reduced for every other Easter Egg Chick in your garden!

Echo Frog
Echo Frog

Mythical

Echo Croak: Occasionally advances a nearby plant's growth by 24 hours

Increases Plant Growth
Eggnog Chick
Eggnog Chick

Mythical

Eggcelerator: Decreases the time needed to hatch other eggs & Eggnoginator: Occasionally has a chance to mutate fruit with Eggnog mutation! Chance increases the more Eggs you have in your garden.

Reduces Egg Hatch Time
Applies Plant Mutations
Elemental Bee
Elemental Bee

Mythical

Beelemental: Occasionally mutates a random fruit in your garden with 1 of 4 elemental mutations!

Elephant
Elephant

Divine

Jumbo Blessing: Occasionally resets a pet's age back to 1 but increases its base weight by 0.1KG if its base weight is less than a certain value!

Increases Base Weight (kg)
Elk
Elk

Uncommon

Elk Forester: Chance berry fruit stays after collecting! Rarer plants have a rarer chance to replant

Duplicates Plants
Emerald Snake
Emerald Snake

Legendary

Gem Carver: Occasionally goes to a random fruit in your garden and converts it into a random Gem-themed cosmetic!

Gives Items
Empress Bee
Empress Bee

Divine

For the Empress: Occasionally refreshes the ability cooldowns for other random pets!

Farmer Chipmunk
Farmer Chipmunk

Uncommon

Nuturalist: All Nutty type plants grow faster!

Increases Plant Growth
Fennec Fox
Fennec Fox

Divine

Sly: Occasionally goes to another player's random fruit, has a chance to copy a mutation from it and applies it to a random fruit you own.

Copies Mutations
Festive Frost Squirrel
Festive Frost Squirrel

Mythical

Festive FREEZE!: Occasionally has a chance to mutate a random nearby fruit with Subzero mutation!

Applies Plant Mutations
Festive Ice Golem
Festive Ice Golem

Prismatic

Festive Cold Gears: Grants a chance for every pet mutation from the pet mutation to be 1 of 4 Ice Golem exclusive pet mutations!

Applies Pet Mutations
Festive Moose
Festive Moose

Mythical

Festive Christmas Support: When Christmas type pets finish their abilities, they start their cooldown with less! & Festive Moose Call: Occasionally eats a fruit with a Cold type mutation, does a call and all nearby plants advance growth.

Advances Cooldown
Consumes Plants
Increases Plant Growth
Festive Nutcracker
Festive Nutcracker

Mythical

Festive Nutcracker: Occasionally cracks open a random Nutty type fruit and grants a random reward! Ignores favorited fruit.

Consumes Plants
Gives Items
Festive Partridge
Festive Partridge

Rare

Festive Christmas Partridge: All Christmas type plants within range have increased variant chance!

Increases Variants Chances
Festive Reindeer
Festive Reindeer

Legendary

Festive Sleigh Synergy: Gains additional XP/s for every Reindeer in your garden! & Festive Beast of Snow: Occasionally has a chance to mutate nearby fruits with Snowy!

Boosts Pet XP
Applies Plant Mutations
Boosts Self XP
Festive Santa Bear
Festive Santa Bear

Legendary

Festive Merry Beary: Occasionally spawns a random Christmas gift! Find it to get a reward!

Gives Items
Festive Turtle Dove
Festive Turtle Dove

Rare

Festive Christmas Dove: Nearby Christmas type plants within range have increased variant chance!

Increases Variants Chances
Festive Wendigo
Festive Wendigo

Divine

Festive Gnawing Hunger: Always loses hunger and loses more hunger per second and gains bonus effects the higher the current hunger level!

Boosts Pet XP
Festive Yeti
Festive Yeti

Divine

Festive Yeti Night: Occasionally devours a fruit with atleast 24 mutations to summon the Yeti Night weather! Ignores favorited fruit!

Consumes Plants
Applies Weather
Firefly
Firefly

Mythical

Lightning Bug: Occasionally strikes a random nearby fruit, with a small chance of turning it Shocked

Applies Plant Mutations
Firemite
Firemite

Rare

Light Up: Occasionally ignites another random pet in your garden, advancing cooldown for that pet. Extra cooldown advanced for every other Firemite in your garden.

Firework Sprite
Firework Sprite

Rare

Firework Fairy: Occasionally gives you some fireworks!

Gives Items
Flame Bee
Flame Bee

Rare

Beeter Pollinator: Occasionally pollinates fruit & Hot Honey: Occasionally has a chance to mutate fruit with Burnt or Flaming

Applies Plant Mutations
Flamingo
Flamingo

Rare

Flamboyance: Occasionally stands on one legs and all nearby plants will grow incredibly fast

Increases Plant Growth
Football
Football

Legendary

Touchdown: Occasionally runs to the Gear Shop or Seed Shop (whichever is farther) and does a touchdown which awards you with sheckles or a Watering Can

Gives Sheckles
Gives Items
Fortune Squirrel
Fortune Squirrel

Legendary

CHA-CHING: Occasioally has a chance to apply the Jackpot mutation

Applies Plant Mutations
French Fry Ferret
French Fry Ferret

Divine

Welcome to Fry Town: Occasionally increases a pet's level by one

Ages Pets
French Hen
French Hen

Uncommon

Christmas Hen: Christmas type plants within range have increased size multiplier!

Increases Plant Sizes
Frog
Frog

Legendary

Croak: Occasionally advances a nearby plant's growth by 24 hours

Increases Plant Growth
Frost Dragon
Frost Dragon

Divine

Glacial Dragon: Occasionally converts all nearby Frozen mutations within 30 studs to Glacial mutation. For every mutation converted: XP is granted to all other pets in your garden! & Frost Diety: When selling fruits with Glacial mutation: There is a chance a random mutation from that fruit will be applied to a fruit in your garden!

Applies Plant Mutations
Boosts Pet XP
Frost Squirrel
Frost Squirrel

Mythical

FREEZE!: Occasionally has a chance to mutate a random nearby fruit with Subzero mutation!

Applies Plant Mutations
GIANT Armadillo
GIANT Armadillo

Rare

GIANT Armadillo Roll: Occasionally rolls into a ball and transforms you into a armadillo ball for a duration!

Playful
GIANT Ash Raven
GIANT Ash Raven

Legendary

GIANT Ashened Furnishing: Occasionally goes to a random fruit with Ash and/or Burnt mutation and converts it into a random Ash-themed castle cosmetic! Ignores favorited fruit.

GIANT Badger
GIANT Badger

Rare

Giant Earthquake Excavator: Occasionally digs around and spreads mud has a chance to mutate nearby fruits with Cracked

Applies Plant Mutations
GIANT Barn Owl
GIANT Barn Owl

Mythical

Giant Wise Shopper: Pets bought from shops directly have a chance to get an extra base weight & Giant Prince of Fall: All Fall type pets gain bonus XP per second

Increases Base Weight (kg)
Boosts Pet XP
GIANT Firefly
GIANT Firefly

Mythical

Giant Lightning Bug: Occasionally strikes a random nearby fruit, with a small chance of turning it Shocked

Applies Plant Mutations
GIANT Firemite
GIANT Firemite

Rare

GIANT Light Up: Occasionally ignites another random pet in your garden, advancing cooldown for that pet. Extra cooldown advanced for every other Firemite in your garden.

GIANT Grizzly Bear
GIANT Grizzly Bear

Legendary

Giant Fall Express: Chance to apply the Fall mutation & Giant Mighty Bear: Grants increased player size

Applies Plant Mutations
Playful
GIANT Mantis Shrimp
GIANT Mantis Shrimp

Mythical

GIANT Shrimpunch!!!: Occasionally punches different things in your garden for different effects!

Applies Plant Mutations
Boosts Pet XP
Gives Sheckles
Reduces Egg Hatch Time
GIANT Robin
GIANT Robin

Common

Giant Tiny Bird: Grants decreased player size

Playful
GIANT Silver Dragonfly
GIANT Silver Dragonfly

Legendary

Giant Silver Transmutation: Occasionally, turns a random fruit Silver

Applies Variants
GIANT Snowman Builder
GIANT Snowman Builder

Legendary

GIANT Icy Fortifications: Occasionally consumes crops with any cold type mutations and grants a Snow-Fort based cosmetic reward!

Consumes Plants
Gives Items
GIANT Snowman Soldier
GIANT Snowman Soldier

Rare

GIANT Snow-munition: Occasionally grants Snowballs.

Gives Items
GIANT Swan
GIANT Swan

Divine

Giant Swan Song: Occasionally goes to another player's pet and befriends it and performs its ability & Bird of Grace: Occasionally applies Graceful mutation

Applies Plant Mutations
Galah Cockatoo
Galah Cockatoo

Mythical

Opulent Bird: Occasionally has a chance to mutate nearby fruits Opulent

Applies Plant Mutations
Gardener Bee
Gardener Bee

Legendary

Beetanist: Occasionally transfers a Pollinated mutation from a fruit (Ignores favorited) to other random fruits! The plants that have these fruits advance growth!

Gecko
Gecko

Common

Gecko Gold: Nearby Safari type plants have increased variant chance!

Increases Variants Chances
Geode Turtle
Geode Turtle

Rare

Geode Sprinkler: Occasionally converts an Advanced sprinkler into a Geode Sprinkler!

Affects Sprinklers
Gives Items
German Shepherd
German Shepherd

Legendary

Digging K9: Occasionally has chance to dig up a random seed! The dug up seed has a small chance to be a Gold seed instead

Generates Extra Seeds
Ghost Bear
Ghost Bear

Rare

Boo!: Occasionally scares fruit and applies the Spooky Mutation!

Applies Plant Mutations
Ghostly Bat
Ghostly Bat

Uncommon

Ghostly Spooky Bat: Grants nearby Spooky type plants a variant chance bonus.

Increases Variants Chances
Ghostly Black Cat
Ghostly Black Cat

Mythical

Ghostly Witch's Nap: Occasionally goes to a Witch's Cauldron cosmetic and naps near it for a duration. New fruit within radius have bonus size!

Uses Cosmetics
Increases Plant Sizes
Ghostly Bone Dog
Ghostly Bone Dog

Rare

Ghostly Gravedigger: Occasionally digs up seeds.

Gives Items
Ghostly Dark Spriggan
Ghostly Dark Spriggan

Mythical

Ghostly Overgrowth: Occasionally spreads it's roots and all nearby fruit have a chance to get the Blight mutation!

Applies Plant Mutations
Ghostly Headless Horseman
Ghostly Headless Horseman

Prismatic

The Ghostly Reins of Ruin: Occasionally haunts pets with one of four chaotic mutations!

Applies Pet Mutations
Ghostly Mummy
Ghostly Mummy

Divine

Ghostly King's Sarcophagus: As long as you have a Sarcophogus in your Garden: Pets you get from Chests have a chance to get extra base weight

Uses Cosmetics
Increases Base Weight (kg)
Ghostly Scarab
Ghostly Scarab

Uncommon

Ghostly Spooky Scarab: Nearby Spooky type plants have increased growth size!

Increases Plant Sizes
Ghostly Spider
Ghostly Spider

Legendary

Ghostly Web Weave: Occasionally weaves a web for a duration. All Pets on the web advance cooldown faster and all plants on the web grow faster.

Advances Cooldown
Increases Plant Growth
Ghostly Tomb Marmot
Ghostly Tomb Marmot

Legendary

Ghostly Tomb Raid: Occasionally burrows down in the ground and hides in a Tombstone! Finding the tombstone grants a random Graveyard cosmetic!

Gives Items
Giant Ant
Giant Ant

Mythical

For the Blue Colony: Small chance to duplicate harvested plant & Candy Harvester: Increased chance to duplicate harvested candy type plant

Duplicates Plants
Giant Scorpion
Giant Scorpion

Prismatic

Scoprion Sting: Occasionally stings a pet with the highest cooldown and refreshes its ability! There is a small chance for the stung pet to get the Venom Pet Mutation!

Repeats Abilities
Applies Pet Mutations
Gift Rat
Gift Rat

Rare

Gift Wrat: Occasionally converts Apple fruits into a random Gift cosmetic! Collect all 6 variants!

Gives Items
Consumes Plants
Gilded Choc Chocolate Bunny
Gilded Choc Chocolate Bunny

Uncommon

Gilded Choc Choc Chomper: Occasionally eats any Carrot plant with Choc mutation and spreads it to two other random fruits in your garden. Ignores favorited fruit.

Gilded Choc Easter Bunny
Gilded Choc Easter Bunny

Divine

Gilded Choc Egg Hunt: Occasionally hides an Easter Egg reward in a random spot. Finding the Easter Egg grants great rewards/very positive effects

Gilded Choc Easter Egg Chick
Gilded Choc Easter Egg Chick

Rare

Gilded Choc Easter Eggcelerator: Occasionally goes to a random un-hatched egg, and reduces its hatch time. Bonus hatch time reduced for every other Easter Egg Chick in your garden!

Gilded Choc Jerboa
Gilded Choc Jerboa

Legendary

Gilded Choc Hop Streak: Occasionally hops in place, gaining xp and advances the growth for a random plant in your garden! The Jerboa has a small chance to hop again each time.

Gilded Choc Marshmallow Lamb
Gilded Choc Marshmallow Lamb

Legendary

Gilded Choc The Smore You Know: Occasionally grants another pet in your garden either XP OR advances its ability cooldown! Marshmallow Lamb gains whichever bonus was not given.

Gilded Choc Nyala
Gilded Choc Nyala

Mythical

Gilded Choc Spring Grazer: Occasionally eats fruit with atleast 4 mutations. Fruits within range have a chance to get the Lush mutation and pets have a chance to gain XP!

Gilded Choc Peryton
Gilded Choc Peryton

Prismatic

Gilded Choc Everchanting Spring: Occasionally blesses all pets in your garden, granting huge XP each! There is a chance for one of the blessed pet to get the Everchanted Pet Mutation!

Gilded Choc Spring Bee
Gilded Choc Spring Bee

Rare

Beeter Pollinator: Occasionally pollinates fruit! & Gilded Choc Bloom Bee: Occasionally has a chance to apply the Bloom mutation!

Giraffe
Giraffe

Legendary

Great Grazer: Occasionally, Eats fruit from high sources for more sell value. The plant it ate from advances growth!

Sells Plants
Increases Plant Growth
Glass Cat
Glass Cat

Rare

Cat Nap: Cat naps in a random spot in your farm, emitting an aura that boosts nearby fruit size & Gloss Animal: Occasionally has a chance to apply Glossy mutation!

Increases Plant Sizes
Applies Plant Mutations
Glass Dog
Glass Dog

Rare

Digging Buddy: Occasionally digs up a random seed & Gloss Animal: Occasionally has a chance to apply Glossy mutation!

Gives Items
Applies Plant Mutations
Glimmering Sprite
Glimmering Sprite

Mythical

Glimmer: Occasionally flies to a random fruit and applies the Glimmering mutation

Applies Plant Mutations
Gnome
Gnome

Legendary

Gnome Collector: Has a chance to mutate a random fruit with the Gnomed mutation. Gains additional chance for every Gnome cosmetic in your garden

Applies Plant Mutations
Uses Cosmetics
Goat
Goat

Uncommon

Ram: Occasionally goes to a random player and rams them, knocking and launching them away!

Playful
Goblin
Goblin

Rare

Looter: Occasionally goes to another random player and carries them and brings them to you! Player can jump to be released!

Playful
Goblin Gardener
Goblin Gardener

Mythical

Garden Looter: Occasionally goes to a random shop and steals an item that is in stock and gives it to you! Rarer items have rarer chance to be stolen.

Gives Items
Duplicates Shop Purchases
Goblin Miner
Goblin Miner

Mythical

Miner - Every 5 minutes on the clock has a chance to grant a dig!

Gives Items
Gold Finch
Gold Finch

Prismatic

Sparkle Squack: Occasionally applies the Goldsparkle mutation

Golden Bee
Golden Bee

Mythical

Pollinator: Occasionally pollinates fruit & Golden Harvest: Harvested fruit has a chance to turn to gold

Applies Plant Mutations
Applies Variants
Golden Goose
Golden Goose

Divine

Golden Laying: Occasionally lays a Golden Egg plant that starts with the Fortune mutation. Selling the Golden Egg has chance to apply Fortune mutation to a random fruit in your garden

Applies Plant Mutations
Golden Lab
Golden Lab

Common

Digging Friend: Occasionally digs up a random seed at a higher chance

Gives Items
Golden Piggy
Golden Piggy

Mythical

Gold Hoarder: For every Gold Ingot Cosmetic you have in your garden, nearby pets in a radius gain additional XP!

Boosts Pet XP
Uses Cosmetics
Golem
Golem

Mythical

Tech Savvy: Goes to the mutation machine and tinkers with it and advances its time

Reduces Mutation Machine Time
Gorilla Chef
Gorilla Chef

Legendary

King Cook: When cooking, has a chance for food cooked to double!

Uses Cosmetics
Duplicates Cooked Food
Green Bean
Green Bean

Divine

Bean for the Bean God: Occasionally sacrifices a random Beanstalk fruit in your garden to instantly grow a random plant in your garden with a fruit size bonus

Consumes Plants
Increases Plant Growth
Increases Plant Sizes
Grey Mouse
Grey Mouse

Legendary

Whisker Wisdom: Occasionally gains bonus experience & Scamper: Increase player movement speed

Boosts Self XP
Playful
Griffin
Griffin

Divine

Glorious Wings: Flaunts its wings releasing a cyclone in a random directions. Pets struck have cooldown advanced and fruits struck get Cyclonic mutation

Applies Plant Mutations
Advances Cooldown
Grizzly Bear
Grizzly Bear

Legendary

Fall Express: Chance to apply the Fall mutation & Mighty Bear: Grants increased player size

Applies Plant Mutations
Playful
Gummy Bear
Gummy Bear

Legendary

Gummy Express: Occasionally applies the Gummy mutation!

Hamster
Hamster

Mythical

Hamster Wheel: Occasionally runs in a hamster wheel and grants increased crafting speed for a duration

Reduces Crafting Time
Hazehound
Hazehound

Mythical

Hound of Ash: Occasionally applies Ash mutation to a random fruit & Hound of Haze: Occasionally applies Haze mutation to a random fruit.

Headless Horseman
Headless Horseman

Prismatic

The Reins of Ruin: Occasionally haunts pets with one of four chaotic mutations!

Applies Pet Mutations
Hedgehog
Hedgehog

Rare

Prickly Lover: Makes nearby prickly fruit grow bigger

Increases Plant Sizes
Hex Serpent
Hex Serpent

Divine

Witchcraft: Plant single-harvest plants in a Hex Circle cosmetic and occasionally: The Hex Serpent will perform a ritual, consuming the plants, granting random rewards! The rarer plants and better variants grants better effects!

Uses Cosmetics
Consumes Plants
Gives Items
Hippo
Hippo

Legendary

Watermelon Chomper: Occasionally eats Watermelons for bonus sheckles with chance to get the seed back & Monsoon Beast: Occasionally applies Monsoon mutation!

Consumes Plants
Sells Plants
Gives Items
Applies Plant Mutations
Honey Badger
Honey Badger

Legendary

Honey Lover: Occasionally consumes a fruit with HoneyGlazed or Pollinated then either spreads it to other plants or restores hunger to another pet in your garden.

Honey Bee
Honey Bee

Rare

Beeter Pollinator: Occasionally pollinates fruit

Applies Plant Mutations
Hootsie Roll
Hootsie Roll

Mythical

Hootsie Experience: Grants bonus XP/s to all Easter type pets! & Hootsie Effect: Grants bonus XP/s to all pets in your garden!

Hotdog Daschund
Hotdog Daschund

Legendary

Loaded Dog: Drops a mustard or ketchup puddle. Pets that stand in mustard get faster cooldown and pets that step on ketchup gain more experience

Advances Cooldown
Boosts Pet XP
Hummingbird
Hummingbird

Rare

Seed Disperser: Converts a random single-harvest plant into its seed equivalent. Ignores favorited plants.

Generates Extra Seeds
Hyacinth Macaw
Hyacinth Macaw

Mythical

Cloudtouched Bird: Occasionally has a chance to mutate nearby fruits Cloudtouched

Applies Plant Mutations
Hydra
Hydra

Divine

Three-Headed: Ages itself up by 1 then fully hatches an egg then mutates a random fruit with Terran. Cannot be mimicked or refreshed. & Earth Diety: When selling fruits with Terran mutation, there is chance a random mutation from that fruit will be applied to a fruit in your garden!

Ages Pets
Applies Plant Mutations
Reduces Egg Hatch Time
Hyena
Hyena

Uncommon

Pack Hunting: Gains additional XP/s for every Hyena in your garden! Requires another non-Hyena pet equipped to activate this effect.

Boosts Self XP
Hyrax
Hyrax

Uncommon

Hyrax: Occasionally eats a random fruit in your garden and spits out a Fissure Berry seed!

Generates Extra Seeds
Consumes Plants
Ice Golem
Ice Golem

Prismatic

Cold Gears: Grants a chance for every pet mutation from the pet mutation to be 1 of 4 Ice Golem exclusive pet mutations!

Applies Pet Mutations
Idol Chipmunk
Idol Chipmunk

Legendary

Chip-Hop: Occasionally performs a concert for a duration and all your pets gain hunger percentage per second

Restores Pet Hunger
Iguana
Iguana

Legendary

Sun Basking: Goes to a random fruit with Frozen mutation and melts it back to Chilled or Wet. Ignores favorited fruit.

Applies Plant Mutations
Iguanodon
Iguanodon

Legendary

Dino Herd: Grants bonus experience per second gain to all Dinosaur type active pets

Boosts Pet XP
Boosts Self XP
Imp
Imp

Legendary

Scamp: Occasionally, the Imp will playfully invite you to chase it. Catching the Imp will grant a reward.

Playful
Gives Items
Jackalope
Jackalope

Uncommon

Thunper: Occasionally has a chance to apply the Sandy mutation

Applies Plant Mutations
Jandel Monkey
Jandel Monkey

Divine

No description available.

Jerboa
Jerboa

Legendary

Hop Streak: Occasionally hops in place, gaining xp and advances the growth for a random plant in your garden! The Jerboa has a small chance to hop again each time.

Junkbot
Junkbot

Mythical

OIL OR BOIL: Occasionally has a chance to oil nearby fruit applying the Oil mutation

Applies Plant Mutations
Kappa
Kappa

Mythical

Water Spirit: Occasionally sprays water on all nearby fruits, mutating them to wet, and has a chance to convert Wet mutations already on fruit to Bloodlit

Applies Plant Mutations
King Bee
King Bee

Divine

King Pollinator: Occasionally mutates a number of random fruits in your garden with Pollinated & For the King: Occasionally, all Pollinated fruits in your garden have a chance to also get the Honeygem mutation. For every fruit mutated grants bonus XP and advances growth of 8 random plants!

Kitsune
Kitsune

Prismatic

Nine-Tailed Myth: Occasionally goes to other player's fruit, mutates with Chakra or Foxfire Chakra and steals it, then hands it to you

Duplicates Plants
Kiwi
Kiwi

Rare

Nocturnal Nursery: Occasionally reduces the hatch time of the egg with the most hatch time left

Reduces Egg Hatch Time
Kodama
Kodama

Legendary

Tree Spirit: Collecting Zen type fruits have a chance to mutate with Tranquil.

Applies Plant Mutations
Koi
Koi

Mythical

Fish of Fortune: Grants a chance to recover an egg when hatching. Can be different colors

Returns Eggs
Krampus
Krampus

Divine

Coal Sack: Occasionally consumes a percentage of your sheckles to punish another random player. Greater punishments are rarer and consume more sheckles.

Playful
Duplicates Plants
Ladybug
Ladybug

Common

Flower Fortune: All flower type plants grow faster

Increases Plant Growth
Lemon Lion
Lemon Lion

Mythical

Brain-Roar: Roars and mutates a random fruit with Brainrot mutation & Citrus Roar: Occasionally grants bonus experience to a random pet

Boosts Pet XP
Applies Plant Mutations
Lich
Lich

Divine

Spooky Lich: Spooky type plants have increased variant chance, growth speed and size bonus & Dread Lord: All Halloween type pets gain bonus XP per second!

Increases Variants Chances
Boosts Pet XP
Lion
Lion

Divine

Lion Call: Occasionally roars and shares advanced cooldown across all pets and calls them to the Lion & King of the Safari: Occasionally roars and mutates fruit up to the no. of different types of Safari type pets with a random Safari mutation!

Advances Cooldown
Applies Plant Mutations
Lioness
Lioness

Divine

Lion Call: Occasionally roars and shares advanced cooldown across all pets and calls them to the Lion & Queen of the Safari: Occasionally roars and mutates fruit up to the no. of different types of Safari type pets with a random Safari mutation!

Advances Cooldown
Applies Plant Mutations
Lobster Thermidor
Lobster Thermidor

Divine

Boiling Point: Chance a nearby fruit becomes Molten! Chance a nearby fruit becomes Meteoric!

Applies Plant Mutations
Luminous Sprite
Luminous Sprite

Divine

Illuminate: Occasionally flies to a random fruit and applies the Luminous mutation

Applies Plant Mutations
Lyrebird
Lyrebird

Mythical

Song of Lyre: Occasionally sings an empowering song, granting you the Song of Lyre buff for a duration. While active, you have a chance to duplicate collected fruits and also get bonus weight. Reapplying the buff refreshes its duration. If the new buff has a higher chance or weight bonus, it replaces the current one.

Magpie
Magpie

Legendary

Shiny Eye: Selling silver fruit has a chane to grant a random reward!

Gives Items
Mallard
Mallard

Legendary

Southbound: On the half-hourly, all Mallards fly south to migrate. The mallard leaves you with a random reward! Mallards return to your inventory.

Gives Items
Mandrake
Mandrake

Legendary

Mandrake Essence: Harvesting Mandrake crops have a chance to mutate a random fruit in your garden with Rot mutation

Applies Plant Mutations
Maneki-neko
Maneki-neko

Uncommon

Fortune Cat: Occasionally does a wave of good luck and grants increased chance to get your fruit back after selling it

Duplicates Plants
Mantis Shrimp
Mantis Shrimp

Mythical

Shrimpunch!!!: Occasionally punches different things in your garden for different effects!

Applies Plant Mutations
Boosts Pet XP
Gives Sheckles
Reduces Egg Hatch Time
Marmot
Marmot

Legendary

Whack-A-Marmot: Occasionally burrows down in the ground and hides in a random mound! Finding the mound grants a random Fall related reward!

Gives Items
Marshmallow Lamb
Marshmallow Lamb

Legendary

The Smore You Know: Occasionally grants another pet in your garden either XP OR advances its ability cooldown! Marshmallow Lamb gains whichever bonus was not given.

Meerkat
Meerkat

Legendary

Lookout: Occasionally goes to another pet and does a lookout for it. That pet advances cooldown. Has a chance to do it again after each lookout.

Advances Cooldown
Messenger Pigeon
Messenger Pigeon

Rare

Mutation Messenger: Occasionally grabs a mutation from a random fruit in your garden and transfers it to another player's random fruit!

Copies Mutations
Mimic Octopus
Mimic Octopus

Mythical

Mimicry: Mimics and copies an ability from another pet and performs its ability

Repeats Abilities
Mistletoad
Mistletoad

Mythical

Jolly Croak: Occasionally croaks at a random nearby plant, advancing growth for each Christmas type pet and applies Chilled mutation to all fruits of that plant!

Increases Plant Growth
Applies Plant Mutations
Mizuchi
Mizuchi

Divine

Water Diety: When selling fruits with Azure mutation, there is chance a random mutation from that fruit will be applied to a fruit in your garden! & Azure Surge: Occasionally roars on a random nearby fruit, with a small chance of applying Azure mutation!

Applies Plant Mutations
Mochi Mouse
Mochi Mouse

Mythical

Mochi Marathon: Grants bonus experience per second gain to all Food type pets & Whisker Wisdom: Occasionally gains bonus experience

Boosts Self XP
Boosts Pet XP
Mole
Mole

Legendary

Treasure Hunter: Will occasionally dig down to find gear or sheckles

Gives Items
Gives Sheckles
Monkey
Monkey

Rare

Cheeky Refund: Chance to get your fruit back when you sell it

Duplicates Plants
Moon Cat
Moon Cat

Legendary

Moon Nap: Moon cat naps in a random spot in your farm, and boosts nearby fruit size & Moon Harvest: Grants chance for Night type plants to replant when harvested

Increases Plant Sizes
Duplicates Plants
Moose
Moose

Mythical

Christmas Support: When Christmas type pets finish their abilities, they start their cooldown with less! & Moose Call: Occasionally eats a fruit with a Cold type mutation, does a call and all nearby plants advance growth.

Advances Cooldown
Consumes Plants
Increases Plant Growth
Moth
Moth

Legendary

Silksong: Sings to a random pet and magically restore its hunger

Restores Pet Hunger
Mummy
Mummy

Divine

King's Sarcophagus: As long as you have a Sarcophogus in your Garden: Pets you get from Chests have a chance to get extra base weight

Increases Base Weight (kg)
Uses Cosmetics
New Year's Bird
New Year's Bird

Uncommon

New Year's Bird: Occasionally flies around and launches fireworks everywhere to celebrate the new year!

Playful
New Year's Chimp
New Year's Chimp

Mythical

Primate Productivity: Occasionally grabs a fruit from your garden and delivers it to one of four different things for a random bonus effects!

Consumes Plants
Applies Plant Mutations
Boosts Pet XP
Gives Items
Reduces Egg Hatch Time
New Year's Dragon
New Year's Dragon

Prismatic

Breath of Fireworks: Occasionally breathes fireworks on 20 - 26 different fruits in your garden with Fireworks mutation & Resolution: Occasionally consumes fruit with Firework mutation to give you the Dragon's Firework.

Applies Plant Mutations
Consumes Plants
Gives Items
Night Owl
Night Owl

Mythical

King of the Night: Grants bonus experience per second gain to all active pets.

Boosts Pet XP
Nihonzaru
Nihonzaru

Rare

Bathe Time: As long as you have a Hot Spring in your garden: bathes in it and relaxes

Uses Cosmetics
Playful
Nurse Bee
Nurse Bee

Rare

Beeler Healer: Occasionally, grabs a Pollinated fruit (Ignores favorited) and gives it to another Pet. The pet gets either XP or restores hunger!

Nutcracker
Nutcracker

Mythical

Nutcracker: Occasionally cracks open a random Nutty type fruit and grants a random reward! Ignores favorited fruit.

Consumes Plants
Gives Items
Nyala
Nyala

Mythical

Spring Grazer: Occasionally eats fruit with atleast 4 mutations. Fruits within range have a chance to get the Lush mutation and pets have a chance to gain XP!

Orange Tabby
Orange Tabby

Rare

Orange Tabby: Orange Tabby naps in a random spot in your farm, emitting an aura that boosts nearby fruit size

Increases Plant Sizes
Orangutan
Orangutan

Rare

Helping Hands: When crafting, each material has a chance for it not to be consumed

Reduces Tool Consumption
Orchid Mantis
Orchid Mantis

Divine

Orchid Zone: Occasionally prays for a duration & each second a fruit within range has a chance to gain the Floral mutation. Fruit with Floral turn Gold, and Gold fruit with Floral convert to Rainbow!

Ostrich
Ostrich

Legendary

Eggsperience: Grants pets hatched from eggs an age bonus

Ages Pets
Owl
Owl

Mythical

Prince of the Night: Grants bonus experience per second gain to all active pets.

Boosts Pet XP
Oxpecker
Oxpecker

Common

Safari Support: When Safari type pets finish their abilities, they will start their next cooldown with less!

Advances Cooldown
Pachycephalosaurus
Pachycephalosaurus

Legendary

Crafty Dome: Grants a small chance to duplicate the crafted item.

Duplicates Crafts
Pack Bee
Pack Bee

Mythical

Pack Bee: Increases backpack size by 30 and occasionally pollinates nearby fruit

Applies Plant Mutations
Increases Backpack Size
Pack Mule
Pack Mule

Mythical

Supply Line: Crafted pets have a chance to gain base weight!

Increases Base Weight (kg)
Pancake Mole
Pancake Mole

Rare

Pancake Hunter: Will occasionally dig down to find gear or sheckles

Gives Items
Gives Sheckles
Panda
Panda

Legendary

Bamboozle: Waddles to bamboo, eats it, and grants bonus sheckles (more than normal value)

Consumes Plants
Sells Plants
Gives Sheckles
Parasaurolophus
Parasaurolophus

Legendary

Crowbar Head: Occasionally, goes to the cosmetic crate with the highest time and reduces time to open!

Reduces Crate Time
Partridge
Partridge

Rare

Christmas Partridge: All Christmas type plants within range have increased variant chance!

Increases Variants Chances
Peach Wasp
Peach Wasp

Mythical

Peach Pollinator: Occasionally applies Plasma to fruit & Peach Stinger: Stings a random pet to advance ability cooldown

Applies Plant Mutations
Advances Cooldown
Peacock
Peacock

Legendary

Utter Beauty: Occasionally fans its feathers and all nearby pets will advance ability cooldowns

Advances Cooldown
Penguin
Penguin

Mythical

Belly Slide: Every 12m, turns you into a belly sliding penguin for a duration! The penguin also belly slides from fruit to fruit in your garden and applies the Arctic mutation!

Playful
Applies Plant Mutations
Performer Seal
Performer Seal

Rare

Play Ball: Occasionally plays ball with you. Every time you succesfully recieve the ball a random plant in your garden advances growth or a random pet gets bonus XP!

Peryton
Peryton

Prismatic

Everchanting Spring: Occasionally blesses all pets in your garden, granting huge XP each! There is a chance for one of the blessed pet to get the Everchanted Pet Mutation!

Petal Bee
Petal Bee

Legendary

Pollinator: Occasionally pollinates fruit & Flower Harvest: Harvested flowers have a chance to stay

Applies Plant Mutations
Duplicates Plants
Phoenix
Phoenix

Divine

Bird of Rebirth: Pets taken from the mutation machine have a bonus to their age & Icarus: Goes to random fruits to apply flaming mutation, fruits passed along the way have a chance to get the Flaming mutation

Ages Pets
Applies Plant Mutations
Pig
Pig

Rare

Fertilizer Frenzy: Occasionally releases a fertilizing AOE boosting variant chance

Increases Variants Chances
Pine Beetle
Pine Beetle

Legendary

Pine Beetle Duel: Occasionally initiates a battle with another player's Beetle. If your beetle wins you get a reward! The higher level and heavier the beetle the more likely`;

  const lines = text.split('\n').map(l => l.trim());
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
      // It's a tag
      currentPet.tags.push(line);
    }
  }
  
  if (currentPet && currentPet.name) {
    parsedPets[currentPet.name] = currentPet;
  }
  
  // Now load the old database and merge
  let searchDataContent = fs.readFileSync('src/data/petAbilitySearchData.ts', 'utf-8');
  // It's a JS file exporting abilityPets array.
  // We can require it if we strip the export
  searchDataContent = searchDataContent.replace('export interface PetAbility {', 'interface PetAbility {')
                                       .replace('export const abilityPets: PetAbility[] = ', 'module.exports = ');
  
  fs.writeFileSync('scratch/temp_data.js', searchDataContent);
  const oldPets = require('./scratch/temp_data.js');
  
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

  const code = "export interface PetAbility {\\n" +
  "  name: string;\\n" +
  "  rarity: string;\\n" +
  "  image: string;\\n" +
  "  description: string;\\n" +
  "  tags: string[];\\n" +
  "}\\n\\n" +
  "export const abilityPets: PetAbility[] = " + JSON.stringify(oldPets, null, 2) + ";\\n";
  
  fs.writeFileSync('src/data/petAbilitySearchData.ts', code);
  console.log("Updated", updatedCount, "pets with the new text blob.");

