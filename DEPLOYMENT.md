# Deployment Guide for TSM Idea Builder

## 🌐 Namecheap Hosting Deployment

### Step 1: Build the Project

1. Open terminal in the project directory
2. Run the build script:
```bash
./scripts/build-and-export.sh
```
Or manually:
```bash
npm install
npm run build
```

### Step 2: Prepare Files for Upload

After building, you'll have an `out/` folder containing:
- `index.html` - Main page
- `_next/` - Next.js assets (CSS, JS)
- Static assets and other pages

### Step 3: Upload to Namecheap

1. **Login to cPanel**
   - Go to your Namecheap hosting cPanel
   - Navigate to File Manager

2. **Access public_html**
   - Open the `public_html` directory (or your domain's folder)

3. **Upload Files**
   - Select all contents from the `out/` folder
   - Upload them to your domain's root directory
   - **Important**: Upload the *contents* of `out/`, not the `out/` folder itself

4. **Set Permissions**
   - Ensure files have correct permissions (usually 644 for files, 755 for folders)

### Step 4: Configure Domain (if needed)

If deploying to a subdirectory:
1. Update `next.config.js`:
```javascript
const nextConfig = {
  basePath: '/your-subdirectory',
  assetPrefix: '/your-subdirectory',
  // ... other config
}
```

### Step 5: Test Your Site

Visit your domain to ensure everything works:
- Drag and drop functionality
- Lottie animations
- Share buttons
- Sound effects
- Local storage (game state persistence)

---

## 🚀 Alternative Deployment Options

### Vercel (Recommended for ease)

1. Connect your GitHub repository to Vercel
2. Vercel will automatically build and deploy
3. Get instant HTTPS and global CDN

### Netlify

1. Drag and drop the `out/` folder to Netlify
2. Or connect your GitHub repository
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `out`

### GitHub Pages

1. Enable GitHub Pages in repository settings
2. Use GitHub Actions to build and deploy
3. Set source to GitHub Actions

---

## 🔧 Troubleshooting

### Common Issues

**1. Lottie animations not loading**
- Check if the Lottie URLs are accessible
- Verify CORS headers if using custom Lottie files

**2. Sharing buttons not working**
- Ensure the site URL is correctly set in the share functions
- Check if popup blockers are preventing social media windows

**3. Sound effects not playing**
- Modern browsers require user interaction before playing audio
- The sound toggle button should work after first user interaction

**4. Game state not persisting**
- Check if localStorage is enabled in the browser
- Verify the domain is serving over HTTPS (required by some browsers)

### Performance Optimization

1. **Enable Gzip Compression** in cPanel
2. **Set Cache Headers** for static assets
3. **Use CDN** if available through your hosting provider

---

## 📱 Mobile Optimization

The site is fully responsive and optimized for:
- Mobile phones (iOS/Android)
- Tablets
- Desktop browsers
- Touch interactions for drag and drop

---

## 🔒 Security Considerations

- No backend required (fully static)
- No sensitive data stored
- Uses localStorage only for game statistics
- All external requests are to trusted CDNs (Lottie, social media)

---

**🎉 Your TSM Idea Builder is now live and ready to help create the next Nigerian tech unicorn!**