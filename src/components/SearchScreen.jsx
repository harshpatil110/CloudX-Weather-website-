import React, { useState } from 'react';
import '../styles/SearchScreen.css';

const SearchScreen = ({ onSearch }) => {
  const [city, setCity] = useState('');
  const [error, setError] = useState('');

  const handleSearch = () => {
    if (city.trim()) {
      setError('');
      onSearch(city.trim());
    } else {
      setError('Please enter a city name');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // For now, just use a default city
          onSearch('New York');
        },
        () => {
          setError('Unable to get your location');
        }
      );
    }
  };

  return (
    <div className="search-screen">
      <div className="search-container fade-in">
        <h1 className="app-title">Weather App</h1>
        <div className="search-box">
          <input
            type="text"
            placeholder="Enter city name..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyPress={handleKeyPress}
            className="search-input"
          />
          <button onClick={handleSearch} className="search-button">
            Search
          </button>
          <button onClick={handleLocationClick} className="location-button" title="Use my location">
            📍
          </button>
        </div>
        {error && <p className="search-error">{error}</p>}
      </div>
    </div>
  );
};

export default SearchScreen;
