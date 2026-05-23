"use client";

import { useState } from "react";
import { Copy } from "lucide-react";

// Placeholder assets
const smallTreatIcon = "https://tr.rbxcdn.com/180DAY-5bb579c882d921501b80267cbbe71477/150/150/Image/Png/noFilter"; 
const mediumTreatIcon = "https://tr.rbxcdn.com/180DAY-27d7228a2a0d9c490ff4f4e240b9cd4b/150/150/Image/Png/noFilter";

const helperPets = [
  { name: "Blood Owl", icon: "https://tr.rbxcdn.com/180DAY-e8f5f57f5ae24d0c9aa254123389a218/150/150/Image/Png/noFilter" },
  { name: "Capybara", icon: "https://tr.rbxcdn.com/180DAY-f9695a43b6d9efd7db18e8c7d2812fed/150/150/Image/Png/noFilter" },
  { name: "Cooked Owl", icon: "https://tr.rbxcdn.com/180DAY-2db67656a75bd70bdab7052f0cddbe9c/150/150/Image/Png/noFilter" },
  { name: "Dilophosaurus", icon: "https://tr.rbxcdn.com/180DAY-e6ed9bd1f68c5327d73e7a40d3d4da1f/150/150/Image/Png/noFilter" },
  { name: "Night Owl", icon: "https://tr.rbxcdn.com/180DAY-81fda93ebd4d1088f29ad1a4383937ed/150/150/Image/Png/noFilter" },
  { name: "Owl", icon: "https://tr.rbxcdn.com/180DAY-4e7d5552ec0e7f6561db9d5625cb46cd/150/150/Image/Png/noFilter" },
  { name: "Sea Turtle", icon: "https://tr.rbxcdn.com/180DAY-3b51aa6169aa429ef0a6fe05c1391c1b/150/150/Image/Png/noFilter" },
];

export default function PetXPTimeCalculator() {
  const [petAge, setPetAge] = useState("1");
  const [desiredPetAge, setDesiredPetAge] = useState("2");
  const [activeBoosts, setActiveBoosts] = useState<string[]>([]);
  const [additionalXp, setAdditionalXp] = useState("0");
  const [bonusXp, setBonusXp] = useState("0");
  const [selectedHelpers, setSelectedHelpers] = useState<string[]>(helperPets.map(p => p.name));

  const toggleBoost = (boost: string) => {
    setActiveBoosts(prev => prev.includes(boost) ? prev.filter(b => b !== boost) : [...prev, boost]);
  };

  return (
    <div className="w-full max-w-6xl mx-auto text-white animate-fade-in pb-20 pt-8 px-4 font-sans">
      
      {/* Header Description */}
      <h1 className="text-3xl font-bold mb-3 mt-4 text-white">Pet XP Time Calculator</h1>
      <p className="text-gray-400 text-sm max-w-2xl leading-relaxed mb-10">
        Find how long it takes to level up pets in Grow a Garden. Includes exact real-time estimates with small and medium treat boosts.
      </p>

      <div className="space-y-8 max-w-4xl">
        
        {/* Ages */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <label className="text-sm text-gray-400 block">Pet Age</label>
            <input 
              type="number" 
              value={petAge} 
              onChange={(e) => setPetAge(e.target.value)}
              className="w-full bg-[#0a0f0c] border border-[#1a231d] rounded-sm px-4 py-3 outline-none focus:border-green-800 transition-colors text-sm text-white"
            />
          </div>
          <div className="space-y-3">
            <label className="text-sm text-gray-400 block">Wanted Pet Age</label>
            <input 
              type="number" 
              value={desiredPetAge} 
              onChange={(e) => setDesiredPetAge(e.target.value)}
              className="w-full bg-[#0a0f0c] border border-[#1a231d] rounded-sm px-4 py-3 outline-none focus:border-green-800 transition-colors text-sm text-white"
            />
          </div>
        </div>

        {/* Boosts */}
        <div className="space-y-3">
          <label className="text-sm text-gray-400 block">Active Boosts</label>
          <div className="grid grid-cols-2 gap-6">
            <button 
              onClick={() => toggleBoost("Small Treat")}
              className={`flex flex-col items-center justify-center gap-3 py-6 rounded-sm border transition-all ${
                activeBoosts.includes("Small Treat") 
                  ? "border-green-800 bg-[#0c1611]" 
                  : "border-[#1a231d] bg-[#0a0f0c] hover:border-[#2a362e]"
              }`}
            >
              <img src={smallTreatIcon} className="w-12 h-12 object-contain filter grayscale invert" alt="Small Treat" />
              <span className="text-sm text-gray-300">Small Treat</span>
            </button>
            <button 
              onClick={() => toggleBoost("Medium Treat")}
              className={`flex flex-col items-center justify-center gap-3 py-6 rounded-sm border transition-all ${
                activeBoosts.includes("Medium Treat") 
                  ? "border-green-800 bg-[#0c1611]" 
                  : "border-[#1a231d] bg-[#0a0f0c] hover:border-[#2a362e]"
              }`}
            >
              <img src={mediumTreatIcon} className="w-12 h-12 object-contain" alt="Medium Treat" />
              <span className="text-sm text-gray-300">Medium Treat</span>
            </button>
          </div>
        </div>

        {/* Additional XP */}
        <div className="space-y-3">
          <label className="text-sm text-gray-400 block">Additional XP/sec.</label>
          <input 
            type="number" 
            value={additionalXp} 
            onChange={(e) => setAdditionalXp(e.target.value)}
            className="w-full bg-[#0a0f0c] border border-[#1a231d] rounded-sm px-4 py-3 outline-none focus:border-green-800 transition-colors text-sm text-white"
          />
        </div>

        {/* Bonus XP % */}
        <div className="space-y-3">
          <label className="text-sm text-gray-400 block">Bonus XP %</label>
          <input 
            type="number" 
            value={bonusXp} 
            onChange={(e) => setBonusXp(e.target.value)}
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
        <div className="mt-10 bg-[#061e0e] border border-[#0d421d] rounded-sm p-8 text-center flex flex-col items-center">
          <div className="text-xs text-gray-400 mb-2">Result</div>
          <div className="text-xl font-bold text-green-500 mb-2">
            0.50 XP/sec
          </div>
          <div className="text-xl font-medium text-white mb-4">
            40s
          </div>
          <div className="text-xs text-green-500 font-medium mb-1">
            Helper Pets (0): 0.00 XP/sec
          </div>
          <div className="text-xs text-green-500 font-medium mb-1">
            20 XP Required
          </div>
          <div className="text-xs text-gray-400 mb-6">
            Age 1 → 2
          </div>
          
          <button className="border border-[#14452a] hover:bg-[#14452a]/50 bg-[#0b2818] text-green-400 rounded-full px-5 py-2 text-xs inline-flex items-center gap-2 transition-colors">
            <span className="text-red-500 text-base">🍓</span> 
            www.growagardencalculator.ca 
            <Copy className="w-3.5 h-3.5 ml-1" />
          </button>
        </div>
        
      </div>
    </div>
  );
}
