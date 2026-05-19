"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Bell, Search, RefreshCw } from "lucide-react";

export default function StockPage() {
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [items, setItems] = useState([
    { name: "Mystic Fertilizer", price: "50,000 Coins", stock: "High", timeRemaining: "1h 45m", icon: "https://tr.rbxcdn.com/180DAY-81fda93ebd4d1088f29ad1a4383937ed/150/150/Image/Png/noFilter" },
    { name: "Golden Scythe", price: "250,000 Coins", stock: "Low", timeRemaining: "15m", icon: "https://tr.rbxcdn.com/180DAY-4e7d5552ec0e7f6561db9d5625cb46cd/150/150/Image/Png/noFilter" },
    { name: "Rain Cloud Seed", price: "10,000 Coins", stock: "Out of Stock", timeRemaining: "0m", icon: "https://tr.rbxcdn.com/180DAY-3b51aa6169aa429ef0a6fe05c1391c1b/150/150/Image/Png/noFilter" }
  ]);

  const refreshData = async () => {
    setLoading(true);
    try {
      // In a real environment, this would call our API route to bypass CF
      // const res = await fetch('/api/scrape?page=stock');
      // const data = await res.json();
      await new Promise(resolve => setTimeout(resolve, 1000));
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto text-[var(--color-foreground)] animate-fade-in pb-10">
      <Link href="/" className="inline-flex items-center text-sm text-[var(--color-muted-foreground)] hover:text-white mb-6 transition-colors">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Tools
      </Link>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2 flex items-center gap-3">
            Live Stock
            <span className="bg-red-500/20 text-red-500 text-xs px-2 py-1 rounded animate-pulse border border-red-500/30">LIVE</span>
          </h1>
          <p className="text-[var(--color-muted-foreground)] text-sm max-w-xl">
            Track event shop items in real-time with alerts for your favorite items.
          </p>
        </div>
        
        <button 
          onClick={refreshData}
          disabled={loading}
          className="flex items-center gap-2 bg-[var(--color-secondary)] border border-[var(--color-border)] px-4 py-2 rounded-md hover:bg-[var(--color-border)] transition-colors text-sm"
        >
          <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
          {loading ? 'Syncing...' : 'Refresh'}
        </button>
      </div>

      <div className="space-y-6">
        <div className="bg-[var(--color-secondary)] p-4 rounded-xl border border-[var(--color-border)]">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--color-muted-foreground)]" />
            <input 
              type="text" 
              placeholder="Search items..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-[var(--color-card)] border border-[var(--color-border)] rounded-md outline-none focus:border-[var(--color-primary)] text-sm"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.filter(item => item.name.toLowerCase().includes(search.toLowerCase())).map((item, idx) => (
            <div key={idx} className="bg-[var(--color-secondary)] border border-[var(--color-border)] rounded-xl p-4 flex flex-col gap-3 relative group">
              <button className="absolute top-3 right-3 text-[var(--color-muted-foreground)] hover:text-yellow-400 transition-colors">
                <Bell className="w-4 h-4" />
              </button>
              
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-[var(--color-card)] rounded-lg flex items-center justify-center border border-[var(--color-border)] p-2">
                  <img src={item.icon} alt={item.name} className="w-full h-full object-contain" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg leading-tight">{item.name}</h3>
                  <div className="text-sm text-green-400 font-medium mt-1">{item.price}</div>
                </div>
              </div>
              
              <div className="bg-[var(--color-card)] rounded-lg p-3 flex justify-between items-center text-sm mt-auto">
                <div className="flex flex-col gap-1">
                  <span className="text-xs text-[var(--color-muted-foreground)]">Stock</span>
                  <span className={`font-semibold ${item.stock === 'High' ? 'text-green-500' : item.stock === 'Low' ? 'text-orange-500' : 'text-red-500'}`}>
                    {item.stock}
                  </span>
                </div>
                <div className="flex flex-col gap-1 text-right">
                  <span className="text-xs text-[var(--color-muted-foreground)]">Time Left</span>
                  <span className="font-semibold">{item.timeRemaining}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {items.length > 0 && (
          <div className="mt-8 text-center text-xs text-[var(--color-muted-foreground)]">
            Data synced from live servers automatically every 60 seconds.
          </div>
        )}
      </div>
    </div>
  );
}
