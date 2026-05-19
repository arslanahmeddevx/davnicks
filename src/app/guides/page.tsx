"use client";

import Link from "next/link";
import { ArrowLeft, BookOpen, Clock, ChevronRight } from "lucide-react";

const guides = [
  { 
    title: "Beginner's Guide to Grow a Garden", 
    category: "Progression",
    time: "5 min read",
    description: "Start your journey here. Learn the basics of planting, harvesting, and buying your first pets to maximize early game profits."
  },
  { 
    title: "How Mutations Work", 
    category: "Mutations",
    time: "8 min read",
    description: "A complete breakdown of how to trigger crop mutations, which pets help the most, and the exact chances of getting legendary variations."
  },
  { 
    title: "Trading Value Tier List Explained", 
    category: "Trading",
    time: "12 min read",
    description: "Don't get scammed! Learn how the trading economy works, what defines a pet's value, and how to use the Pet Tier List effectively."
  },
  { 
    title: "Maximizing Event Shop Profits", 
    category: "Updates",
    time: "6 min read",
    description: "Events bring exclusive items that skyrocket in value later. Here is how to grind event currency efficiently before time runs out."
  }
];

export default function GuidesPage() {
  return (
    <div className="w-full max-w-4xl mx-auto text-[var(--color-foreground)] animate-fade-in pb-10">
      <Link href="/" className="inline-flex items-center text-sm text-[var(--color-muted-foreground)] hover:text-white mb-6 transition-colors">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Tools
      </Link>

      <div className="flex items-center gap-3 mb-2">
        <BookOpen className="w-8 h-8 text-[var(--color-primary)]" />
        <h1 className="text-3xl font-bold">Guides</h1>
      </div>
      <p className="text-[var(--color-muted-foreground)] mb-8 max-w-2xl text-sm">
        Quick guides for updates, pets, crops, weather, mutations, trading, and progression. Master every aspect of Grow a Garden.
      </p>

      <div className="flex gap-2 overflow-x-auto pb-4 mb-6 custom-scrollbar">
        {["All", "Progression", "Mutations", "Trading", "Updates", "Pets", "Weather"].map((tag, i) => (
          <button key={i} className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors border ${i === 0 ? 'bg-[var(--color-primary)] text-white border-[var(--color-primary)]' : 'bg-[var(--color-card)] border-[var(--color-border)] text-[var(--color-muted-foreground)] hover:border-[var(--color-primary)]/50 hover:text-white'}`}>
            {tag}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {guides.map((guide, idx) => (
          <div key={idx} className="bg-[var(--color-secondary)] border border-[var(--color-border)] rounded-xl overflow-hidden hover:border-[var(--color-primary)]/50 transition-all hover:shadow-[0_0_15px_rgba(0,168,89,0.1)] group flex flex-col cursor-pointer">
            <div className="h-32 bg-[var(--color-card)] relative overflow-hidden flex items-center justify-center border-b border-[var(--color-border)]">
               <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 to-black/80 z-10"></div>
               <BookOpen className="w-12 h-12 text-[var(--color-muted)] group-hover:scale-110 transition-transform duration-500 relative z-0" />
               <span className="absolute top-3 left-3 z-20 bg-[var(--color-primary)] text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
                 {guide.category}
               </span>
            </div>
            
            <div className="p-5 flex-1 flex flex-col">
              <h2 className="text-xl font-bold mb-2 group-hover:text-[var(--color-primary)] transition-colors line-clamp-2">
                {guide.title}
              </h2>
              <div className="flex items-center text-xs text-[var(--color-muted-foreground)] mb-3 gap-1">
                <Clock className="w-3 h-3" />
                {guide.time}
              </div>
              <p className="text-sm text-[var(--color-muted-foreground)] mb-4 line-clamp-3">
                {guide.description}
              </p>
              <div className="mt-auto flex items-center text-sm font-bold text-[var(--color-primary)] opacity-80 group-hover:opacity-100 transition-opacity">
                Read Guide <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
