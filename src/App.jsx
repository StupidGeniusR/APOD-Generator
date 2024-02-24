import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [apodData, setApodData] = useState(null);

  useEffect(() => {
    const fetchApodData = async () => {
      try {
        const response = await axios.get(
          'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY'
        );
        setApodData(response.data);
      } catch (error) {
        console.error('Error fetching APOD data:', error);
      }
    };

    fetchApodData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Space APOD Explorer</h1>
        {apodData && (
          <div>
            <img src={apodData.url} alt={apodData.title} />
            <h2>{apodData.title}</h2>
            <p>{apodData.explanation}</p>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;