import { useState, useEffect } from 'react';
import { validateHobbies } from '../../utils/validations';
import { storageData } from '../../utils/storage';
import FormControls from './FormControls';

const FormHobbies = ({ onNext, onBack }) => {
  const [hobbies, setHobbies] = useState(['', '', '']);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const filteredHobbies = hobbies.filter(hobby => hobby.trim() !== '');
    setIsValid(validateHobbies(filteredHobbies));
  }, [hobbies]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      const filteredHobbies = hobbies.filter(hobby => hobby.trim() !== '');
      storageData('hobbies', filteredHobbies);
      onNext();
    }
  };

  const handleHobbyChange = (index, value) => {
    const newHobbies = [...hobbies];
    newHobbies[index] = value;
    setHobbies(newHobbies);
  };

  const handleReset = () => {
    setHobbies(['', '', '']);
  };

  return (
    <section className="col-section">
      <h1>Tus hobbies son... 🎯</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="hobby1" 
          className="input-text"
          placeholder="Hobby 1 (obligatorio, 4-20 caracteres)"
          minLength="4"
          maxLength="20"
          value={hobbies[0]}
          onChange={(e) => handleHobbyChange(0, e.target.value)}
        />
        
        <input 
          type="text" 
          name="hobby2" 
          className="input-text"
          placeholder="Hobby 2 (opcional, 4-20 caracteres)"
          minLength="4"
          maxLength="20"
          value={hobbies[1]}
          onChange={(e) => handleHobbyChange(1, e.target.value)}
        />
        
        <input 
          type="text" 
          name="hobby3" 
          className="input-text"
          placeholder="Hobby 3 (opcional, 4-20 caracteres)"
          minLength="4"
          maxLength="20"
          value={hobbies[2]}
          onChange={(e) => handleHobbyChange(2, e.target.value)}
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

export default FormHobbies;