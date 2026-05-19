const https = require('https');
const fs = require('fs');

https.get('https://www.growagardencalculator.ca/', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    fs.writeFileSync('site.html', data);
    console.log('done');
  });
}).on("error", (err) => {
  console.log("Error: " + err.message);
});
