import axios from 'axios';

export const Login = (email, password, setIsAuthenticated) => {
  return axios
    .post(process.env.REACT_APP_SERVER_ADRESSE + '/login_check', {
      email,
      password,
    })
    .then(response => {
      if (response.data.token) {
        localStorage.setItem('token', JSON.stringify(response.data.token));
        localStorage.setItem('user', JSON.stringify(response.data.data.id));
        setIsAuthenticated(true);
      }
      return response.data;
    });
};
export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
};

export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user'));
};
