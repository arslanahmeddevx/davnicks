const https = require('https');

https.get('https://www.growagardencalculator.ca/pet-tier-list', (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    require('fs').writeFileSync('scratch/tier_html.txt', data);
    console.log('Wrote full html to tier_html.txt');
  });
}).on('error', (err) => console.log('Error: ', err.message));
