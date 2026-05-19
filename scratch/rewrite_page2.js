const fs = require('fs');

let code = fs.readFileSync('src/app/pet-ability-calculator/page.tsx', 'utf-8');

// Update Defaults
code = code.replace(
  'const [filterCategory, setFilterCategory] = useState("Rare"); // Default based on image',
  'const [filterCategory, setFilterCategory] = useState("All");'
);
code = code.replace(
  'const [weight, setWeight] = useState("100");\n  const [age, setAge] = useState("");\n  const [maxAge, setMaxAge] = useState("");',
  'const [weight, setWeight] = useState("0");\n  const [age, setAge] = useState("0");\n  const [maxAge, setMaxAge] = useState("100");'
);

// Update Boosts Section
const oldBoosts = `<div id="boosts-section" className="bg-[#151c18] rounded-xl border border-[#2a362e] p-4 w-full scroll-mt-20">
          <h2 className="text-xl font-bold text-white mb-4">Boosts</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {boosts.map((boost, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedBoost(boost)}
                className={\`p-3 rounded-lg border text-left transition-all hover:bg-[#25302a] flex flex-col justify-center items-center \${
                  selectedBoost?.name === boost.name
                    ? "border-green-500 bg-[#1a2d21]"
                    : "border-[#2a362e] bg-[#1e2722]"
                }\`}
              >
                <img src={\`https://placehold.co/100x100?text=\${encodeURIComponent(boost.name)}\`} alt={boost.name} className="w-12 h-12 object-contain mb-2 rounded" />
                <div className="font-bold text-sm text-white text-center whitespace-normal break-words leading-tight mb-1">{boost.name}</div>
                <div className={\`text-[10px] font-bold mb-2 uppercase tracking-wide
                  \\\${boost.rarity === 'Rare' ? 'text-[#00bfff]' : ''}
                  \\\${boost.rarity === 'Legendary' ? 'text-yellow-400' : ''}
                  \\\${boost.rarity === 'Divine' ? 'text-red-400' : ''}
                  \\\${boost.rarity === 'Prismatic' ? 'text-purple-400' : ''}
                \`}>
                  {boost.rarity}
                </div>
                <div className="text-xs text-gray-400 text-center">{boost.value}</div>
              </button>
            ))}
          </div>
        </div>`;

const newBoosts = `{/* Boosts Section */}
        <div id="boosts-section" className="bg-[#1a231e] rounded-xl border border-[#2a362e] p-6 w-full scroll-mt-20">
          <h2 className="text-2xl font-bold text-white mb-6">Boosts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {boosts.map((boost, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedBoost(boost)}
                className={\`relative p-4 rounded-lg border text-left transition-all hover:bg-[#25302a] flex flex-row items-center gap-4 \${
                  selectedBoost?.name === boost.name
                    ? "border-[#00bfff] bg-[#1a231e]"
                    : "border-[#2a362e] bg-transparent"
                }\`}
              >
                {selectedBoost?.name === boost.name && (
                  <Check className="absolute top-2 left-2 w-4 h-4 text-[#00bfff]" />
                )}
                <img src={\`https://placehold.co/100x100/666666/FFFFFF?text=\${encodeURIComponent(boost.name.split(' ')[0])}\`} alt={boost.name} className="w-10 h-10 object-contain rounded" />
                <div className="flex flex-col">
                  <div className="font-bold text-sm text-white mb-1">{boost.name}</div>
                  <div className={\`text-[10px] font-bold mb-1 uppercase tracking-wide
                    \\\${boost.rarity === 'Rare' ? 'text-[#00bfff]' : ''}
                    \\\${boost.rarity === 'Legendary' ? 'text-yellow-400' : ''}
                    \\\${boost.rarity === 'Divine' ? 'text-red-400' : ''}
                    \\\${boost.rarity === 'Prismatic' ? 'text-purple-400' : ''}
                  \`}>
                    {boost.rarity}
                  </div>
                  <div className="text-xs text-gray-400">{boost.value}</div>
                </div>
              </button>
            ))}
          </div>
        </div>`;

