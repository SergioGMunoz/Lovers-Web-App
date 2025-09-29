import logoLovers from '../assets/logo_lovers.png'
import Button from './Button'
import { checkProfileCompletion } from '../utils/profileUtils'

const Header = ({ onNavigate }) => {
  
  const handleCreateAccount = () => {
    // Ir al formulario desde el principio o continuar donde se quedó
    onNavigate('form');
  };

  const handleViewProfile = () => {
    const profileStatus = checkProfileCompletion();
    
    if (profileStatus.isComplete) {
      // Si el perfil está completo, mostrar perfil
      onNavigate('profile');
    } else {
      // Si no está completo, mostrar mensaje de error
      onNavigate('error');
    }
  };

  return (
    <header>
      <nav>
        <div className="nav-logo">
          <a><img className="logo-img" src={logoLovers} alt="Logo Lovers" /></a>
        </div>
        <div className="nav-buttons">
          <div>
            <Button onClick={handleCreateAccount}>
              Crear cuenta
            </Button>
          </div>
          <div>
            <Button onClick={handleViewProfile}>
              Mi perfil
            </Button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header