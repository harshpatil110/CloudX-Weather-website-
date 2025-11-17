import React from 'react';
import '../styles/WeatherCard.css';

const WeatherCard = ({ weatherData }) => {
  // Helper function to construct icon URL from OpenWeatherMap
  const getIconUrl = (iconCode) => {
    return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  };

  return (
    <div className="weather-card">
      <h2 className="city-name">{weatherData.name}</h2>
      
      <div className="weather-icon-container">
        <img 
          src={getIconUrl(weatherData.weather[0].icon)} 
          alt={weatherData.weather[0].description}
          className="weather-icon"
        />
      </div>
      
      <div className="temperature-display">
        <span className="temperature">{Math.round(weatherData.main.temp)}°C</span>
      </div>
      
      <p className="weather-description">{weatherData.weather[0].description}</p>
      
      <div className="weather-details">
        <div className="detail-item">
          <span className="detail-label">Feels Like</span>
          <span className="detail-value">{Math.round(weatherData.main.feels_like)}°C</span>
        </div>
        
        <div className="detail-item">
          <span className="detail-label">Humidity</span>
          <span className="detail-value">{weatherData.main.humidity}%</span>
        </div>
        
        <div className="detail-item">
          <span className="detail-label">Wind Speed</span>
          <span className="detail-value">{weatherData.wind.speed} m/s</span>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
