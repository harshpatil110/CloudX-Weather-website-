import React from 'react';
import '../styles/AirConditionsPanel.css';

const AirConditionsPanel = ({ weather }) => {
  const conditions = [
    {
      icon: '🌡️',
      label: 'Real Feel',
      value: `${Math.round(weather?.main?.feels_like || 0)}°`,
      unit: ''
    },
    {
      icon: '💨',
      label: 'Wind',
      value: weather?.wind?.speed || 0,
      unit: 'km/h'
    },
    {
      icon: '💧',
      label: 'Humidity',
      value: weather?.main?.humidity || 0,
      unit: '%'
    },
    {
      icon: '🌧️',
      label: 'Chance of rain',
      value: weather?.clouds?.all || 0,
      unit: '%'
    },
    {
      icon: '☀️',
      label: 'UV Index',
      value: 4,
      unit: ''
    },
    {
      icon: '👁️',
      label: 'Visibility',
      value: ((weather?.visibility || 0) / 1000).toFixed(1),
      unit: 'km'
    }
  ];

  return (
    <div className="air-conditions fade-in">
      <h3 className="section-title">
        <span className="title-icon">🌬️</span>
        Air Conditions
      </h3>
      <div className="conditions-grid">
        {conditions.map((condition, index) => (
          <div key={index} className="condition-card glass">
            <div className="condition-icon">{condition.icon}</div>
            <div className="condition-info">
              <div className="condition-label">{condition.label}</div>
              <div className="condition-value">
                {condition.value}
                <span className="condition-unit">{condition.unit}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AirConditionsPanel;
