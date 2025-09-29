import { useState, useEffect } from 'react';
import { validateEmail } from '../../utils/validations';
import { storageData } from '../../utils/storage';

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

  return (
    <section className="col-section">
      <h1>Tu mejor mail... ✉️</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="email" 
          name="mail" 
          className="input-text"
          value={email}
          onChange={handleInputChange}
        />
        <div className="form-controls">
          <button 
            type="button" 
            className="btn-form btn-back"
            onClick={onBack}
          >
            Atrás
          </button>
          <button 
            type="reset" 
            className="btn-form btn-restart"
            onClick={() => setEmail('')}
          >
            Resetear
          </button>
          <button 
            type="submit" 
            className="btn-form btn-continue"
            disabled={!isValid}
          >
            Continuar
          </button>
        </div>
      </form>
    </section>
  );
};

export default FormEmail;