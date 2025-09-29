import logoLovers from '../assets/logo_lovers.png'

const Header = () => {
  return (
    <header>
      <nav>
        <div className="nav-logo">
          <a><img className="logo-img" src={logoLovers} alt="Logo Lovers" /></a>
        </div>
        <div className="nav-buttons">
          <div>
            <button className="btn-primary btn-sign-up">Crear cuenta</button>
          </div>
          <div>
            <button id="profile-btn" className="btn-primary">Mi perfil</button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header