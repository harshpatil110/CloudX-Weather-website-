import React, { useEffect } from 'react';
import { getWeatherBackground } from '../utils/weatherBackgrounds';

const BackgroundController = ({ weather }) => {
  useEffect(() => {
    if (!weather) return;

    const condition = weather.weather[0].main;
    const currentHour = new Date().getHours();
    const isNight = currentHour < 6 || currentHour > 18;
    
    const background = getWeatherBackground(condition, isNight);
    document.body.style.background = background;
    document.body.style.transition = 'background 1s ease';

    return () => {
      document.body.style.background = '#000000';
    };
  }, [weather]);

  return null;
};

export default BackgroundController;
