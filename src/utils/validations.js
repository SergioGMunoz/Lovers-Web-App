// Name validation
export const validateName = (name) => {
  const length = name.trim().length;
  return length >= 3 && length <= 15;
};

// Email validation
export const validateEmail = (email) => {
  // El regex profesional lo he sacado de esta página:
  // https://www.mailercheck.com/articles/email-validation-javascript
  
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email.trim());
};