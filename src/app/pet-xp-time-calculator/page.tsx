"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";

const helperPets = [
  { name: "Blood Owl", icon: "https://tr.rbxcdn.com/180DAY-e8f5f57f5ae24d0c9aa254123389a218/150/150/Image/Png/noFilter" },
  { name: "Capybara", icon: "https://tr.rbxcdn.com/180DAY-f9695a43b6d9efd7db18e8c7d2812fed/150/150/Image/Png/noFilter" },
  { name: "Chicken Owl", icon: "https://tr.rbxcdn.com/180DAY-2db67656a75bd70bdab7052f0cddbe9c/150/150/Image/Png/noFilter" },
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
  const [overallXp, setOverallXp] = useState("0");
  const [selectedHelpers, setSelectedHelpers] = useState<string[]>([]);

  const toggleBoost = (boost: string) => {
    setActiveBoosts(prev => prev.includes(boost) ? prev.filter(b => b !== boost) : [...prev, boost]);
  };

  const toggleHelper = (helper: string) => {
    setSelectedHelpers(prev => prev.includes(helper) ? prev.filter(h => h !== helper) : [...prev, helper]);
  };

  return (
    <div className="w-full max-w-4xl mx-auto text-[var(--color-foreground)] animate-fade-in pb-10">
      <Link href="/" className="inline-flex items-center text-sm text-[var(--color-muted-foreground)] hover:text-white mb-6 transition-colors">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Tools
      </Link>

      <h1 className="text-3xl font-bold mb-2">Pet XP Time Calculator</h1>
      <p className="text-[var(--color-muted-foreground)] mb-8 max-w-2xl text-sm">
        Find how long it takes to level up pets in Grow a Garden. Calculate real time estimates with and without helper pets.
      </p>

      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Pet Age</label>
            <input 
              type="number" 
              value={petAge} 
              onChange={(e) => setPetAge(e.target.value)}
              className="w-full bg-[var(--color-secondary)] border border-[var(--color-border)] rounded-md px-3 py-2 outline-none focus:border-[var(--color-primary)] transition-colors"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Desired Pet Age</label>
            <input 
              type="number" 
              value={desiredPetAge} 
              onChange={(e) => setDesiredPetAge(e.target.value)}
              className="w-full bg-[var(--color-secondary)] border border-[var(--color-border)] rounded-md px-3 py-2 outline-none focus:border-[var(--color-primary)] transition-colors"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Active Boosts</label>
          <div className="grid grid-cols-2 gap-4">
            <button 
              onClick={() => toggleBoost("Small Food")}
              className={`flex items-center justify-center gap-2 py-3 rounded-md border-2 transition-all ${
                activeBoosts.includes("Small Food") 
                  ? "border-[var(--color-primary)] bg-[var(--color-primary)]/10" 
                  : "border-[var(--color-border)] bg-[var(--color-secondary)]"
              }`}
            >
              <span>🦴</span> Small Food
            </button>
            <button 
              onClick={() => toggleBoost("Medium Food")}
              className={`flex items-center justify-center gap-2 py-3 rounded-md border-2 transition-all ${
                activeBoosts.includes("Medium Food") 
                  ? "border-[var(--color-primary)] bg-[var(--color-primary)]/10" 
                  : "border-[var(--color-border)] bg-[var(--color-secondary)]"
              }`}
            >
              <span>🍖</span> Medium Food
            </button>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Additional XP/sec</label>
          <input 
            type="number" 
            value={additionalXp} 
            onChange={(e) => setAdditionalXp(e.target.value)}
            className="w-full bg-[var(--color-secondary)] border border-[var(--color-border)] rounded-md px-3 py-2 outline-none focus:border-[var(--color-primary)] transition-colors"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Overall XP %</label>
          <input 
            type="number" 
            value={overallXp} 
            onChange={(e) => setOverallXp(e.target.value)}
            className="w-full bg-[var(--color-secondary)] border border-[var(--color-border)] rounded-md px-3 py-2 outline-none focus:border-[var(--color-primary)] transition-colors"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium flex justify-between">
            Helper Pets
            <span className="text-xs text-[var(--color-muted-foreground)] cursor-pointer hover:text-white">Clear</span>
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
          <h3 className="font-bold text-lg text-green-500 mb-1">Total</h3>
          <div className="text-2xl font-bold text-white mb-1">
            0.50 XP/sec
          </div>
          <div className="text-xl font-semibold text-green-400 mb-3">
            0%
          </div>
          <div className="text-sm text-green-300 font-medium space-y-1">
            <div>Time to reach Next Stage:</div>
            <div className="text-base text-white">4m 10sec</div>
            <div className="text-xs text-green-500/80">
              (+250 Total XP)
            </div>
          </div>
          
          <button className="mt-4 border border-green-600/50 hover:bg-green-600/20 text-green-400 rounded-full px-4 py-1 text-sm inline-flex items-center gap-2 transition-colors">
            ❤️ Show premium pet stats from Codes [F]
          </button>
        </div>
        
      </div>
    </div>
  );
}
