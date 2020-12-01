import { BASE_URL, endpont1 } from "./URI.js";

export const postData = (dataObj) => {
  axios
    .post(BASE_URL + endpont1, dataObj)
    .then(function (response) {
      console.log(response);
      alert("Form submitted successfully");
    })
    .catch(function (error) {
      console.log(error);
    });
};
