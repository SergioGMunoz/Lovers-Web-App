import { useState, useEffect } from "react";
import "./App.css";
import Header from "./modules/Header";
import Footer from "./modules/Footer";
import ErrorView from "./modules/ErrorView";
import HomeView from "./modules/HomeView";
import Button from "./modules/Button";
import Profile from "./modules/profile/Profile";
import Form from "./modules/form/FormContainer";

import { getStep } from "./utils/storage";

function App() {
  const [currentView, setCurrentView] = useState("home");

  const changeStep = () => {
    switch (getStep()) {
      case -1: // Form completed
        setCurrentView("completed");
        break;
      case 0: // Form not inicialiced
        setCurrentView("home");
        break;
      default: // Form not completed yet
        setCurrentView("error");
        break;
    }
  };

  useEffect(() => {
    changeStep();
  }, []);

  const handleNavigate = (view) => {
    // If view is null generete it
    if (!view) {
      changeStep();
    } else {
      // Not completed the form yet and try to profile
      if (view === "profile" && getStep() !== -1) view = "error";
      setCurrentView(view);
    }
  };

  const renderCurrentView = () => {
    switch (currentView) {
      case "completed":
        console.log("Entering complete VIEW");
        return (
          <main>
            <section className="col-section">
              <h1>Tienes un perfil creado 🎉</h1>
              <Button onClick={() => handleNavigate("profile")}>
                Ver perfil
              </Button>
            </section>
          </main>
        );
      case "home":
        return <HomeView onNavigate={handleNavigate} />;
      case "error":
        return <ErrorView onNavigate={handleNavigate} />;
      case "form":
        return <Form onNavigate={handleNavigate} />;
      case "profile":
        return <Profile onNavigate={handleNavigate} />;
      default:
        return <h1>Error 404, esta página no existe</h1>;
    }
  };

  return (
    <div className="App">
      <Header onNavigate={handleNavigate} />
      {renderCurrentView()}
      <Footer />
    </div>
  );
}

export default App;
