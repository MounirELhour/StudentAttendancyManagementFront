import React, { useState, useEffect } from "react";
import { Login } from "../services/AuthService";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {}, []);

  const handleSubmit = (event) => {
    Login(email, password);
    alert("an email was submitted: ");
    event.preventDefault();
  };

  return (
    <div className="container-sm" id="LoginPage">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="form-outline mb-4">
          <input
            type="email"
            id="form2Example1"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="form-label" htmlFor="form2Example1">
            Email
          </label>
        </div>

        <div className="form-outline mb-4">
          <input
            type="password"
            id="form2Example2"
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
          />
          <label className="form-label" htmlFor="form2Example2">
            Password
          </label>
        </div>
        <div className="text-center">
          <input type="submit" className="btn btn-primary btn-block mb-4" />
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
