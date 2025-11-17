import React, { useState } from 'react';
import SearchBar from './SearchBar';
import WeatherCard from './WeatherCard';
import Loader from './Loader';
import ErrorMessage from './ErrorMessage';
import { fetchWeatherByCity } from '../utils/api';
import '../styles/App.css';

const App = () => {
  // State management for the application
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [city, setCity] = useState('');

  /**
   * Fetches weather data for a given city name
   * @param {string} cityName - The name of the city to fetch weather for
   */
  const fetchWeather = async (cityName) => {
    setLoading(true);
    setError(null);
    
    try {
      const data = await fetchWeatherByCity(cityName);
      setWeatherData(data);
      setCity(cityName);
    } catch (err) {
      setError(err.message);
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  /**
   * Handles search submission from SearchBar component
   * @param {string} searchQuery - The city name entered by the user
   */
  const handleSearch = (searchQuery) => {
    if (!searchQuery || searchQuery.trim() === '') {
      setError('Please enter a city name');
      return;
    }
    
    setError(null);
    fetchWeather(searchQuery);
  };

  /**
   * Handles geolocation feature to auto-detect user location
   */
  const handleGeolocation = () => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser');
      return;
    }

    setLoading(true);
    setError(null);

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;
          const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=YOUR_API_KEY_HERE`;
          
          const response = await fetch(url);
          
          if (!response.ok) {
            throw new Error('Failed to fetch weather for your location');
          }
          
          const data = await response.json();
          setWeatherData(data);
          setCity(data.name);
          setLoading(false);
        } catch (err) {
          setError(err.message);
          setWeatherData(null);
          setLoading(false);
        }
      },
      (err) => {
        setError('Location permission denied. Please enter a city name manually.');
        setLoading(false);
      }
    );
  };

  /**
   * Determines the background CSS class based on weather condition
   * @param {string} weatherCondition - The main weather condition from API
   * @returns {string} CSS class name for background
   */
  const getBackgroundClass = (weatherCondition) => {
    if (!weatherCondition) return 'bg-default';
    
    const condition = weatherCondition.toLowerCase();
    
    if (condition.includes('clear')) {
      return 'bg-clear';
    } else if (condition.includes('rain') || condition.includes('drizzle') || condition.includes('thunderstorm')) {
      return 'bg-rain';
    } else if (condition.includes('cloud')) {
      return 'bg-clouds';
    }
    
    return 'bg-default';
  };

  // Determine background class based on current weather
  const backgroundClass = weatherData 
    ? getBackgroundClass(weatherData.weather[0].main)
    : 'bg-default';

  return (
    <div className={`app-container ${backgroundClass}`}>
      <div className="app-content">
        <h1 className="app-title">Weather App</h1>
        
        <SearchBar 
          onSearch={handleSearch} 
          onGeolocation={handleGeolocation}
        />
        
        {loading && <Loader />}
        
        {error && !loading && <ErrorMessage message={error} />}
        
        {weatherData && !loading && !error && (
          <WeatherCard weatherData={weatherData} />
        )}
      </div>
    </div>
  );
};

export default App;
