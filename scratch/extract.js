const https = require('https'); 
const fs = require('fs'); 
https.get('https://www.growagardencalculator.ca/crop-value-calculator', (res) => { 
  let d = ''; 
  res.on('data', c => d+=c); 
  res.on('end', () => { 
    const match = d.match(/<script id="__NEXT_DATA__" type="application\/json">(.+?)<\/script>/); 
    if (match) { 
      fs.writeFileSync('scratch/next_data.json', match[1]); 
      console.log('Saved'); 
    } else { 
      console.log('Not found'); 
    } 
  }); 
});
