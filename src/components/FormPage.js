import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './FormPage.css';

const services = [
  { id: 1, icon: '🤸', name: 'Personal Training (Ofline & Online class Available)' },
  { id: 2, icon: '🤸', name: 'Gymnastics Classes' },
  { id: 3, icon: '💪', name: 'Calisthenics' },
  { id: 4, icon: '🧘', name: 'Strength Training' },
  // { id: 5, icon: '🏋️', name: 'Personal Training' },
  { id: 6, icon: '🌟', name: 'Complete Fitness Trainings' }
];

const totalSteps = 7; // Service + 6 personal questions

function FormPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    service: location.state?.preSelectedService || '',
    name: '',
    age: '',
    gender: '',
    profession: '',
    location: '',
    phone: ''
  });

  useEffect(() => {
    if (formData.service) {
      setCurrentStep(2); // Skip to name if service is pre-selected
    }
  }, []);

  const handleNext = () => {
    if (canProceed() && currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    } else {
      navigate('/');
    }
  };

  const handleServiceSelect = (serviceName) => {
    setFormData(prev => ({ ...prev, service: serviceName }));
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleGenderSelect = (gender) => {
    setFormData(prev => ({ ...prev, gender }));
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1: return formData.service !== '';
      case 2: return formData.name.trim() !== '';
      case 3: return formData.age !== '' && parseInt(formData.age) >= 10 && parseInt(formData.age) <= 100;
      case 4: return formData.gender !== '';
      case 5: return formData.profession.trim() !== '';
      case 6: return formData.location.trim() !== '';
      case 7: return formData.phone.trim() !== '' && /^\d{10}$/.test(formData.phone);
      default: return false;
    }
  };

  const handleSubmit = () => {
    navigate('/showcase', {
      replace: true,
      state: { submitted: true, notice: 'We have received your information.' }
    });
  };

  const renderStepIndicator = () => {
    return (
      <div className="form-step-indicator">
        {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step) => (
          <React.Fragment key={step}>
            <div className={`form-step-number ${
              step < currentStep ? 'completed' : 
              step === currentStep ? 'active' : ''
            }`}>
              {step < currentStep ? '✓' : step}
            </div>
            {step < totalSteps && (
              <div className={`form-step-line ${step < currentStep ? 'active' : ''}`}></div>
            )}
          </React.Fragment>
        ))}
      </div>
    );
  };

  const renderQuestion = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="form-question-container">
            <h1 className="form-question-title">What are you interested in?</h1>
            <p className="form-question-subtitle">Select the training program that matches your goals</p>
            <div className="form-service-options">
              {services.map((service) => (
                <button
                  key={service.id}
                  type="button"
                  className={`form-service-option ${formData.service === service.name ? 'selected' : ''}`}
                  onClick={() => handleServiceSelect(service.name)}
                >
                  <span className="form-service-radio" aria-hidden="true"></span>
                  <span className="form-service-text">{service.name}</span>
                </button>
              ))}
            </div>
            <div className="form-actions">
              <button type="button" className="form-btn-secondary" onClick={handleBack}>
                Back
              </button>
              <button
                type="button"
                className="form-btn-primary"
                onClick={handleNext}
                disabled={!canProceed()}
              >
                Continue
              </button>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="form-question-container">
            <h1 className="form-question-title">What is your name?</h1>
            <p className="form-question-subtitle">Please enter your full name</p>
            <div className="form-single-input-container">
              <input
                type="text"
                className="form-single-input"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && canProceed()) {
                    handleNext();
                  }
                }}
                placeholder="Enter your full name"
                autoFocus
              />
              <button
                type="button"
                className="form-btn-primary form-btn-full"
                onClick={handleNext}
                disabled={!canProceed()}
              >
                Continue
              </button>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="form-question-container">
            <h1 className="form-question-title">What is your age?</h1>
            <p className="form-question-subtitle">Please enter your age</p>
            <div className="form-single-input-container">
              <input
                type="number"
                className="form-single-input"
                value={formData.age}
                onChange={(e) => handleInputChange('age', e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && canProceed()) {
                    handleNext();
                  }
                }}
                placeholder="Enter your age"
                min="10"
                max="100"
                autoFocus
              />
              <div className="form-actions">
                <button type="button" className="form-btn-secondary" onClick={handleBack}>
                  Back
                </button>
                <button
                  type="button"
                  className="form-btn-primary"
                  onClick={handleNext}
                  disabled={!canProceed()}
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="form-question-container">
            <h1 className="form-question-title">What is your gender?</h1>
            <p className="form-question-subtitle">Please select your gender</p>
            <div className="form-single-input-container">
              <div className="form-radio-group">
                {['Male', 'Female', 'Other'].map((gender) => (
                  <button
                    key={gender}
                    type="button"
                    className={`form-radio-option-btn ${formData.gender === gender ? 'selected' : ''}`}
                    onClick={() => handleGenderSelect(gender)}
                  >
                    {gender}
                  </button>
                ))}
              </div>
              <div className="form-actions">
                <button type="button" className="form-btn-secondary" onClick={handleBack}>
                  Back
                </button>
                <button
                  type="button"
                  className="form-btn-primary"
                  onClick={handleNext}
                  disabled={!canProceed()}
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="form-question-container">
            <h1 className="form-question-title">What is your profession?</h1>
            <p className="form-question-subtitle">Please enter your profession</p>
            <div className="form-single-input-container">
              <input
                type="text"
                className="form-single-input"
                value={formData.profession}
                onChange={(e) => handleInputChange('profession', e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && canProceed()) {
                    handleNext();
                  }
                }}
                placeholder="e.g., Student, Engineer, Teacher"
                autoFocus
              />
              <div className="form-actions">
                <button type="button" className="form-btn-secondary" onClick={handleBack}>
                  Back
                </button>
                <button
                  type="button"
                  className="form-btn-primary"
                  onClick={handleNext}
                  disabled={!canProceed()}
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="form-question-container">
            <h1 className="form-question-title">Where do you live?</h1>
            <p className="form-question-subtitle">Please enter your city or location</p>
            <div className="form-single-input-container">
              <input
                type="text"
                className="form-single-input"
                value={formData.location}
                onChange={(e) => handleInputChange('location', e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && canProceed()) {
                    handleNext();
                  }
                }}
                placeholder="Enter your city/location"
                autoFocus
              />
              <div className="form-actions">
                <button type="button" className="form-btn-secondary" onClick={handleBack}>
                  Back
                </button>
                <button
                  type="button"
                  className="form-btn-primary"
                  onClick={handleNext}
                  disabled={!canProceed()}
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        );

      case 7:
        return (
          <div className="form-question-container">
            <h1 className="form-question-title">What is your phone number?</h1>
            <p className="form-question-subtitle">Please enter your phone number</p>
            <div className="form-single-input-container">
              <input
                type="tel"
                className="form-single-input"
                value={formData.phone}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, ''); // Only numbers
                  handleInputChange('phone', value);
                }}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && canProceed()) {
                    handleSubmit();
                  }
                }}
                placeholder="Enter your phone number"
                pattern="[0-9]{10}"
                maxLength="10"
                autoFocus
              />
              <div className="form-actions">
                <button type="button" className="form-btn-secondary" onClick={handleBack}>
                  Back
                </button>
                <button
                  type="button"
                  className="form-btn-primary"
                  onClick={handleSubmit}
                  disabled={!canProceed()}
                >
                  Submit & Continue
                </button>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="form-page">
      <div className="form-page-content">
        {renderStepIndicator()}
        {renderQuestion()}
      </div>
    </div>
  );
}

export default FormPage;
