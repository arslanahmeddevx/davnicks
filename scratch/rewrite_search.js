const fs = require('fs');

const pageContent = `"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowLeft, Search } from "lucide-react";
import { abilityPets } from "../../data/petAbilitySearchData";

const rarityColors: Record<string, string> = {
  Common: "text-gray-400",
  Uncommon: "text-green-500",
  Rare: "text-blue-500",
  Legendary: "text-orange-500",
  Mythical: "text-purple-500",
  Divine: "text-[#5b6cf9]", // Indigo/blue hue
  Prismatic: "text-red-500",
  Colossal: "text-[#b45309]",
};

export default function PetAbilitySearchPage() {
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    if (!search.trim()) return abilityPets;
    const lower = search.toLowerCase();
    return abilityPets.filter(p => 
      p.name.toLowerCase().includes(lower) || 
      p.description.toLowerCase().includes(lower) ||
      p.tags.some(t => t.toLowerCase().includes(lower)) ||
      p.rarity.toLowerCase().includes(lower)
    );
  }, [search]);

  return (
    <div className="w-full max-w-6xl mx-auto text-white animate-fade-in pb-20">
      
      {/* Header */}
      <div className="mb-8 mt-4">
        <h1 className="text-3xl font-bold mb-3">Pet Ability Search</h1>
        <p className="text-gray-400 text-sm max-w-3xl leading-relaxed">
          Search pets by their abilities and see what each pet does.
        </p>
      </div>

      {/* Search Bar */}
      <div className="bg-[#151c18] border-b border-x border-t-0 sm:border-t border-[#2a362e] p-6 mb-8 rounded-none">
        <div className="relative max-w-2xl">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search by pet name, ability description, or tags..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-[#0b2818] border border-[#14452a] rounded-md outline-none focus:border-green-500 transition-colors text-sm text-white"
          />
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((pet, idx) => (
          <div key={idx} className="bg-[#151c18] border border-[#2a362e] rounded-none p-6 flex flex-col hover:border-[#3a4a3e] transition-colors h-full">
            
            {/* Top section: Image & Name */}
            <div className="flex items-center gap-4 mb-4">
              <img 
                src={pet.image} 
                alt={pet.name} 
                className="w-14 h-14 object-contain"
                loading="lazy"
              />
              <div className="flex flex-col">
                <h3 className="font-bold text-lg text-white">{pet.name}</h3>
                <span className={\`text-sm \${rarityColors[pet.rarity] || "text-gray-400"}\`}>
                  {pet.rarity}
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-400 leading-relaxed flex-1">
              {pet.description}
            </p>

            {/* Tags */}
            {pet.tags && pet.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-6">
                {pet.tags.map((tag, tagIdx) => (
                  <span 
                    key={tagIdx} 
                    className="border border-[#2a362e] px-2.5 py-1 text-xs text-gray-300 bg-transparent rounded-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
            
          </div>
        ))}
      </div>
      
      {filtered.length === 0 && (
        <div className="text-center py-20 text-gray-500 bg-[#151c18] border border-[#2a362e] mt-4">
          No pets found matching "{search}".
        </div>
      )}

    </div>
  );
}
`;

fs.writeFileSync('src/app/pet-ability-search/page.tsx', pageContent);
console.log('done');
