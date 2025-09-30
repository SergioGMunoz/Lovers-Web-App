import Button from '../Button';

const FormCompleted = ({ onNavigate }) => {
  
  const handleViewProfile = () => {
    onNavigate('profile'); 
  };

  return (
    <section className="col-section">
      <h1>Cuenta ya creada 🎉</h1>
      <Button onClick={handleViewProfile}>
        Ver mi perfil
      </Button>
    </section>
  );
};

export default FormCompleted;