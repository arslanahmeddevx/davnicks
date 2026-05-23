"use client";

import { useState } from "react";
import { Search, ChevronDown, Copy } from "lucide-react";

// Placeholder data matching images
const crops = [
  { name: "Ackee", value: 88888, icon: "https://tr.rbxcdn.com/180DAY-f9695a43b6d9efd7db18e8c7d2812fed/150/150/Image/Png/noFilter", rarityColor: "text-purple-500" },
  { name: "Acorn", value: 123123, icon: "https://tr.rbxcdn.com/180DAY-e8f5f57f5ae24d0c9aa254123389a218/150/150/Image/Png/noFilter" },
  { name: "Acorn Squash", value: 155555, icon: "https://tr.rbxcdn.com/180DAY-7239e6d39a9865c73abfe4e213d14341/150/150/Image/Png/noFilter" },
  { name: "Aetherfruit", value: 100000, icon: "https://tr.rbxcdn.com/180DAY-fbaec6ff8dd560d1fbe3606355107be2/150/150/Image/Png/noFilter" },
  { name: "Akebi", value: 40500, icon: "https://tr.rbxcdn.com/180DAY-f63b3d2717b04989a0e10b4a8d997493/150/150/Image/Png/noFilter" },
  { name: "Alien Apple", value: 1000000, icon: "https://tr.rbxcdn.com/180DAY-44a7a346d24abeaccbe4ef470871f965/150/150/Image/Png/noFilter" },
  { name: "Aloe Vera", value: 69000, icon: "https://tr.rbxcdn.com/180DAY-921a9dd51eecd0a8d5eac7e82d06c659/150/150/Image/Png/noFilter" },
  { name: "Amazon Feather Fern", value: 125125, icon: "https://tr.rbxcdn.com/180DAY-a6519ca59a0efc4e487ba5d90429d640/150/150/Image/Png/noFilter" },
  { name: "Block", value: 500, icon: "https://tr.rbxcdn.com/180DAY-e8f5f57f5ae24d0c9aa254123389a218/150/150/Image/Png/noFilter" },
  { name: "Berry", value: 600, icon: "https://tr.rbxcdn.com/180DAY-f9695a43b6d9efd7db18e8c7d2812fed/150/150/Image/Png/noFilter" },
  { name: "Star", value: 700, icon: "https://tr.rbxcdn.com/180DAY-7239e6d39a9865c73abfe4e213d14341/150/150/Image/Png/noFilter" },
  { name: "Star2", value: 800, icon: "https://tr.rbxcdn.com/180DAY-fbaec6ff8dd560d1fbe3606355107be2/150/150/Image/Png/noFilter" },
  { name: "Star3", value: 900, icon: "https://tr.rbxcdn.com/180DAY-f63b3d2717b04989a0e10b4a8d997493/150/150/Image/Png/noFilter" },
  { name: "Hat", value: 1000, icon: "https://tr.rbxcdn.com/180DAY-44a7a346d24abeaccbe4ef470871f965/150/150/Image/Png/noFilter" },
  { name: "Cube", value: 1100, icon: "https://tr.rbxcdn.com/180DAY-921a9dd51eecd0a8d5eac7e82d06c659/150/150/Image/Png/noFilter" },
  { name: "Present", value: 1200, icon: "https://tr.rbxcdn.com/180DAY-a6519ca59a0efc4e487ba5d90429d640/150/150/Image/Png/noFilter" },
];

const cropTraits = [
  { name: "Apple", icon: "🍏" }, { name: "Berry", icon: "🍇" }, { name: "Candy", icon: "🍬" },
  { name: "Christmas", icon: "🎄" }, { name: "Fall", icon: "🍁" }, { name: "Flower", icon: "🌸" },
  { name: "Fruit", icon: "🍎" }, { name: "Fungus", icon: "🍄" }, { name: "Leafy", icon: "🌿" },
  { name: "Magical", icon: "✨" }, { name: "Night", icon: "🌙" }, { name: "Nutty", icon: "🌰" },
  { name: "Prehistoric", icon: "🦕" }, { name: "Prickly", icon: "🌵" }, { name: "Root", icon: "🥕" },
  { name: "Safari", icon: "🦓" }, { name: "Sour", icon: "🍋" }, { name: "Spicy", icon: "🌶️" },
  { name: "Spooky", icon: "🎃" }, { name: "Stalky", icon: "🎋" }, { name: "Summer", icon: "☀️" },
  { name: "Sweet", icon: "🍯" }, { name: "Toxic", icon: "☠️" }, { name: "Tropical", icon: "🌴" },
  { name: "Vegetable", icon: "🥦" }, { name: "Woody", icon: "🪵" }, { name: "Zen", icon: "🧘" }
];

