const fs = require('fs');
const cheerio = require('cheerio');
const html = fs.readFileSync('site_crop-value-calculator.html', 'utf8');
const $ = cheerio.load(html);

console.log($('body').text().substring(0, 1000));
console.log('--- NEXT DATA ---');
const script = $('script').filter((i, el) => $(el).text().includes('__next_f')).first();
console.log(script.text().substring(0, 1000));
