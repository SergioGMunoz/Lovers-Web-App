import {clearStorage} from '../../utils/storage.js'
import Button from '../Button.jsx'
import ErrorView from '../ErrorView.jsx';


const Profile = ({ onNavigate, userData }) => {
  console.log('Vista PERFIL')

  if(!userData){
    console.log('Perfil no completo');
    console.log(userData)
    return false;
  }

  const handleCreateAccount = () => {
    clearStorage();
    onNavigate();
  };

  return (
    <main>
      <section className="col-section">
        <h1>Perfil</h1>
        <div>
        </div>
        <Button onClick={handleCreateAccount}>Eliminar cuenta</Button>
      </section>
    </main>
  );
};

export default Profile;
