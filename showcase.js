// Lightbox functionality
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const lightboxVideo = document.getElementById('lightbox-video');
const lightboxClose = document.querySelector('.lightbox-close');

// Open lightbox with image
function openLightboxImage(src) {
    lightboxImage.src = src;
    lightboxImage.style.display = 'block';
    lightboxVideo.style.display = 'none';
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Open lightbox with video
function openLightboxVideo(src) {
    lightboxVideo.src = src;
    lightboxVideo.style.display = 'block';
    lightboxImage.style.display = 'none';
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close lightbox
function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
    lightboxVideo.pause();
    lightboxVideo.src = '';
}

// Event listeners
lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', function(e) {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

// Close on Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        closeLightbox();
    }
});

// Add click handlers to gallery items (when you add real images/videos)
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', function() {
        const image = this.querySelector('img');
        const video = this.querySelector('video');
        
        if (image && image.src) {
            openLightboxImage(image.src);
        } else if (video && video.src) {
            openLightboxVideo(video.src);
        }
    });
});

// Instructions for adding Instagram content:
// 1. Replace placeholder divs with actual <img> tags for photos
// 2. Replace placeholder divs with <video> tags for videos
// 3. You can embed Instagram posts using Instagram's embed API or use direct image/video URLs
// 4. Example: <img src="your-instagram-photo-url.jpg" alt="Training photo">
// 5. Example: <video src="your-instagram-video-url.mp4" poster="thumbnail.jpg"></video>
