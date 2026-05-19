const fs = require('fs');
const html = fs.readFileSync('site_egg-hatch-calculator.html', 'utf8');
const regex = /"petList":(\[.*?\])/;
let cleanHtml = html.replace(/\\"/g, '"').replace(/\\\\/g, '\\');
const match = regex.exec(cleanHtml);
if (match) {
  try {
    const list = JSON.parse(match[1]);
    console.log('Keys:', Object.keys(list[0]));
    console.log(list[0]);
  } catch(e) {
    console.log('JSON Parse error', e);
  }
}
