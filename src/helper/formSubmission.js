import { formValidation } from "./formValidation.js";

export const formSubmission = (event) => {
  //prevent form refresh
  event.preventDefault();
  //   console.log(event.target); //this will give form
  window.myEvent = event;

  const form = event.target;

  var data = {
    title: form.title.value,
    firstName: form.firstName.value,
    lastName: form.lastName.value,
    email: form.email.value,
    userName: form.userName.value,
    mob: form.mob.value,
    gender: form.gender.value,
    password: form.password.value,
    passwordConfirm: form.passwordConfirm.value,
    tnc: form.tnc.checked,
  };

  console.log(formValidation(data));
  console.log(data);
};
