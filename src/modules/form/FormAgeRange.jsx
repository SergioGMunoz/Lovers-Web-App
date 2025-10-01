import { useState, useEffect } from 'react';
import { validateAgeRange } from '../../utils/validations';
import { storageData } from '../../utils/storage';
import FormControls from './FormControls';

const FormAgeRange = ({ onNext, onBack }) => {
  const [minAge, setMinAge] = useState(18);
  const [maxAge, setMaxAge] = useState(99);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    setIsValid(validateAgeRange(minAge, maxAge));
  }, [minAge, maxAge]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      storageData('ageRange', JSON.stringify({ min: parseInt(minAge), max: parseInt(maxAge) }));
      onNext();
    }
  };

  const handleMinAgeChange = (e) => {
    setMinAge(e.target.value);
  };

  const handleMaxAgeChange = (e) => {
    setMaxAge(e.target.value);
  };

  const handleReset = () => {
    setMinAge(18);
    setMaxAge(99);
  };

  return (
    <section className="col-section">
      <h1>Rango de edad que buscas... 🔢</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="number" 
          name="minAge" 
          className="input-text"
          placeholder="Edad mínima (18-99)"
          min="18"
          max="99"
          value={minAge}
          onChange={handleMinAgeChange}
        />
        
        <input 
          type="number" 
          name="maxAge" 
          className="input-text"
          placeholder="Edad máxima (18-99)"
          min="18"
          max="99"
          value={maxAge}
          onChange={handleMaxAgeChange}
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

export default FormAgeRange;