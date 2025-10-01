import { useState } from "react";
import FormName from "./FormName";
import FormEmail from "./FormEmail";
import FormPhone from "./FormPhone";
import FormSocialLink from "./FormSocialLink";
import FormGenderIdentity from "./FormGenderIdentity";
import FormSexualOrientation from "./FormSexualOrientation";
import FormRelationshipType from "./FormRelationshipType";
import FormHobbies from "./FormHobbies";
import FormBirthDate from "./FormBirthDate";
import FormFavoriteColor from "./FormFavoriteColor";
import FormMaxDistance from "./FormMaxDistance";
import FormAgeRange from "./FormAgeRange";
import FormBiography from "./FormBiography";
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
      case 2:
        return (
          <FormPhone onNext={nextStep} onBack={prevStep} />
        );
      case 3:
        return (
          <FormSocialLink onNext={nextStep} onBack={prevStep} />
        );
      case 4:
        return (
          <FormGenderIdentity onNext={nextStep} onBack={prevStep} />
        );
      case 5:
        return (
          <FormSexualOrientation onNext={nextStep} onBack={prevStep} />
        );
      case 6:
        return (
          <FormRelationshipType onNext={nextStep} onBack={prevStep} />
        );
      case 7:
        return (
          <FormHobbies onNext={nextStep} onBack={prevStep} />
        );
      case 8:
        return (
          <FormBirthDate onNext={nextStep} onBack={prevStep} />
        );
      case 9:
        return (
          <FormFavoriteColor onNext={nextStep} onBack={prevStep} />
        );
      case 10:
        return (
          <FormMaxDistance onNext={nextStep} onBack={prevStep} />
        );
      case 11:
        return (
          <FormAgeRange onNext={nextStep} onBack={prevStep} />
        );
      case 12:
        return (
          <FormBiography onNext={nextStep} onBack={prevStep} />
        );
      default:
        return <FormCompleted onNavigate={onNavigate} />;
    }
  };

  return <main>{renderStep()}</main>;
};

export default FormContainer;
