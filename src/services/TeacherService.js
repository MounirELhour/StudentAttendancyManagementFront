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

export const GetClassRoomStudents = (setStudents, classId) => {
  const bearer = AuthHeader();
  const userId = localStorage.getItem("user");

  axios
    .get(
      process.env.REACT_APP_SERVER_ADRESSE + "/class_rooms/" + classId,
      bearer
    )
    .then((response) => {
      const studentFiltredResult = response.data.users?.filter((student) => {
        return student.roles?.includes("ROLE_STUDENT");
      });
      const filtered = studentFiltredResult.filter(function (x) {
        return x !== undefined;
      });
      setStudents(filtered);
    })
    .catch((error) => {
      console.error(error);
    });
};

export const setStudentsAttendances = (attendance) => {
  const bearer = AuthHeader();

  axios
    .post(
      process.env.REACT_APP_SERVER_ADRESSE + "/attendances",
      attendance,
      bearer
    )
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.error(error);
    });
};
