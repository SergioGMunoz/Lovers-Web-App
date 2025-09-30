import { useState, useEffect } from 'react';
import { validateName } from '../../utils/validations';
import { storageData } from '../../utils/storage';
import FormControls from './FormControls';

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

  const handleReset = () => {
    setName('');
  };

  return (
    <section className="col-section">
      <h1>Tu nombre es... 🙂</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          className="input-text"
          placeholder="Tu nombre (3-15 caracteres)"
          value={name}
          onChange={handleInputChange}
        />
        <FormControls
          onBack={onBack}
          isFirstStep={isFirstStep}
          isValid={isValid}
          onReset={handleReset}
        />
      </form>
    </section>
  );
};

export default FormName;