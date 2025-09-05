#!/bin/bash

# TSM Idea Builder - Build and Export Script
# This script builds the Next.js app and prepares it for deployment

echo "🚀 Building TSM Idea Builder for deployment..."

# Clean previous builds
echo "🧹 Cleaning previous builds..."
rm -rf .next out

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the application
echo "🔨 Building the application..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build completed successfully!"
    echo "📁 Static files are ready in the 'out' directory"
    echo ""
    echo "🌐 Ready for deployment to:"
    echo "   - Namecheap hosting (upload 'out' folder contents)"
    echo "   - Vercel (connect GitHub repository)"
    echo "   - Netlify (drag and drop 'out' folder)"
    echo "   - Any static hosting service"
    echo ""
    echo "🎉 TSM Idea Builder is ready to help build Nigerian tech startups!"
else
    echo "❌ Build failed! Please check the errors above."
    exit 1
fi