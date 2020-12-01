import { formSubmission } from "./helper/formSubmission.js";

window.onload = () => {
  document.forms.registration.addEventListener("submit", formSubmission);
};
