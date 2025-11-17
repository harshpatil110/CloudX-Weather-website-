import React from 'react';
import '../styles/WeatherHeader.css';

const WeatherHeader = ({ weather, onCityChange }) => {
  const formatDate = () => {
    const date = new Date();
    const options = { weekday: 'long', day: 'numeric', month: 'short', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  const getWeatherEmoji = (condition) => {
    const emojiMap = {
      Clear: '☀️',
      Clouds: '☁️',
      Rain: '🌧️',
      Drizzle: '🌦️',
      Thunderstorm: '⛈️',
      Snow: '❄️',
      Mist: '🌫️',
      Fog: '🌫️',
      Haze: '🌫️',
      Smoke: '💨'
    };
    return emojiMap[condition] || '☁️';
  };

  return (
    <div className="weather-header fade-in">
      <div className="location-bar">
        <div className="location-selector">
          <span className="location-icon">📍</span>
          <input
            type="text"
            placeholder="Enter city name"
            defaultValue={weather?.name}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                onCityChange(e.target.value);
              }
            }}
            className="location-input"
          />
          <span className="dropdown-icon">▼</span>
        </div>
        <div className="user-avatar">👤</div>
      </div>

      <div className="weather-main">
        <div className="weather-icon-large">
          {getWeatherEmoji(weather?.weather[0]?.main)}
        </div>
        <div className="weather-info">
          <h1 className="weather-condition">{weather?.weather[0]?.main}</h1>
          <div className="temperature">{Math.round(weather?.main?.temp)}°C</div>
          <p className="date-time">{formatDate()}</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherHeader;
