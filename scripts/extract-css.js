const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');

const extractions = {
  index: { start: '/*  */', end: '/*  FOOTER  */' },
  products: { start: 'FILTER / TOOLBAR BAR', end: 'FOOTER' },
  cart: { start: '/*  PROGRESS STEPS  */', end: '/* TOAST */' },
  register: { start: '.register-shell {', end: '.site-footer {' },
};

function extractBetween(css, start, end) {
  const startIdx = css.indexOf(start);
  if (startIdx === -1) {
    console.warn('Start marker not found:', start.slice(0, 40));
    return '';
  }
  const endIdx = end ? css.indexOf(end, startIdx) : css.length;
  if (endIdx === -1) return css.substring(startIdx).trim();
  return css.substring(startIdx, endIdx).trim();
}

const pagesDir = path.join(ROOT, 'css', 'pages');
if (!fs.existsSync(pagesDir)) fs.mkdirSync(pagesDir, { recursive: true });

for (const [page, markers] of Object.entries(extractions)) {
  const htmlPath = path.join(ROOT, `${page}.html`);
  let html = fs.readFileSync(htmlPath, 'utf8');
  const styleMatch = html.match(/<style>([\s\S]*?)<\/style>/);
  if (!styleMatch) {
    console.error(`No style block in ${page}.html`);
    continue;
  }
  const pageCss = extractBetween(styleMatch[1], markers.start, markers.end);
  fs.writeFileSync(path.join(pagesDir, `${page}.css`), pageCss + '\n');

  const links =
    '  <link rel="stylesheet" href="css/main.css" />\n' +
    `  <link rel="stylesheet" href="css/pages/${page}.css" />`;

  html = html
    .replace(/<link rel="stylesheet" href="css\/style\.css" \/>\s*/g, '')
    .replace(/<style>[\s\S]*?<\/style>/, links);

  if (page !== 'index') {
    html = html.replace(
      /<script src="https:\/\/cdn\.jsdelivr\.net\/npm\/bootstrap@5\.3\.3\/dist\/js\/bootstrap\.bundle\.min\.js"><\/script>/,
      '<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>\n<script src="./js/main.js"></script>'
    );
  }

  fs.writeFileSync(htmlPath, html);
  console.log(`Updated ${page}.html + css/pages/${page}.css (${pageCss.length} chars)`);
}
