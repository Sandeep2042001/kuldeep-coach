import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Showcase.css';

function Showcase() {
  const location = useLocation();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxContent, setLightboxContent] = useState({ type: '', src: '' });
  const submissionNotice = location.state?.submitted ? (location.state?.notice || 'We have received your information.') : '';

  const photos = [
    { id: 1, src: '/images/photo/1.png', alt: 'Training photo 1', isPlaceholder: false },
    { id: 2, src: '/images/photo/2.png', alt: 'Training photo 2', isPlaceholder: false },
    { id: 3, src: '/images/photo/3.png', alt: 'Training photo 3', isPlaceholder: false },
    { id: 4, src: '/images/photo/4.png', alt: 'Training photo 4', isPlaceholder: false },
    { id: 5, src: '/images/photo/5.png', alt: 'Training photo 5', isPlaceholder: false },
    { id: 6, src: '/images/photo/6.jpeg', alt: 'Training photo 6', isPlaceholder: false },
  ];

  const videos = [
    {
      id: 1,
      src: 'https://instagram.fudr1-1.fna.fbcdn.net/o1/v/t2/f2/m86/AQODNqL2MHqNcZ09kl9aJ4WeDx916NBDuD9Pslc2WMWyQH8Iz-7I0gbTrzjnyutD9AmgaP3eC3OJeUFAhcREsigAExgOn3TiHO_Zodc.mp4?_nc_cat=102&_nc_oc=AdkirqNchtDtx-yGWb_p5pxmEfqZXoUJLApY9be2PYrlTj-mxFGieLZoVODAO2P0OTE&_nc_sid=5e9851&_nc_ht=instagram.fudr1-1.fna.fbcdn.net&_nc_ohc=N2ZXXP9LVJ8Q7kNvwHsuxVS&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6MTEyMDQ4MDQ4OTYwMzI0MywiYXNzZXRfYWdlX2RheXMiOjE1OCwidmlfdXNlY2FzZV9pZCI6MTAwOTksImR1cmF0aW9uX3MiOjE5LCJ1cmxnZW5fc291cmNlIjoid3d3In0%3D&ccb=17-1&vs=d762346f8f3975b8&_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC80QjRCNENBQkZCNTFBMEVBMjhCNjMwNUY3QkZFMzM5NV92aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYRmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC83MTEzNTgwNTg1ODkyNzJfODkzODQ4OTIzNTQ0MzI4MjI5Ni5tcDQVAgLIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAm1oL8mMbE_QMVAigCQzMsF0AzbtkWhysCGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHX-B2XmnQEA&_nc_gid=-JAOvtXWyen5gAaL2ObuVQ&_nc_zt=28&oh=00_AfuE777wZER385YGwCEj41Hc9aTEt6BqyaDRCa_kq9dWXQ&oe=6996633F',
      title: 'Training video 1',
      isPlaceholder: false
    },
    {
      id: 2,
      src: 'https://instagram.fudr1-1.fna.fbcdn.net/o1/v/t16/f2/m69/AQMEkubndCZ9xRcJMuD2zad_Wyu5mF9hCnT1TLr-jVyFqQ58hkCXsrQkNefCnMKmuzE6yYruaHEdfmpDXMltfm1n.mp4?strext=1&_nc_cat=100&_nc_oc=AdnefBV2nR3NdLcxqu8Lu9MhCfpEbmMoOXFg998zVs3iFXS7uhyzS6wyIjSTCVKYBIk&_nc_sid=5e9851&_nc_ht=instagram.fudr1-1.fna.fbcdn.net&_nc_ohc=2c5xgINFuZsQ7kNvwHIgtmr&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6ODU3MjU0MjIwNTU0NjEyLCJhc3NldF9hZ2VfZGF5cyI6NDQsInZpX3VzZWNhc2VfaWQiOjEwMDk5LCJkdXJhdGlvbl9zIjoyMywidXJsZ2VuX3NvdXJjZSI6Ind3dyJ9&ccb=17-1&vs=6213ee1889bd7595&_nc_vs=HBksFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HSXRKY0NSYWNTMGw0WTBDQUhDaG9udThCQWN4YnNwVEFRQUYVAALIARIAFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HUDZsUFNRYkRwcEVGaElEQUs3RGRubkxJMmh4YnN0VEFRQUYVAgLIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAm6IXj1OHqhQMVAigCQzMsF0A3sCDEm6XjGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHX-B2XmnQEA&_nc_gid=YC6W2RYFHYkJeCIJBKClLQ&_nc_zt=28&oh=00_AfsiwBW-ZsRQs4pRRncCW4DV2n5kT0F7lzcfCEyumUNpOA&oe=699A4E94',
      title: 'Training video 2',
      isPlaceholder: false
    },
    {
      id: 3,
      src: 'https://instagram.fudr1-1.fna.fbcdn.net/o1/v/t2/f2/m86/AQO139lN957fN-fWr2Ji4soH5R3secoKVEVur8fn7hFY8l-35f8GsPySXoILpiDu9yu3bbdRDUuYa6dpHtrSln2TjKKQ171UG5NaR60.mp4?_nc_cat=110&_nc_oc=AdlK5_yodjLNDtzibTwjzaZIqyeJE_O1Evxr9iAx0F4bTAlTlhMwHxd9A1XfryVUV50&_nc_sid=5e9851&_nc_ht=instagram.fudr1-1.fna.fbcdn.net&_nc_ohc=4mP43njJi3QQ7kNvwEtfJcZ&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6MTk0MTc1MjA5NjM3NTc1NSwiYXNzZXRfYWdlX2RheXMiOjE1OCwidmlfdXNlY2FzZV9pZCI6MTAwOTksImR1cmF0aW9uX3MiOjExLCJ1cmxnZW5fc291cmNlIjoid3d3In0%3D&ccb=17-1&vs=5b266c6f1159ce20&_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC9COTRENDAxMTYxMzE0OUZBNjlFMkVDRjk3QTlFRkY5MF92aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYRmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC8xMTQyNTYzNTUxMTE4MjYzXzY2MTAyMzA3NzMwOTIwNzc5MC5tcDQVAgLIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAmlo-Sv-yA8wYVAigCQzMsF0AnVP3ztkWiGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHX-B2XmnQEA&_nc_gid=e1olUgvp7gMy0QFdQKmXmw&_nc_zt=28&oh=00_Aftvf1upWFSDdYpdWK8cUAxa0MOF-ozyk7j79iqhPfrUBQ&oe=69965A03',
      title: 'Training video 3',
      isPlaceholder: false
    }
  ];

  const openLightbox = (type, src) => {
    setLightboxContent({ type, src });
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="showcase">
      <section className="showcase-hero">
        <img src="/images/logo.png" alt="Kuldeep Fitness logo" className="showcase-page-logo" />
        <img src="/images/hero.png" alt="Kuldeep training" className="showcase-hero-image" />
        <div className="showcase-hero-overlay"></div>
        <div className="showcase-hero-content">
          {submissionNotice && <p className="submission-notice">{submissionNotice}</p>}
          <Link to="/" className="back-button">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to Home
          </Link>
        </div>
      </section>

      <section className="gallery-section">
        <div className="container">
          <div className="gallery-header">
            <h2>My Journey & Achievements</h2>
            <p>Follow me on Instagram for daily updates and training tips</p>
            <a 
              href="https://instagram.com/kuldeepgymnast29" 
              target="_blank" 
              rel="noopener noreferrer"
              className="instagram-link"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              @kuldeepgymnast29
            </a>
          </div>

          <div className="gallery-grid">
            {photos.map((photo) => (
              <div 
                key={photo.id} 
                className="gallery-item"
                onClick={() => !photo.isPlaceholder && openLightbox('image', photo.src)}
              >
                {photo.isPlaceholder ? (
                  <div className="gallery-image photo-placeholder">
                    <div className="placeholder-content">
                      <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                        <circle cx="8.5" cy="8.5" r="1.5"/>
                        <polyline points="21 15 16 10 5 21"/>
                      </svg>
                      <p>Add your Instagram photos here</p>
                    </div>
                  </div>
                ) : (
                  <img src={photo.src} alt={photo.alt} className="gallery-image" />
                )}
              </div>
            ))}
          </div>

          <div className="video-section">
            <h3>Training Videos</h3>
            <div className="gallery-grid">
              {videos.map((video) => (
                <div 
                  key={video.id} 
                  className="gallery-item video-item"
                  onClick={() => !video.isPlaceholder && openLightbox('video', video.src)}
                >
                  {video.isPlaceholder ? (
                    <div className="gallery-image video-placeholder">
                      <div className="placeholder-content">
                        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <polygon points="5 3 19 12 5 21 5 3"/>
                        </svg>
                        <p>Add your Instagram videos here</p>
                      </div>
                    </div>
                  ) : (
                    <video
                      src={video.src}
                      className="gallery-image"
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="cta-section">
            <h2>Ready to Start Your Journey?</h2>
            <p>Book a session with me today and transform your fitness</p>
            <Link to="/" className="cta-button-showcase">
              Book Your Training Session
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {lightboxOpen && (
        <div className="lightbox" onClick={closeLightbox}>
          <span className="lightbox-close" onClick={closeLightbox}>&times;</span>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            {lightboxContent.type === 'image' ? (
              <img src={lightboxContent.src} alt="Gallery" />
            ) : (
              <video src={lightboxContent.src} controls autoPlay muted playsInline>
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Showcase;
