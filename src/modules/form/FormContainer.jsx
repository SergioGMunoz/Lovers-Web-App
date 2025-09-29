import { useState, useEffect } from 'react';
import FormName from './FormName';
import FormEmail from './FormEmail';

const FormContainer = ({ initialStep = 0, onComplete }) => {
  const [currentStep, setCurrentStep] = useState(initialStep);

  // Si cambia el initialStep, actualizar currentStep
  useEffect(() => {
    setCurrentStep(initialStep);
  }, [initialStep]);

  const nextStep = () => {
    const newStep = currentStep + 1;
    setCurrentStep(newStep);
    
    // Si llegamos al final, notificar que se completó
    if (newStep > 1) { // Cambia esto cuando tengas más steps
      onComplete && onComplete();
    }
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
