import { getStorageData } from './storage';

// Función que verifica si el perfil está completo
export const checkProfileCompletion = () => {
  const name = getStorageData('name');
  const email = getStorageData('mail');
  
  // Aquí puedes agregar más validaciones cuando tengas más steps
  // const hobbies = getStorageData('hobbies');
  // const bio = getStorageData('bio');
  
  return {
    hasBasicData: name && email,
    isComplete: name && email, // Por ahora solo name y email
    missingFields: {
      name: !name,
      email: !email
    }
  };
};

// Función que determina en qué step debería estar el usuario
export const getResumeStep = () => {
  const name = getStorageData('name');
  const email = getStorageData('mail');
  
  if (!name) return 0; // Step 1: Name
  if (!email) return 1; // Step 2: Email
  
  // Cuando agregues más steps:
  // if (!hobbies) return 2;
  // if (!bio) return 3;
  
  return -1; // Perfil completo
};

// Función para limpiar datos y empezar de nuevo
export const resetProfile = () => {
  localStorage.removeItem('name');
  localStorage.removeItem('mail');
  // Agregar más campos cuando los tengas
};