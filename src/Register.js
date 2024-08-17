import React from 'react';
import { Link } from 'react-router-dom'; 
import './App.css';

function Register() {
  return (
    <div className="login-container">
      <h2>Register</h2>
      <div className="input-group">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" />
      </div>
      <div className="input-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" />
      </div>
      <div className="input-group">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
      </div>
      <button>Register</button>
      <p>Already have an account? <Link to="/login">Login here</Link></p>
    </div>
  );
}

export default Register;

