import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './Login';
import Mathify from './mathify';
import Register from './Register';
import About from './About';
import Solve from './Solve';
import Videos from './Videos';
import Contact from './Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Mathify />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> 
        <Route path="/about" element={<About />} />
        <Route path="/solve" element={<Solve />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;

