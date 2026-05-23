"use client";

import { useState, useMemo } from "react";
import { Copy, CheckCircle2, AlertTriangle, AlertCircle } from "lucide-react";
import { dupedPets } from "../../data/petDupeData";

export default function PetDupeCheckPage() {
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [tolerance, setTolerance] = useState("");

  const filteredPets = useMemo(() => {
    if (!weight || !age) return { exactMatches: [], nearMatches: [] };
    
    const w = parseFloat(weight);
    const a = parseInt(age);
    const t = parseFloat(tolerance) || 0;

    if (isNaN(w) || isNaN(a)) return { exactMatches: [], nearMatches: [] };

    const exactMatches = [];
    const nearMatches = [];

    dupedPets.forEach(pet => {
      if (pet.age === a) {
        const diff = Math.abs(pet.weight - w);
        if (diff === 0) exactMatches.push(pet);
        else if (diff <= t) nearMatches.push(pet);
      }
    });

    return { exactMatches, nearMatches };
  }, [weight, age, tolerance]);

  const { exactMatches, nearMatches } = filteredPets;
  const isSafe = exactMatches.length === 0 && nearMatches.length === 0;
  const isExact = exactMatches.length > 0;
  const isNear = !isExact && nearMatches.length > 0;

  const stats = useMemo(() => {
    const w = parseFloat(weight);
    const a = parseInt(age);
    if (!w || isNaN(a)) return null;

    let hatchWeight = (11 * w) / (a + 10);

    let classification = "Small";
    let color = "text-gray-400";
    let borderColor = "border-gray-600";
    if (hatchWeight >= 10) { classification = "Colossal"; color = "text-[#b45309]"; borderColor = "border-[#b45309]"; }
    else if (hatchWeight >= 9) { classification = "Godly"; color = "text-red-600"; borderColor = "border-red-600"; }
    else if (hatchWeight >= 8) { classification = "Titanic"; color = "text-purple-600"; borderColor = "border-purple-600"; }
    else if (hatchWeight >= 7) { classification = "Semi Titanic"; color = "text-indigo-600"; borderColor = "border-indigo-600"; }
    else if (hatchWeight >= 5) { classification = "Huge"; color = "text-blue-600"; borderColor = "border-blue-600"; }
    else if (hatchWeight >= 3) { classification = "Semi Huge"; color = "text-[#daa520]"; borderColor = "border-[#daa520]"; }
    else if (hatchWeight >= 2) { classification = "Large"; color = "text-[#9acd32]"; borderColor = "border-[#9acd32]"; }
    else if (hatchWeight >= 1) { classification = "Normal"; color = "text-green-500"; borderColor = "border-green-700"; }

    let maxWeight = (hatchWeight / 11) * (100 + 10);

    return {
      hatchWeight: hatchWeight.toFixed(2).replace(/\.00$/, ''),
      maxWeight: maxWeight.toFixed(2).replace(/\.00$/, ''),
      classification,
      color,
      borderColor
    };
  }, [weight, age]);

  const clearSelection = () => {
    setWeight("");
    setAge("");
    setTolerance("");
  };

  // Determine main container styles
  let containerBg = "bg-[#0b2818]";
  let containerBorder = "border-[#14452a]";
  if (weight && age && stats) {
    if (isSafe) { containerBg = "bg-[#09351c]"; containerBorder = "border-[#0d421d]"; }
    else if (isExact) { containerBg = "bg-[#3b0b0b]"; containerBorder = "border-[#520b0b]"; }
    else if (isNear) { containerBg = "bg-[#3b200b]"; containerBorder = "border-[#522514]"; }
  }

  return (
    <div className="w-full max-w-5xl mx-auto text-white animate-fade-in pb-20">
      
      <div className="mb-8 mt-4">
        <h1 className="text-3xl font-bold mb-3">Pet Dupe Checker</h1>
        <p className="text-gray-400 text-sm max-w-3xl leading-relaxed mb-4">
          This page lists all known duplicated Grow a Garden pets with their age, weight in kilograms, and name. The data updates whenever new dupes are found, so you can quickly check what's currently circulating. You can also use the built-in checker to compare your own pet's age and weight against the known dupes to see if it matches any recorded entries.
        </p>
      </div>

      {/* Inputs */}
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
      <div className={`p-8 mb-8 rounded-none relative transition-colors duration-300 ${containerBg} border ${containerBorder}`}>
        <h2 className="text-2xl font-bold text-white mb-8">Result</h2>
        
        {(!weight || !age || !stats) ? (
          <div className="text-[#fca311] font-medium mb-8">
            Enter weight, age and tolerance.
          </div>
        ) : (
          <>
            <div className="flex flex-col lg:flex-row justify-between mb-8 gap-6 items-start">
              <div className="flex flex-col sm:flex-row gap-12">
                <div className="text-sm text-gray-400 flex flex-col gap-2">
                  <div>Weight: <span className="text-white">{weight} kg</span></div>
                  <div>Age: <span className="text-white">{age}</span></div>
                  <div>Tolerance: <span className="text-white">{tolerance || "0"}</span></div>
                </div>
                
                <div className="text-sm text-gray-400 flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    Classification: <span className={`px-3 py-0.5 border ${stats.color} ${stats.borderColor} font-bold rounded-sm`}>{stats.classification}</span>
                  </div>
                  <div>Hatch Weight: <span className="text-green-400 font-bold">{stats.hatchWeight} kg</span></div>
                  <div>Max Weight: <span className="text-[#eab308] font-bold">{stats.maxWeight} kg</span></div>
                </div>
              </div>
              
              <div>
                {isSafe ? (
                  <div className="border border-[#14452a] bg-[#0c4021] text-green-500 px-5 py-2.5 flex items-center gap-4 rounded-sm shadow-md">
                     <CheckCircle2 className="w-5 h-5" /> 
                     <span className="font-bold">Safe</span> 
                     <span className="text-[#14452a]">|</span> 
                     <span className="text-green-500">No match detected.</span>
                  </div>
                ) : isExact ? (
                  <div className="border border-[#7a1515] bg-[#5c1010] text-red-500 px-5 py-2.5 flex items-center gap-4 rounded-sm shadow-md">
                     <AlertCircle className="w-5 h-5" /> 
                     <span className="font-bold">Warning</span> 
                     <span className="text-[#7a1515]">|</span> 
                     <span className="text-red-400">Exact match found.</span>
                  </div>
                ) : (
                  <div className="border border-[#7a3b15] bg-[#5c2a10] text-[#eab308] px-5 py-2.5 flex items-center gap-4 rounded-sm shadow-md">
                     <AlertTriangle className="w-5 h-5" /> 
                     <span className="font-bold">Caution</span> 
                     <span className="text-[#7a3b15]">|</span> 
                     <span className="text-[#eab308]">Potential match found.</span>
                  </div>
                )}
              </div>
            </div>

            {exactMatches.length > 0 && (
              <div className="mb-8">
                <h3 className="text-lg font-bold text-white mb-4">Exact matches</h3>
                <div className="border-t border-b border-[#520b0b] bg-[#2a0808] overflow-hidden">
                  <table className="w-full text-left text-sm whitespace-nowrap">
                    <thead>
                      <tr className="border-b border-[#520b0b] text-gray-200">
                        <th className="px-6 py-3 font-medium">Type</th>
                        <th className="px-6 py-3 font-medium">Name</th>
                        <th className="px-6 py-3 font-medium">Age</th>
                        <th className="px-6 py-3 font-medium">Weight</th>
                        <th className="px-6 py-3 font-medium">Hatch Weight</th>
                        <th className="px-6 py-3 font-medium">Reason</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#520b0b]">
                      {exactMatches.map((pet, idx) => {
                        const petHatch = ((11 * pet.weight) / (pet.age + 10)).toFixed(2).replace(/\.00$/, '');
                        return (
                          <tr key={idx} className="hover:bg-[#3b0b0b] transition-colors">
                            <td className="px-6 py-3 text-gray-300">{pet.type}</td>
                            <td className="px-6 py-3 text-gray-300">{pet.name}</td>
                            <td className="px-6 py-3 text-gray-300">{pet.age}</td>
                            <td className="px-6 py-3 text-gray-300">{pet.weight}</td>
                            <td className="px-6 py-3 text-gray-300">{petHatch}</td>
                            <td className="px-6 py-3">
                              <span className="text-gray-300 border border-[#520b0b] px-3 py-1 text-xs">Exact matching age and weight.</span>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
                <div className="mt-4 text-sm text-gray-400 text-center">
                  Exact matches.
                </div>
              </div>
            )}

            {nearMatches.length > 0 && (
              <div className="mb-8">
                <h3 className="text-lg font-bold text-white mb-4">Near matches</h3>
                <div className="border-t border-b border-[#522514] bg-[#2a120b] overflow-hidden">
                  <table className="w-full text-left text-sm whitespace-nowrap">
                    <thead>
                      <tr className="border-b border-[#522514] text-gray-200">
                        <th className="px-6 py-3 font-medium">Type</th>
                        <th className="px-6 py-3 font-medium">Name</th>
                        <th className="px-6 py-3 font-medium">Age</th>
                        <th className="px-6 py-3 font-medium">Weight</th>
                        <th className="px-6 py-3 font-medium">Hatch Weight</th>
                        <th className="px-6 py-3 font-medium">Reason</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#522514]">
                      {nearMatches.map((pet, idx) => {
                        const petHatch = ((11 * pet.weight) / (pet.age + 10)).toFixed(2).replace(/\.00$/, '');
                        return (
                          <tr key={idx} className="hover:bg-[#36180e] transition-colors">
                            <td className="px-6 py-3 text-gray-300">{pet.type}</td>
                            <td className="px-6 py-3 text-gray-300">{pet.name}</td>
                            <td className="px-6 py-3 text-gray-300">{pet.age}</td>
                            <td className="px-6 py-3 text-gray-300">{pet.weight}</td>
                            <td className="px-6 py-3 text-gray-300">{petHatch}</td>
                            <td className="px-6 py-3">
                              <span className="text-gray-300 border border-[#522514] px-3 py-1 text-xs">Weights are within tolerance.</span>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
                <div className="mt-4 text-sm text-gray-400 text-center">
                  Near matches (≤ tolerance by weight, hatch weight, or while aging up).
                </div>
              </div>
            )}

            {isSafe && (
              <div className="mb-8 text-sm text-gray-300 text-center">
                No matches found.
              </div>
            )}
          </>
        )}
        
        <div className="flex flex-col items-center gap-4">
            <button onClick={clearSelection} className={`border px-5 py-2 text-sm text-gray-300 transition-colors rounded-sm ${containerBg} ${containerBorder} hover:opacity-80`}>
              Clear Selection
            </button>
            <button className={`border px-4 py-2 text-xs text-gray-300 transition-colors rounded-sm flex items-center gap-2 ${containerBg} ${containerBorder} hover:opacity-80`}>
              growagardencalculator.ca <Copy className="w-3.5 h-3.5" />
            </button>
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
              {dupedPets.map((pet, idx) => (
                <tr key={idx} className="hover:bg-[#1a231e] transition-colors">
                  <td className="px-6 py-4 text-gray-300 w-1/4">{pet.type}</td>
                  <td className="px-6 py-4 text-gray-300 w-1/4">{pet.name}</td>
                  <td className="px-6 py-4 text-gray-300 w-1/4">{pet.age}</td>
                  <td className="px-6 py-4 text-gray-300 w-1/4">{pet.weight}</td>
                </tr>
              ))}
              {dupedPets.length === 0 && (
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
