// src/components/Weather.js
import  { useEffect, useState } from 'react';

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [city] = useState('London'); // Default city

  useEffect(() => {
    fetch(`https://api.open-meteo.com/v1/forecast?latitude=51.5074&longitude=-0.1278&hourly=temperature_2m`)
      .then(response => response.json())
      .then(data => {
        setWeather(data.hourly.temperature_2m[0]); // Get the temperature for the current hour
      })
      .catch(error => console.error('Error fetching weather data:', error));
  }, []);

  return (
    <div className="weather-container">
      <h2>Current Weather in {city}</h2>
      {weather !== null ? (
        <p>Temperature: {weather}°C</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Weather;
