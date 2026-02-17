import React from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from './Hero';
import Packages from './Packages';
import './Home.css';

function Home() {
  const navigate = useNavigate();

  const startForm = (service = '') => {
    navigate('/form', { state: { preSelectedService: service } });
  };

  return (
    <div className="home">
      <Hero onStartForm={startForm} />
      <Packages onStartForm={startForm} />
    </div>
  );
}

export default Home;
