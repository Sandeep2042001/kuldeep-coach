# Kuldeep Kumawat - Fitness Training Landing Page (React)

A modern, attractive React landing page for professional gymnast and fitness coach Kuldeep Kumawat.

## Features

- **React-based**: Built with React 18 and React Router
- **Hero Section**: Eye-catching hero section with gradient background
- **Package Display**: Beautiful package cards showing different training programs
- **Multi-Step Form**: Interactive form with service selection and personal details
- **WhatsApp Integration**: Form submissions are sent directly to WhatsApp
- **Showcase Page**: Gallery page for photos and videos from Instagram
- **Responsive Design**: Works perfectly on all devices
- **Modern UI**: Minimal, attractive design with smooth animations

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Project Structure

```
src/
├── components/
│   ├── Home.js          # Main landing page component
│   ├── Hero.js          # Hero section component
│   ├── Packages.js      # Packages section component
│   ├── FormModal.js     # Multi-step form modal
│   └── Showcase.js      # Gallery/showcase page
├── App.js               # Main app component with routing
├── index.js            # React entry point
└── index.css           # Global styles
```

## Training Programs

1. Gymnastics Classes
2. Calisthenics Fitness
3. Flexibility & Mobility Classes
4. Personal Training
5. Advanced Calisthenics
6. Complete Fitness Package

## Form Fields

- Service selection (first step)
- Name
- Age
- Gender
- Profession
- Location
- Phone Number

## Customization

### Adding Instagram Photos/Videos

1. Open `src/components/Showcase.js`
2. Replace the placeholder arrays (`photos` and `videos`) with actual data:
```javascript
const photos = [
  { id: 1, src: 'your-photo-url.jpg', alt: 'Description', isPlaceholder: false },
  // ... more photos
];
```

### Changing WhatsApp Number

Edit the `phoneNumber` variable in `src/components/FormModal.js`:
```javascript
const phoneNumber = '916375275670'; // Change this
```

### Updating Instagram Handle

Update the Instagram link in `src/components/Showcase.js`:
```javascript
href="https://instagram.com/your-handle"
```

## Technologies Used

- React 18.2.0
- React Router DOM 6.20.0
- CSS3 (no external CSS frameworks)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Notes

- Make sure to replace placeholder images/videos with actual Instagram content
- Test the WhatsApp integration on mobile devices
- The form validates all required fields before submission
- All form data is formatted nicely in the WhatsApp message
- No backend required - everything is client-side
