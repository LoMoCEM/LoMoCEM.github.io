#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function exportForGitHubPages() {
  console.log('🚀 Starting GitHub Pages export...');

  try {
    // Build the project
    console.log('📦 Building project...');
    execSync('npm run build', { stdio: 'inherit' });

    // Create gh-pages directory if it doesn't exist
    const ghPagesDir = path.join(__dirname, 'gh-pages');
    if (!fs.existsSync(ghPagesDir)) {
      fs.mkdirSync(ghPagesDir);
    }

    // Copy dist/public contents to gh-pages
    console.log('📁 Copying build files...');
    execSync(`cp -r dist/public/* gh-pages/`, { stdio: 'inherit' });

    // Create CNAME file for custom domain (optional)
    const cnameContent = 'lomocem.github.io\n';
    fs.writeFileSync(path.join(ghPagesDir, 'CNAME'), cnameContent);

    // Create .nojekyll file to bypass Jekyll processing
    fs.writeFileSync(path.join(ghPagesDir, '.nojekyll'), '');

    // Create GitHub Pages specific index.html if needed
    const indexPath = path.join(ghPagesDir, 'index.html');
    if (fs.existsSync(indexPath)) {
      let indexContent = fs.readFileSync(indexPath, 'utf8');
      
      // Update any relative paths if needed for GitHub Pages
      indexContent = indexContent.replace(/src="\/src\//g, 'src="./src/');
      indexContent = indexContent.replace(/href="\/assets\//g, 'href="./assets/');
      
      fs.writeFileSync(indexPath, indexContent);
    }

    // Create deployment instructions
    const deployInstructions = `
# GitHub Pages Deployment Instructions

1. Initialize git in the gh-pages directory:
   cd gh-pages
   git init
   git add .
   git commit -m "Initial GitHub Pages deployment"

2. Add your GitHub repository as remote:
   git remote add origin https://github.com/LoMoCEM/LoMoCEM.github.io.git

3. Push to gh-pages branch:
   git branch -M gh-pages
   git push -u origin gh-pages

4. Enable GitHub Pages in your repository settings:
   - Go to Settings > Pages
   - Select "Deploy from a branch"
   - Choose "gh-pages" branch
   - Choose "/ (root)" folder
   - Save

Your site will be available at: https://LoMoCEM.github.io

## Automatic Deployment Script

To automate future deployments, you can use:
npm run export-gh-pages

This will rebuild and update the gh-pages directory.
`;

    fs.writeFileSync(path.join(ghPagesDir, 'DEPLOYMENT.md'), deployInstructions);

    console.log('✅ GitHub Pages export completed!');
    console.log('📂 Files are ready in the gh-pages directory');
    console.log('📖 See DEPLOYMENT.md for deployment instructions');

  } catch (error) {
    console.error('❌ Export failed:', error.message);
    process.exit(1);
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  exportForGitHubPages();
}

export default exportForGitHubPages;
