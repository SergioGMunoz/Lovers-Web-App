import { useState } from "react";
import FormName from "./FormName";
import FormEmail from "./FormEmail";
import FormCompleted from "./FormCompleted";
import { getStep } from "../../utils/storage";

const FormContainer = ({ onNavigate }) => {
  const [step, setStep] = useState(getStep());

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 0) setStep(step - 1);
  };

  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <FormName onNext={nextStep} onBack={prevStep} isFirstStep={true} />
        );
      case 1:
        return (
          <FormEmail onNext={nextStep} onBack={prevStep} />
        );
      default:
        return <FormCompleted onNavigate={onNavigate} />;
    }
  };

  return <main>{renderStep()}</main>;
};

export default FormContainer;
