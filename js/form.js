import { createFormName } from "./pages/elements.js";
import { storageData } from "./storage.js"; 

const validateName = (name) => {
    return (name.trim().length > 0);
};

// Step 1 - Name
export const step1Name = () => {
    // Render the name form
    document.querySelector('main').innerHTML = createFormName().outerHTML;

    // Get the elements
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

    const formEl = document.querySelector("form");

    formEl.addEventListener('submit', (e) => {
        e.preventDefault();
        // Storage
        storageData('name', input.value);
        step2Mail()
    })
}

// Step 2
const step2Mail = () => {
   console.log('Step 2')
}



