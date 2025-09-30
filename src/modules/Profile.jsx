import {clearStorage} from './../utils/storage.js'
import Button from './Button'


const ErrorView = ({ onNavigate }) => {

  const handleCreateAccount = () => {
    clearStorage();
    onNavigate();
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
