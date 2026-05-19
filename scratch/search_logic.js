const fs = require('fs');
const files = [
  'site_pet-tier-list.html', 
  'site_crop-value-calculator.html', 
  'site_egg-hatch-calculator.html', 
  'site_pet-ability-search.html', 
  'site_pet-xp-time-calculator.html'
];

for (const file of files) {
  try {
    const html = fs.readFileSync(file, 'utf8');
    const regex = /self\.__next_f\.push\(\[1,"([^]+?)"\]\)/g;
    let match;
    while ((match = regex.exec(html)) !== null) {
      const str = match[1].replace(/\\"/g, '"');
      if (str.includes('interval') || str.includes('bonus') || str.includes('30.5')) {
        console.log(`Found in ${file}:`, str.substring(0, 100));
      }
    }
  } catch (e) {
    console.log('Error reading', file);
  }
}
