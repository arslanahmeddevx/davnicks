"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowLeft, Search, ChevronDown, Check } from "lucide-react";
import { pets, mutations, boosts } from "../../data/petAbilityData";

export default function PetAbilityCalculator() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");
  const [sortBy, setSortBy] = useState("Rarity"); // Default based on image
  const [sortOrder, setSortOrder] = useState("Ascending");
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const [selectedPet, setSelectedPet] = useState<any>(null);
  const [selectedMutation, setSelectedMutation] = useState("Normal");
  const [selectedBoost, setSelectedBoost] = useState<any>(null);
  const [weight, setWeight] = useState("0");
  const [age, setAge] = useState("0");
  const [maxAge, setMaxAge] = useState("100");

  
  const rarityStats: Record<string, any> = {
    'Common': { interval: 90, minInterval: 30, bonus: 2, maxBonus: 6, weight: 10, crop: 'carrot' },
    'Uncommon': { interval: 85, minInterval: 28, bonus: 3, maxBonus: 8, weight: 12, crop: 'potato' },
    'Rare': { interval: 80, minInterval: 25, bonus: 4, maxBonus: 10, weight: 15, crop: 'wheat' },
    'Legendary': { interval: 75, minInterval: 22, bonus: 5, maxBonus: 15, weight: 20, crop: 'tomato' },
    'Mythical': { interval: 70, minInterval: 18, bonus: 6, maxBonus: 20, weight: 25, crop: 'corn' },
    'Divine': { interval: 65, minInterval: 15, bonus: 8, maxBonus: 30, weight: 35, crop: 'pumpkin' },
    'Prismatic': { interval: 60, minInterval: 12, bonus: 10, maxBonus: 50, weight: 50, crop: 'starfruit' },
    'Transcendent': { interval: 55, minInterval: 10, bonus: 15, maxBonus: 100, weight: 100, crop: 'magic bean' }
  };

  const getPetStats = (pet: any, mutation: any, targetAge: any, boost: any) => {
    if (!pet) return null;
    const base = rarityStats[pet.rarity] || rarityStats['Common'];
    
    // Mutation Modifiers
    let intervalMod = 1;
    let bonusMod = 1;
    let maxWeightMod = 1;
    
    if (mutation === 'Glimmering') { intervalMod = 0.9; bonusMod = 1.2; maxWeightMod = 1.1; }
    else if (mutation === 'Rainbow') { intervalMod = 0.8; bonusMod = 1.5; maxWeightMod = 1.2; }
    else if (mutation === 'Golden') { intervalMod = 0.85; bonusMod = 1.3; maxWeightMod = 1.15; }
    else if (mutation !== 'Normal') { intervalMod = 0.95; bonusMod = 1.1; maxWeightMod = 1.05; }
    
    // Weight calculations
    const hatchWeight = 1;
    let maxWeight = Math.floor(base.weight * maxWeightMod);
    if (boost && boost.name === 'Grandmaster Sprinkler') maxWeight += 4;
    
    // Abilities calculations
    const parsedAge = parseInt(targetAge) || 0;
    const ageFactor = Math.min(parsedAge, 100) / 100;
    
    let currentInterval = base.interval - ((base.interval - base.minInterval) * ageFactor);
    currentInterval *= intervalMod;
    
    if (boost && boost.name === 'Small Toy') currentInterval *= 0.9;
    if (boost && boost.name === 'Medium Toy') currentInterval *= 0.8;
    if (boost && boost.name === 'Large Toy') currentInterval *= 0.7;
    
    let currentBonus = base.bonus + ((base.maxBonus - base.bonus) * ageFactor);
    currentBonus *= bonusMod;
    
    return {
      hatchWeight,
      maxWeight,
      interval: currentInterval.toFixed(1),
      bonus: Math.floor(currentBonus),
      crop: base.crop
    };
  };

  const statsForMaxAge = useMemo(() => getPetStats(selectedPet, selectedMutation, maxAge || 100, selectedBoost), [selectedPet, selectedMutation, maxAge, selectedBoost]);
  const statsForCurrentAge = useMemo(() => getPetStats(selectedPet, selectedMutation, age || 1, selectedBoost), [selectedPet, selectedMutation, age, selectedBoost]);

  const filteredPets = useMemo(() => {
    let result = [...pets];
    
    // search
    if (searchTerm) {
      result = result.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()));
    }
    
    // category filter
    if (filterCategory !== "All" && filterCategory !== "New" && filterCategory !== "Rainbow Hatched") {
      result = result.filter(p => p.rarity === filterCategory);
    }
    // Note: Since data doesn't have New/Rainbow flags, we just don't filter them out for those categories, or return empty.
    if (filterCategory === "New") {
       result = result.filter(p => p.name === "Carpenter Bee"); // Mocking for now based on UI
    }
    if (filterCategory === "Rainbow Hatched") {
       result = [];
    }

    // sorting
    const rarityOrder = ['Common', 'Uncommon', 'Rare', 'Legendary', 'Mythical', 'Divine', 'Prismatic', 'Transcendent'];
    
    result.sort((a, b) => {
      if (sortBy === 'Name') {
        return a.name.localeCompare(b.name);
      } else {
        const aIndex = rarityOrder.indexOf(a.rarity);
        const bIndex = rarityOrder.indexOf(b.rarity);
        if (aIndex === bIndex) return a.name.localeCompare(b.name);
        return aIndex - bIndex;
      }
    });
    
    if (sortOrder === 'Descending') {
      result.reverse();
    }
    
    return result;
  }, [searchTerm, filterCategory, sortBy, sortOrder]);

  const quickStartPets = [
    { name: "Carpenter Bee", rarity: "Rare", new: true },
    { name: "Honey Badger", rarity: "Legendary", new: true },
    { name: "King Bee", rarity: "Divine", new: true },
  ];

  return (
    <div className="w-full max-w-[1400px] mx-auto text-[var(--color-foreground)] animate-fade-in pb-20 px-4 pt-8">
      {/* Header section */}
      <div className="mb-12">
        <h1 className="text-3xl font-bold mb-3 tracking-wide">Pet Ability Calculator</h1>
        <p className="text-[var(--color-muted-foreground)] max-w-3xl text-sm leading-relaxed">
          Calculate your pet's abilities, yields, and mutations as it grows.
          <br /><br />
          This tool allows you to plug in your pet details and calculate their stats at a given age. You can easily model pet abilities as they grow older and map out when they hit milestones, early access is out at specific ages. Start up plugging in the exact ability numbers to see your result from that input alone or start from a base pet and check the base numbers!
        </p>
      </div>

      <div className="space-y-8 w-full">
        {/* Pets Section */}
        <div id="pets-section" className="bg-[#151c18] border border-[#2a362e] overflow-hidden flex flex-col scroll-mt-20">
          {/* Header Row */}
          <div className="flex flex-col md:flex-row w-full divide-y md:divide-y-0 md:divide-x divide-[#2a362e] border-b border-[#2a362e]">
            {/* Search Input */}
            <div className="relative flex-[1.5] flex items-center bg-[#151c18] group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-green-500 transition-colors" />
              <input
                type="text"
                placeholder="Search pets..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-transparent pl-11 pr-4 py-4 text-sm outline-none text-white placeholder-gray-500"
              />
            </div>

            {/* Dropdown 1: Category */}
            <div className="relative flex-1 bg-[#151c18]">
              <button 
                onClick={() => setOpenDropdown(openDropdown === 'category' ? null : 'category')}
                className="w-full h-full flex items-center justify-between px-4 py-4 text-sm text-gray-300 hover:bg-[#1a231e] transition-colors"
              >
                <span>{filterCategory}</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {openDropdown === 'category' && (
                <div className="absolute top-full left-0 w-full bg-[#151c18] border border-[#2a362e] shadow-xl z-50 py-2">
                  <div className="px-4 py-2 text-xs text-gray-500 tracking-wide">Quick</div>
                  {['All', 'New', 'Rainbow Hatched'].map(item => (
                    <button key={item} onClick={() => {setFilterCategory(item); setOpenDropdown(null)}} className="w-full text-left px-4 py-2 text-sm hover:bg-[#1e2722] flex items-center justify-between text-gray-300">
                      <span className="flex items-center gap-2">
                        {item === 'All' && '🔎 '}
                        {item === 'New' && '🔥 '}
                        {item === 'Rainbow Hatched' && '🌈 '}
                        {item}
                      </span>
                      {filterCategory === item && <Check className="w-4 h-4 text-green-500"/>}
                    </button>
                  ))}
                  <div className="px-4 py-2 mt-2 border-t border-[#2a362e] text-xs text-gray-500 tracking-wide pt-3">Rarity</div>
                  {['Common', 'Uncommon', 'Rare', 'Legendary', 'Mythical', 'Divine', 'Prismatic', 'Transcendent'].map(r => (
                    <button key={r} onClick={() => {setFilterCategory(r); setOpenDropdown(null)}} className="w-full text-left px-4 py-2 text-sm hover:bg-[#1e2722] flex items-center justify-between text-gray-300">
                      {r}
                      {filterCategory === r && <Check className="w-4 h-4 text-green-500"/>}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Dropdown 2: Rarity / Name */}
            <div className="relative flex-1 bg-[#151c18]">
              <button 
                onClick={() => setOpenDropdown(openDropdown === 'sort' ? null : 'sort')}
                className="w-full h-full flex items-center justify-between px-4 py-4 text-sm text-gray-300 hover:bg-[#1a231e] transition-colors"
              >
                <span>{sortBy}</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {openDropdown === 'sort' && (
                <div className="absolute top-full left-0 w-full bg-[#151c18] border border-[#2a362e] shadow-xl z-50 py-2">
                  {['Name', 'Rarity'].map(s => (
                    <button key={s} onClick={() => {setSortBy(s); setOpenDropdown(null)}} className="w-full text-left px-4 py-2 text-sm hover:bg-[#1e2722] flex items-center justify-between text-gray-300">
                      {s}
                      {sortBy === s && <Check className="w-4 h-4 text-green-500"/>}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Dropdown 3: Ascending */}
            <div className="relative flex-1 bg-[#151c18]">
              <button 
                onClick={() => setOpenDropdown(openDropdown === 'order' ? null : 'order')}
                className="w-full h-full flex items-center justify-between px-4 py-4 text-sm text-gray-300 hover:bg-[#1a231e] transition-colors"
              >
                <span>{sortOrder}</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {openDropdown === 'order' && (
                <div className="absolute top-full left-0 w-full bg-[#151c18] border border-[#2a362e] shadow-xl z-50 py-2">
                  {['Ascending', 'Descending'].map(o => (
                    <button key={o} onClick={() => {setSortOrder(o); setOpenDropdown(null)}} className="w-full text-left px-4 py-2 text-sm hover:bg-[#1e2722] flex items-center justify-between text-gray-300">
                      {o}
                      {sortOrder === o && <Check className="w-4 h-4 text-green-500"/>}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="h-[600px] overflow-y-auto custom-scrollbar p-0 bg-[#2a362e]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#2a362e]">
              {filteredPets.map((pet, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedPet(pet)}
                  className={`relative flex flex-row items-center justify-start p-6 text-left transition-all bg-[#151c18] hover:bg-[#1a231e] focus:outline-none ${
                    selectedPet?.name === pet.name ? "ring-2 ring-inset ring-green-500 z-10" : ""
                  }`}
                >
                  {pet.name === "Carpenter Bee" && (
                    <div className="absolute top-3 right-3 bg-[#3f2511] border border-[#8a4a1c] text-[#fca311] text-[10px] font-bold px-2 py-0.5 rounded flex items-center gap-1 shadow-sm">
                      🔥 New!
                    </div>
                  )}
                  {pet.image ? (
                    <img src={pet.image} alt={pet.name} className="w-20 h-20 shrink-0 max-w-none object-contain" />
                  ) : (
                    <div className="w-20 h-20 bg-black/40 rounded flex items-center justify-center text-xl text-gray-500 shrink-0 border border-white/5">
                      {pet.name.charAt(0)}
                    </div>
                  )}
                  <div className="ml-6 flex flex-col">
                    <span className="text-lg font-black text-white whitespace-normal break-words leading-tight">{pet.name}</span>
                    <span className={`text-sm font-bold mt-1
                      \${pet.rarity === 'Common' ? 'text-gray-400' : ''}
                      \${pet.rarity === 'Uncommon' ? 'text-green-400' : ''}
                      \${pet.rarity === 'Rare' ? 'text-[#00bfff]' : ''}
                      \${pet.rarity === 'Legendary' ? 'text-yellow-400' : ''}
                      \${pet.rarity === 'Mythical' ? 'text-pink-400' : ''}
                      \${pet.rarity === 'Divine' ? 'text-red-400' : ''}
                      \${pet.rarity === 'Prismatic' ? 'text-purple-400' : ''}
                    `}>
                      {pet.rarity}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Pet Mutations Section */}
        <div id="mutations-section" className="bg-[#151c18] rounded-xl border border-[#2a362e] p-4 w-full scroll-mt-20">
          <h2 className="text-xl font-bold text-white mb-4">Pet Mutations</h2>
          <div className="h-[200px] overflow-y-auto custom-scrollbar pr-2">
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
              {mutations.map((mut, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedMutation(mut)}
                  className={`px-3 py-2 text-xs font-semibold rounded-md border transition-all text-center ${
                    selectedMutation === mut
                      ? "border-green-500 bg-[#1a2d21] text-green-400"
                      : "border-[#2a362e] bg-[#1e2722] text-gray-300 hover:bg-[#25302a]"
                  }`}
                >
                  {mut}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Boosts Section */}
        {/* Boosts Section */}
        <div id="boosts-section" className="bg-[#1a231e] rounded-xl border border-[#2a362e] p-6 w-full scroll-mt-20">
          <h2 className="text-2xl font-bold text-white mb-6">Boosts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {boosts.map((boost, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedBoost(boost)}
                className={`relative p-4 rounded-lg border text-left transition-all hover:bg-[#25302a] flex flex-row items-center gap-4 ${
                  selectedBoost?.name === boost.name
                    ? "border-[#00bfff] bg-[#1a231e]"
                    : "border-[#2a362e] bg-transparent"
                }`}
              >
                {selectedBoost?.name === boost.name && (
                  <Check className="absolute top-2 left-2 w-4 h-4 text-[#00bfff]" />
                )}
                <img src={`https://placehold.co/100x100/666666/FFFFFF?text=${encodeURIComponent(boost.name.split(' ')[0])}`} alt={boost.name} className="w-10 h-10 object-contain rounded" />
                <div className="flex flex-col">
                  <div className="font-bold text-sm text-white mb-1">{boost.name}</div>
                  <div className={`text-[10px] font-bold mb-1 uppercase tracking-wide
                    \${boost.rarity === 'Rare' ? 'text-[#00bfff]' : ''}
                    \${boost.rarity === 'Legendary' ? 'text-yellow-400' : ''}
                    \${boost.rarity === 'Divine' ? 'text-red-400' : ''}
                    \${boost.rarity === 'Prismatic' ? 'text-purple-400' : ''}
                  `}>
                    {boost.rarity}
                  </div>
                  <div className="text-xs text-gray-400">{boost.value}</div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Inputs */}
        <div id="inputs-section" className="flex flex-col md:flex-row gap-4 md:gap-8 w-full scroll-mt-20">
          <div className="flex-1 flex flex-col">
            <label className="text-sm text-white mb-2 font-medium">Weight</label>
            <input 
              type="text" 
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="bg-[#151c18] border border-[#2a362e] rounded-md px-3 py-3 text-sm text-white outline-none focus:border-green-500 transition-colors w-full"
            />
          </div>
          <div className="flex-1 flex flex-col">
            <label className="text-sm text-white mb-2 font-medium">Age</label>
            <input 
              type="text" 
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="bg-[#151c18] border border-[#2a362e] rounded-md px-3 py-3 text-sm text-white outline-none focus:border-green-500 transition-colors w-full"
            />
          </div>
          <div className="flex-[2] flex flex-col">
            <label className="text-sm text-white mb-2 font-medium">Max Age</label>
            <input 
              type="text" 
              value={maxAge}
              onChange={(e) => setMaxAge(e.target.value)}
              className="bg-[#151c18] border border-[#2a362e] rounded-md px-3 py-3 text-sm text-white outline-none focus:border-green-500 transition-colors w-full"
            />
          </div>
        </div>

        {/* Result & Quick Start */}
        <div id="result-section" className="bg-[#0b2818] rounded-none border border-[#14452a] p-8 w-full scroll-mt-20 relative shadow-xl">
          <h2 className="text-2xl font-bold text-white text-left mb-8">Result</h2>
          {selectedPet ? (
            <div className="flex flex-col text-left">
              <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
                {/* Pet Image and Info */}
                <div className="flex flex-row gap-6">
                  {selectedPet.image ? <img src={selectedPet.image} alt={selectedPet.name} className="w-32 h-32 object-contain drop-shadow-xl" /> : <div className="w-32 h-32 bg-black/40 rounded-lg flex items-center justify-center text-5xl text-gray-500">{selectedPet.name.charAt(0)}</div>}
                  <div className="flex flex-col">
                    <h3 className="text-3xl font-black text-white mb-2">{selectedPet.name}</h3>
                    <div className="text-sm text-gray-300 mb-6">{selectedPet.rarity}</div>
                    
                    <div className="text-sm text-gray-300 mb-1">Weight: {weight || 0} kg</div>
                    <div className="text-sm text-gray-300">Age: {age || 0}</div>
                  </div>
                </div>

                {/* Additional Details */}
                <div className="flex flex-col gap-3 md:ml-12 mt-4 md:mt-0">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-400 w-28">Classification:</span>
                    <span className="text-sm text-green-400 border border-green-900 px-3 py-0.5 rounded bg-transparent">{selectedMutation}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-400 w-28">Hatch Weight:</span>
                    <span className="text-sm font-bold text-green-400">{statsForMaxAge?.hatchWeight} kg</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-400 w-28">Max Weight:</span>
                    <span className="text-sm font-bold text-yellow-500">{statsForMaxAge?.maxWeight} kg</span>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-sm text-gray-400 w-28">Active Boosts:</span>
                    {selectedBoost ? (
                       <img src={`https://placehold.co/100x100/666666/FFFFFF?text=${encodeURIComponent(selectedBoost.name.split(' ')[0])}`} alt={selectedBoost.name} className="w-6 h-6 rounded-full" />
                    ) : (
                       <span className="text-sm text-gray-600">None</span>
                    )}
                  </div>
                </div>
              </div>

              {/* Abilities */}
              <div className="mb-12">
                <div className="text-[#fca311] text-sm font-bold mb-3">Abilities (Age {maxAge || 100}):</div>
                <div className="text-white font-medium">Every {statsForMaxAge?.interval}s, eats a {statsForMaxAge?.crop} for {statsForMaxAge?.bonus}x value bonus!</div>
              </div>

              {/* Buttons */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <button onClick={() => document.getElementById('pets-section')?.scrollIntoView({ behavior: 'smooth' })} className="bg-transparent border border-[#2a362e] text-white hover:bg-[#151c18] text-sm py-3 rounded transition-colors">
                  Change Pet
                </button>
                <button onClick={() => document.getElementById('mutations-section')?.scrollIntoView({ behavior: 'smooth' })} className="bg-transparent border border-[#2a362e] text-white hover:bg-[#151c18] text-sm py-3 rounded transition-colors">
                  Change Mutation
                </button>
                <button onClick={() => document.getElementById('boosts-section')?.scrollIntoView({ behavior: 'smooth' })} className="bg-transparent border border-[#2a362e] text-white hover:bg-[#151c18] text-sm py-3 rounded transition-colors">
                  Change Boosts
                </button>
                <button onClick={() => document.getElementById('inputs-section')?.scrollIntoView({ behavior: 'smooth' })} className="bg-transparent border border-[#2a362e] text-white hover:bg-[#151c18] text-sm py-3 rounded transition-colors">
                  Change Age/Weight
                </button>
              </div>

              {/* Settings / Clear Selection / Copy Link */}
              <div className="flex flex-col items-center gap-3">
                <div className="flex gap-2">
                  <button className="bg-transparent border border-[#2a362e] text-gray-300 hover:text-white hover:bg-[#151c18] text-xs py-1.5 px-4 rounded transition-colors">
                    Settings
                  </button>
                  <button onClick={() => setSelectedPet(null)} className="bg-transparent border border-[#2a362e] text-gray-300 hover:text-white hover:bg-[#151c18] text-xs py-1.5 px-4 rounded transition-colors">
                    Clear Selection
                  </button>
                </div>
                <button className="bg-[#151c18] border border-[#2a362e] text-gray-400 hover:text-white text-xs py-1.5 px-4 rounded transition-colors flex items-center gap-2">
                  growagardencalculator.ca <div className="border border-gray-600 rounded p-0.5"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg></div>
                </button>
              </div>

              {/* Show Table button */}
              <button className="absolute bottom-6 right-6 bg-[#1a231e] border border-[#2a362e] text-gray-300 hover:text-white text-xs py-2 px-4 rounded transition-colors">
                Show table
              </button>
            </div>
          ) : (
            <div className="text-green-500 font-bold mb-8 text-left">
              Select a pet to begin.
            </div>
          )}

          {!selectedPet && <div className="text-left mt-10">
            <h3 className="font-bold text-white mb-4">Quick Start</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
              {quickStartPets.map((pet, idx) => {
                const fullPet = pets.find(p => p.name === pet.name);
                return (
                <button
                  key={idx}
                  className="bg-[#151c18] border border-[#2a362e] p-4 rounded-lg flex items-center justify-between hover:bg-[#1e2722] transition-colors focus:ring-2 focus:ring-green-500"
                  onClick={() => { setSelectedPet(fullPet); document.getElementById("result-section")?.scrollIntoView({ behavior: "smooth" }); }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-black/40 rounded flex items-center justify-center text-xs text-gray-500 border border-white/5">
                      {fullPet?.image ? (
                        <img src={fullPet.image} alt={pet.name} className="w-8 h-8 object-contain" />
                      ) : (
                        pet.name.charAt(0)
                      )}
                    </div>
                    <div className="text-left">
                      <div className="text-sm font-bold text-white">{pet.name}</div>
                      <div className={`text-xs font-bold
                        \${pet.rarity === 'Rare' ? 'text-[#00bfff]' : ''}
                        \${pet.rarity === 'Legendary' ? 'text-yellow-400' : ''}
                        \${pet.rarity === 'Divine' ? 'text-red-400' : ''}
                      `}>
                        {pet.rarity}
                      </div>
                    </div>
                  </div>
                  {pet.new && <div className="bg-[#3f2511] border border-[#8a4a1c] text-[#fca311] text-[10px] font-bold px-2 py-0.5 rounded flex items-center gap-1 shadow-sm">🔥 New!</div>}
                </button>
              );})}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              </div>
          </div>}
        </div>

      </div>
    </div>
  );
}
