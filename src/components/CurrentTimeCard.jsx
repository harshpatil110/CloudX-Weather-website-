import React, { useState, useEffect } from 'react';
import { getCurrentTime, getCurrentDate } from '../utils/formatWeather';
import '../styles/CurrentTimeCard.css';

const CurrentTimeCard = ({ city }) => {
  const [time, setTime] = useState(getCurrentTime());
  const [date, setDate] = useState(getCurrentDate());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getCurrentTime());
      setDate(getCurrentDate());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="current-time-card glass-card fade-in">
      <h2 className="city-name">{city || 'Athens'}</h2>
      <div className="time-display">{time}</div>
      <div className="date-display">{date}</div>
    </div>
  );
};

export default CurrentTimeCard;
