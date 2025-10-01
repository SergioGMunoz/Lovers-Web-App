import { useState, useEffect } from 'react';
import { validateSexualOrientation } from '../../utils/validations';
import { storageData } from '../../utils/storage';
import FormControls from './FormControls';

const FormSexualOrientation = ({ onNext, onBack }) => {
  const [orientation, setOrientation] = useState('');
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    setIsValid(validateSexualOrientation(orientation));
  }, [orientation]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      storageData('sexualOrientation', orientation);
      onNext();
    }
  };

  const handleOrientationChange = (e) => {
    setOrientation(e.target.value);
  };

  const handleReset = () => {
    setOrientation('');
  };

  return (
    <section className="col-section">
      <h1>Tu orientación sexual es... 🏳️‍🌈</h1>
      <form onSubmit={handleSubmit}>
        <select 
        className='input-text'
          name="orientation" 
          value={orientation}
          onChange={handleOrientationChange}
        >
          <option value="">Selecciona una opción</option>
          <option value="heterosexual">Heterosexual</option>
          <option value="homosexual">Homosexual</option>
          <option value="bisexual">Bisexual</option>
          <option value="pansexual">Pansexual</option>
          <option value="asexual">Asexual</option>
          <option value="demisexual">Demisexual</option>
        </select>

        <FormControls
          onBack={onBack}
          isValid={isValid}
          onReset={handleReset}
        />
      </form>
    </section>
  );
};

export default FormSexualOrientation;