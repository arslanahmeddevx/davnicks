"use client";

import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { abilityPets } from "../../data/petAbilitySearchData";

const rarityColors: Record<string, string> = {
  Common: "text-gray-400",
  Uncommon: "text-green-500",
  Rare: "text-blue-500",
  Legendary: "text-orange-500",
  Mythical: "text-purple-500",
  Divine: "text-[#5b6cf9]",
  Prismatic: "text-red-500",
  Colossal: "text-[#b45309]",
};

export default function PetAbilitySearchPage() {
  const [search, setSearch] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [showTags, setShowTags] = useState(true);
  const [showAll, setShowAll] = useState(true);

  // Extract all unique tags
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    abilityPets.forEach(p => {
      if (p.tags) p.tags.forEach(t => tags.add(t));
    });
    return Array.from(tags).sort();
  }, []);

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  const filtered = useMemo(() => {
    let result = abilityPets;
    
    if (search.trim()) {
      const lower = search.toLowerCase();
      result = result.filter(p => 
        p.name.toLowerCase().includes(lower) || 
        p.description.toLowerCase().includes(lower) ||
        (p.tags && p.tags.some(t => t.toLowerCase().includes(lower))) ||
        p.rarity.toLowerCase().includes(lower)
      );
    }
    
    if (selectedTags.length > 0) {
      result = result.filter(p => 
        p.tags && selectedTags.every(t => p.tags.includes(t))
      );
    }
    
    return result;
  }, [search, selectedTags]);

  const displayPets = showAll ? filtered : filtered.slice(0, 30);

  return (
    <div className="w-full max-w-6xl mx-auto text-white animate-fade-in pb-20 pt-8 px-4">
      
      {/* Header Description */}
      <p className="text-gray-400 text-sm max-w-4xl leading-relaxed mb-8">
        Pets in Grow a Garden each have specific abilities that affect crops, growth speed, mutations,
        yield, and progression. This page lets you search and filter every pet by what they do, so you can
        quickly see which pets sell plants, apply plant mutations, boost XP, reduce hatch time, or provide
        other effects. It's a full index of all pets, their abilities, rarity, and descriptions to help you
        understand how each one contributes to your garden.
      </p>

      {/* Controls */}
      <div className="flex flex-col gap-4 mb-8">
        <div className="flex flex-wrap items-center gap-2">
          <div className="relative w-full max-w-[320px]">
            <input 
              type="text" 
              placeholder="Search pets by name, ability or description..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-4 pr-4 py-2.5 bg-[#151c18] border border-[#2a362e] rounded-sm outline-none focus:border-green-500 transition-colors text-sm text-white"
            />
          </div>
          <button 
            onClick={() => setShowTags(!showTags)} 
            className="bg-[#151c18] border border-[#2a362e] px-5 py-2.5 text-sm hover:bg-[#2a362e] transition-colors rounded-sm text-gray-300"
          >
            {showTags ? "Hide Tags" : "Show Tags"}
          </button>
          <button 
            onClick={() => setShowAll(!showAll)} 
            className="bg-[#151c18] border border-[#2a362e] px-5 py-2.5 text-sm hover:bg-[#2a362e] transition-colors rounded-sm text-gray-300"
          >
            {showAll ? "Show Less Results" : "Show All Results"}
          </button>
        </div>

        {/* Tags Grid */}
        {showTags && (
          <div className="flex flex-wrap gap-2 mt-2">
            {allTags.map(tag => {
              const isSelected = selectedTags.includes(tag);
              return (
                <button 
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className={`border px-4 py-2 text-sm transition-colors rounded-sm ${isSelected ? 'bg-[#14452a] border-green-600 text-white' : 'bg-[#151c18] border-[#2a362e] text-gray-300 hover:border-[#3a4a3e]'}`}
                >
                  {tag}
                </button>
              )
            })}
          </div>
        )}

        <div className="text-xs text-gray-400 mt-2">
          Showing {displayPets.length} of {filtered.length} results.
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayPets.map((pet, idx) => (
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
                <span className={`text-sm ${rarityColors[pet.rarity] || "text-gray-400"}`}>
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
                    className="border border-[#2a362e] px-2.5 py-1 text-xs text-gray-300 bg-[#0f1411] rounded-sm"
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
        <div className="text-center py-20 text-gray-500 bg-[#151c18] border border-[#2a362e] mt-4 rounded-sm">
          No pets found matching your search or tag filters.
        </div>
      )}

    </div>
  );
}
