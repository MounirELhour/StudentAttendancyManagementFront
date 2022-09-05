import axios from "axios";

export const Login = (email, password) => {
  return axios
    .post(process.env.REACT_APP_SERVER_ADRESSE + "/login_check", {
      email,
      password,
    })
    .then((response) => {
      console.log(response);
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data.token));
      }
      return response.data;
    });
};
export const logout = () => {
  localStorage.removeItem("user");
};

export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};
