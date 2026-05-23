const fs = require('fs');

let page = fs.readFileSync('src/app/crop-value-calculator/page.tsx', 'utf8');

// 1. Add inputMode and inputValue states
if (!page.includes('const [inputMode, setInputMode]')) {
  page = page.replace(
    'const [weight, setWeight] = useState("0.275");',
    `const [inputMode, setInputMode] = useState<"weight" | "value">("weight");
  const [inputValue, setInputValue] = useState("0.275");`
  );
  
  // replace all 'weight' with 'inputValue' where appropriate (if any, but it's only in the input)
}

// 2. Add utility functions for calculation inside the component
const calcFunc = `
  const result = React.useMemo(() => {
    let totalMult = parseFloat(selectedVariant.mult.slice(1));
    selectedMutations.forEach(mutName => {
      const mut = mutations.find(m => m.name === mutName);
      if (mut) totalMult *= parseFloat(mut.mult.slice(1));
    });

    const val = parseFloat(inputValue) || 0;

    if (inputMode === "weight") {
      const resultValue = Math.floor(selectedCrop.value * (val / 0.275) * totalMult);
      return {
        valueText: resultValue.toLocaleString(),
        valueAbbrev: resultValue > 1000000 ? (resultValue / 1000000).toFixed(2) + 'm' : resultValue > 1000 ? (resultValue / 1000).toFixed(2) + 'k' : resultValue.toString(),
        rawResult: resultValue.toString(),
        unit: "¢",
        subText: val.toString() + "kg",
        copyLabel: "Copy Sheckles"
      };
    } else {
      const resultWeight = (val / (selectedCrop.value * totalMult)) * 0.275;
      return {
        valueText: resultWeight.toLocaleString(undefined, { minimumFractionDigits: 3, maximumFractionDigits: 3 }),
        valueAbbrev: resultWeight.toFixed(3) + "kg",
        rawResult: resultWeight.toFixed(3),
        unit: "kg",
        subText: val.toLocaleString() + "¢",
        copyLabel: "Copy Weight"
      };
    }
  }, [inputMode, inputValue, selectedCrop, selectedVariant, selectedMutations]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(result.rawResult);
  };
`;

// Insert the calc function right before `return (`
page = page.replace('  return (', calcFunc + '\n  return (');

// Also make sure React is imported for useMemo
if (!page.includes('import React')) {
  page = page.replace('import { useState }', 'import React, { useState, useMemo }');
}

// 3. Update the Input Section
const inputSectionRegex = /\{\/\* Weight \*\/\}[\s\S]*?(?=\{\/\* Result Box \*\/})/;

const newInputSection = `{/* Input Section */}
        <div>
          <label className="text-sm text-gray-400 block mb-3">
            {inputMode === "weight" ? "Weight" : "Value"}
          </label>
          <div className="flex gap-2 items-center">
            <div className="relative w-64">
              <input 
                type="number" 
                value={inputValue} 
                onChange={(e) => setInputValue(e.target.value)}
                className="w-full bg-[#0a0f0c] border border-[#1a231d] rounded-sm pl-4 pr-12 py-2.5 outline-none focus:border-green-800 transition-colors text-sm text-white"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
                {inputMode === "weight" ? "kg" : "¢"}
              </span>
            </div>
            <button 
              onClick={() => {
                setInputMode(inputMode === "weight" ? "value" : "weight");
                setInputValue(inputMode === "weight" ? selectedCrop.value.toString() : "0.275");
              }}
              className="bg-[#151c18] border border-[#2a362e] px-4 py-2.5 text-sm hover:bg-[#2a362e] transition-colors rounded-sm text-gray-300 w-[140px]"
            >
              Switch to {inputMode === "weight" ? "Value" : "Weight"}
            </button>
          </div>
        </div>

        `;

page = page.replace(inputSectionRegex, newInputSection);

// 4. Update the Result Box
const resultBoxRegex = /\{\/\* Result Box \*\/\}[\s\S]*?(?=<\/div>\s*<\/div>\s*<\/div>\s*\);)/;

const newResultBox = `{/* Result Box */}
        <div className="mt-6 bg-[#09351c] border border-[#0d421d] rounded-sm p-8 text-center flex flex-col relative overflow-hidden">
          <button 
            onClick={copyToClipboard}
            className="absolute top-4 right-4 bg-[#151c18]/50 border border-[#2a362e] px-3 py-1.5 text-xs hover:bg-[#2a362e] transition-colors rounded-sm text-gray-300 shadow-sm"
          >
            {result.copyLabel}
          </button>
          
          <div className="text-xs text-white mb-6">Result</div>
          
          <div className="flex flex-row gap-6 mb-4 mt-2">
            <div className="w-20 h-20 bg-[#151c18] border border-[#2a362e] rounded-sm flex items-center justify-center p-2 shrink-0 shadow-inner">
              <img src={selectedCrop.icon} alt={selectedCrop.name} className="w-full h-full object-contain filter drop-shadow-lg" />
            </div>
            <div className="flex flex-col justify-center">
              <div className={\`text-base font-medium mb-1 \${(selectedCrop as any).rarityColor || 'text-white'}\`}>
                {selectedCrop.name}
              </div>
              <div className="text-sm font-bold text-gray-300">
                Base Value: <span className="text-white">{selectedCrop.value}¢</span>
              </div>
            </div>
          </div>
          
          <div className="text-sm text-gray-200 mb-4">
            {result.subText}
          </div>
          
          <div className="text-5xl font-bold text-white mb-2 tracking-tight">
            {result.valueText}<span className="text-[32px] align-baseline">{result.unit}</span>
          </div>
          
          <div className="text-xs text-gray-300 mb-8 font-medium">
            {result.valueAbbrev}{result.unit === "¢" ? "¢" : ""}
          </div>
          
          <div className="flex justify-center">
            <button className="border border-[#14452a] hover:bg-[#14452a]/50 bg-[#0b2818] text-green-400 rounded-full px-5 py-2 text-xs inline-flex items-center gap-2 transition-colors">
              <span className="text-red-500 text-base">🍓</span> 
              www.growagardencalculator.ca 
              <Copy className="w-3.5 h-3.5 ml-1" />
            </button>
          </div>
        </div>
        `;

page = page.replace(resultBoxRegex, newResultBox);

fs.writeFileSync('src/app/crop-value-calculator/page.tsx', page);
console.log('Done updating calculations');
