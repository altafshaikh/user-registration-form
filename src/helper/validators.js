export const Validators = [];

let inputFields = ["firstName", "lastName", "email", "userName", "mob"];

export const isContainTags = (formObj) => {
  return inputFields.every((name) => {
    if (formObj[name].trim().includes("<")) {
      alert("contains html tags");
      return false;
    }
    return true;
  });
};

export const isValidMob = (formObj) => {
  let value = Number(formObj["mob"].trim());
  if (Number.isInteger(value) && formObj["mob"].trim().length == 10) {
    return true;
  } else {
    alert("please enter numbers");
    return false;
  }
};

export const isTCAccepted = (formObj) => {
  if (formObj["tnc"]) {
    return true;
  } else {
    alert("please accept the terms and conditions");
    return false;
  }
};

export const isValidEmail = (formObj) => {
  let email = formObj["email"].trim();
  if (/(.+)@(.+){2,}\.(.+){2,}/.test(email)) {
    return true;
  } else {
    alert("please enter valid email");
    return false;
  }
};

export const passwordMatch = (formObj) => {
  let pass1 = formObj["password"];
  let pass2 = formObj["passwordConfirm"];
  if (pass1 == pass2) {
    return true;
  } else {
    alert("Your password not match");
    return false;
  }
};

Validators.push(isTCAccepted);
Validators.push(isContainTags);
Validators.push(isValidMob);
Validators.push(isValidEmail);
Validators.push(passwordMatch);
