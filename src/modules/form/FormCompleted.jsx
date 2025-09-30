import Button from '../Button';

const FormCompleted = ({ onNavigate }) => {
  
  const handleViewProfile = () => {
    onNavigate('profile'); 
  };

  return (
    <section className="col-section">
      <h1>¡Enhorabuena! 🎉</h1>
      <h2>Has completado el formulario exitosamente</h2>
      <Button onClick={handleViewProfile}>
        Ver mi perfil
      </Button>
    </section>
  );
};

export default FormCompleted;