// This page manage the storage
export const storageData = (key, value) => {
    localStorage.setItem(key, value);
    console.log('hola mundo')
    console.log(`${key}:${value} correctly uploaded`)
}


export const clearStorage = () => {
  localStorage.clear();
  console.log("Local storage cleared.");
};
