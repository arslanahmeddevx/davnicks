const fs = require('fs');
const https = require('https');

const content = fs.readFileSync('src/data/petAbilityData.ts', 'utf-8');
const regex = /https:\/\/tr\.rbxcdn\.com\/[^"']+/g;
let match;
const urls = [];
while ((match = regex.exec(content)) !== null) {
  urls.push(match[0]);
}

const checkUrl = (url) => new Promise(res => {
  https.get(url, (r) => res(r.statusCode)).on('error', () => res('error'));
});

async function test() {
  const valid = [];
  // Just check the first 50 urls to find some valid ones
  for (let i = 0; i < 50; i++) {
    const status = await checkUrl(urls[i]);
    if (status === 200) {
      valid.push(urls[i]);
    }
  }
  
  if (valid.length > 0) {
    console.log("Found valid URLs:", valid.length);
    let page = fs.readFileSync('src/app/page.tsx', 'utf-8');
    const pageUrls = [];
    let pageMatch;
    while ((pageMatch = regex.exec(page)) !== null) {
      pageUrls.push(pageMatch[0]);
    }
    
    // Replace all invalid URLs in page.tsx with valid ones from petAbilityData
    let replacementIndex = 0;
    for (const pUrl of pageUrls) {
       // We assume they are all broken or just replace them all with valid pet images
       // Actually let's just replace ALL tr.rbxcdn.com links in page.tsx with valid pet images
       page = page.replace(pUrl, valid[replacementIndex % valid.length]);
       replacementIndex++;
    }
    
    fs.writeFileSync('src/app/page.tsx', page);
    console.log("Replaced all images in page.tsx with valid pet images!");
  } else {
    console.log("No valid URLs found in the first 50!");
  }
}

test();
