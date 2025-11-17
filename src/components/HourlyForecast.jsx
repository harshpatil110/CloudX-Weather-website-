import React from 'react';
import '../styles/HourlyForecast.css';

const HourlyForecast = ({ forecast }) => {
  const getHourlyData = () => {
    if (!forecast?.list) return [];
    return forecast.list.slice(0, 8).map((item) => ({
      time: new Date(item.dt * 1000).toLocaleTimeString('en-US', { 
        hour: 'numeric', 
        hour12: true 
      }),
      temp: Math.round(item.main.temp),
      icon: item.weather[0].icon,
      condition: item.weather[0].main
    }));
  };

  const hourlyData = getHourlyData();
  const maxTemp = Math.max(...hourlyData.map(d => d.temp));
  const minTemp = Math.min(...hourlyData.map(d => d.temp));

  const getYPosition = (temp) => {
    const range = maxTemp - minTemp || 1;
    return 100 - ((temp - minTemp) / range) * 100;
  };

  const getWeatherEmoji = (condition) => {
    const emojiMap = {
      Clear: '☀️',
      Clouds: '☁️',
      Rain: '🌧️',
      Drizzle: '🌦️',
      Thunderstorm: '⛈️',
      Snow: '❄️'
    };
    return emojiMap[condition] || '☁️';
  };

  return (
    <div className="hourly-forecast glass fade-in">
      <h3 className="section-title">
        <span className="title-icon">🕐</span>
        24-hour forecast
      </h3>
      <div className="hourly-chart">
        <svg className="temp-curve" viewBox="0 0 800 120" preserveAspectRatio="none">
          <defs>
            <linearGradient id="tempGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1E90FF" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#87CEEB" stopOpacity="0.8" />
            </linearGradient>
          </defs>
          <path
            d={hourlyData.map((d, i) => {
              const x = (i / (hourlyData.length - 1)) * 800;
              const y = getYPosition(d.temp);
              return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
            }).join(' ')}
            fill="none"
            stroke="url(#tempGradient)"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
        <div className="hourly-items">
          {hourlyData.map((hour, index) => (
            <div key={index} className="hourly-item">
              <div className="hour-temp">{hour.temp}°</div>
              <div className="hour-icon">{getWeatherEmoji(hour.condition)}</div>
              <div className="hour-time">{hour.time}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HourlyForecast;
