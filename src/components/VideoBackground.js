import React, { useEffect, useRef } from 'react';
import './VideoBackground.css';

function VideoBackground() {
  const videoRef = useRef(null);
  
  // IMPORTANT: Replace this URL with the direct video URL from Instagram
  // To get the video URL:
  // 1. Open: https://www.instagram.com/reel/Ch6UHCwPc-E/
  // 2. Right-click on the video → Inspect Element
  // 3. In the HTML, find <video> tag
  // 4. Copy the src URL (starts with https://scontent-...)
  // 5. Paste it below
  
  // Example format (replace with your actual URL):
  // The URL should look like: 'https://scontent-xxx.cdninstagram.com/v/t51.2885-15/...'
  // NOT the Instagram page URL!
  const videoSrc = 'https://instagram.fudr1-1.fna.fbcdn.net/o1/v/t2/f2/m86/AQOq6jT9P5dHT5LCBibZhCJoJErMjhhv4Zr9rLGPnScXwgxeKqUoC4nV5TyzwbXBbpmS4KoAMBPsAw89O8leSrc7OneFktIq3MMqNGw.mp4?_nc_cat=106&_nc_oc=AdmYOyaaS-wyY2nl7w1NnFlb4tuyH6ruT3zKOu5ZMNd_syIb_dAfWKvo9Kou0bMzaUM&_nc_sid=5e9851&_nc_ht=instagram.fudr1-1.fna.fbcdn.net&_nc_ohc=Ut7yyxNvmd4Q7kNvwHmHAnU&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6MTQ1MDI3MTY1NTQ4MzAyNCwiYXNzZXRfYWdlX2RheXMiOjEyNjYsInZpX3VzZWNhc2VfaWQiOjEwMDk5LCJkdXJhdGlvbl9zIjoyMiwidXJsZ2VuX3NvdXJjZSI6Ind3dyJ9&ccb=17-1&_nc_gid=IiulB7C_UNsj8Ud-LPqowg&_nc_zt=28&vs=525eadf668916d9f&_nc_vs=HBkcFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC8yNzQwQTM2RDVFQ0I4MzdCRDcyMjA5RjE3MEU3NEZCQ192aWRlb19kYXNoaW5pdC5tcDQVAALIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAmoNrS7fXAkwUVAigCQzMsF0A190vGp--eGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHX-B2XmnQEA&oh=00_AfsbCl0jgHzxtEtANv4-tsFqUFDdRaVtT8iGy1ywIx6Ahg&oe=69963E3B'; // Set this to the direct video file URL
  
  useEffect(() => {
    // Force autoplay when component mounts
    if (videoRef.current && videoSrc) {
      const playPromise = videoRef.current.play();
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // Autoplay started
            console.log('Video autoplay started');
          })
          .catch((error) => {
            // Autoplay was prevented
            console.log('Autoplay prevented:', error);
            // Try to play on user interaction
            document.addEventListener('click', () => {
              videoRef.current?.play();
            }, { once: true });
          });
      }
    }
  }, [videoSrc]);

  return (
    <div className="video-background">
      {videoSrc ? (
        // Use direct video URL - BEST METHOD
        <video
          ref={videoRef}
          className="video-bg-element"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        // Fallback: Show instructions if video URL not set
        <div className="video-placeholder">
          <div className="video-instructions">
            <h3>Video Background Setup Required</h3>
            <p>To enable autoplay video background:</p>
            <ol>
              <li>Open the Instagram reel in your browser</li>
              <li>Right-click the video → Inspect Element</li>
              <li>Find the &lt;video&gt; tag in HTML</li>
              <li>Copy the <code>src</code> URL</li>
              <li>Update <code>videoSrc</code> in VideoBackground.js</li>
            </ol>
            <p className="note">
              Instagram embeds don't autoplay. You need the direct video URL.
            </p>
          </div>
        </div>
      )}
      
      {/* Dark overlay for better text readability */}
      <div className="video-overlay"></div>
    </div>
  );
}

export default VideoBackground;
