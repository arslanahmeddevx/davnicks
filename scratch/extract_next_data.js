const fs = require('fs');
const html = fs.readFileSync('scratch/egg_html.txt', 'utf8');
const match = html.match(/<script id="__NEXT_DATA__" type="application\/json">(.+?)<\/script>/);
if (match) {
  const data = JSON.parse(match[1]);
  fs.writeFileSync('scratch/next_data.json', JSON.stringify(data, null, 2));
  console.log('Extracted NEXT_DATA');
} else {
  console.log('No NEXT_DATA found');
}
