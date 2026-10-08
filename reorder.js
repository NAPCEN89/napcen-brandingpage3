const fs = require('fs');

const content = fs.readFileSync('src/app/page.tsx', 'utf8');
const lines = content.split('\n');

// Block boundaries
const block0 = lines.slice(0, 344); // 0 to 343 (Hero + LogoTicker)
const block1 = lines.slice(344, 464); // 344 to 463 (Workbench)
const block2 = lines.slice(464, 701); // 464 to 700 (Configurations)
const block3 = lines.slice(701, 772); // 701 to 771 (Comparison)
const block4 = lines.slice(772, 857); // 772 to 856 (Tech Spec)
const block5 = lines.slice(857, 1168); // 857 to 1167 (App Explorer)
const block6 = lines.slice(1168, 1322); // 1168 to 1321 (Price 1)
const block7 = lines.slice(1322, 1385); // 1322 to 1384 (International)
const block8 = lines.slice(1385, 1519); // 1385 to 1518 (Equipment/Applications)
const block9 = lines.slice(1519, 1578); // 1519 to 1577 (Working Principle 1)
const block10 = lines.slice(1578, 1625); // 1578 to 1624 (Price 2)
const block11 = lines.slice(1625, 1628); // 1625 to 1627 (Working Principle Dark)
const block12 = lines.slice(1628, 1630); // 1628 to 1629 (Workflow/Lifecycle)
const block13 = lines.slice(1630, 1729); // 1630 to 1728 (FAQ)
const block14 = lines.slice(1729); // 1729 to end (Footer)

// Reordered
const newLines = [
  ...block0,
  ...block1,
  ...block2,
  ...block8,
  ...block5,
  ...block9,
  ...block11,
  ...block3,
  ...block4,
  ...block6,
  ...block10,
  ...block7,
  ...block12,
  ...block13,
  ...block14
];

fs.writeFileSync('src/app/page.tsx', newLines.join('\n'));
console.log('Reordered successfully!');
