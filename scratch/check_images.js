const fs = require('fs');
const https = require('https');

const content = fs.readFileSync('src/app/page.tsx', 'utf-8');
const regex = /https:\/\/tr\.rbxcdn\.com\/[^"']+/g;
let match;
const urls = new Set();
while ((match = regex.exec(content)) !== null) {
  urls.add(match[0]);
}

const checkUrl = (url) => {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      resolve({ url, status: res.statusCode });
    }).on('error', (e) => {
      resolve({ url, status: 'error' });
    });
  });
};

async function run() {
  const results = [];
  for (const url of urls) {
    const res = await checkUrl(url);
    results.push(res);
  }
  console.log(results.filter(r => r.status !== 200));
}

run();
