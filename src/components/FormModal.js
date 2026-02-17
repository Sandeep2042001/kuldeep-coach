import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './FormModal.css';

const services = [
  { id: 1, icon: '🤸', name: 'Gymnastics' },
  { id: 2, icon: '💪', name: 'Calisthenics' },
  { id: 3, icon: '🧘', name: 'Strength Training' },
  { id: 4, icon: '🏋️', name: 'Personal Training' },
  { id: 6, icon: '🌟', name: 'Complete Fitness Package' }
];

const totalSteps = 7; // Service + 6 personal questions

function FormModal({ isOpen, onClose, preSelectedService }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    service: '',
    name: '',
    age: '',
    gender: '',
    profession: '',
    location: '',
    phone: ''
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      if (preSelectedService) {
        setFormData(prev => ({ ...prev, service: preSelectedService }));
        setCurrentStep(2); // Skip to name if service is pre-selected
      } else {
        // Reset form when opening
        setFormData({
          service: '',
          name: '',
          age: '',
          gender: '',
          profession: '',
          location: '',
          phone: ''
        });
        setCurrentStep(1);
      }
    }
  }, [isOpen, preSelectedService]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const handleNext = () => {
    if (canProceed() && currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleServiceSelect = (serviceName) => {
    setFormData(prev => ({ ...prev, service: serviceName }));
    setTimeout(() => {
      handleNext();
    }, 300);
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleGenderSelect = (gender) => {
    setFormData(prev => ({ ...prev, gender }));
    setTimeout(() => {
      handleNext();
    }, 300);
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
    // Close modal and redirect
    onClose();
    navigate('/showcase', {
      replace: true,
      state: { submitted: true, notice: 'We have received your information.' }
    });
  };

  const renderStepIndicator = () => {
    return (
      <div className="step-indicator">
        {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step) => (
          <React.Fragment key={step}>
            <div className={`step-number ${
              step < currentStep ? 'completed' : 
              step === currentStep ? 'active' : ''
            }`}>
              {step < currentStep ? '✓' : step}
            </div>
            {step < totalSteps && (
              <div className={`step-line ${step < currentStep ? 'active' : ''}`}></div>
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
          <>
            <h2 className="form-title">What are you interested in?</h2>
            <p className="form-subtitle">Select the training program that matches your goals</p>
            <div className="service-options">
              {services.map((service) => (
                <button
                  key={service.id}
                  type="button"
                  className={`service-option ${formData.service === service.name ? 'selected' : ''}`}
                  onClick={() => handleServiceSelect(service.name)}
                >
                  <span className="service-icon">{service.icon}</span>
                  <span className="service-text">{service.name}</span>
                </button>
              ))}
            </div>
          </>
        );

      case 2:
        return (
          <>
            <h2 className="form-title">What is your name?</h2>
            <p className="form-subtitle">Please enter your full name</p>
            <div className="single-question-form">
              <input
                type="text"
                className="single-input"
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
                className="btn-primary btn-full"
                onClick={handleNext}
                disabled={!canProceed()}
              >
                Continue
              </button>
            </div>
          </>
        );

      case 3:
        return (
          <>
            <h2 className="form-title">What is your age?</h2>
            <p className="form-subtitle">Please enter your age</p>
            <div className="single-question-form">
              <input
                type="number"
                className="single-input"
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
                <button type="button" className="btn-secondary" onClick={handleBack}>
                  Back
                </button>
                <button
                  type="button"
                  className="btn-primary"
                  onClick={handleNext}
                  disabled={!canProceed()}
                >
                  Continue
                </button>
              </div>
            </div>
          </>
        );

      case 4:
        return (
          <>
            <h2 className="form-title">What is your gender?</h2>
            <p className="form-subtitle">Please select your gender</p>
            <div className="single-question-form">
              <div className="radio-group">
                {['Male', 'Female', 'Other'].map((gender) => (
                  <button
                    key={gender}
                    type="button"
                    className={`radio-option-btn ${formData.gender === gender ? 'selected' : ''}`}
                    onClick={() => handleGenderSelect(gender)}
                  >
                    {gender}
                  </button>
                ))}
              </div>
              <button
                type="button"
                className="btn-secondary btn-full"
                onClick={handleBack}
              >
                Back
              </button>
            </div>
          </>
        );

      case 5:
        return (
          <>
            <h2 className="form-title">What is your profession?</h2>
            <p className="form-subtitle">Please enter your profession</p>
            <div className="single-question-form">
              <input
                type="text"
                className="single-input"
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
                <button type="button" className="btn-secondary" onClick={handleBack}>
                  Back
                </button>
                <button
                  type="button"
                  className="btn-primary"
                  onClick={handleNext}
                  disabled={!canProceed()}
                >
                  Continue
                </button>
              </div>
            </div>
          </>
        );

      case 6:
        return (
          <>
            <h2 className="form-title">Where do you live?</h2>
            <p className="form-subtitle">Please enter your city or location</p>
            <div className="single-question-form">
              <input
                type="text"
                className="single-input"
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
                <button type="button" className="btn-secondary" onClick={handleBack}>
                  Back
                </button>
                <button
                  type="button"
                  className="btn-primary"
                  onClick={handleNext}
                  disabled={!canProceed()}
                >
                  Continue
                </button>
              </div>
            </div>
          </>
        );

      case 7:
        return (
          <>
            <h2 className="form-title">What is your phone number?</h2>
            <p className="form-subtitle">Please enter your phone number</p>
            <div className="single-question-form">
              <input
                type="tel"
                className="single-input"
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
                <button type="button" className="btn-secondary" onClick={handleBack}>
                  Back
                </button>
                <button
                  type="button"
                  className="btn-primary"
                  onClick={handleSubmit}
                  disabled={!canProceed()}
                >
                  Submit & Continue
                </button>
              </div>
            </div>
          </>
        );

      default:
        return null;
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>&times;</button>
        
        <div className="form-step active">
          {renderStepIndicator()}
          {renderQuestion()}
        </div>
      </div>
    </div>
  );
}

export default FormModal;
