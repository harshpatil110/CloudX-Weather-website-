import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import '../styles/TopBar.css';

const TopBar = ({ onSearch, onLocationClick }) => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [searchInput, setSearchInput] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchInput.trim()) {
      onSearch(searchInput.trim());
      setSearchInput('');
    }
  };

  return (
    <div className="top-bar">
      <div className="theme-toggle">
        <label className="toggle-switch">
          <input
            type="checkbox"
            checked={isDarkMode}
            onChange={toggleTheme}
          />
          <span className="toggle-slider"></span>
        </label>
        <span className="theme-label">{isDarkMode ? 'Dark Mode' : 'Light Mode'}</span>
      </div>

      <form onSubmit={handleSearch} className="search-bar">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          placeholder="Search for your preferred city..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="search-input"
        />
      </form>

      <button onClick={onLocationClick} className="location-button">
        <span className="location-icon">📍</span>
        Current Location
      </button>
    </div>
  );
};

export default TopBar;
