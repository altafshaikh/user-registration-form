import { BASE_URL, endpont2 } from "./URI.js";

export const getData = (username) => {
  axios
    .get(BASE_URL + `${username}` + endpont2)
    .then(function (response) {
      console.log(response.data);
      return response.data;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
};
