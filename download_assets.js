const fs = require('fs');
const https = require('https');
const path = require('path');

const srcDir = path.join(__dirname, 'src', 'components');
const assetsDir = path.join(__dirname, 'public', 'assets');
if (!fs.existsSync(assetsDir)) fs.mkdirSync(assetsDir, { recursive: true });

const files = ['Dashboard.js', 'AQI.js', 'Radar.js', 'Historical.js'];
let downloadPromises = [];
let imgCounter = 1;

files.forEach(file => {
  const filePath = path.join(srcDir, file);
  if (!fs.existsSync(filePath)) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  let regex = /src="(https:\/\/lh3\.googleusercontent\.com\/[^"]+)"/g;
  
  content = content.replace(regex, (match, url) => {
    let filename = `img_${imgCounter++}.jpg`;
    let dest = path.join(assetsDir, filename);
    
    let p = new Promise((resolve, reject) => {
      https.get(url, (res) => {
        let fileStream = fs.createWriteStream(dest);
        res.pipe(fileStream);
        fileStream.on('finish', () => { fileStream.close(); resolve(); });
      }).on('error', reject);
    });
    
    downloadPromises.push(p);
    return `src="/assets/${filename}"`;
  });
  
  fs.writeFileSync(filePath, content);
  console.log(`Updated images in ${file}`);
});

Promise.all(downloadPromises).then(() => {
  console.log(`Downloaded ${downloadPromises.length} images.`);
}).catch(err => {
  console.error('Error downloading images:', err);
});
