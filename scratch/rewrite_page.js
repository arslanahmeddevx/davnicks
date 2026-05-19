const fs = require('fs');

let code = fs.readFileSync('src/app/pet-ability-calculator/page.tsx', 'utf-8');

// 1. Remove max-w-4xl from sections
code = code.replace(/max-w-4xl/g, 'w-full');

// 2. Remove truncate from pet cards
// In the pet cards mapping:
// <span className="text-lg font-black text-white truncate">{pet.name}</span>
// Change to: <span className="text-lg font-black text-white whitespace-normal">{pet.name}</span>
code = code.replace(/text-lg font-black text-white truncate/g, 'text-lg font-black text-white whitespace-normal break-words leading-tight');
code = code.replace(/ml-6 flex flex-col truncate/g, 'ml-6 flex flex-col');

// 3. Update boosts section to show images. 
// Right now, boosts map looks like:
/*
              <button
                key={idx}
                onClick={() => setSelectedBoost(boost)}
                className={`p-3 rounded-lg border text-left transition-all hover:bg-[#25302a] flex flex-col justify-center items-center ...
*/
// We'll replace the boost button content.
const oldBoost = `<div className="font-bold text-sm text-white mb-1">{boost.name}</div>
                <div className={\`text-[10px] font-bold mb-2 uppercase tracking-wide
                  \\\${boost.rarity === 'Rare' ? 'text-[#00bfff]' : ''}
                  \\\${boost.rarity === 'Legendary' ? 'text-yellow-400' : ''}
                  \\\${boost.rarity === 'Divine' ? 'text-red-400' : ''}
                  \\\${boost.rarity === 'Prismatic' ? 'text-purple-400' : ''}
                \`}>
                  {boost.rarity}
                </div>
                <div className="text-xs text-gray-400 text-center">{boost.value}</div>`;

const newBoost = `<img src={\`https://placehold.co/100x100?text=\${encodeURIComponent(boost.name)}\`} alt={boost.name} className="w-12 h-12 object-contain mb-2 rounded" />
                <div className="font-bold text-sm text-white text-center whitespace-normal break-words leading-tight mb-1">{boost.name}</div>
                <div className={\`text-[10px] font-bold mb-2 uppercase tracking-wide
                  \\\${boost.rarity === 'Rare' ? 'text-[#00bfff]' : ''}
                  \\\${boost.rarity === 'Legendary' ? 'text-yellow-400' : ''}
                  \\\${boost.rarity === 'Divine' ? 'text-red-400' : ''}
                  \\\${boost.rarity === 'Prismatic' ? 'text-purple-400' : ''}
                \`}>
                  {boost.rarity}
                </div>
                <div className="text-xs text-gray-400 text-center">{boost.value}</div>`;

code = code.replace(oldBoost, newBoost);

// 4. Update the Result section.
const oldResult = `<div className="text-green-500 font-bold mb-8 text-left">
            Select a pet to begin.
          </div>`;

const newResult = `{selectedPet ? (
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
          )}`;

code = code.replace(oldResult, newResult);

fs.writeFileSync('src/app/pet-ability-calculator/page.tsx', code);
console.log('done');
