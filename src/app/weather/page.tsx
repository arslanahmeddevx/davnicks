"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, CloudRain, Sun, Wind, CloudLightning, Snowflake } from "lucide-react";

const weatherEvents = [
  { name: "Sunny Day", icon: <Sun className="w-8 h-8 text-yellow-400" />, effect: "+10% Crop Growth Speed", description: "A beautiful sunny day. All plants grow slightly faster." },
  { name: "Light Rain", icon: <CloudRain className="w-8 h-8 text-blue-400" />, effect: "+20% Crop Yield", description: "Gentle rain hydrates the soil. Crops yield more produce when harvested." },
  { name: "Thunderstorm", icon: <CloudLightning className="w-8 h-8 text-purple-400" />, effect: "+50% Mutation Chance", description: "The electrical energy in the air causes strange mutations in plants." },
  { name: "Strong Winds", icon: <Wind className="w-8 h-8 text-gray-400" />, effect: "-10% Hatch Time", description: "The wind scatters seeds and makes eggs hatch slightly faster." },
  { name: "Winter Frost", icon: <Snowflake className="w-8 h-8 text-cyan-400" />, effect: "Ice Crops Spawning", description: "Special winter crops have a chance to spawn instead of normal ones." }
];

export default function WeatherPage() {
  const [activeWeather, setActiveWeather] = useState(weatherEvents[1]);

  return (
    <div className="w-full max-w-4xl mx-auto text-[var(--color-foreground)] animate-fade-in pb-10">
      <Link href="/" className="inline-flex items-center text-sm text-[var(--color-muted-foreground)] hover:text-white mb-6 transition-colors">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Tools
      </Link>

      <h1 className="text-3xl font-bold mb-2">Weather Events</h1>
      <p className="text-[var(--color-muted-foreground)] mb-8 max-w-2xl text-sm">
        Browse all weather events to find effects and boosts. See what's currently active.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          <h2 className="text-xl font-bold mb-2">All Weather Types</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {weatherEvents.map((weather, idx) => (
              <div 
                key={idx} 
                onClick={() => setActiveWeather(weather)}
                className={`bg-[var(--color-secondary)] border rounded-xl p-4 cursor-pointer transition-all hover:-translate-y-1 ${
                  activeWeather.name === weather.name ? 'border-[var(--color-primary)] ring-1 ring-[var(--color-primary)]' : 'border-[var(--color-border)] hover:border-gray-500'
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-[var(--color-card)] p-2 rounded-lg border border-[var(--color-border)]">
                    {weather.icon}
                  </div>
                  <h3 className="font-bold text-lg">{weather.name}</h3>
                </div>
                <div className="text-sm text-green-400 font-medium mb-1">{weather.effect}</div>
                <p className="text-xs text-[var(--color-muted-foreground)]">{weather.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-[#022c15] border border-[#047857] rounded-xl p-6 text-center shadow-[0_0_20px_rgba(4,120,87,0.2)] sticky top-6">
            <h3 className="font-bold text-lg text-green-500 mb-1">Currently Active (Simulated)</h3>
            <div className="text-[10px] text-green-500/60 uppercase tracking-widest mb-6 border-b border-green-800/50 pb-2">Real-time Data</div>
            
            <div className="flex justify-center mb-4">
               <div className="bg-black/30 p-4 rounded-full border border-green-800/50 shadow-inner">
                 {activeWeather.icon}
               </div>
            </div>
            
            <div className="text-2xl font-bold text-white mb-2">
              {activeWeather.name}
            </div>
            
            <div className="text-sm font-bold text-green-400 bg-green-500/10 py-2 px-4 rounded-lg inline-block border border-green-500/20 mb-4">
              {activeWeather.effect}
            </div>
            
            <p className="text-sm text-green-300/80 mb-6 px-4">
              {activeWeather.description}
            </p>
            
            <div className="flex justify-between items-center text-xs text-green-600 border-t border-green-900/50 pt-4">
              <span>Time Remaining:</span>
              <span className="font-mono font-bold text-green-400">45:20</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
