import React from 'react';
import './Packages.css';

const packages = [
  {
    id: 1,
    title: 'Gymnastics',
    description: 'Professional gymnastics training for all skill levels',
    features: [
      'Personalized coaching',
      'Progressive skill development',
      'Strength & flexibility training'
    ],
    featured: false
  },
  {
    id: 2,
    title: 'Calisthenics',
    description: 'Bodyweight training for ultimate strength',
    features: [
      'Muscle building',
      'Core strength',
      'Body control mastery'
    ],
    featured: true
  },
  {
    id: 3,
    title: 'Strength Training',
    description: 'Enhance your range of motion and prevent injuries',
    features: [
      'Flexibility training',
      'Mobility exercises',
      'Injury prevention'
    ],
    featured: false
  },
  {
    id: 4,
    title: 'Personal Training',
    description: 'One-on-one sessions tailored to your goals',
    features: [
      'Customized programs',
      'Individual attention',
      'Flexible scheduling'
    ],
    featured: false
  },
  {
    id: 5,
    title: 'Complete Fitness Package',
    description: 'All-in-one comprehensive training program',
    features: [
      'All training types',
      'Nutrition guidance',
      'Progress tracking'
    ],
    featured: false
  }
];

function Packages({ onStartForm }) {
  return (
    <section className="packages-section">
      <div className="container">
        <h2 className="section-title">Choose Your Training Program</h2>
        <div className="packages-grid">
          {packages.map((pkg) => (
            <div key={pkg.id} className={`package-card ${pkg.featured ? 'featured' : ''}`}>
              {pkg.featured && <div className="package-badge">Popular</div>}
              <h3>{pkg.title}</h3>
              <p>{pkg.description}</p>
              <ul className="package-features">
                {pkg.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <button 
                className="package-button" 
                onClick={() => onStartForm(pkg.title)}
              >
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Packages;
