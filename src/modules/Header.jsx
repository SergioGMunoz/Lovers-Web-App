import logoLovers from '../assets/logo_lovers.png'
import Button from './Button'

const Header = ({ onNavigate }) => {

  const handleHome = () => {
    onNavigate();
  };
  
  const handleCreateAccount = () => {
    onNavigate('form');
  };

  const handleViewProfile = () => {
    onNavigate('profile'); 
  };

  return (
    <header>
      <nav>
        <div className="nav-logo">
          <a onClick={handleHome}><img className="logo-img" src={logoLovers} alt="Logo Lovers" /></a>
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