code = code.replace(oldBoosts, newBoosts);

// Update Inputs Section
const oldInputs = `<div id="inputs-section" className="grid grid-cols-3 gap-4 w-full scroll-mt-20">
          <div className="bg-[#151c18] rounded-xl border border-[#2a362e] p-3 flex flex-col">
            <label className="text-xs text-gray-400 mb-2 font-semibold">Weight (kg)</label>
            <input 
              type="text" 
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="bg-[#1e2722] border border-[#2a362e] rounded-md px-3 py-2 text-sm text-white outline-none focus:border-green-500 transition-colors w-full"
            />
          </div>
          <div className="bg-[#151c18] rounded-xl border border-[#2a362e] p-3 flex flex-col">
            <label className="text-xs text-gray-400 mb-2 font-semibold">Age</label>
            <input 
              type="text" 
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="bg-[#1e2722] border border-[#2a362e] rounded-md px-3 py-2 text-sm text-white outline-none focus:border-green-500 transition-colors w-full"
            />
          </div>
          <div className="bg-[#151c18] rounded-xl border border-[#2a362e] p-3 flex flex-col">
            <label className="text-xs text-gray-400 mb-2 font-semibold">Max Age</label>
            <input 
              type="text" 
              value={maxAge}
              onChange={(e) => setMaxAge(e.target.value)}
              className="bg-[#1e2722] border border-[#2a362e] rounded-md px-3 py-2 text-sm text-white outline-none focus:border-green-500 transition-colors w-full"
            />
          </div>
        </div>`;

const newInputs = `<div id="inputs-section" className="flex flex-col md:flex-row gap-4 md:gap-8 w-full scroll-mt-20">
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
        </div>`;

code = code.replace(oldInputs, newInputs);


const resultStart = `<div id="result-section" className="bg-[#051c0e] rounded-xl border border-[#103b20] p-6 text-center w-full scroll-mt-20">
          <h2 className="text-xl font-bold text-white text-left mb-6">Result</h2>
          {selectedPet ? (
            <div className="text-left mb-8 bg-[#151c18] border border-[#2a362e] p-6 rounded-xl flex flex-col md:flex-row gap-6 items-start">
              <div className="w-24 h-24 bg-black/40 rounded-lg flex items-center justify-center shrink-0 border border-white/10 p-2">
                 {selectedPet.image ? <img src={selectedPet.image} alt={selectedPet.name} className="w-full h-full object-contain" /> : <span className="text-3xl text-gray-500">{selectedPet.name.charAt(0)}</span>}
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-black text-white mb-2">{selectedMutation !== 'Normal' ? selectedMutation + ' ' : ''}{selectedPet.name}</h3>
                <div className="flex gap-4 mb-4">
                  <span className="text-sm text-gray-400">Rarity: <strong className="text-white">{selectedPet.rarity}</strong></span>
                  <span className="text-sm text-gray-400">Age: <strong className="text-white">{age || 0}</strong> {maxAge ? \`/ \${maxAge}\` : ''}</span>
                  <span className="text-sm text-gray-400">Weight: <strong className="text-white">{weight || 0} kg</strong></span>
                </div>
                {selectedBoost && (
                  <div className="text-sm text-blue-400 mb-4 flex items-center gap-2">
                    <span className="px-2 py-1 bg-blue-500/20 rounded">Active Boost: {selectedBoost.name} ({selectedBoost.value})</span>
                  </div>
                )}
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                   <div className="bg-[#1a231e] p-4 rounded-lg border border-[#2a362e]">
                     <div className="text-xs text-gray-500 uppercase font-bold mb-1">Ability Power</div>
                     <div className="text-xl font-black text-green-400">
                       {Math.floor(
                         (selectedPet.rarity === 'Common' ? 10 : selectedPet.rarity === 'Uncommon' ? 20 : selectedPet.rarity === 'Rare' ? 30 : selectedPet.rarity === 'Legendary' ? 40 : selectedPet.rarity === 'Mythical' ? 50 : 60) * 
                         (1 + (parseInt(age) || 0) * 0.05) * 
                         (selectedMutation !== 'Normal' ? 1.5 : 1) * 
                         (selectedBoost ? (selectedBoost.name.includes('Small') ? 1.1 : selectedBoost.name.includes('Medium') ? 1.2 : selectedBoost.name.includes('Large') ? 1.3 : 1) : 1)
                       )}
                     </div>
                   </div>
                   <div className="bg-[#1a231e] p-4 rounded-lg border border-[#2a362e]">
                     <div className="text-xs text-gray-500 uppercase font-bold mb-1">Yield Bonus</div>
                     <div className="text-xl font-black text-yellow-400">
                       +{Math.floor(5 * (1 + (parseInt(age) || 0) * 0.02))}%
                     </div>
                   </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-green-500 font-bold mb-8 text-left">
              Select a pet to begin.
            </div>
          )}

          <div className="text-left mt-10">`;

