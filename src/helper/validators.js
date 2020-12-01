export const Validators = [];

let inputFields = [
  "firstName",
  "lastName",
  "email",
  "userName",
  "mob",
  //   "password",
  //   "passwordConfirm",
];

export const isContainTags = (formObj) => {
  return inputFields.forEach((name) => {
    if (formObj[name].trim().includes("<")) {
      alert("contains html tags");
      return false;
    }
  });
};

// export const maxCharInput = (formObj) => {
//   if (str.length > 20) {
//     return false;
//   }
//   return true;
// };

// export const isTCAccepted = (formObj) => {
//   if (str == "" || str == "undefined") {
//     return false;
//   }
//   return true;
// };

// Validators.push(isTCAccepted);
Validators.push(isContainTags);
// Validators.push(maxCharInput);
