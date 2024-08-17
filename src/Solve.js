import React from 'react';
import { Link } from 'react-router-dom';

function Solve() {
  return (
    <section id="solve" className="math-paper">
      <h2>Solve a Math Problem</h2>
      <input type="text" id="problem-input" placeholder="Enter your math problem..." />
      <button>Solve</button>
      <div id="solution-results"></div>
      <div className="upload-photo-container">
        <h3>Upload a Photo to Solve</h3>
        <input type="file" accept="image/*" />
      </div>
      <Link to="/" className="back-button">Back to Home</Link>
    </section>
  );
}

export default Solve;
