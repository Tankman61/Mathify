import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './App.css';

function Mathify() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [typingText, setTypingText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const navigate = useNavigate();

  const words = ['Imagine', 'Calculate', 'Solve', 'Learn'];
  const typingSpeed = 150;
  const deletingSpeed = 100;
  const displayPause = 1000;

  useEffect(() => {

    const userIsAuthenticated = false;
    setIsAuthenticated(userIsAuthenticated);
  }, []);

  useEffect(() => {
    const handleTypingEffect = () => {
      if (isDeleting) {
        if (typingText.length > 0) {
          setTypingText(prev => prev.slice(0, -1));
        } else {
          setIsDeleting(false);
          setIndex((prevIndex) => (prevIndex + 1) % words.length);
        }
      } else {
        if (typingText.length < words[index].length) {
          setTypingText(prev => prev + words[index].charAt(typingText.length));
        } else {
          setTimeout(() => setIsDeleting(true), displayPause);
        }
      }
    };

    const typingTimeout = setTimeout(handleTypingEffect, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(typingTimeout);
  }, [typingText, isDeleting, index]);

  const handleProtectedNavigation = (path) => {
    if (isAuthenticated) {
      navigate(path);
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="app-container">
      <nav>
        <div className="nav-container">
          <a className="logo">Mathify</a>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a onClick={() => handleProtectedNavigation('/solve')}>Solve</a></li>
            <li><a onClick={() => handleProtectedNavigation('/videos')}>Videos</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div className="login"><Link to="/login">Login</Link></div>
        </div>
      </nav>

      <div className="home-content">
        <div className="text-content">
          <h1 className="text">Mathify allows you to {typingText}</h1>
          <p className="subtitle">
            Immerse yourself in a futuristic learning experience designed to boost your mathematical prowess.
          </p>
          <div className="cta-buttons">
            <a onClick={() => handleProtectedNavigation('/solve')} className="cta-button primary-cta">Start Solving</a>
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
            <div className="address-bar">Generated Animation</div>
          </div>
          <div className="browser-content">
            <div className="image-content">
              <img src="https://cdn.discordapp.com/attachments/1274170534963449946/1274517964674039879/284077951-b5e94ba3-c1c0-4f33-ade6-3ce6e67fa0ef.gif?ex=66c28ada&is=66c1395a&hm=242e8146b9cfb3f5ffc02306b41014ceaa7882ac9f2619165501ac9328e5e87a&" alt="Math visualization" />
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <section id="about" className="math-paper">
        <h2>About Mathify</h2>
        <p>Mathify combines the power of the Wolfram API with stunning visual explanations to help you understand math in depth.</p>
      </section>

      <section id="contact" className="math-paper">
        <h2>Contact Us</h2>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>
          <button type="submit">Send</button>
        </form>
      </section>
      <footer className="app-footer">
        <p>&copy; 2024 Mathify. All rights reserved.</p>
        <ul className="footer-links">
          <li><a href="/terms">Terms of Service</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
      </footer>
    </div>
  );
}

export default Mathify;
