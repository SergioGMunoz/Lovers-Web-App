// This page manages the storage
export const storageData = (key, value) => {
  localStorage.setItem(key, value);
  console.log(`${key}:${value} correctly uploaded`);
};

export const getStorageData = (key) => {
  return localStorage.getItem(key);
};

export const clearStorage = () => {
  localStorage.clear();
  console.log("Local storage cleared.");
};