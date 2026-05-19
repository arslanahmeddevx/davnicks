"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Search, Filter } from "lucide-react";

const rarities = [
  { name: "Basic", color: "bg-gray-400" },
  { name: "Common", color: "bg-green-400" },
  { name: "Rare", color: "bg-blue-400" },
  { name: "Legendary", color: "bg-orange-400" },
  { name: "Mythical", color: "bg-purple-400" },
  { name: "Godly", color: "bg-red-500" },
];

const crops = [
  { name: "Happy Pear", rarity: "Basic", value: 10, icon: "https://tr.rbxcdn.com/180DAY-44a7a346d24abeaccbe4ef470871f965/150/150/Image/Png/noFilter" },
  { name: "Star Fruit", rarity: "Common", value: 25, icon: "https://tr.rbxcdn.com/180DAY-921a9dd51eecd0a8d5eac7e82d06c659/150/150/Image/Png/noFilter" },
  { name: "Pink Apple", rarity: "Rare", value: 100, icon: "https://tr.rbxcdn.com/180DAY-a6519ca59a0efc4e487ba5d90429d640/150/150/Image/Png/noFilter" },
  { name: "Dragon Fruit", rarity: "Legendary", value: 500, icon: "https://tr.rbxcdn.com/180DAY-44a7a346d24abeaccbe4ef470871f965/150/150/Image/Png/noFilter" }, // placeholders
  { name: "Golden Apple", rarity: "Mythical", value: 2500, icon: "https://tr.rbxcdn.com/180DAY-921a9dd51eecd0a8d5eac7e82d06c659/150/150/Image/Png/noFilter" },
];

const modifiers = [
  "Cow", "Capybara", "Monkey", "Giraffe", "Elephant", "Tiger", "Lion", "Zebra", "Hippo", "Rhino", "Bear", "Wolf"
];

