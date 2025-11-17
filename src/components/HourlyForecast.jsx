import React from 'react';
import { getWeatherIcon, formatTime } from '../utils/formatWeather';
import '../styles/HourlyForecast.css';

const HourlyForecast = ({ forecast }) => {
  if (!forecast?.list) return null;

  const hourlyData = forecast.list.slice(0, 8);

  return (
    <div className="hourly-forecast glass-card fade-in">
      <h3 className="hourly-title">Hourly Forecast:</h3>
      <div className="hourly-scroll">
        {hourlyData.map((hour, index) => (
          <div key={index} className="hourly-item">
            <div className="hourly-time">{formatTime(hour.dt)}</div>
            <div className="hourly-icon">{getWeatherIcon(hour.weather[0].main)}</div>
            <div className="hourly-temp">{Math.round(hour.main.temp)}°C</div>
            <div className="hourly-wind">
              <span className="wind-icon">💨</span>
              {Math.round(hour.wind.speed)}km/h
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HourlyForecast;
