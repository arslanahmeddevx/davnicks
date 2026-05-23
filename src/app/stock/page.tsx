"use client";

import { useState } from "react";
import { Clock, RefreshCw, Check, Volume2, Bell } from "lucide-react";

const getPlaceholder = (name: string) => {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  const h1 = Math.abs(hash % 360);
  const h2 = Math.abs((hash + 40) % 360);
  
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="hsl(${h2}, 70%, 30%)" rx="20" /><circle cx="50" cy="50" r="30" fill="hsl(${h1}, 70%, 50%)" /></svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

export default function StockPage() {
  const [volume, setVolume] = useState(8);
  const [showAlertsSettings, setShowAlertsSettings] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const stockItems = [
    { name: "Easter Candy Carrot", rarity: "Common", color: "text-gray-400", border: "border-gray-500", stock: 8 , img: "https://tr.rbxcdn.com/180DAY-bdd7642b7974a903d7dce1064e90b2f9/150/150/Image/Png/noFilter" },
    { name: "Easter Chocolate Berry", rarity: "Uncommon", color: "text-green-500", border: "border-green-500", stock: 3 , img: "https://tr.rbxcdn.com/180DAY-f63b3d2717b04989a0e10b4a8d997493/150/150/Image/Png/noFilter" },
    { name: "Easter Gumball", rarity: "Rare", color: "text-[#00a8ff]", border: "border-[#00a8ff]", stock: 0 , img: "https://tr.rbxcdn.com/180DAY-7239e6d39a9865c73abfe4e213d14341/150/150/Image/Png/noFilter" },
    { name: "Easter Liquorice", rarity: "Rare", color: "text-[#00a8ff]", border: "border-[#00a8ff]", stock: 0 , img: "https://tr.rbxcdn.com/180DAY-8f78b436470b087d17582de05ef64ced/150/150/Image/Png/noFilter" },
    { name: "Beaver", rarity: "Rare", color: "text-[#00a8ff]", border: "border-[#00a8ff]", stock: 0 , img: "https://tr.rbxcdn.com/180DAY-6d2c38d42f4b27e6516d255f042fa771/150/150/Image/Png/noFilter" },
    { name: "Chocolate Sprinkler", rarity: "Rare", color: "text-[#00a8ff]", border: "border-[#00a8ff]", stock: 0 , img: "https://tr.rbxcdn.com/180DAY-815fd09492f52ac8b5aa96dd916564c0/150/150/Image/Png/noFilter" },
    { name: "Easter Sugar Melon", rarity: "Legendary", color: "text-orange-400", border: "border-orange-500", stock: 2 , img: "https://tr.rbxcdn.com/180DAY-a7517defa1cca940a48d42ea0f673821/150/150/Image/Png/noFilter" },
    { name: "Easter Chocolate Coconut", rarity: "Legendary", color: "text-orange-400", border: "border-orange-500", stock: 0 , img: "https://tr.rbxcdn.com/180DAY-12382f1d3167a7e821938955e631c3d2/150/150/Image/Png/noFilter" },
    { name: "Gummy Bear", rarity: "Legendary", color: "text-orange-400", border: "border-orange-500", stock: 0 , img: "https://tr.rbxcdn.com/180DAY-f5bb10fce0aeff46cb054a6def4e922f/150/150/Image/Png/noFilter" },
    { name: "Easter Gummy Cactus", rarity: "Mythical", color: "text-fuchsia-500", border: "border-fuchsia-500", stock: 0 , img: "https://tr.rbxcdn.com/180DAY-a878d0343a26f44baeee8c595b40fc0f/150/150/Image/Png/noFilter" },
    { name: "Easter Egg Melon", rarity: "Mythical", color: "text-fuchsia-500", border: "border-fuchsia-500", stock: 0 , img: "https://tr.rbxcdn.com/180DAY-dcc57500e964f6920b7511c8ce760a9b/150/150/Image/Png/noFilter" },
    { name: "Hootsie Roll", rarity: "Mythical", color: "text-fuchsia-500", border: "border-fuchsia-500", stock: 0 , img: "https://tr.rbxcdn.com/180DAY-c63c2292959ac60ee4f108fcd28347b4/150/150/Image/Png/noFilter" },
    { name: "Easter Sour Lemon", rarity: "Divine", color: "text-blue-600", border: "border-blue-600", stock: 0 , img: "https://tr.rbxcdn.com/180DAY-562d787841543d8ee2f0f60354ccadaf/150/150/Image/Png/noFilter" },
    { name: "Springtide Egg", rarity: "Divine", color: "text-blue-600", border: "border-blue-600", stock: 0 , img: "https://tr.rbxcdn.com/180DAY-2c1d626d108efb5d71a6046a89e7fe3b/150/150/Image/Png/noFilter" },
    { name: "Easter Eggfruit", rarity: "Prismatic", color: "text-red-500", border: "border-red-500", stock: 0 , img: "https://tr.rbxcdn.com/180DAY-fbaec6ff8dd560d1fbe3606355107be2/150/150/Image/Png/noFilter" },
  ];

  
  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 1000);
  };

  const playSound = () => {
    try {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioContextClass) return;
      const ctx = new AudioContextClass();
      const osc = ctx.createOscillator();
      const gainNode = ctx.createGain();
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(880, ctx.currentTime); // A5 note
      gainNode.gain.setValueAtTime(volume / 100, ctx.currentTime);
      
      osc.connect(gainNode);
      gainNode.connect(ctx.destination);
      
      osc.start();
      osc.stop(ctx.currentTime + 2.0); // short beep
    } catch (e) {
      console.log('Audio not supported or interaction required');
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto animate-fade-in pb-20 pt-8 px-4 font-sans text-white">
      <style>{`
        input[type=range] {
          -webkit-appearance: none;
          background: transparent;
        }
        input[type=range]::-webkit-slider-runnable-track {
          width: 100%;
          height: 4px;
          background: #333;
          border-radius: 2px;
        }
        input[type=range]::-webkit-slider-thumb {
          -webkit-appearance: none;
          height: 12px;
          width: 12px;
          border-radius: 50%;
          background: #ffffff;
          margin-top: -4px;
          cursor: pointer;
          box-shadow: -100vw 0 0 100vw #22c55e;
        }
        .range-wrapper {
          overflow: hidden;
          border-radius: 2px;
          display: flex;
          align-items: center;
          height: 12px;
        }
      `}</style>

      {/* Header Info */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold mb-3 text-white">Event Stock</h1>
        <p className="text-gray-400 text-sm mb-4">
          Track event shop items in real-time and receive instant notifications.
        </p>
        <p className="text-gray-400 text-sm max-w-3xl leading-relaxed">
          Stay updated with the latest Grow a Garden Easter 2026 event shop stock. This page syncs live with the in-game shops, refreshing every 5 minutes to ensure you never miss out on exclusive items.
        </p>
      </div>

      {/* Controls Row */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-4 gap-4">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <Clock className="w-4 h-4" /> Restocks in 0s
          </div>
          <div className="flex items-center gap-2 text-red-500 text-sm">
            <div className="w-2 h-2 rounded-full bg-red-500"></div> Unavailable 21d ago
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={handleRefresh} disabled={isRefreshing} className="flex items-center gap-2 px-4 py-2 bg-[#1a1a1a] border border-[#333] text-white font-medium text-sm hover:bg-[#222] transition-colors rounded-sm disabled:opacity-50">
            <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} /> Refresh
          </button>
          
          {showAlertsSettings ? (
            <button onClick={() => setShowAlertsSettings(false)} className="flex items-center gap-2 px-5 py-2 bg-[#16a34a] text-white font-medium text-sm hover:bg-green-500 transition-colors rounded-sm w-[100px] justify-center">
              <Check className="w-4 h-4" /> Done
            </button>
          ) : (
            <button onClick={() => setShowAlertsSettings(true)} className="flex items-center gap-2 px-4 py-2 bg-[#1a1a1a] border border-[#333] text-white font-medium text-sm hover:bg-[#222] transition-colors rounded-sm w-[100px] justify-center">
              <Bell className="w-4 h-4" /> Alerts
            </button>
          )}
        </div>
      </div>

      {/* Volume Row */}
      {showAlertsSettings && (
        <div className="border border-[#1a1a1a] bg-[#0c0c0c] p-4 mb-6 flex flex-col md:flex-row items-center justify-between gap-4 rounded-sm animate-fade-in">
          <div className="flex-1 w-full max-w-md">
            <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
              <Volume2 className="w-4 h-4" /> Alert volume: {volume}%
            </div>
            <div className="range-wrapper w-full">
              <input 
                type="range" 
                min="0" 
                max="100" 
                value={volume}
                onChange={(e) => setVolume(Number(e.target.value))}
                className="w-full"
              />
            </div>
          </div>
          <button onClick={playSound} className="px-4 py-2 bg-[#0c0c0c] border border-[#333] text-gray-300 text-sm hover:bg-[#1a1a1a] transition-colors rounded-sm whitespace-nowrap">
            Test alert sound
          </button>
        </div>
      )}

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[10px]">
        {stockItems.map((item, idx) => {
          const inStock = item.stock > 0;
          return (
            <div key={idx} className={`flex items-center justify-between p-5 bg-[#0a0a0a] hover:bg-[#111111] transition-colors border rounded-sm ${inStock ? item.border : 'border-[#1a1a1a]'}`}>
              <div className="flex items-center gap-5">
                <div className="w-10 h-10 flex items-center justify-center">
                  <img src={item.img} alt={item.name} className="w-full h-full object-contain filter drop-shadow-md" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[15px] font-semibold text-white tracking-wide">{item.name}</span>
                  <span className={`text-[13px] ${item.color} mt-0.5`}>{item.rarity}</span>
                </div>
              </div>
              <div className="font-medium text-sm">
                {inStock ? (
                  <span className="text-green-500">x{item.stock} Stock</span>
                ) : (
                  <span className="text-red-500">No stock</span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
