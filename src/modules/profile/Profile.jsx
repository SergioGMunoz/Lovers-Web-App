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
        {/* DIV 1: Datos de contacto */}
        <div className="badges-container">
          <ProfileBadge text={userData.email} />
          <ProfileBadge text={userData.phone} />
          <ProfileBadge text={userData.socialLink} url={userData.socialLink} />
        </div>

        {/* DIV 2: Información personal */}
        <div className="badges-container">
          <ProfileBadge text={userData.genderIdentity} />
          <ProfileBadge 
            text={`${new Date().getFullYear() - new Date(userData.birthDate).getFullYear()} años`} 
          />
          <ProfileBadge text={userData.sexualOrientation} />
          <ProfileBadge 
            text={`Busco relaciones:  ${userData.relationshipType}`} 
          />
        </div>

        {/* DIV 3: Hobbies */}
          <div className="badges-container">
            {userData.hobbies.split(',')
              .map((hobby, index) => {
                if (hobby.trim().length <= 0) return null;
                return (<ProfileBadge key={index} text={hobby} />);
              }
            )}
          </div>

          {/* DIV 4: Preferencias de búsqueda */}
        <div className="badges-container">
          <ProfileBadge text={`Entre 1 y ${userData.maxDistance} km`} />
          <ProfileBadge 
            text={`Prefiero edad entre ${JSON.parse(userData.ageRange).min} y ${JSON.parse(userData.ageRange).max}`} 
          />
        </div>
        {/* Eliminar cuenta */}
        <Button onClick={handleCreateAccount}>Eliminar cuenta</Button>
      </section>
    </main>
  );
};

export default Profile;
