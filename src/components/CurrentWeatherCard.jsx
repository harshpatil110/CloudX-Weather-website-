import React from 'react';
import { getWeatherIcon, formatTime } from '../utils/formatWeather';
import '../styles/CurrentWeatherCard.css';

const CurrentWeatherCard = ({ weather }) => {
    if (!weather) return null;

    const sunrise = formatTime(weather.sys.sunrise);
    const sunset = formatTime(weather.sys.sunset);

    return (
        <div className="current-weather-card glass-card fade-in">
            <div className="weather-main">
                <div className="weather-left">
                    <div className="temperature">{Math.round(weather.main.temp)}°C</div>
                    <div className="feels-like">Feels like: {Math.round(weather.main.feels_like)}°C</div>

                    <div className="sun-times">
                        <div className="sun-item">
                            <span className="sun-icon">🌅</span>
                            <div>
                                <div className="sun-label">Sunrise</div>
                                <div className="sun-time">{sunrise}</div>
                            </div>
                        </div>
                        <div className="sun-item">
                            <span className="sun-icon">🌇</span>
                            <div>
                                <div className="sun-label">Sunset</div>
                                <div className="sun-time">{sunset}</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="weather-center">
                    <div className="weather-icon-large">
                        {getWeatherIcon(weather.weather[0].main)}
                    </div>
                    <div className="weather-condition">{weather.weather[0].main}</div>
                </div>

                <div className="weather-right">
                    <div className="weather-stat">
                        <span className="stat-icon">💧</span>
                        <div>
                            <div className="stat-value">{weather.main.humidity}%</div>
                            <div className="stat-label">Humidity</div>
                        </div>
                    </div>
                    <div className="weather-stat">
                        <span className="stat-icon">💨</span>
                        <div>
                            <div className="stat-value">{Math.round(weather.wind.speed)}km/h</div>
                            <div className="stat-label">Wind Speed</div>
                        </div>
                    </div>
                    <div className="weather-stat">
                        <span className="stat-icon">🌡️</span>
                        <div>
                            <div className="stat-value">{weather.main.pressure}hPa</div>
                            <div className="stat-label">Pressure</div>
                        </div>
                    </div>
                    <div className="weather-stat">
                        <span className="stat-icon">☀️</span>
                        <div>
                            <div className="stat-value">8</div>
                            <div className="stat-label">UV</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CurrentWeatherCard;