export default function CropValueCalculator() {
  const [selectedCrop, setSelectedCrop] = useState(crops[0]);
  const [search, setSearch] = useState("");
  const [activeRarities, setActiveRarities] = useState<string[]>([]);
  
  const [overallModifiers, setOverallModifiers] = useState("0");
  const [petSlots, setPetSlots] = useState("0");

  const toggleRarity = (rarity: string) => {
    setActiveRarities(prev => prev.includes(rarity) ? prev.filter(r => r !== rarity) : [...prev, rarity]);
  };

  return (
    <div className="w-full max-w-4xl mx-auto text-[var(--color-foreground)] animate-fade-in pb-10">
      <Link href="/" className="inline-flex items-center text-sm text-[var(--color-muted-foreground)] hover:text-white mb-6 transition-colors">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Tools
      </Link>

      <h1 className="text-3xl font-bold mb-2">Crop Value Calculator</h1>
      <p className="text-[var(--color-muted-foreground)] mb-8 max-w-2xl text-sm">
        Calculate crop values with every mutation included to see exact profits.
      </p>

      <div className="space-y-8">
        
        {/* Crop Selection */}
        <div className="space-y-4 bg-[var(--color-secondary)] p-4 rounded-xl border border-[var(--color-border)]">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold text-lg">Crop</h3>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--color-muted-foreground)]" />
              <input 
                type="text" 
                placeholder="Search crop name..." 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-[var(--color-card)] border border-[var(--color-border)] rounded-md outline-none focus:border-[var(--color-primary)] text-sm"
              />
            </div>
            <div className="flex gap-2 items-center px-3 py-2 bg-[var(--color-card)] border border-[var(--color-border)] rounded-md">
              <Filter className="w-4 h-4 text-[var(--color-muted-foreground)]" />
              <select className="bg-transparent outline-none text-sm border-none">
                <option>Sort by: Value</option>
                <option>Sort by: Name</option>
              </select>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 py-2">
            {rarities.map(r => (
              <button 
                key={r.name}
                onClick={() => toggleRarity(r.name)}
                className={`text-xs px-3 py-1 rounded-full border transition-colors flex items-center gap-1.5 ${
                  activeRarities.includes(r.name) 
                    ? "border-[var(--color-primary)] bg-[var(--color-primary)]/10 text-white" 
                    : "border-[var(--color-border)] text-[var(--color-muted-foreground)] hover:border-gray-500"
                }`}
              >
                <span className={`w-2 h-2 rounded-full ${r.color}`}></span>
                {r.name}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
            {crops.filter(c => c.name.toLowerCase().includes(search.toLowerCase()) && (activeRarities.length === 0 || activeRarities.includes(c.rarity))).map((crop) => (
              <button
                key={crop.name}
                onClick={() => setSelectedCrop(crop)}
                className={`flex flex-col items-center justify-center p-2 rounded-lg border-2 transition-all ${
                  selectedCrop.name === crop.name 
                    ? "border-[var(--color-primary)] bg-[var(--color-primary)]/10" 
                    : "border-transparent bg-[var(--color-card)] hover:border-[var(--color-border)]"
                }`}
              >
                <img src={crop.icon} alt={crop.name} className="w-10 h-10 object-contain mb-1" />
                <span className="text-[10px] text-center leading-tight truncate w-full">{crop.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Modifiers */}
        <div className="space-y-4 bg-[var(--color-secondary)] p-4 rounded-xl border border-[var(--color-border)]">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold text-lg">Modifiers</h3>
            <button className="text-xs bg-red-500/20 text-red-400 border border-red-500/30 px-2 py-1 rounded hover:bg-red-500/30 transition-colors">
              Clear All
            </button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
             <div className="space-y-1.5">
              <label className="text-xs font-medium text-[var(--color-muted-foreground)]">Overall Modifiers %</label>
              <input 
                type="number" 
                value={overallModifiers} 
                onChange={(e) => setOverallModifiers(e.target.value)}
                className="w-full bg-[var(--color-card)] border border-[var(--color-border)] rounded-md px-3 py-1.5 outline-none focus:border-[var(--color-primary)] text-sm"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-[var(--color-muted-foreground)]">Pet Slots</label>
              <input 
                type="number" 
                value={petSlots} 
                onChange={(e) => setPetSlots(e.target.value)}
                className="w-full bg-[var(--color-card)] border border-[var(--color-border)] rounded-md px-3 py-1.5 outline-none focus:border-[var(--color-primary)] text-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 max-h-48 overflow-y-auto pr-2 custom-scrollbar">
             {modifiers.map((mod) => (
              <button
                key={mod}
                className="flex flex-col items-center justify-center p-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-card)] hover:border-gray-500 transition-colors"
              >
                <div className="text-[10px] text-[var(--color-muted-foreground)] mb-1">x0</div>
                <span className="text-[11px] font-medium text-center">{mod}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Result Box */}
        <div className="mt-8 bg-[#022c15] border border-[#047857] rounded-xl p-8 text-center shadow-[0_0_20px_rgba(4,120,87,0.2)]">
          <h3 className="font-bold text-lg text-green-500 mb-4">Total</h3>
          <div className="flex justify-center mb-4">
             <img src={selectedCrop.icon} alt={selectedCrop.name} className="w-16 h-16 object-contain drop-shadow-lg" />
          </div>
          <div className="text-sm font-medium text-green-400 mb-1">{selectedCrop.name}</div>
          <div className="text-4xl font-bold text-white mb-2 tracking-tight">
            {(selectedCrop.value * (1 + parseInt(overallModifiers || "0")/100)).toLocaleString()}
          </div>
          <div className="text-sm text-green-500/80 font-medium">Coins</div>
          
          <button className="mt-6 border border-green-600/50 hover:bg-green-600/20 text-green-400 rounded-full px-4 py-1.5 text-sm inline-flex items-center gap-2 transition-colors">
            ❤️ Show premium pet stats from Codes [F]
          </button>
        </div>

      </div>
    </div>
  );
}
