export const validateName = (name) => {
  const regex = /^[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ\s]{2,10}$/;
  return regex.test(name.trim());
};

export const validateEmail = (email) => {
  const trimmed = email.trim();
  const length = trimmed.length;
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return length >= 6 && length <= 20 && regex.test(trimmed);
};

export const validatePhone = (phone) => {
  const regex = /^(\+34)?\d{9}$/;
  return regex.test(phone.trim());
};

export const validateSocialLink = (url) => {
  const trimmed = url.trim();
  return trimmed.startsWith("http://") || trimmed.startsWith("https://");
};

export const validateGenderIdentity = (gender, otherText = "") => {
  if (!gender) return false;

  // If selects other validate the value
  if (gender === "otro") {
    const regex = /^[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ\s]{3,20}$/;
    return regex.test(otherText.trim());
  }

  return true;
};

export const validateSexualOrientation = (orientation) => {
  return orientation && orientation.trim() !== "";
};

export const validateRelationshipType = (types) => {
  return Array.isArray(types) && types.length > 0;
};

export const validateHobbies = (hobbies) => {
  if (!Array.isArray(hobbies) || hobbies.length <= 0) return false;

  const regex = /^[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ0-9\s]{4,20}$/;
  if (!regex.test(hobbies[0])) return false;

  // Validate optional hobbies 2 and 3 if they exist
  for (let i = 1; i < hobbies.length; i++) {
    const hobby = hobbies[i]?.trim();
    if (hobby) {
      if (!regex.test(hobby)) {
        return false;
      }
    }
  }
  return true;
};

export const validateBirthDate = (birthDate) => {
  if (!birthDate) return false;

  const today = new Date();
  const birth = new Date(birthDate);
  const age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();

  // Calculate actual age considering the month and day
  let actualAge = age;
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    actualAge = age - 1;
  }

  // Validate age is between 18 and 99
  return actualAge >= 18 && actualAge <= 99;
};

export const validateFavoriteColor = (color) => {
  return color && color.trim() !== "";
};

export const validateMaxDistance = (distance) => {
  const num = parseInt(distance);
  return !isNaN(num) && num >= 1 && num <= 200;
};

export const validateAgeRange = (minAge, maxAge) => {
  const min = parseInt(minAge);
  const max = parseInt(maxAge);
  return !isNaN(min) && !isNaN(max) && min >= 18 && max <= 99 && min <= max;
};

export const validateBiography = (biography) => {
  const regex = /^[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ0-9\s,]{10,100}$/;
  return regex.test(biography.trim());
};
