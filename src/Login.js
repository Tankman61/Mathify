import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

import axios from 'axios';


function Login() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const Auth = async () => {
    //call on back-end for login here
    console.log(document.getElementById("username").value);
    console.log(document.getElementById("password").value);
  try {
    const response = await axios.post('https://http://127.0.0.1:5000/login  ', {
      "username": document.getElementById("username").value,
      "password" : document.getElementById("password").value
    });
    console.log(response)
    if (response == "authorized") {
      localStorage.setItem("user", document.getElementById("username").value);
      setIsAuthenticated(true)
    }
  } catch (error) {
    console.error('Login failed', error);
  }
  }

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
      <button onClick = {() => Auth(document.getElementById('username').value, document.getElementById('password').value)} class="btn">Login</button>
      <p>Don't have an account? <Link to="/register">Register here</Link></p>
    </div>
  );
}



export default Login;

