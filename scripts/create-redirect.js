const fs = require('fs');
const path = require('path');

// Ensure the out directory exists
const outDir = path.join(process.cwd(), 'out');
if (!fs.existsSync(outDir)) {
  console.error('❌ Error: out directory does not exist');
  process.exit(1);
}

// No need to create a redirect anymore since we duplicate the content
console.log('✅ No redirect needed - both home and coming soon pages have the same content'); 