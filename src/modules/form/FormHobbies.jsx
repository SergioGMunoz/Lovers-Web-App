import { useState, useEffect } from "react";
import { validateHobbies } from "../../utils/validations";
import { storageData } from "../../utils/storage";
import FormControls from "./FormControls";

const FormHobbies = ({ onNext, onBack }) => {
  const [hobbies, setHobbies] = useState(["", "", ""]);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    setIsValid(validateHobbies(hobbies));
  }, [hobbies]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      storageData("hobbies", hobbies);
      onNext();
    }
  };

  const handleHobbyChange = (index, value) => {
    const newHobbies = [...hobbies];
    newHobbies[index] = value;
    const filteredHobbies = newHobbies.filter((hobby) => hobby.trim() !== "");
    setHobbies(filteredHobbies);
  };

  const handleReset = () => {
    setHobbies(["", "", ""]);
  };

  return (
    <section className="col-section">
      <h1>Tus hobbies son... 🎯</h1>
      <p>Incluye al menos uno de tus hobbies</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="hobby1"
          className="input-text"
          placeholder="Hobby 1 (4-20 caracteres)"
          minLength="4"
          maxLength="20"
          value={hobbies[0]}
          onChange={(e) => handleHobbyChange(0, e.target.value)}
        />

        <input
          type="text"
          name="hobby2"
          className="input-text"
          placeholder="Hobby 2 (4-20 caracteres)"
          minLength="4"
          maxLength="20"
          value={hobbies[1]}
          onChange={(e) => handleHobbyChange(1, e.target.value)}
        />

        <input
          type="text"
          name="hobby3"
          className="input-text"
          placeholder="Hobby 3 (4-20 caracteres)"
          minLength="4"
          maxLength="20"
          value={hobbies[2]}
          onChange={(e) => handleHobbyChange(2, e.target.value)}
        />

        <FormControls onBack={onBack} isValid={isValid} onReset={handleReset} />
      </form>
    </section>
  );
};

export default FormHobbies;
