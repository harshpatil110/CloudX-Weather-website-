const fs = require('fs');
let html = fs.readFileSync('dashboard.html', 'utf8');

// Find the head block
let headMatch = html.match(/<head>([\s\S]*?)<\/head>/i);
let headContent = headMatch ? headMatch[1] : '';

let newIndexHtml = `<!DOCTYPE html>
<html lang="en" class="light">
  <head>
    ${headContent}
  </head>
  <body class="bg-background text-stone-900 selection:bg-stone-200">
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>`;

fs.writeFileSync('public/index.html', newIndexHtml);
console.log('Updated public/index.html');
