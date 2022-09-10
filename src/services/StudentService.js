import axios from "axios";
import AuthHeader from "../services/AuthHeader";

export const GetStudentAttendances = (userId, setStudentAttendances) => {
  const bearer = AuthHeader();

  axios
    .get(
      process.env.REACT_APP_SERVER_ADRESSE + "/attendances?user=" + userId,
      bearer
    )
    .then((response) => {
      setStudentAttendances(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
};
