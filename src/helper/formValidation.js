import { Validators } from "./validators.js";

export const formValidation = (formObj) => {
  //all validation should pass
  return Validators.every((validator) => {
    return validator(formObj);
  });
};
