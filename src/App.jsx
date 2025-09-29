import { useState, useEffect } from 'react'
import './App.css'
import Header from './modules/Header'
import Footer from './modules/Footer'
import FormContainer from './modules/form/FormContainer'
import ErrorView from './modules/ErrorView'
import { checkProfileCompletion, getResumeStep } from './utils/profileUtils'

function App() {
  const [currentView, setCurrentView] = useState('form'); // 'form', 'profile', 'error'
  const [formStep, setFormStep] = useState(0);

  // Al cargar la app, determinar dónde debe estar el usuario
  useEffect(() => {
    const profileStatus = checkProfileCompletion();
    const resumeStep = getResumeStep();
    
    if (resumeStep >= 0) {
      // Si hay datos parciales, ir al formulario en el step correspondiente
      setFormStep(resumeStep);
      setCurrentView('form');
    } else if (profileStatus.isComplete) {
      // Si el perfil está completo, mostrar perfil (por ahora form completado)
      setCurrentView('completed');
    }
  }, []);

  const handleNavigate = (view) => {
    if (view === 'form') {
      const resumeStep = getResumeStep();
      setFormStep(Math.max(0, resumeStep));
      setCurrentView('form');
    } else {
      setCurrentView(view);
    }
  };

  const renderCurrentView = () => {
    switch (currentView) {
      case 'form':
        return <FormContainer initialStep={formStep} onComplete={() => setCurrentView('completed')} />;
      case 'error':
        return <ErrorView onNavigate={handleNavigate} />;
      case 'completed':
        return (
          <main>
            <section className="col-section">
              <h1>¡Perfil completado! 🎉</h1>
              <p>Tu perfil está listo. Aquí iría el componente ProfileView.</p>
            </section>
          </main>
        );
      default:
        return <FormContainer initialStep={0} onComplete={() => setCurrentView('completed')} />;
    }
  };

  return (
    <div className="App">
      <Header onNavigate={handleNavigate} />
      {renderCurrentView()}
      <Footer />
    </div>
  )
}

export default App
