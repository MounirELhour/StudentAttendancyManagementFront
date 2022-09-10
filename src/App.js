import React, { useEffect, useState } from "react";
import LoginPage from "./components/LoginPage";
import NavBArComponent from "./components/NavBarComponent";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import AdminComponent from "./components/mainSections/AdminComponent";
import ParentComponent from "./components/mainSections/ParentComponent";
import StudentComponent from "./components/mainSections/StudentComponent";
import TeacherComponent from "./components/mainSections/TeacherComponent";
import HomeComponent from "./components/mainSections/HomeComponent";
import PrivateRoutes from "./services/PrivateRoutes";
import { GetLogedUser } from "./services/UserService";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [logedUser, setLogedUser] = useState({});
  const location = useLocation();
  const token = localStorage.getItem("token");

  useEffect(() => {
    GetLogedUser(setLogedUser);
    !token && setLogedUser({});
  }, [location]);

  useEffect(() => {
    setIsAuthenticated(logedUser.email ? true : false);
  }, [logedUser]);
  return (
    <div>
      {isAuthenticated && <NavBArComponent logedUser={logedUser} />}
      <Routes>
        <Route
          exact
          path="Login"
          element={
            <LoginPage
              setIsAuthenticated={setIsAuthenticated}
              isAuthenticated={isAuthenticated}
            />
          }
        />
        <Route element={<PrivateRoutes isAuth={isAuthenticated} />}>
          <Route exact path="/" element={<HomeComponent />} />
          <Route
            exact
            path="Student"
            element={<StudentComponent user={logedUser} />}
          />
          <Route exact path="Parent" element={<ParentComponent />} />
          <Route exact path="Teacher" element={<TeacherComponent />} />
          <Route exact path="Admin" element={<AdminComponent />} />{" "}
        </Route>

        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
