import React, { useEffect, useState } from "react";
import LoginPage from "./components/LoginPage";
import NavBArComponent from "./components/NavBarComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminComponent from "./components/mainSections/AdminComponent";
import ParentComponent from "./components/mainSections/ParentComponent";
import StudentComponent from "./components/mainSections/StudentComponent";
import TeacherComponent from "./components/mainSections/TeacherComponent";
import HomeComponent from "./components/mainSections/HomeComponent";
import { GetLogedUser } from "./requests/UserUtls";
import PrivateRoutes from "./services/PrivateRoutes";

function App() {
  const [userData, setUserData] = useState({});
  useEffect(() => {
    //console.log(GetLogedUser());
    setUserData(GetLogedUser());

    console.log(userData ? userData : null);
  }, []);

  return (
    <BrowserRouter>
      <NavBArComponent />
      <Routes>
        <Route exact path="Login" element={<LoginPage />} />
        <Route element={<PrivateRoutes />}>
          <Route exact path="/" element={<HomeComponent />} />
          <Route exact path="Student" element={<StudentComponent />} />
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
    </BrowserRouter>
  );
}

export default App;
