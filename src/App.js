import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './Login';
import Mathify from './mathify';
import Register from './Register';
import Solve from './Solve';
import Videos from './Videos';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Mathify />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> 
        <Route path="/solve" element={<Solve />} />
        <Route path="/videos" element={<Videos />} />
      </Routes>
    </Router>
  );
}

export default App;

