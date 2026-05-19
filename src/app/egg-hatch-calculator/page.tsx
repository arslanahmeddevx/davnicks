"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Search, Filter } from "lucide-react";

const eggs = [
  { name: "Ant Bee Egg", time: 300, icon: "https://tr.rbxcdn.com/180DAY-f63b3d2717b04989a0e10b4a8d997493/150/150/Image/Png/noFilter" },
  { name: "Bee Egg", time: 600, icon: "https://tr.rbxcdn.com/180DAY-fbaec6ff8dd560d1fbe3606355107be2/150/150/Image/Png/noFilter" },
  { name: "Bug Egg", time: 900, icon: "https://tr.rbxcdn.com/180DAY-7239e6d39a9865c73abfe4e213d14341/150/150/Image/Png/noFilter" },
  { name: "Common Egg", time: 1200, icon: "https://tr.rbxcdn.com/180DAY-e8f5f57f5ae24d0c9aa254123389a218/150/150/Image/Png/noFilter" },
  { name: "Common Summer Egg", time: 1500, icon: "https://tr.rbxcdn.com/180DAY-f9695a43b6d9efd7db18e8c7d2812fed/150/150/Image/Png/noFilter" },
  { name: "Dinosaur Egg", time: 1800, icon: "https://tr.rbxcdn.com/180DAY-2db67656a75bd70bdab7052f0cddbe9c/150/150/Image/Png/noFilter" },
  { name: "Enchanted Egg", time: 3600, icon: "https://tr.rbxcdn.com/180DAY-e6ed9bd1f68c5327d73e7a40d3d4da1f/150/150/Image/Png/noFilter" },
  { name: "Fish Egg", time: 7200, icon: "https://tr.rbxcdn.com/180DAY-81fda93ebd4d1088f29ad1a4383937ed/150/150/Image/Png/noFilter" },
];

const helperPets = [
  { name: "Bald Eagle", icon: "https://tr.rbxcdn.com/180DAY-4e7d5552ec0e7f6561db9d5625cb46cd/150/150/Image/Png/noFilter" },
  { name: "Blood Kiwi", icon: "https://tr.rbxcdn.com/180DAY-3b51aa6169aa429ef0a6fe05c1391c1b/150/150/Image/Png/noFilter" },
  { name: "Kiwi", icon: "https://tr.rbxcdn.com/180DAY-44a7a346d24abeaccbe4ef470871f965/150/150/Image/Png/noFilter" },
  { name: "Toucan", icon: "https://tr.rbxcdn.com/180DAY-921a9dd51eecd0a8d5eac7e82d06c659/150/150/Image/Png/noFilter" },
  { name: "Turkey", icon: "https://tr.rbxcdn.com/180DAY-a6519ca59a0efc4e487ba5d90429d640/150/150/Image/Png/noFilter" },
];

