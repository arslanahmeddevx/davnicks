const fs = require('fs');

const html = fs.readFileSync('site_pet-ability-calculator.html', 'utf-8');

// We want to extract <div class="pet-card"...> or something similar.
// Let's just find image src and the alt text or text nearby.
// Actually, let's write a simpler regex to find <img ... src="..." alt="..."> or similar.
// Since the structure isn't known exactly, let's print out a snippet containing "Bagel Bunny" to see the structure.

const index = html.indexOf('Bagel Bunny');
if (index !== -1) {
    console.log(html.substring(Math.max(0, index - 300), index + 300));
} else {
    console.log("Bagel Bunny not found in HTML");
}
