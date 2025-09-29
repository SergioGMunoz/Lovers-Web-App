import Button from './Button';
import { checkProfileCompletion } from '../utils/profileUtils';

const ErrorView = ({ onNavigate }) => {
  const profileStatus = checkProfileCompletion();
  
  const handleCreateAccount = () => {
    onNavigate('form');
  };

  return (
    <main>
      <section className="col-section">
        <h1>¡Ups! Tu perfil no está completo 😅</h1>
        
        <div style={{ marginBottom: '2rem' }}>
          <p>Para ver tu perfil necesitas completar estos datos:</p>
          <ul style={{ textAlign: 'left', margin: '1rem 0' }}>
            {profileStatus.missingFields.name && <li>✗ Nombre</li>}
            {profileStatus.missingFields.email && <li>✗ Email</li>}
          </ul>
        </div>
        
        <Button onClick={handleCreateAccount}>
          Completar mi perfil
        </Button>
      </section>
    </main>
  );
};

export default ErrorView;