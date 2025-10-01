import { useState, useEffect } from 'react';
import { validatePhone } from '../../utils/validations';
import { storageData } from '../../utils/storage';
import FormControls from './FormControls';

const FormPhone = ({ onNext, onBack }) => {
  const [phone, setPhone] = useState('');
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    setIsValid(validatePhone(phone));
  }, [phone]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      storageData('phone', phone.trim());
      onNext();
    }
  };

  const handleInputChange = (e) => {
    setPhone(e.target.value);
  };

  const handleReset = () => {
    setPhone('');
  };

  return (
    <section className="col-section">
      <h1>Tu teléfono es... 📱</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="tel" 
          name="phone" 
          className="input-text"
          placeholder="123456789 o +34123456789"
          minLength="9"
          maxLength="12"
          value={phone}
          onChange={handleInputChange}
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

export default FormPhone;