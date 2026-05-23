"use client";

import { useState } from "react";
import { Copy } from "lucide-react";

export default function PetWeightCalculator() {
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [showTable, setShowTable] = useState(true);

  const calculateStats = () => {
    const w = parseFloat(weight);
    const a = parseInt(age);
    if (!w || isNaN(a)) return null;

    // Official Formula: W = (Wh/11)(A+10)
    // Therefore: Wh = 11 * W / (A + 10)
    let hatchWeight = (11 * w) / (a + 10);

    let classification = "Small";
    let color = "text-gray-400";
    let borderColor = "border-gray-600";
    if (hatchWeight >= 10) { classification = "Colossal"; color = "text-[#b45309]"; borderColor = "border-[#b45309]"; }
    else if (hatchWeight >= 9) { classification = "Godly"; color = "text-red-600"; borderColor = "border-red-600"; }
    else if (hatchWeight >= 8) { classification = "Titanic"; color = "text-purple-600"; borderColor = "border-purple-600"; }
    else if (hatchWeight >= 7) { classification = "Semi Titanic"; color = "text-indigo-600"; borderColor = "border-indigo-600"; }
    else if (hatchWeight >= 5) { classification = "Huge"; color = "text-blue-600"; borderColor = "border-blue-600"; }
    else if (hatchWeight >= 3) { classification = "Semi Huge"; color = "text-[#daa520]"; borderColor = "border-[#daa520]"; }
    else if (hatchWeight >= 2) { classification = "Large"; color = "text-[#9acd32]"; borderColor = "border-[#9acd32]"; }
    else if (hatchWeight >= 1) { classification = "Normal"; color = "text-green-500"; borderColor = "border-green-700"; }

    let baseWeight = (hatchWeight / 11) * 10;
    let maxWeight100 = (hatchWeight / 11) * (100 + 10);
    let maxWeight125 = (hatchWeight / 11) * (125 + 10);

    return {
      hatchWeightVal: hatchWeight,
      hatchWeight: hatchWeight.toFixed(2),
      baseWeight: baseWeight.toFixed(2),
      maxWeight100: maxWeight100.toFixed(1),
      maxWeight125: maxWeight125.toFixed(0),
      classification,
      color,
      borderColor
    };
  };

  const result = calculateStats();

  const clearSelection = () => {
    setWeight("");
    setAge("");
  };

  return (
    <div className="w-full max-w-4xl mx-auto text-white animate-fade-in pb-20">
      
      <div className="mb-8 mt-4">
        <h1 className="text-3xl font-bold mb-3">Pet Weight Calculator</h1>
        <p className="text-gray-400 text-sm max-w-3xl leading-relaxed">
          Use the Grow a Garden Pet Weight Calculator to calculate pet weight by age, find hatch weight and max weight, and check size classifications like Huge, Titanic, Godly, and Colossal.
        </p>
      </div>

      <div className="flex gap-4 mb-4 bg-[#151c18] border border-[#2a362e] p-6 rounded-none">
        <div className="flex-1">
          <label className="text-sm font-medium mb-2 text-gray-300 block">Weight</label>
          <input 
            type="text" 
            placeholder="Weight (kg)"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="bg-[#151c18] border border-[#2a362e] rounded-sm px-4 py-3 text-sm text-white outline-none focus:border-green-500 transition-colors w-full"
          />
        </div>
        <div className="flex-1">
          <label className="text-sm font-medium mb-2 text-gray-300 block">Age</label>
          <input 
            type="text" 
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="bg-[#151c18] border border-[#2a362e] rounded-sm px-4 py-3 text-sm text-white outline-none focus:border-green-500 transition-colors w-full"
          />
        </div>
      </div>

      <div className="bg-[#09351c] border border-[#0d421d] rounded-none p-8 mb-8">
        <h2 className="text-xl font-bold text-white mb-6">Result</h2>
        
        {!result ? (
          <div className="text-[#fca311] font-medium mb-8">
            Enter weight and age.
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-[#0b2818] border border-[#14452a] p-6 flex flex-col items-center justify-center text-center rounded-sm">
                <div className="text-sm text-gray-300 mb-1">Base Weight (age 0)</div>
                <div className="text-xl font-bold text-green-400">{result.baseWeight} kg</div>
              </div>
              <div className="bg-[#0b2818] border border-[#14452a] p-6 flex flex-col items-center justify-center text-center rounded-sm">
                <div className="text-sm text-gray-300 mb-1">Hatch Weight</div>
                <div className="text-xl font-bold text-green-400">{result.hatchWeight} kg</div>
              </div>
              <div className="bg-[#0b2818] border border-[#14452a] p-6 flex flex-col items-center justify-center text-center rounded-sm">
                <div className="text-sm text-gray-300 mb-1">Max Weight (Age 100)</div>
                <div className="text-xl font-bold text-[#eab308]">{result.maxWeight100} kg</div>
              </div>
              <div className="bg-[#0b2818] border border-[#14452a] p-6 flex flex-col items-center justify-center text-center rounded-sm">
                <div className="text-sm text-gray-300 mb-1">Max Weight (Age 125)</div>
                <div className="text-xl font-bold text-[#eab308]">{result.maxWeight125} kg</div>
              </div>
            </div>

            <div className="flex justify-center mb-8">
              <div className="flex flex-col items-center">
                <div className="text-sm text-gray-300 mb-2">Classification</div>
                <div className={`text-base font-bold border px-8 py-2 inline-block rounded-sm ${result.color} ${result.borderColor}`}>
                  {result.classification}
                </div>
              </div>
            </div>
            
            <div className="flex flex-col items-center gap-4">
              <button 
                onClick={clearSelection} 
                className="bg-[#0b2818] border border-[#14452a] px-5 py-2 text-sm text-gray-300 hover:bg-[#14452a]/50 transition-colors rounded-sm"
              >
                Clear Selection
              </button>
              <button className="bg-[#0b2818] border border-[#14452a] px-4 py-2 text-xs text-gray-300 hover:bg-[#14452a]/50 transition-colors rounded-sm flex items-center gap-2">
                growagardencalculator.ca <Copy className="w-3.5 h-3.5" />
              </button>
            </div>
          </>
        )}
      </div>

      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-white">Weights by Age</h2>
          <button 
            onClick={() => setShowTable(!showTable)} 
            className="bg-[#151c18] border border-[#2a362e] px-4 py-1.5 text-xs text-gray-300 hover:bg-[#2a362e] transition-colors rounded-sm"
          >
            {showTable ? 'Hide table' : 'Show table'}
          </button>
        </div>
        
        {showTable && result && (
          <div className="border border-[#2a362e] bg-[#111111] overflow-hidden max-h-[400px] overflow-y-auto custom-scrollbar relative">
            <table className="w-full text-sm text-left">
              <tbody>
                {Array.from({length: 126}).map((_, index) => {
                  const currentAge = index;
                  const currentWeight = (result.hatchWeightVal / 11) * (currentAge + 10);
                  return (
                    <tr key={index} className="border-b border-[#2a362e] hover:bg-[#1a1a1a] transition-colors">
                      <td className="px-6 py-3.5 text-gray-300 font-medium w-1/2">{currentAge}</td>
                      <td className="px-6 py-3.5 text-gray-300">{currentWeight.toFixed(2)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className="sticky bottom-0 bg-[#111111] border-t border-[#2a362e] py-3 text-center text-xs text-gray-500 w-full z-10">
              Weight progression from Age 0-125
            </div>
          </div>
        )}
      </div>

      {/* Classification Guide Box */}
      <div className="bg-[#151c18] border border-[#2a362e] rounded-none p-8">
        <h2 className="text-2xl font-bold text-white mb-8">Classification Guide</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          <div className="flex flex-col items-center">
             <div className="border border-gray-600 text-gray-300 py-2 w-full text-center text-sm font-bold bg-[#1a231e]">Small</div>
             <div className="text-gray-400 text-xs mt-3">Hatch weight under 1 kg</div>
          </div>
          
          <div className="flex flex-col items-center">
             <div className="border border-green-700 text-green-500 py-2 w-full text-center text-sm font-bold bg-[#1a231e]">Normal</div>
             <div className="text-gray-400 text-xs mt-3">Hatch weight 1 - 1.9 kg</div>
          </div>
          
          <div className="flex flex-col items-center">
             <div className="border border-[#9acd32] text-[#9acd32] py-2 w-full text-center text-sm font-bold bg-[#1a231e]">Large</div>
             <div className="text-gray-400 text-xs mt-3">Hatch weight 2 - 2.9 kg</div>
          </div>
          
          <div className="flex flex-col items-center">
             <div className="border border-[#daa520] text-[#daa520] py-2 w-full text-center text-sm font-bold bg-[#1a231e]">Semi Huge</div>
             <div className="text-gray-400 text-xs mt-3">Hatch weight 3 - 4.9 kg</div>
          </div>
          
          <div className="flex flex-col items-center">
             <div className="border border-blue-700 text-blue-500 py-2 w-full text-center text-sm font-bold bg-[#1a231e]">Huge</div>
             <div className="text-gray-400 text-xs mt-3">Hatch weight 5 - 6.9 kg</div>
          </div>
          
          <div className="flex flex-col items-center">
             <div className="border border-indigo-700 text-indigo-500 py-2 w-full text-center text-sm font-bold bg-[#1a231e]">Semi Titanic</div>
             <div className="text-gray-400 text-xs mt-3">Hatch weight 7 - 7.9 kg</div>
          </div>
          
          <div className="flex flex-col items-center">
             <div className="border border-purple-800 text-purple-600 py-2 w-full text-center text-sm font-bold bg-[#1a231e]">Titanic</div>
             <div className="text-gray-400 text-xs mt-3">Hatch weight 8 - 8.9 kg</div>
          </div>
          
          <div className="flex flex-col items-center">
             <div className="border border-red-800 text-red-600 py-2 w-full text-center text-sm font-bold bg-[#1a231e]">Godly</div>
             <div className="text-gray-400 text-xs mt-3">Hatch weight 9 - 9.9 kg</div>
          </div>
          
          <div className="flex flex-col items-center">
             <div className="border border-[#b45309] text-[#d97706] py-2 w-full text-center text-sm font-bold bg-[#1a231e]">Colossal</div>
             <div className="text-gray-400 text-xs mt-3">Hatch weight 10+ kg</div>
          </div>
          
        </div>

        <div className="text-center flex flex-col items-center">
          <p className="text-gray-400 text-sm italic mb-1">A pet's classification comes from its hatch weight.</p>
          <p className="text-gray-400 text-sm italic mb-8">It sets starting stats, growth rate, maximum size, and the potential strength of its abilities.</p>
          
          <button className="bg-transparent border border-[#2a362e] text-gray-400 hover:text-white text-xs py-1.5 px-4 rounded transition-colors flex items-center gap-2">
            growagardencalculator.ca <div className="border border-gray-600 rounded p-0.5"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg></div>
          </button>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-12 mb-8">
        <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-200 mb-2">What does the Pet Weight Calculator do?</h3>
            <p className="text-sm text-gray-400">It helps you determine your pet's underlying hatch weight and size classification based on its current age and weight.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-200 mb-2">Why does pet weight matter?</h3>
            <p className="text-sm text-gray-400">Pet weight influences their classification, which determines their starting stats, growth rates, maximum size, and the effectiveness of their unique abilities.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-200 mb-2">How do I calculate pet abilities?</h3>
            <p className="text-sm text-gray-400">You can use our dedicated Pet Ability Calculator tool to see how your pet's specific abilities scale with age and weight.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-200 mb-2">What do I need to calculate pet weights?</h3>
            <p className="text-sm text-gray-400">You only need to input your pet's current weight (in kg) and its current age.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-200 mb-2">What is Hatch Weight?</h3>
            <p className="text-sm text-gray-400">Hatch weight is the inferred weight of your pet at age 1. It is the core metric used to determine its size classification.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-200 mb-2">How is weight at other ages calculated?</h3>
            <p className="text-sm text-gray-400">Weight increases as the pet ages based on a specific growth factor tied to its hatch weight classification.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-200 mb-2">How are the size classifications determined?</h3>
            <p className="text-sm text-gray-400">Classifications are strictly determined by the pet's hatch weight, ranging from Small (under 1kg) to Colossal (10+ kg).</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-200 mb-2">What is “Max Weight”?</h3>
            <p className="text-sm text-gray-400">Max Weight is the theoretical maximum weight your pet can reach when it attains its maximum possible age.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-200 mb-2">Does the Ostrich pet affect weight calculation?</h3>
            <p className="text-sm text-gray-400">The Ostrich pet has a unique ability that can influence weight mechanics. Currently, this calculator focuses on baseline growth.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-200 mb-2">Can I see weights from age 1 to 125?</h3>
            <p className="text-sm text-gray-400">While this specific calculator gives you the hatch and max weight, you can estimate intermediate weights using the linear growth factor.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-200 mb-2">What are the Quick Start presets?</h3>
            <p className="text-sm text-gray-400">They are convenient buttons that pre-fill the calculator with typical values for Small, Huge, and Titanic pets to quickly see how the math works.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-200 mb-2">Does this send my pet data anywhere?</h3>
            <p className="text-sm text-gray-400">No, all calculations are performed locally in your browser. Your data is never saved or sent to any servers.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-200 mb-2">My result looks wrong. What should I check?</h3>
            <p className="text-sm text-gray-400">Ensure that you have entered the correct current weight (in kg) and the correct current age. A typo in either field will dramatically skew the results.</p>
          </div>
        </div>
      </div>

      {/* Glossary Section */}
      <div className="mt-12 mb-8 bg-[#151c18] border border-[#2a362e] rounded-none p-8">
        <h2 className="text-2xl font-bold text-white mb-6">Glossary</h2>
        <div className="space-y-4 text-sm">
          <div>
            <strong className="text-green-500">Hatch Weight:</strong> <span className="text-gray-400">inferred weight at age 1 from your current state.</span>
          </div>
          <div>
            <strong className="text-green-500">Projected Weight:</strong> <span className="text-gray-400">modeled weight at a target age given your current state.</span>
          </div>
          <div>
            <strong className="text-green-500">Classification:</strong> <span className="text-gray-400">size band determined by hatch weight.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
