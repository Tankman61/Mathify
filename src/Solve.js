import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './App.css';

function Solve() {
  const [input, setInput] = useState('');
  const [file, setFile] = useState(null);
  const [results, setResults] = useState('');
  const [loading, setLoading] = useState(false);
  const [videoUrl, setVideoUrl] = useState(''); // New state for the video URL
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
    // Implement API logic here and return the video URL
    // This is a placeholder for where you'd get the video URL from your API response.
    return 'https://example.com/video.mp4'; // Replace with the actual video URL from your API
  };

  const handleSolve = async () => {
    setLoading(true);
    setResults('');
    setVideoUrl(''); // Clear previous video result

    try {
      const videoSrc = await apiResponse();
      setVideoUrl(videoSrc); // Set the video URL from API response
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
          <a className="logo">Mathify</a>
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
            {videoUrl ? (
              <video controls>
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <p>{results || "Results will be displayed here..."}</p>
            )}
          </div>
          <Link to="/" className="back-button">Back to Home</Link>
        </section>
      </div>
    </div>
  );
}

export default Solve;
