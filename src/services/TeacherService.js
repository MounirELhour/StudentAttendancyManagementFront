import axios from "axios";
import AuthHeader from "../services/AuthHeader";

export const GetClassRooms = (setClasses) => {
  const bearer = AuthHeader();
  const userId = localStorage.getItem("user");

  axios
    .get(process.env.REACT_APP_SERVER_ADRESSE + "/users/" + userId, bearer)
    .then((response) => {
      setClasses({
        id: userId,
        email: response.data.email,
        firstName: response.data.firstName,
        lastName: response.data.lastName,
        roles: response.data.roles,
        classRooms: response.data.classRoom,
      });
    })
    .catch((error) => {
      console.error(error);
    });
};
