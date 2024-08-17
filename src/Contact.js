import React from 'react';
import { Link } from 'react-router-dom';

function Contact() {
  return (
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
      <Link to="/" className="back-button">Back to Home</Link>
    </section>
  );
}

export default Contact;
