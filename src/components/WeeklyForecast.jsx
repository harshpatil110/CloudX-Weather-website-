import React from 'react';
import '../styles/WeeklyForecast.css';

const WeeklyForecast = ({ forecast }) => {
  const getWeeklyData = () => {
    if (!forecast?.list) return [];
    
    const dailyData = {};
    forecast.list.forEach((item) => {
      const date = new Date(item.dt * 1000);
      const day = date.toLocaleDateString('en-US', { weekday: 'short' }).toUpperCase();
      
      if (!dailyData[day]) {
        dailyData[day] = {
          day,
          temps: [],
          condition: item.weather[0].main,
          icon: item.weather[0].icon
        };
      }
      dailyData[day].temps.push(item.main.temp);
    });

    return Object.values(dailyData).slice(0, 5).map(day => ({
      ...day,
      high: Math.round(Math.max(...day.temps)),
      low: Math.round(Math.min(...day.temps))
    }));
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

  const weeklyData = getWeeklyData();

  return (
    <div className="weekly-forecast fade-in">
      <div className="weekly-scroll">
        {weeklyData.map((day, index) => (
          <div key={index} className="weekly-card glass">
            <div className="day-name">{day.day}</div>
            <div className="day-icon">{getWeatherEmoji(day.condition)}</div>
            <div className="day-temps">
              <span className="temp-high">{day.high}°</span>
              <span className="temp-divider">/</span>
              <span className="temp-low">{day.low}°</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeeklyForecast;
