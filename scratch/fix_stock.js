const fs = require('fs');

// Get 15 URLs
const html = fs.readFileSync('scratch/egg_html.txt', 'utf8');
const urls = [...new Set(html.match(/https:\/\/tr\.rbxcdn\.com\/[^"'\\]+/g))].filter(u => u.includes('150/150/Image')).slice(0, 15);

if (urls.length < 15) {
  console.log("Not enough URLs found!");
  process.exit(1);
}

// Read page.tsx
let code = fs.readFileSync('src/app/stock/page.tsx', 'utf8');

// Replace getPlaceholder(item.name) with item.img
code = code.replace(/getPlaceholder\(item\.name\)/g, "item.img");

// Inject URLs into stockItems
let urlIdx = 0;
code = code.replace(/(stockItems\s*=\s*\[)([\s\S]*?)(\];)/, (match, p1, p2, p3) => {
  // Add img: "url" to each item
  const newP2 = p2.replace(/{[^}]+}/g, (itemStr) => {
    // Check if it already has img to avoid duplication
    if (itemStr.includes('img:')) return itemStr;
    const url = urls[urlIdx];
    urlIdx++;
    return itemStr.replace(/}\s*$/, `, img: "${url}" }`);
  });
  return p1 + newP2 + p3;
});

// Update sound duration to 2.0 seconds
code = code.replace(/osc\.stop\(ctx\.currentTime \+ [0-9.]+\);/g, "osc.stop(ctx.currentTime + 2.0);");

// Implement refresh button functionality
if (!code.includes('const [isRefreshing, setIsRefreshing] = useState(false);')) {
  // Add state
  code = code.replace('const [showAlertsSettings, setShowAlertsSettings] = useState(false);', 
    'const [showAlertsSettings, setShowAlertsSettings] = useState(false);\n  const [isRefreshing, setIsRefreshing] = useState(false);');
    
  // Add function
  const refreshFunc = `\n  const handleRefresh = () => {\n    setIsRefreshing(true);\n    setTimeout(() => setIsRefreshing(false), 1000);\n  };\n`;
  code = code.replace('const playSound = () => {', refreshFunc + '\n  const playSound = () => {');
  
  // Update button
  code = code.replace(
    /<button className="flex items-center gap-2 px-4 py-2 bg-\[#1a1a1a\] border border-\[#333\] text-white font-medium text-sm hover:bg-\[#222\] transition-colors rounded-sm">\s*<RefreshCw className="w-4 h-4" \/> Refresh\s*<\/button>/g,
    `<button onClick={handleRefresh} disabled={isRefreshing} className="flex items-center gap-2 px-4 py-2 bg-[#1a1a1a] border border-[#333] text-white font-medium text-sm hover:bg-[#222] transition-colors rounded-sm disabled:opacity-50">
            <RefreshCw className={\`w-4 h-4 \${isRefreshing ? 'animate-spin' : ''}\`} /> Refresh
          </button>`
  );
}

fs.writeFileSync('src/app/stock/page.tsx', code);
console.log("Updated page.tsx with requested changes.");
