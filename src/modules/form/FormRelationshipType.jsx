import { useState, useEffect } from 'react';
import { validateRelationshipType } from '../../utils/validations';
import { storageData } from '../../utils/storage';
import FormControls from './FormControls';

const FormRelationshipType = ({ onNext, onBack }) => {
  const [relationshipTypes, setRelationshipTypes] = useState([]);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    setIsValid(validateRelationshipType(relationshipTypes));
  }, [relationshipTypes]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      storageData('relationshipType', relationshipTypes);
      onNext();
    }
  };

  const handleCheckboxChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    if (isChecked) {
      setRelationshipTypes([...relationshipTypes, value]);
    } else {
      setRelationshipTypes(relationshipTypes.filter(type => type !== value));
    }
  };

  const handleReset = () => {
    setRelationshipTypes([]);
  };

  return (
    <section className="col-section">
      <h1>Buscas una relación... 💕</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            <input 
              type="checkbox" 
              name="relationshipType" 
              value="seria"
              checked={relationshipTypes.includes('seria')}
              onChange={handleCheckboxChange}
            />
            Seria
          </label>
        </div>
        <div>
          <label>
            <input 
              type="checkbox" 
              name="relationshipType" 
              value="casual"
              checked={relationshipTypes.includes('casual')}
              onChange={handleCheckboxChange}
            />
            Casual
          </label>
        </div>
        <div>
          <label>
            <input 
              type="checkbox" 
              name="relationshipType" 
              value="amistad"
              checked={relationshipTypes.includes('amistad')}
              onChange={handleCheckboxChange}
            />
            Amistad
          </label>
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

export default FormRelationshipType;