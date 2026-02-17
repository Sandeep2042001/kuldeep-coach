# How to Get Instagram Video URL for Background

Since Instagram embeds don't autoplay well, here are ways to get the direct video URL:

## Method 1: Using Browser Developer Tools
1. Open the Instagram reel: https://www.instagram.com/reel/Ch6UHCwPc-E/
2. Right-click on the video and select "Inspect" or "Inspect Element"
3. Look for a `<video>` tag in the HTML
4. Find the `src` attribute - this is your video URL
5. Copy the URL and update `VideoBackground.js` with `setVideoSrc('your-video-url-here')`

## Method 2: Using Online Tools
- Use services like "Instagram Video Downloader" websites
- Paste the Instagram reel URL
- Download the video
- Host it on your server or use a CDN
- Update the video URL in `VideoBackground.js`

## Method 3: Using Instagram API (Advanced)
- Use Instagram Graph API to fetch video URL
- Requires Instagram Business Account and API access

## Quick Fix: Update VideoBackground.js

Once you have the direct video URL, update the component:

```javascript
const [videoSrc, setVideoSrc] = useState('your-video-url-here');
```

The video element will automatically:
- Autoplay
- Loop
- Be muted
- Cover full viewport
- Work on all devices
