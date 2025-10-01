import { useState, useEffect } from 'react';
import { validateBirthDate } from '../../utils/validations';
import { storageData } from '../../utils/storage';
import FormControls from './FormControls';

const FormBirthDate = ({ onNext, onBack }) => {
  const [birthDate, setBirthDate] = useState('');
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    setIsValid(validateBirthDate(birthDate));
  }, [birthDate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      storageData('birthDate', birthDate);
      onNext();
    }
  };

  const handleDateChange = (e) => {
    setBirthDate(e.target.value);
  };

  const handleReset = () => {
    setBirthDate('');
  };

  return (
    <section className="col-section">
      <h1>Tu fecha de nacimiento es... 🎂</h1>
      <p>Obligatorio mayor de 18 años</p>
      <form onSubmit={handleSubmit}>
        <input 
          type="date" 
          name="birthDate" 
          className="input-text"
          value={birthDate}
          onChange={handleDateChange}
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

export default FormBirthDate;