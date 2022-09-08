import { Navigate, Outlet } from "react-router-dom";
const PrivateRoutes = (isAuth) => {
  let auth = { token: isAuth.isAuth };
  // return auth.token ? <Outlet /> : <Navigate to="/login" />;
};
export default PrivateRoutes;
