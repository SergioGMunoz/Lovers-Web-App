import { clearStorage } from "../../utils/storage.js";
import Button from "../Button.jsx";
import ErrorView from "../ErrorView.jsx";
import ProfileBadge from "./ProfileBadge.jsx";

const Profile = ({ onNavigate, userData }) => {
  console.log("Vista PERFIL");

  // If data fails
  if (!userData) {
    console.log("Perfil no completo");
    console.log(userData);
    return (
      <>
        <h1>Error inesperado, datos no encontrados</h1>;
        <Button onClick={handleCreateAccount}>Eliminar cuenta</Button>
      </>
    );
  }

  const handleCreateAccount = () => {
    clearStorage();
    onNavigate();
  };

  return (
    <main>
      <section className="col-section">
        {/* Nombre y color */}
        <h1 style={{ color: userData.favoriteColor }}>
          Hola, soy {userData.name}
        </h1>
        {/* Biografia */}
        <p>{userData.biography}</p>
        {/* Resto de datos */}
        <div>
          <ProfileBadge text={userData.email} />
          <ProfileBadge text={userData.phone} />
          <ProfileBadge text={userData.socialLink} url={userData.socialLink} />

        </div>
        {/* Eliminar cuenta */}
        <Button onClick={handleCreateAccount}>Eliminar cuenta</Button>
      </section>
    </main>
  );
};

export default Profile;
