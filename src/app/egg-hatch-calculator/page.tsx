"use client";

import { useState } from "react";
import { Search, ChevronDown, Copy } from "lucide-react";

// Helper for formatting time
const formatTime = (seconds: number) => {
  if (seconds < 60) return `${Math.floor(seconds)}s`;
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);
  if (h > 0) return `${h}h ${m}m ${s}s`;
  return `${m}m ${s}s`;
};

const defaultEggs = [
  { name: "Anti Bee Egg", time: 15000, icon: "https://tr.rbxcdn.com/180DAY-f63b3d2717b04989a0e10b4a8d997493/150/150/Image/Png/noFilter" },
  { name: "Bee Egg", time: 15000, icon: "https://tr.rbxcdn.com/180DAY-fbaec6ff8dd560d1fbe3606355107be2/150/150/Image/Png/noFilter" },
  { name: "Bug Egg", time: 28800, icon: "https://tr.rbxcdn.com/180DAY-7239e6d39a9865c73abfe4e213d14341/150/150/Image/Png/noFilter" },
  { name: "Common Egg", time: 600, icon: "https://tr.rbxcdn.com/180DAY-e8f5f57f5ae24d0c9aa254123389a218/150/150/Image/Png/noFilter" },
  { name: "Common Summer Egg", time: 1200, icon: "https://tr.rbxcdn.com/180DAY-f9695a43b6d9efd7db18e8c7d2812fed/150/150/Image/Png/noFilter" },
  { name: "Dinosaur Egg", time: 15000, icon: "https://tr.rbxcdn.com/180DAY-2db67656a75bd70bdab7052f0cddbe9c/150/150/Image/Png/noFilter" },
  { name: "Enchanted Egg", time: 15000, icon: "https://tr.rbxcdn.com/180DAY-e6ed9bd1f68c5327d73e7a40d3d4da1f/150/150/Image/Png/noFilter" },
  { name: "Fall Egg", time: 15000, icon: "https://tr.rbxcdn.com/180DAY-e6ed9bd1f68c5327d73e7a40d3d4da1f/150/150/Image/Png/noFilter" },
  { name: "Gem Egg", time: 28800, icon: "https://tr.rbxcdn.com/180DAY-81fda93ebd4d1088f29ad1a4383937ed/150/150/Image/Png/noFilter" },
  { name: "Gourmet Egg", time: 15000, icon: "https://tr.rbxcdn.com/180DAY-e6ed9bd1f68c5327d73e7a40d3d4da1f/150/150/Image/Png/noFilter" },
  { name: "Jungle Egg", time: 15000, icon: "https://tr.rbxcdn.com/180DAY-e6ed9bd1f68c5327d73e7a40d3d4da1f/150/150/Image/Png/noFilter" },
  { name: "Legendary Egg", time: 15000, icon: "https://tr.rbxcdn.com/180DAY-e6ed9bd1f68c5327d73e7a40d3d4da1f/150/150/Image/Png/noFilter" },
  { name: "Mythical Egg", time: 18400, icon: "https://tr.rbxcdn.com/180DAY-e6ed9bd1f68c5327d73e7a40d3d4da1f/150/150/Image/Png/noFilter" },
  { name: "Night Egg", time: 15000, icon: "https://tr.rbxcdn.com/180DAY-e6ed9bd1f68c5327d73e7a40d3d4da1f/150/150/Image/Png/noFilter" },
  { name: "Oasis Egg", time: 15000, icon: "https://tr.rbxcdn.com/180DAY-e6ed9bd1f68c5327d73e7a40d3d4da1f/150/150/Image/Png/noFilter" },
];

const helperPets = [
  { name: "Bald Eagle", icon: "https://tr.rbxcdn.com/180DAY-4e7d5552ec0e7f6561db9d5625cb46cd/150/150/Image/Png/noFilter" },
  { name: "Blood Kiwi", icon: "https://tr.rbxcdn.com/180DAY-3b51aa6169aa429ef0a6fe05c1391c1b/150/150/Image/Png/noFilter" },
  { name: "Kiwi", icon: "https://tr.rbxcdn.com/180DAY-44a7a346d24abeaccbe4ef470871f965/150/150/Image/Png/noFilter" },
  { name: "Rooster", icon: "https://tr.rbxcdn.com/180DAY-921a9dd51eecd0a8d5eac7e82d06c659/150/150/Image/Png/noFilter" },
  { name: "Sunny-Side Chicken", icon: "https://tr.rbxcdn.com/180DAY-a6519ca59a0efc4e487ba5d90429d640/150/150/Image/Png/noFilter" },
];

