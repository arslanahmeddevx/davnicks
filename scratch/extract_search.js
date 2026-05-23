const fs = require('fs');
const html = fs.readFileSync('site_pet-ability-search.html', 'utf-8');

// The Next.js data is usually inside script tags, or we can just regex the JSON
let match = html.match(/<script id="__NEXT_DATA__" type="application\/json">([\s\S]*?)<\/script>/);

if (match) {
  try {
    const data = JSON.parse(match[1]);
    console.log("Found NEXT_DATA. Writing to scratch/search_data_dump.json");
    fs.writeFileSync('scratch/search_data_dump.json', JSON.stringify(data, null, 2));
  } catch(e) {
    console.error("Error parsing JSON", e);
  }
} else {
  console.log("No NEXT_DATA found.");
}
