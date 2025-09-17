import * as el from "./elements.js";
import { storageData } from "./storage.js";
import * as val from "./validations.js";
import { goProfile } from "./profile.js";

// Step 1 - Name
export const step1Name = () => {
  // Render the name form
  document.querySelector("main").innerHTML = el.createFormName().outerHTML;

  // Get the elements
  const formEl = document.querySelector("form");
  const btnContinue = document.querySelector(".name-continue");
  const input = document.querySelector(".input-text");

  // Create the listeners
  input.addEventListener("keyup", () => {
    // btnContinue.setAttribute('disabled', 'false')
    if (val.validateName(input.value)) {
      btnContinue.removeAttribute("disabled");
    } else {
      btnContinue.setAttribute("disabled", "true");
    }
  });

  formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    // Storage
    storageData("name", input.value);
    step2Mail();
  });
};

// Step 2 - Mail
export const step2Mail = () => {
  document.querySelector("main").innerHTML = el.createFormMail().outerHTML;

  const formEl = document.querySelector("form");
  const input = document.querySelector('input[name="mail"]');
  const btnContinue = document.querySelector(".mail-continue");

  input.addEventListener("input", () => {
    const isValid = val.validateEmail(input.value);
    if (isValid) {
      btnContinue.removeAttribute("disabled");
    } else {
      btnContinue.setAttribute("disabled", "true");
    }
  });

  formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!val.validateEmail(input.value)) return;
    storageData("mail", input.value.trim());
    step3Gender();
  });
};

// Step 3 - Gender
export const step3Gender = () => {
  document.querySelector("main").innerHTML = el.createFormGender().outerHTML;

  const genderButtons = document.querySelectorAll(".btn-gender");
  genderButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const value = btn.getAttribute("data-gender");
      storageData("gender", value);
      step4Orientation();
    });
  });
};

// Step 4 - Orientation
export const step4Orientation = () => {
  document.querySelector("main").innerHTML =
    el.createFormOrientation().outerHTML;

  const orientationButtons = document.querySelectorAll(".btn-orientation");
  orientationButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const value = btn.getAttribute("data-orientation");
      storageData("orientation", value);
      step5RelationType();
    });
  });
};

// Step 5 - Relation Type
export const step5RelationType = () => {
  document.querySelector("main").innerHTML =
    el.createFormRelationType().outerHTML;

  const relationButtons = document.querySelectorAll(".btn-relation");
  relationButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const value = btn.getAttribute("data-relation");
      storageData("relationType", value);
      step6Hobbies();
    });
  });
};

// Step 6 - Hobbies
export const step6Hobbies = () => {
  document.querySelector("main").innerHTML = el.createFormHobbies().outerHTML;

  const formEl = document.querySelector("form");
  const btnContinue = document.querySelector(".hobbies-continue");
  const inputs = Array.from(document.querySelectorAll(".hobby-input"));

  // Checking if the first hobbie is okey
  const checkValid = () => {
    if (val.validateName(inputs[0])) {
      btnContinue.removeAttribute("disabled");
    } else {
      btnContinue.setAttribute("disabled", "true");
    }
  };

  inputs.forEach((i) => i.addEventListener("input", checkValid));

  formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    const hobbies = inputs
      .map((hobbie) => hobbie.value.trim())
      .filter((hobbie) => hobbie.length > 0);
    storageData("hobbies", hobbies);
    step7Bio();
  });
};

// Step 7 - Bio
export const step7Bio = () => {
  document.querySelector("main").innerHTML = el.createFormBio().outerHTML;

  const textarea = document.querySelector(".bio-input");
  const btn = document.querySelector(".bio-continue");

  const check = () => {
    const text = textarea.value.trim();
    if (text.length >= 10 && text.length <= 280) {
      btn.removeAttribute("disabled");
    } else {
      btn.setAttribute("disabled", "true");
    }
  };

  textarea.addEventListener("keyup", check);

  const formEl = document.querySelector(".bio-form");
  formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    const bio = textarea.value.trim();
    storageData("bio", bio);
    goProfile();
  });
};
