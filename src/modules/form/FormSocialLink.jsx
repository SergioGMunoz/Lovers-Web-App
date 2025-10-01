import { useState, useEffect } from 'react';
import { validateSocialLink } from '../../utils/validations';
import { storageData } from '../../utils/storage';
import FormControls from './FormControls';

const FormSocialLink = ({ onNext, onBack }) => {
  const [socialLink, setSocialLink] = useState('');
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    setIsValid(validateSocialLink(socialLink));
  }, [socialLink]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      storageData('socialLink', socialLink.trim());
      onNext();
    }
  };

  const handleInputChange = (e) => {
    setSocialLink(e.target.value);
  };

  const handleReset = () => {
    setSocialLink('');
  };

  return (
    <section className="col-section">
      <h1>Tu red social favorita... 🌐</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="url" 
          name="socialLink" 
          className="input-text"
          placeholder="https://tu-enlace"
          value={socialLink}
          onChange={handleInputChange}
          maxLength={100}
        />
        <FormControls
          onBack={onBack}
          isValid={isValid}
          onReset={handleReset}
        />
      </form>
    </section>
  );
};

export default FormSocialLink;