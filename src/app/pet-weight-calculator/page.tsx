"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PetWeightCalculator() {
  const [petAge, setPetAge] = useState("1");
  const [baseWeight, setBaseWeight] = useState("10");

  const calculateWeight = () => {
    const age = parseInt(petAge || "1");
    const base = parseFloat(baseWeight || "10");
    const weight = base * Math.pow(1.1, age - 1);
    
    let classification = "Normal";
    let color = "text-white";
    if (weight > 1000) { classification = "Godly"; color = "text-red-500"; }
    else if (weight > 500) { classification = "Titanic"; color = "text-orange-500"; }
    else if (weight > 100) { classification = "Huge"; color = "text-purple-500"; }

    return {
      weight: weight.toFixed(2),
      classification,
      color
    };
  };

  const result = calculateWeight();

  return (
    <div className="w-full max-w-4xl mx-auto text-[var(--color-foreground)] animate-fade-in pb-10">
      <Link href="/" className="inline-flex items-center text-sm text-[var(--color-muted-foreground)] hover:text-white mb-6 transition-colors">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Tools
      </Link>

      <h1 className="text-3xl font-bold mb-2">Pet Weight Calculator</h1>
      <p className="text-[var(--color-muted-foreground)] mb-8 max-w-2xl text-sm">
        Calculate pet weights by age and hatch. Instantly see classifications like Huge, Titanic, or Godly.
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
            <label className="text-sm font-medium">Base Weight (kg)</label>
            <input 
              type="number" 
              value={baseWeight} 
              onChange={(e) => setBaseWeight(e.target.value)}
              className="w-full bg-[var(--color-secondary)] border border-[var(--color-border)] rounded-md px-3 py-2 outline-none focus:border-[var(--color-primary)] transition-colors"
            />
          </div>
        </div>

        <div className="mt-8 bg-[#022c15] border border-[#047857] rounded-xl p-8 text-center shadow-[0_0_20px_rgba(4,120,87,0.2)]">
          <h3 className="font-bold text-lg text-green-500 mb-4">Calculated Weight</h3>
          
          <div className="text-5xl font-bold text-white mb-2 tracking-tight">
            {result.weight} kg
          </div>
          <div className={`text-xl font-bold ${result.color}`}>
            {result.classification}
          </div>
        </div>
      </div>
    </div>
  );
}
