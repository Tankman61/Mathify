import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Login() {
  return (
    <div className="login-container">
      <h2>Login</h2>
      <div className="input-group">
        <label htmlFor="username">Username: </label>
        <input type="text" id="username" />
      </div>
      <div className="input-group">
        <label htmlFor="password">Password: </label>
        <input type="password" id="password" />
      </div>
      <button class="btn">Login</button>
      <p>Don't have an account? <Link to="/register">Register here</Link></p>
    </div>
  );
}

export default Login;

