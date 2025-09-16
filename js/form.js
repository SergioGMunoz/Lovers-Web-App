import { createFormName } from "./pages/elements.js";
import { storageData } from "./storage.js"; 

const validateName = (name) => {
  return name && name.trim().lenght > 0;
};


// Step 1 - Name
export const step1Name = () => {
    // Render the name form
    document.querySelector('main').innerHTML = createFormName().outerHTML;

    // Get the elements
    const btnContinue = document.querySelector('.name-continue')
    const input = document.querySelector('.input-text')

    // Create the listeners
    input.addEventListener('key_pressed', () => {
        if (validateName(input.value)) btnContinue.setAttribute('enabled')
    })

    btnContinue.addEventListener('submit', (e) => {
        e.preventDefault();
        // Storage
        storageData('name', validateName(input.value));
        step2Mail()
    })
}

// Step 2
const step2Mail = () => {
   console.log('Step 2')
}



