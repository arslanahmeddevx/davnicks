"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const tiers = [
  {
    rank: "S",
    color: "bg-[#ff7f7f] text-black", // Light red
    pets: [
      "https://tr.rbxcdn.com/180DAY-e8f5f57f5ae24d0c9aa254123389a218/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-f9695a43b6d9efd7db18e8c7d2812fed/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-2db67656a75bd70bdab7052f0cddbe9c/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-e6ed9bd1f68c5327d73e7a40d3d4da1f/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-81fda93ebd4d1088f29ad1a4383937ed/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-4e7d5552ec0e7f6561db9d5625cb46cd/150/150/Image/Png/noFilter",
    ]
  },
  {
    rank: "A",
    color: "bg-[#ffbf7f] text-black", // Light orange
    pets: [
      "https://tr.rbxcdn.com/180DAY-3b51aa6169aa429ef0a6fe05c1391c1b/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-06d0de9e9ef4113326536705ec0f6052/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-f1c089147321f5b6747c803d926db01d/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-887eaf9a062cc699637323a2b2019f65/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-1cbb55c1fadd6f5fde6140aeaaf61eb1/150/150/Image/Png/noFilter",
    ]
  },
  {
    rank: "B",
    color: "bg-[#ffff7f] text-black", // Yellow
    pets: [
      "https://tr.rbxcdn.com/180DAY-b434bad5b4ed75e3e40555971652ae50/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-7030b65c039b00d9d7a083ed681cf5d2/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-3b5bc6b09aec74364c0ca39eae452598/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-f49eaf91ec767e80fa1330173462ab78/150/150/Image/Png/noFilter",
    ]
  },
  {
    rank: "C",
    color: "bg-[#bfff7f] text-black", // Yellow-Green
    pets: [
      "https://tr.rbxcdn.com/180DAY-e934aaadc94c3851ad2b9b5b3bbee382/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-f63b3d2717b04989a0e10b4a8d997493/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-fbaec6ff8dd560d1fbe3606355107be2/150/150/Image/Png/noFilter",
    ]
  },
  {
    rank: "D",
    color: "bg-[#7fff7f] text-black", // Green
    pets: [
      "https://tr.rbxcdn.com/180DAY-7239e6d39a9865c73abfe4e213d14341/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-44a7a346d24abeaccbe4ef470871f965/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-921a9dd51eecd0a8d5eac7e82d06c659/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-a6519ca59a0efc4e487ba5d90429d640/150/150/Image/Png/noFilter",
    ]
  },
  {
    rank: "E",
    color: "bg-[#7fffbf] text-black", // Sea Green
    pets: [
      "https://tr.rbxcdn.com/180DAY-bfe56ed90eb31c9dbeb65f1df1a5b43b/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-299d70df8229cd37cc74b50bed595a65/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-38772c025d3f71b90348969655c7f0f3/150/150/Image/Png/noFilter",
    ]
  },
  {
    rank: "F",
    color: "bg-[#7fffff] text-black", // Cyan
    pets: [
      "https://tr.rbxcdn.com/180DAY-9071f177a4d6b1d834ed8774fbebcc36/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-826d3157f73c09135ab474e59319b05a/150/150/Image/Png/noFilter",
    ]
  }
];

export default function PetTierList() {
  return (
    <div className="w-full max-w-5xl mx-auto text-[var(--color-foreground)] animate-fade-in pb-10">
      <Link href="/" className="inline-flex items-center text-sm text-[var(--color-muted-foreground)] hover:text-white mb-6 transition-colors">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Tools
      </Link>

      <h1 className="text-3xl font-bold mb-2">Pet Tier List</h1>
      <p className="text-[var(--color-muted-foreground)] mb-2 text-sm">
        Ranked tier list of all the pets in Grow a Garden.<br/>
        <span className="text-xs text-gray-500">Last updated: May 16, 2026</span>
      </p>
      
      <p className="text-[var(--color-muted-foreground)] mb-8 max-w-4xl text-sm">
        Pets play a major role in Grow a Garden. Each one has a unique ability that can boost crops, trigger mutations, increase yield, or help you progress faster. With so many pets available from eggs, crates, shops, and events, it can be hard to know which ones are worth using. This tier list gives a clear overview of the strongest pets, how their abilities compare, and which ones offer the most value for your garden at each stage of the game.
      </p>

      <div className="border border-[var(--color-border)] rounded-sm overflow-hidden bg-[var(--color-secondary)]">
        {tiers.map((tier, index) => (
          <div key={tier.rank} className={`flex border-b border-[var(--color-border)] ${index === tiers.length - 1 ? 'border-b-0' : ''}`}>
            <div className={`w-24 md:w-32 flex-shrink-0 flex items-center justify-center text-xl md:text-2xl font-bold ${tier.color}`}>
              {tier.rank}
            </div>
            <div className="flex-1 flex flex-wrap gap-2 md:gap-4 p-4 bg-[#111111]">
              {tier.pets.map((pet, i) => (
                <div key={i} className="relative w-12 h-12 md:w-16 md:h-16 group">
                  <img src={pet} alt={`Pet ${i}`} className="w-full h-full object-contain filter drop-shadow-md transition-transform group-hover:scale-110" />
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity rounded-sm"></div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
