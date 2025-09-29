import { useState } from 'react';
import FormName from './FormName';
import FormEmail from './FormEmail';

const FormContainer = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep(prevStep => prevStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(prevStep => Math.max(0, prevStep - 1));
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <FormName 
            onNext={nextStep}
            onBack={prevStep}
            isFirstStep={true}
          />
        );
      case 1:
        return (
          <FormEmail 
            onNext={nextStep}
            onBack={prevStep}
          />
        );
      default:
        return (
          <div className="col-section">
            <h1>¡Formulario completado! 🎉</h1>
            <p>Has completado los primeros pasos del registro.</p>
          </div>
        );
    }
  };

  return (
    <main>
      {renderCurrentStep()}
    </main>
  );
};

export default FormContainer;