const mutations = [
  { name: "Abyssal", mult: "x240" },
  { name: "Acidic", mult: "x15" },
  { name: "Affluent", mult: "x70" },
  { name: "Alienated", mult: "x25" },
  { name: "Alienlike", mult: "x100" },
  { name: "Amber", mult: "x10" },
  { name: "AncientAmber", mult: "x50" },
  { name: "Arctic", mult: "x12" },
  { name: "Arid", mult: "x6" },
  { name: "Aromatic", mult: "x3" },
  { name: "AscendedChakra", mult: "x230" },
  { name: "Ash", mult: "x4" },
  { name: "Astral", mult: "x365" },
  { name: "Aurora", mult: "x90" },
  { name: "Azure", mult: "x75" },
  { name: "Batty", mult: "x45" },
  { name: "Beanbound", mult: "x100" },
  { name: "Biohazard", mult: "x157" },
  { name: "Blackout", mult: "x95" },
  { name: "Blazing", mult: "x52" },
  { name: "Blight", mult: "x8" },
  { name: "Blitzshock", mult: "x50" },
  { name: "Blizzard", mult: "x40" },
  { name: "Bloodlit", mult: "x4" },
  { name: "Bloom", mult: "x8" },
  { name: "Blossoming", mult: "x50" },
  { name: "Boil", mult: "x15" },
  { name: "Brainrot", mult: "x100" },
  { name: "Brewed", mult: "x7" },
  { name: "Burnt", mult: "x4" },
  { name: "Candy", mult: "x10" },
  { name: "Celestial", mult: "x120" },
  { name: "Ceramic", mult: "x32" },
  { name: "Chakra", mult: "x15" },
  { name: "Charcoal", mult: "x6" },
  { name: "Chilled", mult: "x2" },
  { name: "Choc", mult: "x2" },
  { name: "Clay", mult: "x5" },
  { name: "Clockwork", mult: "x15" },
  { name: "Cloudtouched", mult: "x5" },
  { name: "Coin", mult: "x3" },
  { name: "Confection", mult: "x18" },
  { name: "Contagion", mult: "x205" },
  { name: "Cooked", mult: "x10" },
  { name: "Corrosive", mult: "x40" },
  { name: "Corrupt", mult: "x20" },
  { name: "CorruptChakra", mult: "x15" },
  { name: "CorruptFoxfireChakra", mult: "x90" },
  { name: "Cosmic", mult: "x240" },
  { name: "Cracked", mult: "x4" },
  { name: "Crystalized", mult: "x25" },
  { name: "Cute", mult: "x20" },
  { name: "Cyclonic", mult: "x50" },
  { name: "Dawnbound", mult: "x150" },
  { name: "Desolate", mult: "x50" },
  { name: "Disco", mult: "x125" },
  { name: "Drenched", mult: "x5" },
  { name: "Eclipsed", mult: "x20" },
  { name: "Eggnog", mult: "x8" },
  { name: "Enchanted", mult: "x50" },
  { name: "Enlightened", mult: "x35" },
  { name: "Extraterrestrial", mult: "x130" },
  { name: "Fall", mult: "x4" },
  { name: "Festive", mult: "x24" },
  { name: "Fiery", mult: "x2" },
  { name: "Fierywork", mult: "x30" },
  { name: "Firework", mult: "x26" },
  { name: "Flaming", mult: "x25" },
  { name: "Floral", mult: "x25" },
  { name: "Fortune", mult: "x50" },
  { name: "FoxfireChakra", mult: "x90" },
  { name: "Fractured", mult: "x92" },
  { name: "Fried", mult: "x8" },
  { name: "Friendbound", mult: "x70" },
  { name: "Frozen", mult: "x10" },
  { name: "Galactic", mult: "x120" },
  { name: "Gale", mult: "x25" },
  { name: "Geode", mult: "x5" },
  { name: "Ghostly", mult: "x25" },
  { name: "Gilded", mult: "x15" },
  { name: "Glacial", mult: "x25" },
  { name: "Glimmering", mult: "x2" },
  { name: "Glitched", mult: "x85" },
  { name: "Gloom", mult: "x30" },
  { name: "Glossy", mult: "x30" },
  { name: "Gnomed", mult: "x15" },
  { name: "Goldsparkle", mult: "x500" },
  { name: "Gourmet", mult: "x37" },
  { name: "Graceful", mult: "x77" },
  { name: "Grim", mult: "x170" },
  { name: "Gummy", mult: "x4" },
  { name: "HarmonisedChakra", mult: "x35" },
  { name: "HarmonisedFoxfireChakra", mult: "x190" },
  { name: "Haze", mult: "x6" },
  { name: "Heartbound", mult: "x100" },
  { name: "Heartstruck", mult: "x3" },
  { name: "Heavenly", mult: "x5" },
  { name: "Honeygem", mult: "x33" },
  { name: "HoneyGlazed", mult: "x5" },
  { name: "Infected", mult: "x75" },
  { name: "Infernal", mult: "x180" },
  { name: "Jackpot", mult: "x15" },
  { name: "Jellygem", mult: "x25" },
  { name: "Junkshock", mult: "x45" },
  { name: "Leeched", mult: "x70" },
  { name: "Lightcycle", mult: "x50" },
  { name: "Luck", mult: "x3" },
  { name: "Luminous", mult: "x50" },
  { name: "Lush", mult: "x3" },
  { name: "Maelstrom", mult: "x100" },
  { name: "Meatball", mult: "x3" },
  { name: "Meteoric", mult: "x125" },
  { name: "MindBender", mult: "x175" },
  { name: "Mineral", mult: "x18" },
  { name: "Mirage", mult: "x25" },
  { name: "Moist", mult: "x3" },
  { name: "Molten", mult: "x25" },
  { name: "Monsoon", mult: "x50" },
  { name: "Moonbled", mult: "x25" },
  { name: "Moonlit", mult: "x2" },
  { name: "Necrotic", mult: "x8" },
  { name: "Nocturnal", mult: "x4" },
  { name: "Oil", mult: "x15" },
  { name: "OilBoil", mult: "x30" },
  { name: "OldAmber", mult: "x20" },
  { name: "Opulent", mult: "x5" },
  { name: "Ornamented", mult: "x10" },
  { name: "Paradisal", mult: "x100" },
  { name: "Pasta", mult: "x3" },
  { name: "Peppermint", mult: "x4" },
  { name: "Pestilent", mult: "x8" },
  { name: "Plagued", mult: "x102" },
  { name: "Plasma", mult: "x5" },
  { name: "Pollinated", mult: "x3" },
  { name: "Pollinated_Fair", mult: "x1" },
  { name: "Pollinated_Godly", mult: "x1" },
  { name: "Pollinated_Good", mult: "x1" },
  { name: "Pollinated_Poor", mult: "x1" },
  { name: "Radioactive", mult: "x55" },
  { name: "Riptide", mult: "x80" },
  { name: "Rot", mult: "x8" },
  { name: "Sandy", mult: "x3" },
  { name: "Sauce", mult: "x3" },
  { name: "Severed", mult: "x40" },
  { name: "Shadowbound", mult: "x70" },
  { name: "Shocked", mult: "x100" },
  { name: "Sizzled", mult: "x18" },
  { name: "Slashbound", mult: "x95" },
  { name: "Sleepy", mult: "x3" },
  { name: "Sliced", mult: "x50" },
  { name: "Smoldering", mult: "x66" },
  { name: "Snowtouched", mult: "x5" },
  { name: "Snowy", mult: "x2" },
  { name: "Spaghetti", mult: "x15" },
  { name: "Spooky", mult: "x8" },
  { name: "Spotty", mult: "x33" },
  { name: "Stampede", mult: "x50" },
  { name: "Static", mult: "x8" },
  { name: "Stormbound", mult: "x270" },
  { name: "Stormcharged", mult: "x180" },
  { name: "Subzero", mult: "x40" },
  { name: "Sundried", mult: "x85" },
  { name: "SunScorched", mult: "x32" },
  { name: "Supernatural", mult: "x37" },
  { name: "Tempered", mult: "x6" },
  { name: "Tempestuous", mult: "x12" },
  { name: "Terran", mult: "x75" },
  { name: "Touchdown", mult: "x105" },
  { name: "Toxic", mult: "x15" },
  { name: "Tranquil", mult: "x20" },
  { name: "Twilight", mult: "x4" },
  { name: "Twisted", mult: "x5" },
  { name: "Typhoon", mult: "x30" },
  { name: "Umbral", mult: "x30" },
  { name: "Vamp", mult: "x3" },
  { name: "Verdant", mult: "x4" },
  { name: "Voidtouched", mult: "x135" },
  { name: "Volcanic", mult: "x25" },
  { name: "Warped", mult: "x75" },
  { name: "Webbed", mult: "x8" },
  { name: "Wet", mult: "x2" },
  { name: "Whalebound", mult: "x50" },
  { name: "Whimsical", mult: "x6" },
  { name: "Wildfast", mult: "x5" },
  { name: "Wilted", mult: "x10" },
  { name: "Wiltproof", mult: "x4" },
  { name: "Windstruck", mult: "x2" },
  { name: "Withered", mult: "x20" },
  { name: "Zombified", mult: "x1" }
];

