import React from 'react';
import './Hero.css';

function Hero({ onStartForm }) {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <img className="site-logo" src="/images/logo.png" alt="Kuldeep Fitness logo" />
          <h1 className="hero-title">
            <span className="gradient-text">Transform Your Body</span>
            <br />
          </h1>
          <button className="cta-button" onClick={() => onStartForm()}>
            Start Your Journey
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
