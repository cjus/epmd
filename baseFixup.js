const fs = require('fs');
const path = require('path');
const packageJson = require('./package.json');

let filePath = path.join(__dirname, '/build/index.html');
let html = fs.readFileSync(filePath, 'utf8');
html = html.replace('<head>', `<head><base href="${packageJson.homepage}">`);
fs.writeFileSync('build/index.html', html);
