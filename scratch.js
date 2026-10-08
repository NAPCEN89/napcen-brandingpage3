const fs = require('fs');

const content = fs.readFileSync('src/app/page.tsx', 'utf8');
const lines = content.split('\n');

const getLine = (keyword) => lines.findIndex(l => l.includes(keyword));

const heroStart = getLine('HERO SECTION');
const logoTicker = getLine('<LogoTicker />');
const productsStart = getLine('id="products"');
const configStart = getLine('SYSTEM CONFIGURATIONS SECTION');
const comparisonStart = getLine('COMPARISON SECTION');
const techSpecStart = getLine('TECHNICAL SPECIFICATION SECTION');
const appExpStart = getLine('APPLICATION EXPLORER SECTION');
const price1Start = getLine('PRICE & PROCUREMENT SECTION');
const intlStart = getLine('INTERNATIONAL PROJECTS SECTION');
const appsStart = getLine('APPLICATIONS SECTION');
const workingPrin1Start = getLine('WORKING PRINCIPLE SECTION'); // The first one
const price2Start = getLine('DOWNDRAFT TABLE PRICE & PROCUREMENT'); // Wait, line 1421 is second Price section. It starts with PRICE & PROCUREMENT SECTION but let's find it.
const workingPrin2Start = getLine('<WorkingPrincipleDark />');
const workflowStart = getLine('<WorkflowSection />');
const faqStart = getLine('FAQ SECTION');
const footerStart = getLine('COMBINED CTA & FOOTER SECTION');

console.log({
  heroStart,
  logoTicker,
  productsStart,
  configStart,
  comparisonStart,
  techSpecStart,
  appExpStart,
  price1Start,
  intlStart,
  appsStart,
  workingPrin1Start,
  price2Start,
  workingPrin2Start,
  workflowStart,
  faqStart,
  footerStart
});
