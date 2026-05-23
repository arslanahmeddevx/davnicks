const fs = require('fs');
let page = fs.readFileSync('src/app/crop-value-calculator/page.tsx', 'utf8');

const mutationsSectionRegex = /<label className="text-sm text-gray-400 block mb-3">Mutations<\/label>[\s\S]*?(?={\/\* Variants \*\/})/;

const newMutationsSection = `<div className="flex items-center justify-between mb-3">
            <label className="text-sm text-gray-400">Mutations</label>
            <button 
              onClick={() => setShowMutations(!showMutations)}
              className="text-xs text-gray-400 hover:text-white transition-colors"
            >
              {showMutations ? "Hide" : "Show"}
            </button>
          </div>
          {showMutations && (
            <div className="flex flex-col gap-4 mb-4">
              <div className="flex flex-wrap sm:flex-nowrap gap-2">
                <div className="relative flex-1 min-w-[200px]">
                  <input 
                    type="text" 
                    placeholder="Search mutations..." 
                    value={mutSearch}
                    onChange={(e) => setMutSearch(e.target.value)}
                    className="w-full pl-3 pr-4 py-2 bg-[#151c18] border border-[#2a362e] rounded-sm outline-none focus:border-green-500 transition-colors text-sm text-white placeholder:text-gray-500"
                  />
                </div>
                <button 
                  onClick={() => setMutSortBy(prev => prev === "A-Z" ? "Value" : "A-Z")}
                  className="flex items-center gap-2 px-4 py-2 bg-[#151c18] border border-[#2a362e] text-gray-300 text-sm rounded-sm hover:bg-[#2a362e] transition-colors w-[110px] justify-center"
                >
                  Sort: {mutSortBy}
                </button>
                <button 
                  onClick={() => setMutSortAsc(prev => !prev)}
                  className="flex items-center justify-center w-10 h-10 bg-[#151c18] border border-[#2a362e] text-gray-300 rounded-sm hover:bg-[#2a362e] transition-colors"
                >
                  {mutSortAsc ? '↑' : '↓'}
                </button>
                <div className="flex gap-2 ml-auto">
                  <button 
                    onClick={() => setMutLimitDisabled(!mutLimitDisabled)}
                    className={\`px-4 py-2 border text-sm rounded-sm transition-colors \${mutLimitDisabled ? 'bg-[#14452a] border-green-600 text-white' : 'bg-[#151c18] border-[#2a362e] text-gray-300 hover:bg-[#2a362e]'}\`}
                  >
                    Disable Limit
                  </button>
                  <button 
                    onClick={handleMax}
                    className="px-4 py-2 bg-[#151c18] border border-[#2a362e] text-gray-300 text-sm rounded-sm hover:bg-[#2a362e] transition-colors"
                  >
                    Max
                  </button>
                  <button 
                    onClick={() => setSelectedMutations([])}
                    className="px-4 py-2 bg-[#8c181f] border border-[#a31e22] text-white text-sm rounded-sm hover:bg-[#a31e22] transition-colors font-medium"
                  >
                    Clear ({selectedMutations.length})
                  </button>
                </div>
              </div>

              <div className="max-h-[460px] overflow-y-auto custom-scrollbar pr-2">
                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2">
                  {sortedAndFilteredMutations.map((mut) => {
                    const isSelected = selectedMutations.includes(mut.name);
                    return (
                      <button
                        key={mut.name}
                        onClick={() => toggleMutation(mut.name)}
                        className={\`flex flex-col items-center justify-center p-3 rounded-sm border transition-all h-[70px] \${
                          isSelected 
                            ? "bg-[#14452a] border-green-600 text-white" 
                            : "bg-[#151c18] border-[#2a362e] hover:border-[#3a4a3e] text-gray-300"
                        }\`}
                      >
                        <span className={\`text-[11px] text-center leading-tight truncate w-full \${isSelected ? 'text-white' : 'text-gray-300'}\`}>{mut.name}</span>
                        <span className={\`text-[10px] mt-1 \${isSelected ? 'text-green-300' : 'text-gray-400'}\`}>{mut.mult}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
        `;

page = page.replace(mutationsSectionRegex, newMutationsSection);
fs.writeFileSync('src/app/crop-value-calculator/page.tsx', page);
console.log("Updated UI!");