export default function EggHatchCalculator() {
  const [selectedEgg, setSelectedEgg] = useState(defaultEggs[3]);
  const [search, setSearch] = useState("");
  const [hatchSpeedBonus, setHatchSpeedBonus] = useState("0");
  const [selectedHelpers, setSelectedHelpers] = useState<string[]>([]);
  const [expanded, setExpanded] = useState(false);

  const toggleHelper = (helper: string) => {
    setSelectedHelpers(prev => prev.includes(helper) ? prev.filter(h => h !== helper) : [...prev, helper]);
  };

  const calculateFinalTime = () => {
    const baseTime = selectedEgg.time;
    let totalBonus = parseFloat(hatchSpeedBonus || "0");
    selectedHelpers.forEach(() => {
      totalBonus += 5; // Example helper bonus
    });
    
    // Simplistic percentage reduction based on total bonus %
    // E.g. +50% speed means it takes baseTime / 1.5
    // Actually the image says "Final Boost: +0.00%".
    const multiplier = 1 + (totalBonus / 100);
    const finalTime = Math.max(0, baseTime / multiplier);
    return {
      base: baseTime,
      bonus: totalBonus.toFixed(2),
      final: finalTime,
      saved: baseTime - finalTime
    };
  };

  const stats = calculateFinalTime();
  const visibleEggs = expanded ? defaultEggs : defaultEggs.slice(0, 15); // showing all 15 as in image grid

  return (
    <div className="w-full max-w-6xl mx-auto text-white animate-fade-in pb-20 pt-8 px-4 font-sans">
      
      {/* Header Description */}
      <h1 className="text-3xl font-bold mb-3 mt-4 text-white">Egg Hatch Speed Calculator</h1>
      <p className="text-gray-400 text-sm max-w-2xl leading-relaxed mb-10">
        Calculate egg hatch times with helper pets like Blood Kiwi and Bald Eagle.
      </p>

      <div className="space-y-8 max-w-4xl">
        
        {/* Eggs Selection */}
        <div>
          <label className="text-sm text-gray-400 block mb-3">Eggs</label>
          <div className="flex gap-2 mb-4">
            <div className="relative w-full max-w-[240px]">
              <input 
                type="text" 
                placeholder="Search eggs..." 
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
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-0 rounded-sm overflow-hidden border border-[#2a362e]">
            {visibleEggs.map((egg) => {
              const isSelected = selectedEgg.name === egg.name;
              return (
                <button
                  key={egg.name}
                  onClick={() => setSelectedEgg(egg)}
                  className={`flex flex-col items-center justify-center p-4 border border-[#2a362e] transition-all h-[140px] ${
                    isSelected 
                      ? "bg-white border-white z-10 scale-[1.02] shadow-lg" 
                      : "bg-[#151c18] hover:bg-[#1a231d]"
                  }`}
                >
                  <img src={egg.icon} alt={egg.name} className="w-14 h-14 object-contain mb-3" />
                  <span className={`text-xs text-center leading-tight mb-1 font-medium ${isSelected ? "text-black" : "text-white"}`}>
                    {egg.name}
                  </span>
                  <span className={`text-[10px] font-medium ${isSelected ? "text-black" : "text-gray-400"}`}>
                    {formatTime(egg.time)}
                  </span>
                </button>
              );
            })}
          </div>
          <div className="flex justify-end mt-2">
            <button 
              onClick={() => setExpanded(!expanded)} 
              className="flex items-center gap-1 text-sm text-gray-300 bg-[#2b3542] hover:bg-[#3b4552] px-3 py-1.5 rounded-sm transition-colors"
            >
              Expand <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Hatch Speed Bonus */}
        <div className="space-y-3">
          <label className="text-sm text-gray-400 block">Hatch Speed Bonus (%)</label>
          <input 
            type="number" 
            value={hatchSpeedBonus} 
            onChange={(e) => setHatchSpeedBonus(e.target.value)}
            className="w-full bg-[#0a0f0c] border border-[#1a231d] rounded-sm px-4 py-3 outline-none focus:border-green-800 transition-colors text-sm text-white"
          />
        </div>

        {/* Helper Pets */}
        <div className="space-y-3">
          <label className="text-sm text-gray-400 block">Helper Pets</label>
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin">
            {helperPets.map((pet) => (
              <div
                key={pet.name}
                className="flex flex-col items-center justify-center p-3 rounded-sm border border-[#1a231d] bg-[#0a0f0c] min-w-[90px] h-[90px]"
              >
                <img src={pet.icon} alt={pet.name} className="w-8 h-8 object-contain mb-2" />
                <span className="text-[10px] text-gray-300 text-center leading-tight">{pet.name}</span>
              </div>
            ))}
          </div>
          <button className="w-full bg-[#0a0f0c] border border-[#1a231d] rounded-sm py-2.5 text-gray-400 text-sm hover:bg-[#151c18] transition-colors mt-2">
            Add
          </button>
        </div>

        {/* Result Box */}
        <div className="mt-10 bg-[#061e0e] border border-[#0d421d] rounded-sm p-8 flex flex-col relative">
          <div className="text-xs text-white mb-6">Result</div>
          
          <div className="flex justify-start mb-10">
            <img src={selectedEgg.icon} alt={selectedEgg.name} className="w-20 h-20 object-contain filter grayscale brightness-200" />
          </div>
          
          <div className="space-y-4 max-w-full w-full">
            <div className="flex justify-between text-sm font-medium">
              <span className="text-white">Base Hatch Time:</span>
              <span className="text-white">{formatTime(stats.base)}</span>
            </div>
            <div className="flex justify-between text-sm font-medium">
              <span className="text-white">Time Saved:</span>
              <span className="text-green-500">-{formatTime(stats.saved)}</span>
            </div>
            <div className="flex justify-between text-sm font-medium">
              <span className="text-white">Final Boost:</span>
              <span className="text-green-500">+{stats.bonus}%</span>
            </div>
            <div className="flex justify-between text-sm font-bold pt-1">
              <span className="text-white">Final Hatch Time:</span>
              <span className="text-yellow-500">{formatTime(stats.final)}</span>
            </div>
          </div>
          
          <div className="mt-8 flex justify-center">
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
