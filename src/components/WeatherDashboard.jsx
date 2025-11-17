import React, { useState, useEffect } from 'react';
import WeatherHeader from './WeatherHeader';
import HourlyForecast from './HourlyForecast';
import WeeklyForecast from './WeeklyForecast';
import AirConditionsPanel from './AirConditionsPanel';
import BackgroundController from './BackgroundController';
import SearchScreen from './SearchScreen';
import { fetchCurrentWeather, fetchForecast } from '../utils/weatherApi';
import '../styles/WeatherDashboard.css';

const WeatherDashboard = () => {
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

  const handleCityChange = (newCity) => {
    if (newCity.trim()) {
      setCity(newCity.trim());
    }
  };

  const handleSearchCity = (cityName) => {
    setCity(cityName);
  };

  const handleBackToSearch = () => {
    setShowSearch(true);
    setWeather(null);
    setForecast(null);
    setCity(null);
  };

  if (showSearch) {
    return <SearchScreen onSearch={handleSearchCity} />;
  }

  if (loading) {
    return (
      <div className="dashboard-container">
        <div className="dashboard-content">
          <div className="loading-skeleton">
            <div className="skeleton-header"></div>
            <div className="skeleton-cards">
              <div className="skeleton-card"></div>
              <div className="skeleton-card"></div>
              <div className="skeleton-card"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="dashboard-container">
        <div className="dashboard-content">
          <div className="error-message glass">
            <span className="error-icon">⚠️</span>
            <h2>Oops! Something went wrong</h2>
            <p>{error}</p>
            <button onClick={() => loadWeatherData(city)} className="retry-button">
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      <BackgroundController weather={weather} />
      <div className="dashboard-content">
        <WeatherHeader weather={weather} onCityChange={handleCityChange} />
        <WeeklyForecast forecast={forecast} />
        <HourlyForecast forecast={forecast} />
        <AirConditionsPanel weather={weather} />
      </div>
    </div>
  );
};

export default WeatherDashboard;
