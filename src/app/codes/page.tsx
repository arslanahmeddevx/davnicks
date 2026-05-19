"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What are Grow a Garden codes?",
    answer: "Codes are special text phrases released by the game developers that you can redeem for free in-game items, boosts, pets, or cosmetics."
  },
  {
    question: "Do codes expire?",
    answer: "Yes, most codes will expire after a certain amount of time or after a specific event ends. It is best to redeem them as soon as you find them."
  }
];

export default function CodesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    if (openFaq === index) {
      setOpenFaq(null);
    } else {
      setOpenFaq(index);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto text-[var(--color-foreground)] animate-fade-in pb-10">
      <Link href="/" className="inline-flex items-center text-sm text-[var(--color-muted-foreground)] hover:text-white mb-6 transition-colors">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Tools
      </Link>

      <h1 className="text-3xl font-bold mb-2">Codes</h1>
      <p className="text-[var(--color-muted-foreground)] mb-1 text-sm">
        Updated list of working codes.
      </p>
      <p className="text-xs text-gray-500 mb-6">Last updated: May 16, 2026</p>

      <p className="text-[var(--color-muted-foreground)] mb-8 max-w-3xl text-sm leading-relaxed">
        Grow a Garden lets you grow crops, unlock mutations, and collect pets as you expand your garden. Progress takes time, but free codes help you get extra seed packs, eggs, and cosmetics. This page lists all active codes and shows how to redeem them so you don't miss any rewards.
      </p>

      <div className="space-y-10">
        
        {/* Active Codes */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Active Codes</h2>
          <ul className="space-y-6">
            <li className="flex flex-col gap-2">
              <div className="text-sm">
                • <strong className="text-white">RDCAward</strong> - 1x RDCAward Cosmetic
              </div>
              <img src="https://tr.rbxcdn.com/180DAY-e8f5f57f5ae24d0c9aa254123389a218/150/150/Image/Png/noFilter" alt="RDCAward" className="w-16 h-16 ml-4 object-contain" />
            </li>
            <li className="flex flex-col gap-2">
              <div className="text-sm">
                • <strong className="text-white">BEANORLEAVE10</strong> - 1x Green Bean Chamber Cosmetic
              </div>
              <img src="https://tr.rbxcdn.com/180DAY-f9695a43b6d9efd7db18e8c7d2812fed/150/150/Image/Png/noFilter" alt="Green Bean Chamber" className="w-16 h-16 ml-4 object-contain" />
            </li>
            <li className="flex flex-col gap-2">
              <div className="text-sm">
                • <strong className="text-white">torigate</strong> - 1x Whispering Torii Cosmetic
              </div>
              <img src="https://tr.rbxcdn.com/180DAY-2db67656a75bd70bdab7052f0cddbe9c/150/150/Image/Png/noFilter" alt="Torii Gate" className="w-16 h-16 ml-4 object-contain" />
            </li>
          </ul>
        </section>

        {/* Expired Codes */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Expired Codes</h2>
          <ul className="space-y-6">
            <li className="flex flex-col gap-2">
              <div className="text-sm text-[var(--color-muted-foreground)]">
                • <strong className="line-through">LUNARGLOW10</strong> - 3x Basic Seed Packs and one Exotic Bug Egg
              </div>
              <img src="https://tr.rbxcdn.com/180DAY-e6ed9bd1f68c5327d73e7a40d3d4da1f/150/150/Image/Png/noFilter" alt="Lunar Glow" className="w-16 h-16 ml-4 object-contain opacity-50 grayscale" />
            </li>
          </ul>
        </section>

        {/* How to Redeem */}
        <section>
          <h2 className="text-2xl font-bold mb-4">How to Redeem Codes</h2>
          <ol className="space-y-6 text-sm text-[var(--color-muted-foreground)] list-decimal pl-5">
            <li>Join Grow a Garden from the Roblox App.</li>
            <li>
              Tap the settings button in the top left corner of the screen.
              <div className="mt-4 bg-[#111] border border-[#222] p-2 rounded-md inline-block max-w-sm">
                {/* Placeholder for settings icon screenshot */}
                <div className="aspect-[2/1] bg-blue-900/40 border border-blue-500/50 rounded flex items-center justify-center relative overflow-hidden">
                  <div className="absolute top-2 left-2 flex gap-1 bg-black/50 p-1 rounded">
                    <div className="w-6 h-6 bg-white/20 rounded"></div>
                    <div className="w-6 h-6 bg-white/20 rounded"></div>
                    <div className="w-6 h-6 bg-white flex items-center justify-center rounded border-2 border-red-500 relative">
                       <div className="w-3 h-3 border-2 border-black rounded-full"></div>
                    </div>
                  </div>
                  <div className="absolute top-10 left-10 text-red-500 font-bold text-xl drop-shadow-[0_2px_2px_rgba(0,0,0,1)] rotate-[-10deg]">
                    Settings
                  </div>
                  <div className="absolute top-6 left-16 text-red-500 font-bold transform -rotate-45">
                    →
                  </div>
                </div>
              </div>
            </li>
            <li>
              Scroll down to the bottom of the settings menu.
              <div className="mt-4 bg-[#111] border border-[#222] p-2 rounded-md inline-block max-w-sm w-full">
                {/* Placeholder for settings menu screenshot */}
                <div className="aspect-[4/5] bg-[#3a5a22] border-4 border-[#2c4419] rounded-lg p-2 relative flex flex-col gap-2">
                  <div className="flex justify-between items-center bg-[#4a722a] border-b-4 border-[#2c4419] p-2 rounded">
                    <span className="text-white font-bold drop-shadow-md">Settings</span>
                    <span className="bg-red-500 text-white px-2 rounded font-bold">X</span>
                  </div>
                  <div className="bg-[#8b5a2b] border-2 border-[#5c3a1b] p-2 rounded flex justify-between items-center opacity-70">
                    <div className="text-white text-xs">Pet Scaling</div>
                    <div className="bg-green-500 px-3 py-1 rounded text-white text-xs">ON</div>
                  </div>
                  <div className="bg-[#8b5a2b] border-2 border-[#5c3a1b] p-2 rounded flex justify-between items-center opacity-70">
                    <div className="text-white text-xs">Keep Pet on Ground</div>
                    <div className="bg-red-500 px-3 py-1 rounded text-white text-xs">OFF</div>
                  </div>
                  <div className="bg-[#8b5a2b] border-2 border-[#5c3a1b] p-2 rounded flex justify-between items-center opacity-70">
                    <div className="text-white text-xs">Performance Mode</div>
                    <div className="bg-red-500 px-3 py-1 rounded text-white text-xs">OFF</div>
                  </div>
                  <div className="bg-[#8b5a2b] border-4 border-red-500 p-2 rounded mt-2">
                    <div className="text-white text-xs font-bold mb-1">Redeem Codes</div>
                    <div className="flex gap-2">
                      <div className="flex-1 bg-black/30 border border-black/50 rounded px-2 py-1 text-[10px] text-white/50">Type code here</div>
                      <div className="bg-green-500 border border-green-700 px-3 py-1 rounded text-white text-xs font-bold">CLAIM</div>
                    </div>
                  </div>
                  <div className="absolute right-0 top-1/2 text-red-500 font-bold text-4xl">↓</div>
                </div>
              </div>
            </li>
            <li>Type the code.</li>
            <li>Press Claim.</li>
            <li>
              A small number badge will appear on your inventory showing how many new items you got.
              <div className="mt-4 bg-[#111] border border-[#222] p-2 rounded-md inline-block max-w-sm">
                {/* Placeholder for success screenshot */}
                <div className="aspect-[3/1] bg-green-900/40 border border-green-500/50 rounded flex items-center justify-center relative overflow-hidden">
                   <div className="absolute top-2 left-2 flex gap-1 bg-black/50 p-1 rounded">
                    <div className="w-6 h-6 bg-white/20 rounded"></div>
                    <div className="w-6 h-6 bg-white/20 rounded"></div>
                    <div className="w-6 h-6 bg-white flex items-center justify-center rounded">
                       <div className="w-3 h-3 border-2 border-black rounded-full"></div>
                    </div>
                    <div className="w-6 h-6 bg-white/20 rounded relative">
                      <div className="absolute -top-1 -right-1 bg-red-500 text-white text-[8px] w-3 h-3 rounded-full flex items-center justify-center font-bold border border-black z-10">1</div>
                    </div>
                  </div>
                  <div className="absolute top-8 left-20 text-red-500 font-bold text-xl drop-shadow-[0_2px_2px_rgba(0,0,0,1)] rotate-[-5deg]">
                    Success!
                  </div>
                   <div className="absolute top-4 left-16 text-red-500 font-bold transform -rotate-45">
                    ↑
                  </div>
                </div>
              </div>
            </li>
          </ol>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Codes FAQ — Roblox Grow a Garden</h2>
          <p className="text-[var(--color-muted-foreground)] mb-6 text-sm">
            Quick answers to common questions about redeeming codes in Roblox <em>Grow a Garden</em>.
          </p>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-[var(--color-border)] pb-2">
                <button 
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center py-3 text-left font-medium text-sm hover:text-white transition-colors"
                >
                  {faq.question}
                  {openFaq === index ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 text-sm text-[var(--color-muted-foreground)] ${
                    openFaq === index ? "max-h-40 pb-4 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
