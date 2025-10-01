import { useState, useEffect } from "react";
import { validateFavoriteColor } from "../../utils/validations";
import { storageData } from "../../utils/storage";
import FormControls from "./FormControls";

const FormFavoriteColor = ({ onNext, onBack }) => {
  const [favoriteColor, setFavoriteColor] = useState("#FE5594");
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    setIsValid(validateFavoriteColor(favoriteColor));
  }, [favoriteColor]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      storageData("favoriteColor", favoriteColor);
      onNext();
    }
  };

  const handleColorChange = (e) => {
    setFavoriteColor(e.target.value);
  };

  const handleReset = () => {
    setFavoriteColor("#FE5594");
  };

  return (
    <section className="col-section">
      <h1>Tu color favorito es... 🎨</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="input-color"
          type="color"
          name="favoriteColor"
          value={favoriteColor}
          onChange={handleColorChange}
        />

        <FormControls onBack={onBack} isValid={isValid} onReset={handleReset} />
      </form>
    </section>
  );
};

export default FormFavoriteColor;
