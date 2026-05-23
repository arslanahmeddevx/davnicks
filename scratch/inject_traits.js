const fs = require('fs');

let page = fs.readFileSync('src/app/crop-value-calculator/page.tsx', 'utf8');

// Insert getTraits heuristic function outside the component
const getTraitsFunc = `
const getTraits = (name: string): string[] => {
  const n = name.toLowerCase();
  const traits: string[] = [];
  if (n.includes('apple')) traits.push('Apple');
  if (n.includes('berry')) traits.push('Berry');
  if (n.includes('candy') || n.includes('gummy') || n.includes('lollipop') || n.includes('chocolate') || n.includes('taffy') || n.includes('mint')) traits.push('Candy');
  if (n.includes('christmas') || n.includes('frost') || n.includes('snow') || n.includes('holly') || n.includes('tinsel')) traits.push('Christmas');
  if (n.includes('fall') || n.includes('autumn') || n.includes('maple') || n.includes('acorn')) traits.push('Fall');
  if (n.includes('flower') || n.includes('rose') || n.includes('lily') || n.includes('daisy') || n.includes('bloom') || n.includes('blossom') || n.includes('tulip') || n.includes('orchid')) traits.push('Flower');
  if (n.includes('fruit') || n.includes('melon') || n.includes('banana') || n.includes('mango') || n.includes('peach') || n.includes('pear') || n.includes('plum') || n.includes('grape') || n.includes('kiwi')) traits.push('Fruit');
  if (n.includes('shroom') || n.includes('mushroom') || n.includes('fungus')) traits.push('Fungus');
  if (n.includes('leaf') || n.includes('fern') || n.includes('cabbage') || n.includes('lettuce')) traits.push('Leafy');
  if (n.includes('magic') || n.includes('fae') || n.includes('crystal') || n.includes('spirit') || n.includes('soul') || n.includes('wisp') || n.includes('gem')) traits.push('Magical');
  if (n.includes('night') || n.includes('moon') || n.includes('star') || n.includes('dusk') || n.includes('twilight')) traits.push('Night');
  if (n.includes('nut') || n.includes('acorn') || n.includes('pecan') || n.includes('peanut')) traits.push('Nutty');
  if (n.includes('dino') || n.includes('bone') || n.includes('fossil') || n.includes('prehistoric')) traits.push('Prehistoric');
  if (n.includes('cactus') || n.includes('thorn') || n.includes('prick') || n.includes('spine') || n.includes('stinger')) traits.push('Prickly');
  if (n.includes('root') || n.includes('carrot') || n.includes('potato') || n.includes('radish') || n.includes('turnip') || n.includes('onion')) traits.push('Root');
  if (n.includes('safari') || n.includes('zebra') || n.includes('elephant') || n.includes('tiger')) traits.push('Safari');
  if (n.includes('sour') || n.includes('lemon') || n.includes('lime')) traits.push('Sour');
  if (n.includes('pepper') || n.includes('spicy') || n.includes('fire') || n.includes('flame') || n.includes('magma') || n.includes('jalapeno')) traits.push('Spicy');
  if (n.includes('spooky') || n.includes('ghost') || n.includes('zombie') || n.includes('skull') || n.includes('bat') || n.includes('vamp') || n.includes('corpse') || n.includes('pumpkin') || n.includes('ghoul') || n.includes('mummy')) traits.push('Spooky');
  if (n.includes('stalk') || n.includes('bamboo') || n.includes('corn') || n.includes('cane') || n.includes('asparagus')) traits.push('Stalky');
  if (n.includes('summer') || n.includes('sun') || n.includes('beach') || n.includes('sand')) traits.push('Summer');
  if (n.includes('sweet') || n.includes('honey') || n.includes('sugar') || n.includes('nectar') || n.includes('syrup')) traits.push('Sweet');
  if (n.includes('toxic') || n.includes('poison') || n.includes('venom') || n.includes('acid') || n.includes('biohazard') || n.includes('sludge')) traits.push('Toxic');
  if (n.includes('tropical') || n.includes('coconut') || n.includes('pineapple') || n.includes('palm') || n.includes('mango') || n.includes('jungle')) traits.push('Tropical');
  if (n.includes('vegetable') || n.includes('tomato') || n.includes('broccoli') || n.includes('squash') || n.includes('celery')) traits.push('Vegetable');
  if (n.includes('wood') || n.includes('tree') || n.includes('branch') || n.includes('pine') || n.includes('willow') || n.includes('mahogany') || n.includes('oak')) traits.push('Woody');
  if (n.includes('zen') || n.includes('lotus') || n.includes('bamboo') || n.includes('peace') || n.includes('tranquil') || n.includes('serenity')) traits.push('Zen');
  return traits;
};

export default function CropValueCalculator()`;

page = page.replace('export default function CropValueCalculator()', getTraitsFunc);

// Update matchAny state
if (!page.includes('const [matchAny, setMatchAny]')) {
  page = page.replace(
    'const [selectedTraits, setSelectedTraits] = useState<string[]>([]);',
    `const [selectedTraits, setSelectedTraits] = useState<string[]>([]);
  const [matchAny, setMatchAny] = useState(true);`
  );
}

// Replace the Match Any button
page = page.replace(
  /<button className="flex items-center gap-2 px-4 py-2\.5 bg-\[#151c18\] border border-\[#2a362e\] text-gray-300 text-sm rounded-sm hover:bg-\[#2a362e\] transition-colors">\s*Match: Any trait\s*<\/button>/,
  `<button 
            onClick={() => setMatchAny(!matchAny)}
            className="flex items-center gap-2 px-4 py-2.5 bg-[#151c18] border border-[#2a362e] text-gray-300 text-sm rounded-sm hover:bg-[#2a362e] transition-colors"
          >
            Match: {matchAny ? 'Any trait' : 'All traits'}
          </button>`
);

// Update the visibleCrops logic
const filterReplacement = `  const visibleCrops = crops.filter(c => {
    const matchesSearch = c.name.toLowerCase().includes(search.toLowerCase());
    if (selectedTraits.length === 0) return matchesSearch;
    const cTraits = getTraits(c.name);
    const matchesTraits = matchAny 
      ? selectedTraits.some(t => cTraits.includes(t))
      : selectedTraits.every(t => cTraits.includes(t));
    return matchesSearch && matchesTraits;
  });`;

page = page.replace(
  /const visibleCrops = crops\.filter\(c => c\.name\.toLowerCase\(\)\.includes\(search\.toLowerCase\(\)\)\);/,
  filterReplacement
);

fs.writeFileSync('src/app/crop-value-calculator/page.tsx', page);
console.log('Trait filtering injected!');
