const FormControls = ({
  onBack,
  isFirstStep = false,
  isValid = true,
  onReset = null,
}) => {
  const handleReset = () => {
    if (onReset) {
      onReset();
    }
  };

  return (
    <div className="form-controls">
      <button
        type="button"
        className="btn-form btn-back"
        disabled={isFirstStep}
        onClick={onBack}
      >
        Atrás
      </button>

      {onReset && (
        <button
          type="button"
          className="btn-form btn-restart"
          onClick={handleReset}
        >
          Resetear
        </button>
      )}
      
      <button
        type="submit"
        className="btn-form btn-continue"
        disabled={!isValid}
      >
        Continuar
      </button>
    </div>
  );
};

export default FormControls;
