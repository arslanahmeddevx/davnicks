const fs = require('fs');

let code = fs.readFileSync('src/app/pet-ability-calculator/page.tsx', 'utf-8');

// The logic string to inject
const logicString = `
  const rarityStats = {
    'Common': { interval: 90, minInterval: 30, bonus: 2, maxBonus: 6, weight: 10, crop: 'carrot' },
    'Uncommon': { interval: 85, minInterval: 28, bonus: 3, maxBonus: 8, weight: 12, crop: 'potato' },
    'Rare': { interval: 80, minInterval: 25, bonus: 4, maxBonus: 10, weight: 15, crop: 'wheat' },
    'Legendary': { interval: 75, minInterval: 22, bonus: 5, maxBonus: 15, weight: 20, crop: 'tomato' },
    'Mythical': { interval: 70, minInterval: 18, bonus: 6, maxBonus: 20, weight: 25, crop: 'corn' },
    'Divine': { interval: 65, minInterval: 15, bonus: 8, maxBonus: 30, weight: 35, crop: 'pumpkin' },
    'Prismatic': { interval: 60, minInterval: 12, bonus: 10, maxBonus: 50, weight: 50, crop: 'starfruit' },
    'Transcendent': { interval: 55, minInterval: 10, bonus: 15, maxBonus: 100, weight: 100, crop: 'magic bean' }
  };

  const getPetStats = (pet, mutation, targetAge, boost) => {
    if (!pet) return null;
    const base = rarityStats[pet.rarity] || rarityStats['Common'];
    
    // Mutation Modifiers
    let intervalMod = 1;
    let bonusMod = 1;
    let maxWeightMod = 1;
    
    if (mutation === 'Glimmering') { intervalMod = 0.9; bonusMod = 1.2; maxWeightMod = 1.1; }
    else if (mutation === 'Rainbow') { intervalMod = 0.8; bonusMod = 1.5; maxWeightMod = 1.2; }
    else if (mutation === 'Golden') { intervalMod = 0.85; bonusMod = 1.3; maxWeightMod = 1.15; }
    else if (mutation !== 'Normal') { intervalMod = 0.95; bonusMod = 1.1; maxWeightMod = 1.05; }
    
    // Weight calculations
    const hatchWeight = 1;
    let maxWeight = Math.floor(base.weight * maxWeightMod);
    if (boost && boost.name === 'Grandmaster Sprinkler') maxWeight += 4;
    
    // Abilities calculations
    const parsedAge = parseInt(targetAge) || 0;
    const ageFactor = Math.min(parsedAge, 100) / 100;
    
    let currentInterval = base.interval - ((base.interval - base.minInterval) * ageFactor);
    currentInterval *= intervalMod;
    
    if (boost && boost.name === 'Small Toy') currentInterval *= 0.9;
    if (boost && boost.name === 'Medium Toy') currentInterval *= 0.8;
    if (boost && boost.name === 'Large Toy') currentInterval *= 0.7;
    
    let currentBonus = base.bonus + ((base.maxBonus - base.bonus) * ageFactor);
    currentBonus *= bonusMod;
    
    return {
      hatchWeight,
      maxWeight,
      interval: currentInterval.toFixed(1),
      bonus: Math.floor(currentBonus),
      crop: base.crop
    };
  };

  const statsForMaxAge = useMemo(() => getPetStats(selectedPet, selectedMutation, maxAge || 100, selectedBoost), [selectedPet, selectedMutation, maxAge, selectedBoost]);
  const statsForCurrentAge = useMemo(() => getPetStats(selectedPet, selectedMutation, age || 1, selectedBoost), [selectedPet, selectedMutation, age, selectedBoost]);
`;

// Insert the logic just before filteredPets
if (!code.includes('const rarityStats = {')) {
  code = code.replace('const filteredPets = useMemo(() => {', logicString + '\n  const filteredPets = useMemo(() => {');
}

// Replace the result box body
const oldResultContent = `                {/* Additional Details */}
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
              </div>`;

const newResultContent = `                {/* Additional Details */}
                <div className="flex flex-col gap-3 md:ml-12 mt-4 md:mt-0">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-400 w-28">Classification:</span>
                    <span className="text-sm text-green-400 border border-green-900 px-3 py-0.5 rounded bg-transparent">{selectedMutation}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-400 w-28">Hatch Weight:</span>
                    <span className="text-sm font-bold text-green-400">{statsForMaxAge?.hatchWeight} kg</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-400 w-28">Max Weight:</span>
                    <span className="text-sm font-bold text-yellow-500">{statsForMaxAge?.maxWeight} kg</span>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-sm text-gray-400 w-28">Active Boosts:</span>
                    {selectedBoost ? (
                       <img src={\`https://placehold.co/100x100/666666/FFFFFF?text=\${encodeURIComponent(selectedBoost.name.split(' ')[0])}\`} alt={selectedBoost.name} className="w-6 h-6 rounded-full" />
                    ) : (
                       <span className="text-sm text-gray-600">None</span>
                    )}
                  </div>
                </div>
              </div>

              {/* Abilities */}
              <div className="mb-12">
                <div className="text-[#fca311] text-sm font-bold mb-3">Abilities (Age {maxAge || 100}):</div>
                <div className="text-white font-medium">Every {statsForMaxAge?.interval}s, eats a {statsForMaxAge?.crop} for {statsForMaxAge?.bonus}x value bonus!</div>
              </div>`;

code = code.replace(oldResultContent, newResultContent);

fs.writeFileSync('src/app/pet-ability-calculator/page.tsx', code);
console.log('done');
