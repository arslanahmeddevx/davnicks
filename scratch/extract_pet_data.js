const fs = require('fs');

const html = fs.readFileSync('site_pet-ability-calculator.html', 'utf8');

const regex = /self\.__next_f\.push\(\[1,"([^]+?)"\]\)/g;
let match;
const chunks = [];
while ((match = regex.exec(html)) !== null) {
  let str = match[1];
  str = str.replace(/\\"/g, '"').replace(/\\\\/g, '\\');
  chunks.push(str);
}

fs.writeFileSync('scratch/pet_data.txt', chunks.join('\n\n---CHUNK---\n\n'));
console.log('done');
