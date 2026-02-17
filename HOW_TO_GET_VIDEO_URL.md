# How to Get Instagram Video URL for Autoplay Background

## Quick Steps:

### Method 1: Browser Developer Tools (Recommended)

1. **Open the Instagram Reel:**
   - Go to: https://www.instagram.com/reel/Ch6UHCwPc-E/
   - Or open it in your browser

2. **Inspect the Video:**
   - Right-click on the video
   - Select "Inspect" or "Inspect Element" (or press F12)
   - This opens Developer Tools

3. **Find the Video Element:**
   - In the HTML code, look for `<video>` tag
   - You can search for "video" in the Elements panel
   - Look for something like:
     ```html
     <video src="https://scontent-xxx.cdninstagram.com/v/..." ...>
     ```

4. **Copy the Video URL:**
   - Find the `src` attribute in the `<video>` tag
   - Copy the entire URL (it will be long, starting with `https://scontent-`)
   - Example: `https://scontent.cdninstagram.com/v/t51.2885-15/...`

5. **Update the Code:**
   - Open `src/components/VideoBackground.js`
   - Find the line: `const videoSrc = null;`
   - Replace `null` with your video URL in quotes:
     ```javascript
     const videoSrc = 'https://scontent.cdninstagram.com/v/t51.2885-15/...';
     ```

### Method 2: Using Instagram Video Downloader

1. Use a service like:
   - SaveFrom.net
   - Instagram Video Downloader
   - Or similar tools

2. Paste the Instagram reel URL
3. Download the video file
4. Upload it to your server or hosting service
5. Use that URL in `VideoBackground.js`

### Method 3: Using Instagram API (Advanced)

If you have Instagram API access, you can fetch the video URL programmatically.

## After Adding the URL:

Once you update `videoSrc` with the direct video URL:
- ✅ Video will autoplay automatically
- ✅ Video will loop continuously
- ✅ No play button will appear
- ✅ Full video will be visible
- ✅ Works on all devices

## Troubleshooting:

- **If video doesn't autoplay:** Some browsers block autoplay. The video will play after user interaction.
- **If video URL expires:** Instagram URLs may expire. You may need to refresh it periodically or host the video yourself.
- **If video doesn't load:** Check that the URL is correct and accessible.
