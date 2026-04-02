import React, { useState, useEffect } from 'react';
import './index.css';

import Dashboard from './components/Dashboard';
import Radar from './components/Radar';
import AQI from './components/AQI';
import Historical from './components/Historical';

export default function App() {
  const [hash, setHash] = useState(window.location.hash || '#forecast');

  useEffect(() => {
    const handleHashChange = () => {
      setHash(window.location.hash || '#forecast');
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  switch (hash) {
    case '#radar':
      return <Radar />;
    case '#aqi':
      return <AQI />;
    case '#historical':
      return <Historical />;
    case '#forecast':
    default:
      return <Dashboard />;
  }
}
