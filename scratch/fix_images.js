const fs = require('fs');

let content = fs.readFileSync('src/app/page.tsx', 'utf-8');

// The replacement URLs
const url1 = '"https://tr.rbxcdn.com/180DAY-f9695a43b6d9efd7db18e8c7d2812fed/150/150/Image/Png/noFilter"';
const url2 = '"https://tr.rbxcdn.com/180DAY-2db67656a75bd70bdab7052f0cddbe9c/150/150/Image/Png/noFilter"';

// Pet Weight Calculator
content = content.replace(
  /\`<svg xmlns="http:\/\/www.w3.org\/2000\/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"><\/path><path d="m14.5 12.5 2-2"><\/path><path d="m11.5 9.5 2-2"><\/path><path d="m8.5 6.5 2-2"><\/path><path d="m17.5 15.5 2-2"><\/path><\/svg>\`/,
  url1
);
content = content.replace(
  /\`<svg xmlns="http:\/\/www.w3.org\/2000\/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v16a2 2 0 0 0 2 2h16"><\/path><path d="m19 9-5 5-4-4-3 3"><\/path><\/svg>\`/,
  url2
);

// Dupe List
content = content.replace(
  /\`<svg xmlns="http:\/\/www.w3.org\/2000\/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"><\/path><\/svg>\`/,
  url1
);
content = content.replace(
  /\`<svg xmlns="http:\/\/www.w3.org\/2000\/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"><\/path><path d="m6 6 12 12"><\/path><\/svg>\`/,
  url2
);

// Pet Ability Search
content = content.replace(
  /\`<svg xmlns="http:\/\/www.w3.org\/2000\/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7V5a2 2 0 0 1 2-2h2"><\/path><path d="M17 3h2a2 2 0 0 1 2 2v2"><\/path><path d="M21 17v2a2 2 0 0 1-2 2h-2"><\/path><path d="M7 21H5a2 2 0 0 1-2-2v-2"><\/path><circle cx="12" cy="12" r="3"><\/circle><path d="m16 16-1.9-1.9"><\/path><\/svg>\`/,
  url1
);

fs.writeFileSync('src/app/page.tsx', content);

// Also clean up ToolCard.tsx so it doesn't need to parse raw HTML SVGs anymore
let toolcard = fs.readFileSync('src/components/ToolCard.tsx', 'utf-8');
toolcard = toolcard.replace(
  /{images\[1\]\.startsWith\('<svg'\) \? \(\s*<div dangerouslySetInnerHTML={{ __html: images\[1\] }} className="h-16 w-16 text-green-500" \/>\s*\) : \(\s*<img src={images\[1\]} alt="" loading="lazy" className="h-20 w-20 object-cover" width="80" height="80" \/>\s*\)}/g,
  '<img src={images[1]} alt="" loading="lazy" className="h-20 w-20 object-cover" width="80" height="80" />'
);
toolcard = toolcard.replace(
  /{images\[2\]\.startsWith\('<svg'\) \? \(\s*<div dangerouslySetInnerHTML={{ __html: images\[2\] }} className="h-16 w-16 text-red-500" \/>\s*\) : \(\s*<img src={images\[2\]} alt="" loading="lazy" className="h-20 w-20 object-cover" width="80" height="80" \/>\s*\)}/g,
  '<img src={images[2]} alt="" loading="lazy" className="h-20 w-20 object-cover" width="80" height="80" />'
);
fs.writeFileSync('src/components/ToolCard.tsx', toolcard);

console.log('done');
