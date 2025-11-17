export const formatTime = (timestamp) => {
  const date = new Date(timestamp * 1000);
  return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
};

export const formatDate = (timestamp) => {
  const date = new Date(timestamp * 1000);
  return date.toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'short' });
};

export const formatDay = (timestamp) => {
  const date = new Date(timestamp * 1000);
  return date.toLocaleDateString('en-US', { weekday: 'short', day: 'numeric', month: 'short' });
};

export const getCurrentTime = () => {
  const now = new Date();
  return now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
};

export const getCurrentDate = () => {
  const now = new Date();
  return now.toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'short' });
};

export const getWeatherIcon = (condition) => {
  const icons = {
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
  return icons[condition] || '☁️';
};

export const groupForecastByDay = (forecastList) => {
  const grouped = {};
  
  forecastList.forEach(item => {
    const date = new Date(item.dt * 1000);
    const day = date.toDateString();
    
    if (!grouped[day]) {
      grouped[day] = {
        date: item.dt,
        temps: [],
        condition: item.weather[0].main,
        icon: item.weather[0].icon
      };
    }
    grouped[day].temps.push(item.main.temp);
  });

  return Object.values(grouped).slice(0, 5).map(day => ({
    ...day,
    temp: Math.round(day.temps.reduce((a, b) => a + b) / day.temps.length),
    maxTemp: Math.round(Math.max(...day.temps)),
    minTemp: Math.round(Math.min(...day.temps))
  }));
};
