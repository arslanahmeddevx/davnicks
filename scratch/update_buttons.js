const fs = require('fs');

let code = fs.readFileSync('src/app/pet-ability-calculator/page.tsx', 'utf-8');

// Add IDs to sections
code = code.replace(
  '{/* Pets Section */}\n        <div className="bg-[#151c18] border border-[#2a362e] overflow-hidden flex flex-col">',
  '{/* Pets Section */}\n        <div id="pets-section" className="bg-[#151c18] border border-[#2a362e] overflow-hidden flex flex-col scroll-mt-20">'
);

code = code.replace(
  '{/* Pet Mutations Section */}\n        <div className="bg-[#151c18] rounded-xl border border-[#2a362e] p-4 w-full">',
  '{/* Pet Mutations Section */}\n        <div id="mutations-section" className="bg-[#151c18] rounded-xl border border-[#2a362e] p-4 w-full scroll-mt-20">'
);

code = code.replace(
  '{/* Boosts Section */}\n        <div className="bg-[#151c18] rounded-xl border border-[#2a362e] p-4 w-full">',
  '{/* Boosts Section */}\n        <div id="boosts-section" className="bg-[#151c18] rounded-xl border border-[#2a362e] p-4 w-full scroll-mt-20">'
);

code = code.replace(
  '{/* Inputs */}\n        <div className="grid grid-cols-3 gap-4 w-full">',
  '{/* Inputs */}\n        <div id="inputs-section" className="grid grid-cols-3 gap-4 w-full scroll-mt-20">'
);

code = code.replace(
  '{/* Result & Quick Start */}\n        <div className="bg-[#051c0e] rounded-xl border border-[#103b20] p-6 text-center w-full">',
  '{/* Result & Quick Start */}\n        <div id="result-section" className="bg-[#051c0e] rounded-xl border border-[#103b20] p-6 text-center w-full scroll-mt-20">'
);

// Add onClick to Quick Start buttons
code = code.replace(
  'className="bg-[#151c18] border border-[#2a362e] p-4 rounded-lg flex items-center justify-between hover:bg-[#1e2722] transition-colors"',
  'className="bg-[#151c18] border border-[#2a362e] p-4 rounded-lg flex items-center justify-between hover:bg-[#1e2722] transition-colors focus:ring-2 focus:ring-green-500"\n                  onClick={() => { setSelectedPet(fullPet); document.getElementById("result-section")?.scrollIntoView({ behavior: "smooth" }); }}'
);

// Add onClick to Action buttons
const oldActionButtons = `<button className="bg-[#151c18] border border-[#2a362e] text-green-400 hover:text-green-300 text-xs font-bold py-3 rounded-lg hover:bg-[#1e2722] transition-colors">
                Change Pet
              </button>
              <button className="bg-[#151c18] border border-[#2a362e] text-green-400 hover:text-green-300 text-xs font-bold py-3 rounded-lg hover:bg-[#1e2722] transition-colors">
                Change Mutation
              </button>
              <button className="bg-[#151c18] border border-[#2a362e] text-green-400 hover:text-green-300 text-xs font-bold py-3 rounded-lg hover:bg-[#1e2722] transition-colors">
                Change Boosts
              </button>
              <button className="bg-[#151c18] border border-[#2a362e] text-green-400 hover:text-green-300 text-xs font-bold py-3 rounded-lg hover:bg-[#1e2722] transition-colors">
                Change Age/Weight
              </button>`;

const newActionButtons = `<button onClick={() => document.getElementById('pets-section')?.scrollIntoView({ behavior: 'smooth' })} className="bg-[#151c18] border border-[#2a362e] text-green-400 hover:text-green-300 text-xs font-bold py-3 rounded-lg hover:bg-[#1e2722] transition-colors">
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
              </button>`;

code = code.replace(oldActionButtons, newActionButtons);

fs.writeFileSync('src/app/pet-ability-calculator/page.tsx', code);
console.log('done');
