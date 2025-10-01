import { useState, useEffect } from 'react';
import { validateEmail } from '../../utils/validations';
import { storageData } from '../../utils/storage';
import FormControls from './FormControls';

const FormEmail = ({ onNext, onBack }) => {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    setIsValid(validateEmail(email));
  }, [email]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      storageData('mail', email.trim());
      onNext();
    }
  };

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleReset = () => {
    setEmail('');
  };

  return (
    <section className="col-section">
      <h1>Tu mejor mail... ✉️</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="email" 
          name="mail" 
          className="input-text"
          placeholder="correo@empresa.com (6-20 caracteres)"
          minLength="6"
          maxLength="20"
          value={email}
          onChange={handleInputChange}
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

export default FormEmail;