import { createTitle } from "./elements.js";
import { renderForm} from "./form.js";

// Rendering the page with the info
document.querySelector("main").innerHTML = createTitle(
  "Enamorate de tu próximo gran amor y no solo de tu perro 🐶"
).outerHTML;

// Go to the form
const signUpBtns = document.querySelectorAll(".btn-sign-up");
signUpBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log("click btn sign up");
    // TODO: Set the step correctly
    renderForm();
  });
});
