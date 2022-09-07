const AuthHeader = () => {
  const userToken = JSON.parse(localStorage.getItem("token"));
  if (userToken) {
    return { headers: { Authorization: "Bearer " + userToken } };
  } else {
    return {};
  }
};
export default AuthHeader;
