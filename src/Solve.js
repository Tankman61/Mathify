import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './App.css';

function Solve() {
  const [input, setInput] = useState('');
  const [file, setFile] = useState(null);
  const [results, setResults] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const apiResponse = async () => {
    // Implement API logic here i guess
  };

  const handleSolve = async () => {
    setLoading(true);
    setResults('');

    try {
      await apiResponse();
      setResults('Result from API response');
    } catch (error) {
      console.error('Error:', error);
      setResults(`An error occurred. Please try again.\n\nTechnical information: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleProtectedNavigation = (path) => {
    // Perform any necessary checks before navigation
    navigate(path);
  };

  return (
    <div className="app-container">
      <nav>
        <div className="nav-container">
          <img src ="logo.png" className="logo"></img>
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/#about">About</a></li>
            <li><Link to="/solve">Solve</Link></li>
            <li><Link to="/videos">Videos</Link></li>
            <li><a href="/#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
      <div className="yes">
        <section id="solve" className="math-paper" style={{ marginTop: '50px' }}>

          <h2>Solve a Math Problem</h2>
          <textarea
            placeholder="Enter your math problem here..."
            value={input}
            onChange={handleInputChange}
          />
          <div className="upload-photo-container">
            <h3>Upload a Photo to Solve</h3>
            <input type="file" accept="image/*" onChange={handleFileChange} />
          </div>
          <button onClick={handleSolve} disabled={loading}>
            {loading ? 'Processing...' : 'Solve'}
          </button>
          <div className="result-container">
            <h3>Results</h3>
            <textarea
              readOnly
              value={results}
              placeholder="Results will be displayed here..."
            />
          </div>
          <Link to="/" className="back-button">Back to Home</Link>
        </section>
      </div>
    </div>
  );
}

export default Solve;
