import React from 'react';
import { getWeatherIcon, formatDay, groupForecastByDay } from '../utils/formatWeather';
import '../styles/FiveDayForecast.css';

const FiveDayForecast = ({ forecast }) => {
  if (!forecast?.list) return null;

  const dailyForecasts = groupForecastByDay(forecast.list);

  return (
    <div className="five-day-forecast glass-card fade-in">
      <h3 className="forecast-title">5 Days Forecast:</h3>
      <div className="forecast-list">
        {dailyForecasts.map((day, index) => (
          <div key={index} className="forecast-item">
            <span className="forecast-icon">{getWeatherIcon(day.condition)}</span>
            <div className="forecast-temp">{day.temp}°C</div>
            <div className="forecast-date">{formatDay(day.date)}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FiveDayForecast;
