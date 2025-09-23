import * as el from "./elements.js";
import { storageData } from "./storage.js";
import * as val from "./validations.js";
import { goProfile } from "./profile.js";

export let step = 0;

// The function that starts the form
export const renderForm = () => {
  steps[step]();
};

const nextStep = () => {
  step++;
  renderForm();
};

const steps = [
  // step 1 - Name
  () => {
    // Render the name form
    document.querySelector("main").innerHTML = el.createFormName().outerHTML;
    
    // Elements
    const input = document.querySelector(".input-text");
    const form = document.querySelector("form");
    const btnBack = document.querySelector(".btn-back");
    const btnContinue = document.querySelector(".btn-continue");

    // Disable because is the first step
    btnBack.setAttribute("disabled", "true");

    // Create the listeners
    input.addEventListener("keyup", () => {
      if (val.validateName(input.value)) {
        console.log("Valid");
        btnContinue.removeAttribute("disabled");
      } else {
        console.log("NOT Valid");
        btnContinue.setAttribute("disabled", "true");
      }
    });

    // Form controls 
    form.addEventListener("submit", (e) => {
          e.preventDefault();
          storageData("name", input.value.trim());
          nextStep();
      });
  },

  // step 2 - Mail
  () => {
    document.querySelector("main").innerHTML = el.createFormMail().outerHTML;

    const input = document.querySelector('input[name="mail"]');
    const formEl = document.querySelector("form");
    const btnBack = document.querySelector(".btn-back");
    const btnContinue = document.querySelector(".btn-continue");

    input.addEventListener("input", () => {
      if (val.validateEmail(input.value)) {
        btnContinue.removeAttribute("disabled");
      } else {
        btnContinue.setAttribute("disabled", "true");
      }
    });

    formEl.addEventListener("submit", (e) => {
      e.preventDefault();
      storageData("mail", input.value.trim());
      nextStep();
    });

    btnBack.addEventListener('click', () => {
      console.log('Volviendo atras');
      step--;
      renderForm();
    });
  },
  // step 3 - TODO
  () => {
    document.querySelector("main").innerHTML = el.createFormHobbies().outerHTML;

    const formEl = document.querySelector("form");
    const btnContinue = document.querySelector(".hobbies-continue");
    const inputs = Array.from(document.querySelectorAll(".hobby-input"));

    // Checking if the first hobbie is okey
    const checkValid = () => {
      console.log("Hobbie 1 VALUE:", inputs[0].value);
      if (val.validateName(inputs[0].value)) {
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
  },
  // Step BIO
  () => {
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
  },
];
