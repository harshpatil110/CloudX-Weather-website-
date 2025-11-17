// Weather background gradients mapping
export const weatherBackgrounds = {
  Clear: {
    day: 'linear-gradient(135deg, #1E90FF 0%, #87CEEB 100%)',
    night: 'linear-gradient(135deg, #0c1445 0%, #1a2a6c 100%)'
  },
  Clouds: {
    day: 'linear-gradient(135deg, #4a5568 0%, #2d3748 100%)',
    night: 'linear-gradient(135deg, #1a202c 0%, #2d3748 100%)'
  },
  Rain: {
    day: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',
    night: 'linear-gradient(135deg, #0f2027 0%, #203a43 100%)'
  },
  Drizzle: {
    day: 'linear-gradient(135deg, #3a4f63 0%, #4a6278 100%)',
    night: 'linear-gradient(135deg, #1a2634 0%, #2a3644 100%)'
  },
  Thunderstorm: {
    day: 'linear-gradient(135deg, #1c1c2e 0%, #2d2d44 100%)',
    night: 'linear-gradient(135deg, #0a0a14 0%, #1a1a2e 100%)'
  },
  Snow: {
    day: 'linear-gradient(135deg, #e0e7ef 0%, #b8c6db 100%)',
    night: 'linear-gradient(135deg, #2c3e50 0%, #3a4f63 100%)'
  },
  Haze: {
    day: 'linear-gradient(135deg, #a8b8c8 0%, #c8d8e8 100%)',
    night: 'linear-gradient(135deg, #2a3a4a 0%, #3a4a5a 100%)'
  },
  Fog: {
    day: 'linear-gradient(135deg, #b0c4de 0%, #d0e4fe 100%)',
    night: 'linear-gradient(135deg, #2a3a4a 0%, #3a4a5a 100%)'
  },
  Smoke: {
    day: 'linear-gradient(135deg, #8a9aa8 0%, #aabac8 100%)',
    night: 'linear-gradient(135deg, #1a2a3a 0%, #2a3a4a 100%)'
  },
  Mist: {
    day: 'linear-gradient(135deg, #b8c8d8 0%, #d8e8f8 100%)',
    night: 'linear-gradient(135deg, #2a3a4a 0%, #3a4a5a 100%)'
  }
};

export const getWeatherBackground = (weatherCondition, isNight = false) => {
  const timeOfDay = isNight ? 'night' : 'day';
  return weatherBackgrounds[weatherCondition]?.[timeOfDay] || weatherBackgrounds.Clear[timeOfDay];
};
