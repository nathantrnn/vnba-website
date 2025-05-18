const fs = require('fs');
const path = require('path');

// Ensure the out directory exists
const outDir = path.join(process.cwd(), 'out');
if (!fs.existsSync(outDir)) {
  console.error('❌ Error: out directory does not exist');
  process.exit(1);
}

// Create index.html with redirect to /comingsoon
const indexPath = path.join(outDir, 'index.html');
const redirectContent = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="refresh" content="0;url=/comingsoon/">
    <title>Vietnam Basketball Academy</title>
    <script>
      window.location.href = "/comingsoon/";
    </script>
  </head>
  <body>
    <p>Redirecting to <a href="/comingsoon/">Coming Soon page</a>...</p>
  </body>
</html>
`;

try {
  fs.writeFileSync(indexPath, redirectContent);
  console.log('✅ Created index.html with redirect to /comingsoon/');
} catch (error) {
  console.error('❌ Error creating redirect:', error);
  process.exit(1);
} 