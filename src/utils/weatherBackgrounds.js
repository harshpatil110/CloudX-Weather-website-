// Weather background mapping for Neo Brutalism
export const weatherBackgrounds = {
  Clear: {
    day: '#ffd803',
    night: '#2b2c34'
  },
  Clouds: {
    day: '#fdfae7',
    night: '#6246ea'
  },
  Rain: {
    day: '#4a90e2',
    night: '#3da9fc'
  },
  Drizzle: {
    day: '#bae8e8',
    night: '#4a90e2'
  },
  Thunderstorm: {
    day: '#ff6b6b',
    night: '#e45858'
  },
  Snow: {
    day: '#e3f6f5',
    night: '#d8eef0'
  },
  Haze: {
    day: '#fffffe',
    night: '#90b4ce'
  },
  Fog: {
    day: '#e3f6f5',
    night: '#90b4ce'
  },
  Smoke: {
    day: '#fdfae7',
    night: '#4a5568'
  },
  Mist: {
    day: '#bae8e8',
    night: '#0a0a14'
  }
};

export const getWeatherBackground = (weatherCondition, isNight = false) => {
  const timeOfDay = isNight ? 'night' : 'day';
  return weatherBackgrounds[weatherCondition]?.[timeOfDay] || weatherBackgrounds.Clear[timeOfDay];
};
