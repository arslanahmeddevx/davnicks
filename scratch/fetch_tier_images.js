const https = require('https');

https.get('https://www.growagardencalculator.ca/pet-tier-list', (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    const urls = [...new Set(data.match(/https:\/\/tr\.rbxcdn\.com\/[^"'\\]+/g))];
    console.log(JSON.stringify(urls, null, 2));
  });
}).on('error', (err) => console.log('Error: ', err.message));
