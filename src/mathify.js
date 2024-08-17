import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Mathify() {
  const [preview, setPreview] = useState(null);
  const [typingText, setTypingText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [timeout, setTimeout] = useState(200);
  const words = ['Mathify', 'Calculate', 'Solve', 'Learn'];
  const typingSpeed = 150;
  const deletingSpeed = 100;
  const pauseTime = 2000;

  useEffect(() => {
    const handleTypingEffect = () => {
      if (isDeleting) {
        if (typingText.length > 0) {
          setTypingText(prev => prev.slice(0, -1));
        } else {
          setIsDeleting(false);
          setTimeout(() => {}, pauseTime); // Delay before starting to type the next word
          setIndex((index + 1) % words.length);
        }
      } else {
        if (typingText.length < words[index].length) {
          setTypingText(prev => prev + words[index].charAt(typingText.length));
        } else {
          setIsDeleting(true);
          setTimeout(() => {}, pauseTime); // Delay before starting to delete
        }
      }
    };

    const typingInterval = setInterval(handleTypingEffect, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearInterval(typingInterval);
  }, [typingText, isDeleting, index]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  };

  return (
    <div className="app-container">
      <nav>
        <div className="nav-container">
          <a className="logo">Mathify</a>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/solve">Solve</Link></li>
            <li><Link to="/videos">Videos</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
          <div className="login"><Link to="/login">Login</Link></div>
        </div>
      </nav>

      <div className="home-content">
        <div className="text-content">
          <h1>Mathify allows you to <span className="typing-text">{typingText}</span></h1>
          <p className="subtitle">
            Immerse yourself in a futuristic learning experience designed to boost your mathematical prowess.
          </p>
          <div className="cta-buttons">
            <a href="#solve" className="cta-button primary-cta">Start Solving</a>
            <a href="#about" className="cta-button secondary-cta">Learn More</a>
          </div>
        </div>

        <div className="browser-window">
          <div className="browser-header">
            <div className="circles">
              <span className="circle red"></span>
              <span className="circle yellow"></span>
              <span className="circle green"></span>
            </div>
            <div className="address-bar">Generated Content</div>
          </div>
          <div className="browser-content">
            <div className="image-content">
              <img src="logo.svg" alt="Math visualization" />
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Mathify;
