import React, { useState, useEffect } from 'react';
import { Login } from '../services/AuthService';
import { useNavigate } from 'react-router-dom';

const LoginPage = ({ setIsAuthenticated, isAuthenticated }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = event => {
    Login(email, password, setIsAuthenticated);
    event.preventDefault();
  };
  useEffect(() => {
    isAuthenticated && navigate('/');
  }, [isAuthenticated]);
  return (
    <div className="container-sm" id="LoginPage">
      <form onSubmit={e => handleSubmit(e)}>
        <div className="form-outline mb-4">
          <input
            type="email"
            id="form2Example1"
            className="form-control"
            onChange={e => setEmail(e.target.value)}
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
            onChange={e => setPassword(e.target.value)}
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
