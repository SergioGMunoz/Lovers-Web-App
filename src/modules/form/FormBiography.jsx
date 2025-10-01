import { useState, useEffect } from 'react';
import { validateBiography } from '../../utils/validations';
import { storageData } from '../../utils/storage';
import FormControls from './FormControls';

const FormBiography = ({ onNext, onBack }) => {
  const [biography, setBiography] = useState('');
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    setIsValid(validateBiography(biography));
  }, [biography]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      storageData('biography', biography.trim());
      onNext();
    }
  };

  const handleBiographyChange = (e) => {
    setBiography(e.target.value);
  };

  const handleReset = () => {
    setBiography('');
  };

  return (
    <section className="col-section">
      <h1>Cuéntanos sobre ti... ✍️</h1>
      <form onSubmit={handleSubmit}>
        <textarea 
          name="biography" 
          className="input-text"
          minLength="10"
          maxLength="100"
          placeholder="Escribe tu biografía (10-100 caracteres)"
          rows="5"
          value={biography}
          onChange={handleBiographyChange}
        />
        <p>{biography.length}/100 caracteres</p>

        <FormControls
          onBack={onBack}
          isValid={isValid}
          onReset={handleReset}
        />
      </form>
    </section>
  );
};

export default FormBiography;