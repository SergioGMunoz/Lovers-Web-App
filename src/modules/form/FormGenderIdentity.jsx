import { useState, useEffect } from 'react';
import { validateGenderIdentity } from '../../utils/validations';
import { storageData } from '../../utils/storage';
import FormControls from './FormControls';

const FormGenderIdentity = ({ onNext, onBack }) => {
  const [gender, setGender] = useState('');
  const [otherText, setOtherText] = useState('');
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    setIsValid(validateGenderIdentity(gender, otherText));
  }, [gender, otherText]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      const genderData =  gender === 'otro' ? otherText.trim() : gender;
      storageData('genderIdentity', genderData);
      onNext();
    }
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
    if (e.target.value !== 'otro') {
      setOtherText('');
    }
  };

  const handleOtherTextChange = (e) => {
    setOtherText(e.target.value);
  };

  const handleReset = () => {
    setGender('');
    setOtherText('');
  };

  return (
    <section className="col-section">
      <h1>Tu identidad de género es... 🏳️‍⚧️</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            <input 
              type="radio" 
              name="gender" 
              value="masculino"
              checked={gender === 'masculino'}
              onChange={handleGenderChange}
            />
            Masculino
          </label>
        </div>
        <div>
          <label>
            <input 
              type="radio" 
              name="gender" 
              value="femenino"
              checked={gender === 'femenino'}
              onChange={handleGenderChange}
            />
            Femenino
          </label>
        </div>
        <div>
          <label>
            <input 
              type="radio" 
              name="gender" 
              value="no-binario"
              checked={gender === 'no-binario'}
              onChange={handleGenderChange}
            />
            No binario
          </label>
        </div>
        <div>
          <label>
            <input 
              type="radio" 
              name="gender" 
              value="otro"
              checked={gender === 'otro'}
              onChange={handleGenderChange}
            />
            Otro
          </label>
        </div>
        
        {gender === 'otro' && (
          <input 
            type="text" 
            name="otherGender" 
            className="input-text"
            placeholder="Especifica tu identidad (3-20 caracteres)"
            minLength="3"
            maxLength="20"
            value={otherText}
            onChange={handleOtherTextChange}
          />
        )}

        <FormControls
          onBack={onBack}
          isValid={isValid}
          onReset={handleReset}
        />
      </form>
    </section>
  );
};

export default FormGenderIdentity;