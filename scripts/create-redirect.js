/**
 * Script to create a redirect index.html for GitHub Pages
 * This file is executed during the GitHub Actions workflow
 */

const fs = require('fs');
const path = require('path');

// Check if out directory exists
const outDir = path.join(process.cwd(), 'out');
if (!fs.existsSync(outDir)) {
  console.error('❌ Error: out directory does not exist');
  process.exit(1);
}

// Create a redirect index.html
const redirectHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="refresh" content="0;url=comingsoon/">
  <title>Vietnam Basketball Academy - Redirecting...</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      background-color: white;
      color: #001F5B;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
      margin: 0;
      padding: 20px;
      text-align: center;
    }
    
    p {
      max-width: 500px;
      opacity: 0.7;
    }
  </style>
</head>
<body>
  <h1>Vietnam Basketball Academy</h1>
  <p>Redirecting to Coming Soon page...</p>
  <p>Click <a href="comingsoon/">here</a> if you're not redirected automatically.</p>
</body>
</html>`;

// Write the index.html to the out directory
try {
  fs.writeFileSync(path.join(outDir, 'index.html'), redirectHtml);
  console.log('✅ Successfully created redirect index.html');
} catch (error) {
  console.error('❌ Error creating redirect index.html:', error);
  process.exit(1);
} 