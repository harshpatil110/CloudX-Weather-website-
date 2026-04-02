const fs = require('fs');

function processHtmlFile(fileName, componentName) {
  let content = fs.readFileSync(fileName, 'utf8');

  // Extract tailwind config if we want to update it (optional, we can just do the body)
  
  // Extract body
  let bodyMatch = content.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  let bodyContent = bodyMatch ? bodyMatch[1] : '';

  // basic replacements
  bodyContent = bodyContent.replace(/class=/g, 'className=')
                           .replace(/for=/g, 'htmlFor=')
                           .replace(/<!--[\s\S]*?-->/g, ''); // Fix comments

  // self-close img, input, hr, br
  bodyContent = bodyContent.replace(/<img([^>]*)>/g, (match, attrs) => {
    return attrs.endsWith('/') ? match : `<img${attrs} />`;
  });
  bodyContent = bodyContent.replace(/<input([^>]*)>/g, (match, attrs) => {
    return attrs.endsWith('/') ? match : `<input${attrs} />`;
  });
  bodyContent = bodyContent.replace(/<br>/g, '<br />');
  bodyContent = bodyContent.replace(/<hr([^>]*)>/g, (match, attrs) => {
    return attrs.endsWith('/') ? match : `<hr${attrs} />`;
  });

  // some hardcoded fixes if they exist
  bodyContent = bodyContent.replace(/style="([^"]*)"/g, "style={{}}"); // dirty hack but no inline styles were used so it's fine

  // If there's an active class logic for tabs, we could implement it, but for now we just dump the static component
  let reactCode = `import React from 'react';\n\nexport default function ${componentName}() {\n  return (\n    <>\n${bodyContent}\n    </>\n  );\n}\n`;

  fs.writeFileSync(`src/components/${componentName}.js`, reactCode);
  console.log(`Created src/components/${componentName}.js`);
}

if (!fs.existsSync('src/components')) {
    fs.mkdirSync('src/components', { recursive: true });
}

try {
  processHtmlFile('dashboard.html', 'Dashboard');
  processHtmlFile('historical.html', 'Historical');
  processHtmlFile('aqi.html', 'AQI');
  processHtmlFile('radar.html', 'Radar');
} catch (e) {
  console.error("Error processing files:", e);
}
