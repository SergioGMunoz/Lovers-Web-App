// This page manages the local storage

export const storageData = (key, value) => {
  if (key && value) {
    localStorage.setItem(key, value);
    console.log(`${key}:${value} correctly uploaded`);
  }else{
    console.log(`ERROR: No se ha podido guardar: ${key} como ${value}`)
  }
};

export const getStorageData = (key) => {
  return localStorage.getItem(key) || null;
};

export const clearStorage = () => {
  localStorage.clear();
  console.log("Local storage cleared");
};

// Returns user data as an object
export const getUserData = () => {
  return {
    name: getStorageData("name"),
    email: getStorageData("mail"),
    phone: getStorageData("phone"),
    socialLink: getStorageData("socialLink"),
    genderIdentity: getStorageData("genderIdentity"),
    sexualOrientation: getStorageData("sexualOrientation"),
    relationshipType: getStorageData("relationshipType"),
    hobbies: getStorageData("hobbies"),
    birthDate: getStorageData("birthDate"),
    favoriteColor: getStorageData("favoriteColor"),
    maxDistance: getStorageData("maxDistance"),
    ageRange: getStorageData("ageRange"),
    biography: getStorageData("biography"),
  };
};

// Returns the step
export const getStep = () => {
  const u = getUserData();

  if (!u.name) return 0;
  if (!u.email) return 1;
  if (!u.phone) return 2;
  if (!u.socialLink) return 3;
  if (!u.genderIdentity) return 4;
  if (!u.sexualOrientation) return 5;
  if (!u.relationshipType) return 6;
  if (!u.hobbies) return 7;
  if (!u.birthDate) return 8;
  if (!u.favoriteColor) return 9;
  if (!u.maxDistance) return 10;
  if (!u.ageRange) return 11;
  if (!u.biography) return 12;

  return -1;
};
