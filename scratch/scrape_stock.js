const https = require('https');
const fs = require('fs');

https.get('https://www.growagardencalculator.ca/stock', (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    fs.writeFileSync('scratch/stock_html.txt', data);
    console.log('Saved HTML to scratch/stock_html.txt');
    
    // Attempt to extract next data
    const match = data.match(/<script id="__NEXT_DATA__" type="application\/json">(.+?)<\/script>/);
    if (match) {
      fs.writeFileSync('scratch/stock_next_data.json', match[1]);
      console.log('Saved NEXT_DATA to scratch/stock_next_data.json');
    } else {
      console.log('No NEXT_DATA found.');
    }
  });
}).on('error', (err) => console.log('Error:', err.message));
