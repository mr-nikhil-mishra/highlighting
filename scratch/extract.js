const fs = require('fs');

const html = fs.readFileSync('scratch/dom.html', 'utf8');

// A very basic regex to match some image URLs
const imgRegex = /<img[^>]+src="([^">]+)"/g;
let match;
const urls = [];
while ((match = imgRegex.exec(html)) !== null) {
  urls.push(match[1]);
}

console.log(urls.filter(u => u.includes('wp-content/uploads')).join('\n'));
