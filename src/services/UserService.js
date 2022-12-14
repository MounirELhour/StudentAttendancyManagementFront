import axios from "axios";
import AuthHeader from "../services/AuthHeader";

export const GetLogedUser = (setUserData, setIsAuthenticated) => {
  const bearer = AuthHeader();
  const userId = localStorage.getItem("user");

  axios
    .get(process.env.REACT_APP_SERVER_ADRESSE + "/users/" + userId, bearer)
    .then((response) => {
      setUserData({
        id: userId,
        email: response.data.email,
        firstName: response.data.firstName,
        lastName: response.data.lastName,
        roles: response.data.roles,
        matiere: response.data.matiere,
      });
    })
    .catch((error) => {
      console.error(error);
    });
};
