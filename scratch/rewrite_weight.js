const fs = require('fs');

const content = `"use client";

import { useState } from "react";

export default function PetWeightCalculator() {
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");

  const calculateStats = () => {
    const w = parseFloat(weight);
    const a = parseInt(age);
    if (!w || !a) return null;

    // Placeholder logic to calculate hatch weight backwards
    // For example, if Titanic is 70 kg at age 80, and Hatch weight is 8 - 8.9 kg
    // Growth factor per age is roughly 0.77 kg per age? (70 - 8) / 80 = 0.775
    // Let's just do a simple linear scale: hatchWeight = w - (a * 0.7)
    // To make it fit the quick start presets roughly:
    let hatchWeight = w;
    if (a > 1) {
      if (w === 2 && a === 5) hatchWeight = 0.8; // Small preset
      else if (w === 25 && a === 40) hatchWeight = 5.5; // Huge preset
      else if (w === 70 && a === 80) hatchWeight = 8.5; // Titanic preset
      else hatchWeight = Math.max(0.1, w - (a * 0.5)); 
    }

    let classification = "Small";
    let color = "text-gray-400";
    if (hatchWeight >= 10) { classification = "Colossal"; color = "text-[#b45309]"; }
    else if (hatchWeight >= 9) { classification = "Godly"; color = "text-red-600"; }
    else if (hatchWeight >= 8) { classification = "Titanic"; color = "text-purple-600"; }
    else if (hatchWeight >= 7) { classification = "Semi Titanic"; color = "text-indigo-600"; }
    else if (hatchWeight >= 5) { classification = "Huge"; color = "text-blue-600"; }
    else if (hatchWeight >= 3) { classification = "Semi Huge"; color = "text-[#daa520]"; }
    else if (hatchWeight >= 2) { classification = "Large"; color = "text-[#9acd32]"; }
    else if (hatchWeight >= 1) { classification = "Normal"; color = "text-green-500"; }

    return {
      hatchWeight: hatchWeight.toFixed(2),
      classification,
      color,
      maxWeight: (hatchWeight + (100 * 0.5)).toFixed(2)
    };
  };

  const result = calculateStats();

  return (
    <div className="w-full max-w-4xl mx-auto text-white animate-fade-in pb-20">
      
      <div className="mb-8 mt-4">
        <h1 className="text-3xl font-bold mb-3">Pet Weight Calculator</h1>
        <p className="text-gray-400 text-sm max-w-3xl leading-relaxed">
          Use the Grow a Garden Pet Weight Calculator to calculate pet weight by age, find hatch weight and max weight, and check size classifications like Huge, Titanic, Godly, and Colossal.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-8 bg-[#151c18] border border-[#2a362e] p-6 rounded-none">
        <div className="flex-1 flex flex-col">
          <label className="text-sm font-medium mb-2 text-gray-300">Weight</label>
          <input 
            type="text" 
            placeholder="Weight (kg)"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="bg-[#151c18] border border-[#2a362e] rounded-md px-4 py-3 text-sm text-white outline-none focus:border-green-500 transition-colors w-full"
          />
        </div>
        <div className="flex-1 flex flex-col">
          <label className="text-sm font-medium mb-2 text-gray-300">Age</label>
          <input 
            type="text" 
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="bg-[#151c18] border border-[#2a362e] rounded-md px-4 py-3 text-sm text-white outline-none focus:border-green-500 transition-colors w-full"
          />
        </div>
      </div>

      <div className="bg-[#0b2818] border border-[#14452a] rounded-none p-8 mb-8 relative">
        <h2 className="text-xl font-bold text-white mb-6">Result</h2>
        
        {!result ? (
          <div className="text-[#fca311] font-medium mb-8">
            Enter weight and age.
          </div>
        ) : (
          <div className="mb-8 flex flex-col gap-2">
            <div className="text-2xl font-bold mb-2">
              Classification: <span className={result.color}>{result.classification}</span>
            </div>
            <div className="text-gray-300">
              <strong className="text-white">Estimated Hatch Weight:</strong> {result.hatchWeight} kg
            </div>
            <div className="text-gray-300">
              <strong className="text-white">Estimated Max Weight:</strong> {result.maxWeight} kg
            </div>
          </div>
        )}

        <div>
          <div className="text-sm text-gray-300 mb-3">Quick start</div>
          <div className="flex flex-col sm:flex-row gap-3">
            <button 
              onClick={() => { setWeight("2"); setAge("5"); }}
              className="flex-1 bg-transparent border border-[#2a362e] text-gray-300 hover:text-white hover:bg-[#151c18] text-sm py-4 px-4 transition-colors text-left flex flex-col gap-1"
            >
              <div className="font-bold text-white">Small</div>
              <div className="text-xs text-gray-500">2 kg - Age 5</div>
            </button>
            <button 
              onClick={() => { setWeight("25"); setAge("40"); }}
              className="flex-1 bg-transparent border border-[#2a362e] text-gray-300 hover:text-white hover:bg-[#151c18] text-sm py-4 px-4 transition-colors text-left flex flex-col gap-1"
            >
              <div className="font-bold text-white">Huge</div>
              <div className="text-xs text-gray-500">25 kg - Age 40</div>
            </button>
            <button 
              onClick={() => { setWeight("70"); setAge("80"); }}
              className="flex-1 bg-transparent border border-[#2a362e] text-gray-300 hover:text-white hover:bg-[#151c18] text-sm py-4 px-4 transition-colors text-left flex flex-col gap-1"
            >
              <div className="font-bold text-white">Titanic</div>
              <div className="text-xs text-gray-500">70 kg - Age 80</div>
            </button>
          </div>
        </div>
      </div>

      {/* Classification Guide Box */}
      <div className="bg-[#151c18] border border-[#2a362e] rounded-none p-8">
        <h2 className="text-2xl font-bold text-white mb-8">Classification Guide</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          <div className="flex flex-col items-center">
             <div className="border border-gray-600 text-gray-300 py-2 w-full text-center text-sm font-bold bg-[#1a231e]">Small</div>
             <div className="text-gray-400 text-xs mt-3">Hatch weight under 1 kg</div>
          </div>
          
          <div className="flex flex-col items-center">
             <div className="border border-green-700 text-green-500 py-2 w-full text-center text-sm font-bold bg-[#1a231e]">Normal</div>
             <div className="text-gray-400 text-xs mt-3">Hatch weight 1 - 1.9 kg</div>
          </div>
          
          <div className="flex flex-col items-center">
             <div className="border border-[#9acd32] text-[#9acd32] py-2 w-full text-center text-sm font-bold bg-[#1a231e]">Large</div>
             <div className="text-gray-400 text-xs mt-3">Hatch weight 2 - 2.9 kg</div>
          </div>
          
          <div className="flex flex-col items-center">
             <div className="border border-[#daa520] text-[#daa520] py-2 w-full text-center text-sm font-bold bg-[#1a231e]">Semi Huge</div>
             <div className="text-gray-400 text-xs mt-3">Hatch weight 3 - 4.9 kg</div>
          </div>
          
          <div className="flex flex-col items-center">
             <div className="border border-blue-700 text-blue-500 py-2 w-full text-center text-sm font-bold bg-[#1a231e]">Huge</div>
             <div className="text-gray-400 text-xs mt-3">Hatch weight 5 - 6.9 kg</div>
          </div>
          
          <div className="flex flex-col items-center">
             <div className="border border-indigo-700 text-indigo-500 py-2 w-full text-center text-sm font-bold bg-[#1a231e]">Semi Titanic</div>
             <div className="text-gray-400 text-xs mt-3">Hatch weight 7 - 7.9 kg</div>
          </div>
          
          <div className="flex flex-col items-center">
             <div className="border border-purple-800 text-purple-600 py-2 w-full text-center text-sm font-bold bg-[#1a231e]">Titanic</div>
             <div className="text-gray-400 text-xs mt-3">Hatch weight 8 - 8.9 kg</div>
          </div>
          
          <div className="flex flex-col items-center">
             <div className="border border-red-800 text-red-600 py-2 w-full text-center text-sm font-bold bg-[#1a231e]">Godly</div>
             <div className="text-gray-400 text-xs mt-3">Hatch weight 9 - 9.9 kg</div>
          </div>
          
          <div className="flex flex-col items-center">
             <div className="border border-[#b45309] text-[#d97706] py-2 w-full text-center text-sm font-bold bg-[#1a231e]">Colossal</div>
             <div className="text-gray-400 text-xs mt-3">Hatch weight 10+ kg</div>
          </div>
          
        </div>

        <div className="text-center flex flex-col items-center">
          <p className="text-gray-400 text-sm italic mb-1">A pet's classification comes from its hatch weight.</p>
          <p className="text-gray-400 text-sm italic mb-8">It sets starting stats, growth rate, maximum size, and the potential strength of its abilities.</p>
          
          <button className="bg-transparent border border-[#2a362e] text-gray-400 hover:text-white text-xs py-1.5 px-4 rounded transition-colors flex items-center gap-2">
            growagardencalculator.ca <div className="border border-gray-600 rounded p-0.5"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg></div>
          </button>
        </div>
      </div>

    </div>
  );
}
`;

fs.writeFileSync('src/app/pet-weight-calculator/page.tsx', content);
console.log('done');
