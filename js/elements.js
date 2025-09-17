// This page manage the logic behind the different sections of the form making them interactive.

// For a title and a create account btn
export const createTitle = (msg) => {
  const element = document.createElement("section");
  element.className = "col-section";
  element.innerHTML = `<section class="col-section">
         <h1>${msg}</h1>
        <button class="btn-primary btn-sign-up">Crear cuenta</button>
      </section>`;
  return element;
};

// Form Section
// Name
export const createFormName = () => {
  const element = document.createElement("section");
  element.className = "col-section";
  element.innerHTML = `<h1>Tu nombre es... 🙂</h1>
        <form>
          <input type="text" name="name" class="input-text">
          <button disabled type="submit" class="btn-form name-continue">Continuar</button>
        </form>`;
  return element;
};

// Mail
export const createFormMail = () => {
  const element = document.createElement("section");
  element.className = "col-section";
  element.innerHTML = `<h1>Tu mejor mail... ✉️</h1>
        <form>
          <input type="mail" name="mail" class="input-text">
          <button disabled type="submit" class="btn-form mail-continue">Continuar</button>
        </form>`;
  return element;
};

// Gender
export const createFormGender = () => {
  const element = document.createElement("section");
  element.className = "col-section";

  element.innerHTML = `<h1>Te identifiarias como... 💡</h1>
    <div class="div-row">
       <button class="btn-form btn-gender" type="button" data-gender="male">Hombre</button>
        <button class="btn-form btn-gender" type="button" data-gender="female">Mujer</button>
        <button class="btn-form btn-gender" type="button" data-gender="other">Otro</button>

    </div>     
  `;
  return element;
};

// Sexual Orientation
export const createFormOrientation = () => {
  const element = document.createElement("section");
  element.className = "col-section";
  element.innerHTML = `<h1>Tu orientación sexual es... 💝</h1>
    <div class="div-row">
       <button class="btn-form btn-orientation" type="button" data-orientation="hetero">Heterosexual</button>
       <button class="btn-form btn-orientation" type="button" data-orientation="homo">Homosexual</button>
       <button class="btn-form btn-orientation" type="button" data-orientation="bi">Bisexual</button>
       <button class="btn-form btn-orientation" type="button" data-orientation="other">Otro</button>
    </div>`;
  return element;
};

// Relationship Type
export const createFormRelationType = () => {
  const element = document.createElement("section");
  element.className = "col-section";
  element.innerHTML = `<h1>Buscas una relación... 💑</h1>
    <div class="div-row">
       <button class="btn-form btn-relation" type="button" data-relation="casual">Casual</button>
       <button class="btn-form btn-relation" type="button" data-relation="friendship">Amistad</button>
       <button class="btn-form btn-relation" type="button" data-relation="serious">Seria</button>
    </div>`;
  return element;
};

// Hobbies
export const createFormHobbies = () => {
  const element = document.createElement("section");
  element.className = "col-section";
  element.innerHTML = `<h1>Tus hobbies son... 🎨</h1>
    <form>
      <input type="text" placeholder="Hobby 1" class="input-text hobby-input">
      <input type="text" placeholder="Hobby 2" class="input-text hobby-input">
      <input type="text" placeholder="Hobby 3" class="input-text hobby-input">
      <button disabled type="submit" class="btn-form hobbies-continue">Continuar</button>
    </form>`;
  return element;
};

// Biography
export const createFormBio = () => {
  const element = document.createElement("section");
  element.className = "col-section";
  element.innerHTML = `<h1>Cuéntanos sobre ti... ✍️</h1>
    <form class="bio-form">
      <textarea class="input-text bio-input" rows="5" placeholder="Escribe una breve biografía..." maxlength="280"></textarea>
      <button disabled type="submit" class="btn-form bio-continue">Continuar</button>
    </form>`;
  return element;
};