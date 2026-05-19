const https = require('https');
const fs = require('fs');

const urls = [
  'pet-xp-time-calculator',
  'crop-value-calculator',
  'egg-hatch-calculator',
  'pet-tier-list',
  'codes',
  'pet-weight-calculator',
  'pet-ability-calculator',
  'stock',
  'pet-dupe-check',
  'pet-ability-search',
  'weather',
  'guides'
];

urls.forEach(url => {
  https.get(`https://www.growagardencalculator.ca/${url}`, (res) => {
    let data = '';
    res.on('data', (chunk) => {
      data += chunk;
    });
    res.on('end', () => {
      fs.writeFileSync(`site_${url}.html`, data);
      console.log(`Saved ${url}`);
    });
  }).on("error", (err) => {
    console.log(`Error on ${url}: ` + err.message);
  });
});
