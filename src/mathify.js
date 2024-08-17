import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Mathify() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    const fadeInElements = document.querySelectorAll('.fade-in');

    const handleScroll = () => {
      fadeInElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.8) {
          element.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setPreview(objectUrl);
    }
  };

  return (
    <div>
      <nav>
        <div className="nav-container">
          <a className="logo">Mathify</a>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#solve">Solve Problem</a></li>
            <li><a href="#videos">Generated Videos</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div className="login"><Link to="/login">Login</Link></div>
        </div>
      </nav>

      <div className="container">
        <section id="home" className="fade-in">
          <h1>Welcome to Mathify</h1>
          <p>Experience math like never before. Solve complex problems and watch them come to life in videos inspired by 3Blue1Brown.</p>
        </section>

        <section id="solve" className="fade-in fade-in-delay-1">
          <h2>Solve a Math Problem</h2>
          <input type="text" id="problem-input" placeholder="Enter your math problem..." />
          <button>Solve</button>
          <div id="solution-results"></div>
          
          <div className="upload-photo-container">
            <h2>Upload a Photo to Solve</h2>
            <input type="file" accept="image/*" onChange={handleFileChange} />
            {preview && (
              <div className="image-preview">
                <img src={preview} alt="Preview" />
              </div>
            )}
          </div>
        </section>

        <section id="videos" className="fade-in fade-in-delay-2">
          <h2>Your Generated Videos</h2>
          <p>Watch your problems being solved with visual clarity.</p>
          <div className="video-placeholder">Video content goes here</div>
        </section>

        <section id="about" className="fade-in fade-in-delay-3">
          <h2>About Mathify</h2>
          <p>Mathify combines the power of the Wolfram API with stunning visual explanations to help you understand math in depth.</p>
        </section>

        <section id="contact" className="fade-in fade-in-delay-4">
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
      </div>
    </div>
  );
}

export default Mathify;
