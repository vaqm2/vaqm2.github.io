const fs = require('fs');
const path = require('path');

const buildDir = path.join(process.cwd(), 'out');

function fixPaths(dir) {
  fs.readdirSync(dir).forEach(file => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      fixPaths(filePath);
    } else if (filePath.endsWith('.html')) {
      let content = fs.readFileSync(filePath, 'utf8');
      content = content.replace(/_next\/static\/css/g, 'static/css');
      content = content.replace(/_next\/static\/media/g, 'static/media');
      fs.writeFileSync(filePath, content);
    }
  });
}

fixPaths(buildDir);
console.log('Fixed asset paths in HTML files.');
