import Button from "./Button";

const ErrorView = ({ onNavigate }) => {
  console.log("Vista ERROR");
  const handleCreateAccount = () => {
    onNavigate("form");
  };

  return (
    <main>
      <section className="col-section">
        <h1>¡Ups! Tu perfil no está completo 😅</h1>
        <Button onClick={handleCreateAccount}>Completar mi perfil</Button>
      </section>
    </main>
  );
};

export default ErrorView;
