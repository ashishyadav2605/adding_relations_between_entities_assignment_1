// src/App.jsx
import React from 'react';
import DestinationContainer from './components/DestinationContainer';

const App = () => {
  return (
    <div>
      <h1 style={{ textAlign: 'center', marginTop: '1rem' }}>🌍 Top Travel Destinations</h1>
      <DestinationContainer />
    </div>
  );
};

export default App;
