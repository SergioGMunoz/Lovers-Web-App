import { createFormName, createFormMail } from "./elements.js";
import { storageData } from "./storage.js";
import { validateName, validateEmail } from "./validations.js";

// Step 1 - Name
export const step1Name = () => {
    // Render the name form
    document.querySelector('main').innerHTML = createFormName().outerHTML;

    // Get the elements
    const formEl = document.querySelector("form");
    const btnContinue = document.querySelector('.name-continue')
    const input = document.querySelector('.input-text')

    // Create the listeners
    input.addEventListener('keyup', () => {
        console.log('name', input.value)
        console.log('valid name', validateName(input.value))
        // btnContinue.setAttribute('disabled', 'false')
        if (validateName(input.value)){
            btnContinue.removeAttribute("disabled");
        }else{
            btnContinue.setAttribute("disabled", "true");
        }
    })


    formEl.addEventListener('submit', (e) => {
        e.preventDefault();
        // Storage
        storageData('name', input.value);
        step2Mail()
    })
}

// Step 2 - Mail
export const step2Mail = () => {
   document.querySelector('main').innerHTML = createFormMail().outerHTML;

   const formEl = document.querySelector('form');
   const input = document.querySelector('input[name="mail"]');
   const btnContinue = document.querySelector('.mail-continue');

   input.addEventListener('input', () => {
       const isValid = validateEmail(input.value);
       console.log('mail', input.value, 'valid', isValid);
       if (isValid) {
           btnContinue.removeAttribute('disabled');
       } else {
           btnContinue.setAttribute('disabled', 'true');
       }
   });

   formEl.addEventListener('submit', (e) => {
       e.preventDefault();
       if (!validateEmail(input.value)) return;
       storageData('mail', input.value.trim());
       console.log('Mail guardado, continuar al siguiente paso');
       // TODO: llamar a la siguiente función (p. ej. step3Gender) cuando exista
   });
}



