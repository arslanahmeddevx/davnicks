const fs = require('fs');

const html = fs.readFileSync('site_crop-value-calculator.html', 'utf8');

// Find all self.__next_f.push calls
const regex = /self\.__next_f\.push\(\[1,"([^"]+)"\]\)/g;
let match;
while ((match = regex.exec(html)) !== null) {
  let str = match[1];
  str = str.replace(/\\"/g, '"').replace(/\\\\/g, '\\');
  if (str.includes('Apple') || str.includes('Happy Pear')) {
    console.log("Found in block length:", str.length);
    fs.writeFileSync('crops_data.txt', str);
  }
}
