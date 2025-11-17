import React, { useState } from 'react';
import '../styles/SearchBar.css';

const SearchBar = ({ onSearch, onGeolocation }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onSearch(inputValue.trim());
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  const handleLocationClick = () => {
    if (onGeolocation) {
      onGeolocation();
    }
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          className="search-input"
          placeholder="Enter city name..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button type="submit" className="search-button">
          Search
        </button>
        {onGeolocation && (
          <button
            type="button"
            className="location-button"
            onClick={handleLocationClick}
            title="Use my location"
          >
            📍
          </button>
        )}
      </form>
    </div>
  );
};

export default SearchBar;
