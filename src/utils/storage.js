// This page manages the local storage

export const storageData = (key, value) => {
  localStorage.setItem(key, value);
  console.log(`${key}:${value} correctly uploaded`);
};

export const getStorageData = (key) => {
  return localStorage.getItem(key);
};

export const clearStorage = () => {
  localStorage.clear();
  console.log("Local storage cleared");
};

// Returns the step of the form
export const getStep = () => {
  const name = getStorageData('name');
  const email = getStorageData('mail');
  
  if (!name) return 0; 
  if (!email) return 1; 
  
  return -1; 
};