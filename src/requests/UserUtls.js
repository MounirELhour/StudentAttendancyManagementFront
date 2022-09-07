import axios from "axios";
import AuthHeader from "../services/AuthHeader";

export const GetLogedUser = () => {
  const bearer = AuthHeader();
  const userId = localStorage.getItem("user");

  axios
    .get(process.env.REACT_APP_SERVER_ADRESSE + "/users/" + userId, bearer)
    .then((response) => {
      const logedUser = {
        id: userId,
        email: response.data.email,
        firstName: response.data.firstName,
        lastName: response.data.lastName,
        roles: response.data.roles,
      };
      return logedUser;
    })
    .catch((error) => {
      console.error(error);
    });
};
