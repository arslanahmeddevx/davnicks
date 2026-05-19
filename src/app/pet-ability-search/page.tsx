"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Search, Filter } from "lucide-react";

const abilities = [
  { name: "Fertilizer", description: "Boosts crop growth speed by 10%.", pets: ["Cow", "Chicken Owl"] },
  { name: "Mutator", description: "Increases chance of finding mutated crops by 5%.", pets: ["Capybara", "Monkey"] },
  { name: "Harvester", description: "Yields +1 extra crop per harvest.", pets: ["Dilophosaurus", "Owl"] },
  { name: "Watering", description: "Crops stay hydrated 20% longer.", pets: ["Sea Turtle", "Fish"] },
  { name: "Lucky", description: "Small chance to double drops.", pets: ["Night Owl", "Bald Eagle"] },
  { name: "Speedy", description: "Pet movement speed increased by 15%.", pets: ["Cheetah", "Horse"] },
];

export default function PetAbilitySearchPage() {
  const [search, setSearch] = useState("");

  const filtered = abilities.filter(a => 
    a.name.toLowerCase().includes(search.toLowerCase()) || 
    a.description.toLowerCase().includes(search.toLowerCase()) ||
    a.pets.some(p => p.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="w-full max-w-4xl mx-auto text-[var(--color-foreground)] animate-fade-in pb-10">
      <Link href="/" className="inline-flex items-center text-sm text-[var(--color-muted-foreground)] hover:text-white mb-6 transition-colors">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Tools
      </Link>

      <h1 className="text-3xl font-bold mb-2">Pet Ability Search</h1>
      <p className="text-[var(--color-muted-foreground)] mb-8 max-w-2xl text-sm">
        Search pets by their abilities and see what each pet does.
      </p>

      <div className="bg-[var(--color-secondary)] p-4 rounded-xl border border-[var(--color-border)] mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--color-muted-foreground)]" />
          <input 
            type="text" 
            placeholder="Search by ability name, description, or pet..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-[var(--color-card)] border border-[var(--color-border)] rounded-md outline-none focus:border-[var(--color-primary)]"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((ability, index) => (
          <div key={index} className="bg-[var(--color-secondary)] border border-[var(--color-border)] rounded-xl p-6 hover:border-[var(--color-primary)]/50 transition-colors">
            <h3 className="text-xl font-bold text-[var(--color-primary)] mb-2 flex items-center gap-2">
              ✨ {ability.name}
            </h3>
            <p className="text-sm text-[var(--color-muted-foreground)] mb-4 h-10">
              {ability.description}
            </p>
            <div className="border-t border-[var(--color-border)] pt-4">
              <span className="text-xs text-[var(--color-muted-foreground)] uppercase font-semibold tracking-wider block mb-2">Pets with this ability:</span>
              <div className="flex flex-wrap gap-2">
                {ability.pets.map((pet, idx) => (
                  <span key={idx} className="bg-[var(--color-card)] border border-[var(--color-border)] px-2 py-1 rounded text-xs">
                    {pet}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {filtered.length === 0 && (
        <div className="text-center py-12 text-[var(--color-muted-foreground)]">
          No abilities found matching "{search}". Try a different search term.
        </div>
      )}
    </div>
  );
}
