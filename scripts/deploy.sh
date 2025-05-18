#!/bin/bash
# Simple deployment script for VPS

# Exit on any error
set -e

echo "🚀 Starting deployment process..."

# Update code from git if this is a git repository
if [ -d ".git" ]; then
  echo "📥 Pulling latest changes from git..."
  git pull
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm ci

# Build the static site
echo "🔨 Building static site..."
npm run export

# The static site is now in the 'out' directory
echo "✅ Build complete! Static site is in the 'out' directory."

# If you want to deploy to a web server directory
if [ -n "$1" ]; then
  DEPLOY_DIR=$1
  echo "📂 Deploying to $DEPLOY_DIR..."
  
  # Create directory if it doesn't exist
  mkdir -p $DEPLOY_DIR
  
  # Copy files to deployment directory
  cp -R out/* $DEPLOY_DIR
  
  echo "🎉 Deployed successfully to $DEPLOY_DIR"
else
  echo "ℹ️ To deploy to a web server directory, run:"
  echo "   ./scripts/deploy.sh /path/to/web/directory"
fi

echo "✨ Deployment process finished!" 