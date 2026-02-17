import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Showcase.css';

function Showcase() {
  const location = useLocation();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxContent, setLightboxContent] = useState({ type: '', src: '' });
  const submissionNotice = location.state?.submitted ? (location.state?.notice || 'We have received your information.') : '';

  // Placeholder data - Replace with actual Instagram photos/videos
  const photos = [
    { id: 1, src: '', alt: 'Training photo 1', isPlaceholder: true },
    { id: 2, src: '', alt: 'Training photo 2', isPlaceholder: true },
    { id: 3, src: '', alt: 'Training photo 3', isPlaceholder: true },
    { id: 4, src: '', alt: 'Training photo 4', isPlaceholder: true },
    { id: 5, src: '', alt: 'Training photo 5', isPlaceholder: true },
    { id: 6, src: '', alt: 'Training photo 6', isPlaceholder: true },
  ];

  const videos = [
    { id: 1, src: '', thumbnail: '', title: 'Training video 1', isPlaceholder: true },
    { id: 2, src: '', thumbnail: '', title: 'Training video 2', isPlaceholder: true },
    { id: 3, src: '', thumbnail: '', title: 'Training video 3', isPlaceholder: true },
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
          <h1 className="showcase-title">Kuldeep Kumawat</h1>
          <p className="showcase-subtitle">Professional Gymnast & Fitness Coach</p>
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
              href="https://instagram.com/kuldeep.kumawat" 
              target="_blank" 
              rel="noopener noreferrer"
              className="instagram-link"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              @kuldeep.kumawat
            </a>
          </div>

          {/* Photo Gallery */}
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

          {/* Video Gallery */}
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
                    <>
                      <img src={video.thumbnail} alt={video.title} className="gallery-image" />
                      <div className="play-overlay">▶</div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
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

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="lightbox" onClick={closeLightbox}>
          <span className="lightbox-close" onClick={closeLightbox}>&times;</span>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            {lightboxContent.type === 'image' ? (
              <img src={lightboxContent.src} alt="Gallery" />
            ) : (
              <video src={lightboxContent.src} controls autoPlay>
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
