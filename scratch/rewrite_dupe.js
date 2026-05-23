const fs = require('fs');

const pageContent = `"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { dupedPets } from "../../data/petDupeData";

export default function PetDupeCheckPage() {
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [tolerance, setTolerance] = useState("");

  const filteredPets = useMemo(() => {
    if (!weight || !age) return dupedPets;
    
    const w = parseFloat(weight);
    const a = parseInt(age);
    const t = parseFloat(tolerance) || 0;

    if (isNaN(w) || isNaN(a)) return dupedPets;

    return dupedPets.filter(pet => {
      const ageMatch = pet.age === a;
      const weightMatch = Math.abs(pet.weight - w) <= t;
      return ageMatch && weightMatch;
    });
  }, [weight, age, tolerance, dupedPets]);

  return (
    <div className="w-full max-w-5xl mx-auto text-white animate-fade-in pb-20">
      
      {/* Inputs */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
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
        <div className="flex-1 flex flex-col">
          <label className="text-sm font-medium mb-2 text-gray-300">Tolerance</label>
          <input 
            type="text" 
            placeholder="Tolerance (0 - 0.05)"
            value={tolerance}
            onChange={(e) => setTolerance(e.target.value)}
            className="bg-[#151c18] border border-[#2a362e] rounded-md px-4 py-3 text-sm text-white outline-none focus:border-green-500 transition-colors w-full"
          />
        </div>
      </div>

      {/* Result Box */}
      <div className="bg-[#0b2818] border border-[#14452a] rounded-none p-8 mb-8 shadow-xl relative">
        <h2 className="text-2xl font-bold text-white mb-6">Result</h2>
        
        {(!weight || !age) ? (
          <div className="text-[#fca311] font-medium mb-8">
            Enter weight, age and tolerance.
          </div>
        ) : (
          <div className="mb-8">
            {filteredPets.length > 0 ? (
              <span className="text-red-500 font-bold text-lg">Warning: {filteredPets.length} matching duped pet{filteredPets.length === 1 ? '' : 's'} found!</span>
            ) : (
              <span className="text-green-500 font-bold text-lg">Clean! No duped pets match this data.</span>
            )}
          </div>
        )}

        <div>
          <div className="text-sm text-gray-300 mb-3">Quick presets</div>
          <div className="flex flex-col sm:flex-row gap-3">
            <button 
              onClick={() => setTolerance("0")}
              className="flex-1 bg-transparent border border-[#2a362e] text-gray-300 hover:text-white hover:bg-[#151c18] text-sm py-3 px-4 rounded transition-colors text-left"
            >
              Strict
            </button>
            <button 
              onClick={() => setTolerance("0.01")}
              className="flex-1 bg-transparent border border-[#2a362e] text-gray-300 hover:text-white hover:bg-[#151c18] text-sm py-3 px-4 rounded transition-colors text-left"
            >
              Low
            </button>
            <button 
              onClick={() => setTolerance("0.05")}
              className="flex-1 bg-transparent border border-[#2a362e] text-gray-300 hover:text-white hover:bg-[#151c18] text-sm py-3 px-4 rounded transition-colors text-left"
            >
              Cautious
            </button>
          </div>
        </div>
      </div>

      {/* All duped pets Box */}
      <div className="bg-[#151c18] border border-[#2a362e] rounded-none overflow-hidden flex flex-col">
        <div className="p-6 border-b border-[#2a362e]">
          <h2 className="text-xl font-bold text-white">All duped pets</h2>
        </div>
        
        <div className="max-h-[600px] overflow-y-auto custom-scrollbar">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <tbody className="divide-y divide-[#2a362e]">
              {filteredPets.map((pet, idx) => (
                <tr key={idx} className="hover:bg-[#1a231e] transition-colors">
                  <td className="px-6 py-4 text-gray-300 w-1/4">{pet.type}</td>
                  <td className="px-6 py-4 text-gray-300 w-1/4">{pet.name}</td>
                  <td className="px-6 py-4 text-gray-300 w-1/4">{pet.age}</td>
                  <td className="px-6 py-4 text-gray-300 w-1/4">{pet.weight}</td>
                </tr>
              ))}
              {filteredPets.length === 0 && (
                <tr>
                  <td colSpan={4} className="px-6 py-8 text-center text-gray-500">
                    No matching dupes found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
`;

fs.writeFileSync('src/app/pet-dupe-check/page.tsx', pageContent);
console.log('done');
