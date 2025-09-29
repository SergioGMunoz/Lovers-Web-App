import { useState, useEffect } from 'react';
import { validateName } from '../../utils/validations';
import { storageData } from '../../utils/storage';

const FormName = ({ onNext, onBack, isFirstStep }) => {
  const [name, setName] = useState('');
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    setIsValid(validateName(name));
  }, [name]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      storageData('name', name.trim());
      onNext();
    }
  };

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  return (
    <section className="col-section">
      <h1>Tu nombre es... 🙂</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          className="input-text"
          value={name}
          onChange={handleInputChange}
        />
        <div className="form-controls">
          <button 
            type="button" 
            className="btn-form btn-back"
            disabled={isFirstStep}
            onClick={onBack}
          >
            Atrás
          </button>
          <button 
            type="reset" 
            className="btn-form btn-restart"
            onClick={() => setName('')}
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

export default FormName;