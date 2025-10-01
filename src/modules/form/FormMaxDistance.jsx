import { useState, useEffect } from 'react';
import { validateMaxDistance } from '../../utils/validations';
import { storageData } from '../../utils/storage';
import FormControls from './FormControls';

const FormMaxDistance = ({ onNext, onBack }) => {
  const [maxDistance, setMaxDistance] = useState(1);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    setIsValid(validateMaxDistance(maxDistance));
  }, [maxDistance]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      storageData('maxDistance', parseInt(maxDistance));
      onNext();
    }
  };

  const handleDistanceChange = (e) => {
    setMaxDistance(e.target.value);
  };

  const handleReset = () => {
    setMaxDistance(1);
  };

  return (
    <section className="col-section">
      <h1>Kilómetros máximos de búsqueda... 📍</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Distancia máxima: {maxDistance} km</label>
          <input 
            type="range" 
            name="maxDistance" 
            min="1"
            max="200"
            value={maxDistance}
            onChange={handleDistanceChange}
          />
        </div>

        <FormControls
          onBack={onBack}
          isValid={isValid}
          onReset={handleReset}
        />
      </form>
    </section>
  );
};

export default FormMaxDistance;