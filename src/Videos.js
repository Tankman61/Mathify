import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Videos() {
  return (
    <section id="videos" className="math-paper">
      <h2>Your Generated Videos</h2>
      <p>Watch your problems being solved with visual clarity.</p>
      <div className="video-placeholder">Video content goes here</div>
      <Link to="/" className="back-button">Back to Home</Link>
    </section>
  );
}

export default Videos;

