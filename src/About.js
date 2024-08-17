import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <section id="about" className="math-paper">
      <h2>About Mathify</h2>
      <p>Mathify combines the power of the Wolfram API with stunning visual explanations to help you understand math in depth.</p>
      <Link to="/" className="back-button">Back to Home</Link>
    </section>
  );
}

export default About;