export default function EggHatchCalculator() {
  const [selectedEgg, setSelectedEgg] = useState(eggs[3]);
  const [search, setSearch] = useState("");
  const [hatchSpeedBonus, setHatchSpeedBonus] = useState("0");
  const [selectedHelpers, setSelectedHelpers] = useState<string[]>([]);

  const toggleHelper = (helper: string) => {
    setSelectedHelpers(prev => prev.includes(helper) ? prev.filter(h => h !== helper) : [...prev, helper]);
  };

  const calculateFinalTime = () => {
    const baseTime = selectedEgg.time;
    let totalBonus = parseInt(hatchSpeedBonus || "0");
    selectedHelpers.forEach(() => {
      totalBonus += 5; // Example +5% per helper pet
    });
    
    const finalTime = Math.max(0, baseTime * (1 - totalBonus / 100));
    return {
      base: baseTime,
      bonus: totalBonus,
      final: finalTime,
      saved: baseTime - finalTime
    };
  };

  const formatTime = (seconds: number) => {
    if (seconds < 60) return `${Math.floor(seconds)}s`;
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}m ${s}s`;
  };

  const stats = calculateFinalTime();

  return (
    <div className="w-full max-w-4xl mx-auto text-[var(--color-foreground)] animate-fade-in pb-10">
      <Link href="/" className="inline-flex items-center text-sm text-[var(--color-muted-foreground)] hover:text-white mb-6 transition-colors">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Tools
      </Link>

      <h1 className="text-3xl font-bold mb-2">Egg Hatch Speed Calculator</h1>
      <p className="text-[var(--color-muted-foreground)] mb-8 max-w-2xl text-sm">
        Calculate egg hatch time with helper pets like Blood Kiwi and Bald Eagle.
      </p>

      <div className="space-y-8">
        
        {/* Egg Selection */}
        <div className="space-y-4 bg-[var(--color-secondary)] p-4 rounded-xl border border-[var(--color-border)]">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold text-lg">Eggs</h3>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--color-muted-foreground)]" />
              <input 
                type="text" 
                placeholder="Search egg name..." 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-[var(--color-card)] border border-[var(--color-border)] rounded-md outline-none focus:border-[var(--color-primary)] text-sm"
              />
            </div>
            <div className="flex gap-2 items-center px-3 py-2 bg-[var(--color-card)] border border-[var(--color-border)] rounded-md">
              <Filter className="w-4 h-4 text-[var(--color-muted-foreground)]" />
              <select className="bg-transparent outline-none text-sm border-none">
                <option>Sort by: Name</option>
                <option>Sort by: Time</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
            {eggs.filter(e => e.name.toLowerCase().includes(search.toLowerCase())).map((egg) => (
              <button
                key={egg.name}
                onClick={() => setSelectedEgg(egg)}
                className={`flex flex-col items-center justify-center p-2 rounded-lg border-2 transition-all ${
                  selectedEgg.name === egg.name 
                    ? "border-white bg-white/10" 
                    : "border-transparent bg-[var(--color-card)] hover:border-[var(--color-border)]"
                }`}
              >
                <img src={egg.icon} alt={egg.name} className="w-12 h-12 object-contain mb-2" />
                <span className="text-[10px] text-center leading-tight truncate w-full">{egg.name}</span>
                <span className="text-[9px] text-[var(--color-muted-foreground)]">{formatTime(egg.time)}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Hatch Speed Bonus (%)</label>
          <input 
            type="number" 
            value={hatchSpeedBonus} 
            onChange={(e) => setHatchSpeedBonus(e.target.value)}
            className="w-full bg-[var(--color-secondary)] border border-[var(--color-border)] rounded-md px-3 py-2 outline-none focus:border-[var(--color-primary)] transition-colors"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium flex justify-between">
            Helper Pets
            <span className="text-xs text-[var(--color-muted-foreground)] cursor-pointer hover:text-white" onClick={() => setSelectedHelpers([])}>Clear</span>
          </label>
          <div className="flex flex-wrap gap-2">
            {helperPets.map((pet) => (
              <button
                key={pet.name}
                onClick={() => toggleHelper(pet.name)}
                className={`flex flex-col items-center justify-center p-2 rounded-md border-2 transition-all w-24 h-24 ${
                  selectedHelpers.includes(pet.name) 
                    ? "border-[var(--color-primary)] bg-[var(--color-primary)]/10" 
                    : "border-[var(--color-border)] bg-[var(--color-secondary)] hover:border-gray-500"
                }`}
              >
                <img src={pet.icon} alt={pet.name} className="w-10 h-10 object-contain mb-2" />
                <span className="text-[10px] text-center leading-tight">{pet.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Result Box */}
        <div className="mt-8 bg-[#022c15] border border-[#047857] rounded-xl p-6 text-center shadow-[0_0_20px_rgba(4,120,87,0.2)]">
          <h3 className="font-bold text-lg text-green-500 mb-4">Total</h3>
          <div className="flex justify-center mb-2">
             <img src={selectedEgg.icon} alt={selectedEgg.name} className="w-16 h-16 object-contain" />
          </div>
          
          <div className="max-w-xs mx-auto space-y-2 mt-6">
            <div className="flex justify-between text-sm font-medium">
              <span className="text-white">Base Hatch Time:</span>
              <span className="text-white">{formatTime(stats.base)}</span>
            </div>
            <div className="flex justify-between text-sm font-medium">
              <span className="text-green-400">Time Saved:</span>
              <span className="text-green-400">-{formatTime(stats.saved)}</span>
            </div>
            <div className="flex justify-between text-sm font-medium">
              <span className="text-green-400">Total Boost:</span>
              <span className="text-green-400">+{stats.bonus}%</span>
            </div>
            <div className="flex justify-between text-base font-bold pt-2 border-t border-green-800">
              <span className="text-white">Final Hatch Time:</span>
              <span className="text-orange-400">{formatTime(stats.final)}</span>
            </div>
          </div>
          
          <button className="mt-6 border border-green-600/50 hover:bg-green-600/20 text-green-400 rounded-full px-4 py-1.5 text-sm inline-flex items-center gap-2 transition-colors">
            ❤️ Show premium pet stats from Codes [F]
          </button>
        </div>

      </div>
    </div>
  );
}
