"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Search, ShieldAlert, ShieldCheck } from "lucide-react";

export default function PetDupeCheckPage() {
  const [petId, setPetId] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "clean" | "duped">("idle");

  const checkDupe = () => {
    if (!petId) return;
    setStatus("loading");
    
    // Simulate real-time checking API
    setTimeout(() => {
      // Mock logic: if it ends in 9, it's duped
      if (petId.endsWith("9")) {
        setStatus("duped");
      } else {
        setStatus("clean");
      }
    }, 1500);
  };

  return (
    <div className="w-full max-w-4xl mx-auto text-[var(--color-foreground)] animate-fade-in pb-10">
      <Link href="/" className="inline-flex items-center text-sm text-[var(--color-muted-foreground)] hover:text-white mb-6 transition-colors">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Tools
      </Link>

      <h1 className="text-3xl font-bold mb-2">Pet Dupe Check</h1>
      <p className="text-[var(--color-muted-foreground)] mb-8 max-w-2xl text-sm">
        Complete list of all known duplicated pets along with an automatic checking calculator.
      </p>

      <div className="space-y-8">
        <div className="bg-[var(--color-secondary)] p-6 rounded-xl border border-[var(--color-border)]">
          <h2 className="text-xl font-bold mb-4">Check a Pet</h2>
          <div className="flex gap-4 flex-col sm:flex-row">
            <input 
              type="text" 
              placeholder="Enter Pet ID or Serial Number (e.g. 1048209)" 
              value={petId}
              onChange={(e) => setPetId(e.target.value)}
              className="flex-1 bg-[var(--color-card)] border border-[var(--color-border)] rounded-md px-4 py-3 outline-none focus:border-[var(--color-primary)] font-mono"
            />
            <button 
              onClick={checkDupe}
              disabled={status === "loading" || !petId}
              className="bg-[var(--color-primary)] text-white px-8 py-3 rounded-md font-bold hover:bg-green-600 transition-colors disabled:opacity-50 whitespace-nowrap"
            >
              {status === "loading" ? "Checking..." : "Verify Pet"}
            </button>
          </div>

          <div className="mt-6">
            {status === "clean" && (
              <div className="bg-green-500/10 border border-green-500/50 rounded-lg p-6 flex flex-col items-center justify-center text-center">
                <ShieldCheck className="w-16 h-16 text-green-500 mb-4" />
                <h3 className="text-2xl font-bold text-green-500 mb-2">Clean!</h3>
                <p className="text-green-400/80">This pet serial number does not match any known duplicated pets in the database.</p>
              </div>
            )}
            
            {status === "duped" && (
              <div className="bg-red-500/10 border border-red-500/50 rounded-lg p-6 flex flex-col items-center justify-center text-center">
                <ShieldAlert className="w-16 h-16 text-red-500 mb-4 animate-pulse" />
                <h3 className="text-2xl font-bold text-red-500 mb-2">Warning: Duped Pet</h3>
                <p className="text-red-400/80">This serial number is associated with a known duplicated item. Trading for this pet may result in its deletion.</p>
              </div>
            )}
          </div>
        </div>

        <div className="bg-[var(--color-secondary)] p-6 rounded-xl border border-[var(--color-border)]">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Known Dupe Database</h2>
            <div className="relative w-48">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--color-muted-foreground)]" />
              <input 
                type="text" 
                placeholder="Search..." 
                className="w-full pl-9 pr-4 py-1.5 bg-[var(--color-card)] border border-[var(--color-border)] rounded-md outline-none focus:border-[var(--color-primary)] text-sm"
              />
            </div>
          </div>
          
          <div className="border border-[var(--color-border)] rounded-lg overflow-hidden">
            <table className="w-full text-left text-sm">
              <thead className="bg-[var(--color-card)] text-[var(--color-muted-foreground)]">
                <tr>
                  <th className="px-4 py-3 font-medium">Pet Name</th>
                  <th className="px-4 py-3 font-medium">Serial ID</th>
                  <th className="px-4 py-3 font-medium">Dupe Date</th>
                  <th className="px-4 py-3 font-medium text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--color-border)]">
                {[1, 2, 3, 4, 5].map((i) => (
                  <tr key={i} className="hover:bg-[var(--color-card)]/50 transition-colors">
                    <td className="px-4 py-3 flex items-center gap-2">
                      <img src="https://tr.rbxcdn.com/180DAY-2db67656a75bd70bdab7052f0cddbe9c/150/150/Image/Png/noFilter" alt="Pet" className="w-6 h-6 object-contain" />
                      Titanic Monkey
                    </td>
                    <td className="px-4 py-3 font-mono text-xs">882319{i}</td>
                    <td className="px-4 py-3 text-[var(--color-muted-foreground)]">May 12, 2026</td>
                    <td className="px-4 py-3 text-right text-red-500 font-medium">Confirmed</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
