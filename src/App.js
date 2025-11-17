import React, { useState, useEffect } from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import TopBar from './components/TopBar';
import CurrentTimeCard from './components/CurrentTimeCard';
import CurrentWeatherCard from './components/CurrentWeatherCard';
import FiveDayForecast from './components/FiveDayForecast';
import HourlyForecast from './components/HourlyForecast';
import { fetchCurrentWeather, fetchForecast } from './utils/weatherApi';
import './styles/global.css';
import './styles/App.css';

function AppContent() {
  const { isDarkMode } = useTheme();
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [city, setCity] = useState(null);
  const [showSearch, setShowSearch] = useState(true);

  useEffect(() => {
    if (city) {
      loadWeatherData(city);
    }
  }, [city]);

  const loadWeatherData = async (cityName) => {
    try {
      setLoading(true);
      setError(null);
      setShowSearch(false);
      const [weatherData, forecastData] = await Promise.all([
        fetchCurrentWeather(cityName),
        fetchForecast(cityName)
      ]);
      setWeather(weatherData);
      setForecast(forecastData);
    } catch (err) {
      setError(err.message);
      setShowSearch(true);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (cityName) => {
    setCity(cityName);
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        () => {
          setCity('New York');
        },
        () => {
          alert('Unable to get your location');
        }
      );
    }
  };

  if (showSearch) {
    return (
      <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
        <div className="search-screen-container">
          <div className="search-screen-content fade-in">
            <h1 className="app-title">Weather App</h1>
            <form onSubmit={(e) => {
              e.preventDefault();
              const input = e.target.elements.city;
              if (input.value.trim()) {
                handleSearch(input.value.trim());
              }
            }} className="search-form">
              <input
                type="text"
                name="city"
                placeholder="Enter city name..."
                className="search-screen-input"
              />
              <button type="submit" className="search-screen-button">
                Search
              </button>
              <button
                type="button"
                onClick={handleLocationClick}
                className="location-screen-button"
                title="Use my location"
              >
                📍
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <div className="app-container">
        <TopBar onSearch={handleSearch} onLocationClick={handleLocationClick} />
        
        {loading && (
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <p>Loading weather data...</p>
          </div>
        )}

        {error && (
          <div className="error-container glass-card">
            <span className="error-icon">⚠️</span>
            <h2>Oops! Something went wrong</h2>
            <p>{error}</p>
            <button onClick={() => loadWeatherData(city)} className="retry-button">
              Try Again
            </button>
          </div>
        )}

        {!loading && !error && weather && (
          <div className="weather-grid">
            <div className="grid-left">
              <CurrentTimeCard city={weather.name} />
              <FiveDayForecast forecast={forecast} />
            </div>
            <div className="grid-right">
              <CurrentWeatherCard weather={weather} />
              <HourlyForecast forecast={forecast} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
