import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import WeatherHeader from './WeatherHeader';
import HourlyForecast from './HourlyForecast';
import WeeklyForecast from './WeeklyForecast';
import AirConditionsPanel from './AirConditionsPanel';
import BackgroundController from './BackgroundController';
import SearchScreen from './SearchScreen';
import { fetchCurrentWeather, fetchForecast } from '../utils/weatherApi';
import '../styles/WeatherDashboard.css';

const WeatherDashboard = () => {
  const [activeTab, setActiveTab] = useState('weather');
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
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
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
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
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

  const renderContent = () => {
    switch (activeTab) {
      case 'weather':
        return (
          <>
            <WeatherHeader weather={weather} onCityChange={handleCityChange} />
            <WeeklyForecast forecast={forecast} />
            <HourlyForecast forecast={forecast} />
            <AirConditionsPanel weather={weather} />
          </>
        );
      case 'cities':
        return (
          <div className="tab-content glass fade-in">
            <h2>Saved Cities</h2>
            <p>Your saved cities will appear here</p>
          </div>
        );
      case 'settings':
        return (
          <div className="tab-content glass fade-in">
            <h2>Settings</h2>
            <button onClick={handleBackToSearch} className="back-button">
              Change City
            </button>
          </div>
        );
      default:
        return (
          <div className="tab-content glass fade-in">
            <h2>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h2>
            <p>Content for {activeTab} coming soon</p>
          </div>
        );
    }
  };

  return (
    <div className="dashboard-container">
      <BackgroundController weather={weather} />
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="dashboard-content">
        {renderContent()}
      </div>
    </div>
  );
};

export default WeatherDashboard;
