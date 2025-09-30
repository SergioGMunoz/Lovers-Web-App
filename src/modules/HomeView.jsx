import Button from './Button';

const HomeView = ({ onNavigate }) => {
  const handleCreateAccount = () => {
    onNavigate('form');
  };

  return (
    <main>
      <section className="col-section">
        <h1>Enamorate de tu próximo gran amor y no solo de tu perro 🐶</h1>
        <Button onClick={handleCreateAccount}>
          Incribirse ahora
        </Button>
      </section>
    </main>
  );
};

export default HomeView;