const variants = [
  { name: "Normal", mult: "x1" },
  { name: "Silver", mult: "x5" },
  { name: "Gold", mult: "x20" },
  { name: "Rainbow", mult: "x50" },
  { name: "Diamond", mult: "x50" },
];

export default function CropValueCalculator() {
  const [selectedCrop, setSelectedCrop] = useState(crops[0]);
  const [search, setSearch] = useState("");
  const [selectedTraits, setSelectedTraits] = useState<string[]>([]);
  const [mutSearch, setMutSearch] = useState("");
  const [expanded, setExpanded] = useState(false);
  
  const [selectedVariant, setSelectedVariant] = useState(variants[0]);
  const [weight, setWeight] = useState("0.275");
  
  const [selectedMutations, setSelectedMutations] = useState<string[]>([]);
  const [mutSortBy, setMutSortBy] = useState("A-Z");
  const [mutSortAsc, setMutSortAsc] = useState(true);
  const [mutLimitDisabled, setMutLimitDisabled] = useState(false);
  const [showMutations, setShowMutations] = useState(true);

  const toggleMutation = (mut: string) => {
    setSelectedMutations(prev => {
      if (prev.includes(mut)) return prev.filter(m => m !== mut);
      if (!mutLimitDisabled && prev.length >= 3) return prev;
      return [...prev, mut];
    });
  };

  const handleMax = () => {
    const sorted = [...mutations].sort((a, b) => parseFloat(b.mult.slice(1)) - parseFloat(a.mult.slice(1)));
    if (mutLimitDisabled) {
       setSelectedMutations(sorted.map(m => m.name));
    } else {
       setSelectedMutations(sorted.slice(0, 3).map(m => m.name));
    }
  };
  
  const sortedAndFilteredMutations = mutations
    .filter(m => m.name.toLowerCase().includes(mutSearch.toLowerCase()))
    .sort((a, b) => {
      let cmp = 0;
      if (mutSortBy === "A-Z") {
        cmp = a.name.localeCompare(b.name);
      } else {
        cmp = parseFloat(a.mult.slice(1)) - parseFloat(b.mult.slice(1));
      }
      return mutSortAsc ? cmp : -cmp;
    });

  const toggleTrait = (trait: string) => {
    setSelectedTraits(prev => prev.includes(trait) ? prev.filter(t => t !== trait) : [...prev, trait]);
  };

  const visibleCrops = expanded ? crops : crops.slice(0, 16);

  return (
    <div className="w-full max-w-6xl mx-auto text-white animate-fade-in pb-20 pt-8 px-4 font-sans">
      
      {/* Header Description */}
      <h1 className="text-3xl font-bold mb-3 mt-4 text-white">Crop Value Calculator</h1>
      <p className="text-gray-400 text-sm max-w-2xl leading-relaxed mb-10">
        Calculate Grow a Garden crop values with every mutation included. 100% accurate sheckle value results.
      </p>

      {/* Crops Section */}
      <div className="mb-10 max-w-4xl">
        <label className="text-sm text-gray-400 block mb-3">Crops</label>
        
        <div className="flex gap-2 mb-4">
          <div className="relative w-[240px]">
            <input 
              type="text" 
              placeholder="Search crops..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-3 pr-4 py-2.5 bg-[#151c18] border border-[#2a362e] rounded-sm outline-none focus:border-green-500 transition-colors text-sm text-white placeholder:text-gray-500"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2.5 bg-[#151c18] border border-[#2a362e] text-gray-300 text-sm rounded-sm hover:bg-[#2a362e] transition-colors">
            Sort: A-Z
          </button>
          <button className="flex items-center justify-center w-10 h-10 bg-[#151c18] border border-[#2a362e] text-gray-300 rounded-sm hover:bg-[#2a362e] transition-colors">
            ↑
          </button>
          <button className="flex items-center gap-2 px-4 py-2.5 bg-[#151c18] border border-[#2a362e] text-gray-300 text-sm rounded-sm hover:bg-[#2a362e] transition-colors">
            Match: Any trait
          </button>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {cropTraits.map(trait => {
            const isSelected = selectedTraits.includes(trait.name);
            return (
              <button
                key={trait.name}
                onClick={() => toggleTrait(trait.name)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-sm border transition-all text-xs ${
                  isSelected 
                    ? "bg-[#14452a] border-green-600 text-white" 
                    : "bg-[#151c18] border-[#2a362e] hover:bg-[#1a231d] text-gray-300"
                }`}
              >
                <span>{trait.icon}</span>
                <span>{trait.name}</span>
              </button>
            )
          })}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-0 rounded-sm border border-[#2a362e]">
          {visibleCrops.map((crop) => {
            const isSelected = selectedCrop.name === crop.name;
            return (
              <button
                key={crop.name}
                onClick={() => setSelectedCrop(crop)}
                className={`flex flex-col items-center justify-center p-3 transition-all h-[130px] border border-[#2a362e] ${
                  isSelected 
                    ? "bg-[#b058ff] border-[#b058ff] shadow-lg z-10 scale-[1.02]" 
                    : "bg-[#151c18] hover:bg-[#1a231d]"
                }`}
              >
                <img src={crop.icon} alt={crop.name} className="w-14 h-14 object-contain mb-2 drop-shadow-md" />
                <span className={`text-xs font-medium text-center leading-tight mb-1 truncate w-full ${isSelected ? "text-black font-bold" : "text-gray-200"}`}>
                  {crop.name}
                </span>
                <span className={`text-[10px] ${isSelected ? "text-black font-medium" : "text-gray-400"}`}>
                  {crop.value}¢
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="space-y-10 max-w-4xl">
        
        {/* Mutations Section */}
        <div>
          <label className="text-sm text-gray-400 block mb-3">Mutations</label>
          <div className="flex flex-wrap sm:flex-nowrap gap-2 mb-4">
            <div className="relative flex-1 min-w-[200px]">
              <input 
                type="text" 
                placeholder="Search mutations..." 
                value={mutSearch}
                onChange={(e) => setMutSearch(e.target.value)}
                className="w-full pl-3 pr-4 py-2 bg-[#151c18] border border-[#2a362e] rounded-sm outline-none focus:border-green-500 transition-colors text-sm text-white placeholder:text-gray-500"
              />
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-[#151c18] border border-[#2a362e] text-gray-300 text-sm rounded-sm hover:bg-[#2a362e] transition-colors">
              Sort: A-Z
            </button>
            <button className="flex items-center justify-center w-10 h-10 bg-[#151c18] border border-[#2a362e] text-gray-300 rounded-sm hover:bg-[#2a362e] transition-colors">
              ↑
            </button>
            <div className="flex gap-2 ml-auto">
              <button className="px-4 py-2 bg-[#151c18] border border-[#2a362e] text-gray-300 text-sm rounded-sm hover:bg-[#2a362e] transition-colors">
                Disable Limit
              </button>
              <button className="px-4 py-2 bg-[#151c18] border border-[#2a362e] text-gray-300 text-sm rounded-sm hover:bg-[#2a362e] transition-colors">
                Max
              </button>
              <button 
                onClick={() => setSelectedMutations([])}
                className="px-4 py-2 bg-[#8c181f] border border-[#a31e22] text-white text-sm rounded-sm hover:bg-[#a31e22] transition-colors font-medium"
              >
                Clear ({selectedMutations.length})
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2">
            {mutations.filter(m => m.name.toLowerCase().includes(mutSearch.toLowerCase())).map((mut) => {
              const isSelected = selectedMutations.includes(mut.name);
              return (
                <button
                  key={mut.name}
                  onClick={() => toggleMutation(mut.name)}
                  className={`flex flex-col items-center justify-center p-3 rounded-sm border transition-all h-[70px] ${
                    isSelected 
                      ? "bg-[#14452a] border-green-600 text-white" 
                      : "bg-[#151c18] border-[#2a362e] hover:border-[#3a4a3e] text-gray-300"
                  }`}
                >
                  <span className={`text-xs text-center truncate w-full ${isSelected ? 'text-white' : 'text-gray-300'}`}>{mut.name}</span>
                  <span className={`text-[10px] ${isSelected ? 'text-green-300' : 'text-gray-400'}`}>{mut.mult}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Variants */}
        <div>
          <label className="text-sm text-gray-400 block mb-3">Variants</label>
          <div className="flex flex-wrap gap-2">
            {variants.map((v) => {
              const isSelected = selectedVariant.name === v.name;
              return (
                <button
                  key={v.name}
                  onClick={() => setSelectedVariant(v)}
                  className={`flex flex-col items-center justify-center px-4 py-2 rounded-sm border transition-all w-24 ${
                    isSelected 
                      ? "bg-gray-400 border-gray-400 text-black shadow-sm" 
                      : "bg-[#151c18] border-[#2a362e] text-gray-300 hover:border-[#3a4a3e]"
                  }`}
                >
                  <span className={`text-sm font-medium ${isSelected ? 'text-black' : 'text-gray-200'}`}>{v.name}</span>
                  <span className={`text-[11px] ${isSelected ? 'text-gray-800' : 'text-gray-400'}`}>{v.mult}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Weight */}
        <div>
          <label className="text-sm text-gray-400 block mb-3">Weight</label>
          <div className="flex gap-2 items-center">
            <div className="relative w-64">
              <input 
                type="number" 
                value={weight} 
                onChange={(e) => setWeight(e.target.value)}
                className="w-full bg-[#0a0f0c] border border-[#1a231d] rounded-sm pl-4 pr-8 py-2.5 outline-none focus:border-green-800 transition-colors text-sm text-white"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">kg</span>
            </div>
            <button className="bg-[#151c18] border border-[#2a362e] px-4 py-2.5 text-sm hover:bg-[#2a362e] transition-colors rounded-sm text-gray-300">
              Switch to Value
            </button>
          </div>
        </div>

        {/* Result Box */}
        <div className="mt-6 bg-[#09351c] border border-[#0d421d] rounded-sm p-8 text-center flex flex-col relative overflow-hidden">
          <button className="absolute top-4 right-4 bg-[#151c18]/50 border border-[#2a362e] px-3 py-1.5 text-xs hover:bg-[#2a362e] transition-colors rounded-sm text-gray-300 shadow-sm">
            Copy Sheckles
          </button>
          
          <div className="text-xs text-white mb-6">Result</div>
          
          <div className="flex justify-center mb-2">
            <img src={selectedCrop.icon} alt={selectedCrop.name} className="w-20 h-20 object-contain drop-shadow-xl filter brightness-110" />
          </div>
          
          <div className={`text-base font-medium mb-1 ${selectedCrop.rarityColor || 'text-white'}`}>
            {selectedCrop.name}
          </div>
          
          <div className="text-sm text-gray-200 mb-4">
            {weight}kg
          </div>
          
          <div className="text-5xl font-bold text-white mb-2 tracking-tight">
            80,221<span className="text-[32px] align-baseline">¢</span>
          </div>
          
          <div className="text-xs text-gray-300 mb-8 font-medium">
            80.22k¢
          </div>
          
          <div className="flex justify-center">
            <button className="border border-[#14452a] hover:bg-[#14452a]/50 bg-[#0b2818] text-green-400 rounded-full px-5 py-2 text-xs inline-flex items-center gap-2 transition-colors">
              <span className="text-red-500 text-base">🍓</span> 
              www.growagardencalculator.ca 
              <Copy className="w-3.5 h-3.5 ml-1" />
            </button>
          </div>
        </div>
        
      </div>
    </div>
  );
}
