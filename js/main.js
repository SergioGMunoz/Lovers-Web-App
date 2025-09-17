import { createTitle } from "./pages/elements.js";
import {step1Name} from "./form.js";

console.log("Contected To JS");

// Rendering the page with the info
document.querySelector("main").innerHTML = createTitle(
  "Enamorate de tu próximo gran amor y no solo de tu perro 🐶"
).outerHTML;

// Go to the form
const signUpBtns = document.querySelectorAll(".btn-sign-up");
signUpBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log("click btn sign up");
    step1Name();
  });
});
