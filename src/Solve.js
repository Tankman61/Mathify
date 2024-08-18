import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Solve() {
  const [input, setInput] = useState('');
  const [file, setFile] = useState(null);
  const [results, setResults] = useState('');
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleSolve = async () => {
    setLoading(true);
    setResults('');

    try {
      let resultText = '';

      if (file) {
        const formData = new FormData();
        formData.append('file', file);


        const openaiResponse = await axios.post(
          'https://api.openai.com/v1/images-to-text', // i have no clue if chatgpt even does this i'm just so tired - this is not an actual endpoint
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
              'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
            },
          }
        );

        resultText = openaiResponse.data.text;
        if (!resultText) {
          throw new Error('No text was extracted from the image.');
        }
      } else if (input) {
        resultText = input;
      }
       const wolframResponse = await axios.get('http://api.wolframalpha.com/v2/query', {
        params: {
          input: resultText,
          appid: process.env.REACT_APP_WOLFRAM_APP_ID,
          format: 'plaintext',
          output: 'JSON',
        },
      });

      const resultPods = wolframResponse.data.queryresult.pods;
      const finalResult = resultPods.map(pod => pod.subpods.map(subpod => subpod.plaintext)).join('\n');

      setResults(finalResult || 'No result returned');
    } catch (error) {
      console.error('Error:', error);
      setResults(`An error occurred. Please try again.\n\nTechnical information: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="solve" className="math-paper">
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
  );
}

export default Solve;