const newResultStart = `<div id="result-section" className="bg-[#0b2818] rounded-none border border-[#14452a] p-8 w-full scroll-mt-20 relative shadow-xl">
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
                    <span className="text-sm font-bold text-green-400">1 kg</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-400 w-28">Max Weight:</span>
                    <span className="text-sm font-bold text-yellow-500">10 kg</span>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-sm text-gray-400 w-28">Active Boosts:</span>
                    {selectedBoost ? (
                       <img src={\`https://placehold.co/100x100/666666/FFFFFF?text=\${encodeURIComponent(selectedBoost.name.split(' ')[0])}\`} className="w-6 h-6 rounded-full" />
                    ) : (
                       <span className="text-sm text-gray-600">None</span>
                    )}
                  </div>
                </div>
              </div>

              {/* Abilities */}
              <div className="mb-12">
                <div className="text-[#fca311] text-sm font-bold mb-3">Abilities (Age {maxAge || 100}):</div>
                <div className="text-white font-medium">Every 30.5s, eats a carrot for 6x value bonus!</div>
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

          {!selectedPet && <div className="text-left mt-10">`;

// Remove the closing tags from the old action buttons
const oldQuickStartEnd = `              <button onClick={() => document.getElementById('pets-section')?.scrollIntoView({ behavior: 'smooth' })} className="bg-[#151c18] border border-[#2a362e] text-green-400 hover:text-green-300 text-xs font-bold py-3 rounded-lg hover:bg-[#1e2722] transition-colors">
                Change Pet
              </button>
              <button onClick={() => document.getElementById('mutations-section')?.scrollIntoView({ behavior: 'smooth' })} className="bg-[#151c18] border border-[#2a362e] text-green-400 hover:text-green-300 text-xs font-bold py-3 rounded-lg hover:bg-[#1e2722] transition-colors">
                Change Mutation
              </button>
              <button onClick={() => document.getElementById('boosts-section')?.scrollIntoView({ behavior: 'smooth' })} className="bg-[#151c18] border border-[#2a362e] text-green-400 hover:text-green-300 text-xs font-bold py-3 rounded-lg hover:bg-[#1e2722] transition-colors">
                Change Boosts
              </button>
              <button onClick={() => document.getElementById('inputs-section')?.scrollIntoView({ behavior: 'smooth' })} className="bg-[#151c18] border border-[#2a362e] text-green-400 hover:text-green-300 text-xs font-bold py-3 rounded-lg hover:bg-[#1e2722] transition-colors">
                Change Age/Weight
              </button>
            </div>
          </div>
        </div>`;
const newQuickStartEnd = `              </div>
          </div>}
        </div>`;

code = code.replace(resultStart, newResultStart);
code = code.replace(oldQuickStartEnd, newQuickStartEnd);

fs.writeFileSync('src/app/pet-ability-calculator/page.tsx', code);
console.log('done');
