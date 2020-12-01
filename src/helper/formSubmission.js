import { formValidation } from "./formValidation.js";
import { postData } from "./postData.js";
import { getData } from "./getData.js";

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

  if (formValidation(data)) {
    try {
      postData(data);
    } catch (err) {
      console.log("error in posting the data");
    }
  } else {
    console.log("form didn't pass the validation check");
  }
};
