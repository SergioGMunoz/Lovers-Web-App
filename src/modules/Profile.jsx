import {clearStorage} from './../utils/storage.js'

const ErrorView = ({ onNavigate }) => {

  const handleCreateAccount = () => {
    clearStorage();
    onNavigate("home");
  };

  return (
    <main>
      <section className="col-section">
        <h1>Perfil</h1>
        <Button onClick={handleCreateAccount}>Eliminar cuenta</Button>
      </section>
    </main>
  );
};

export default ErrorView;
