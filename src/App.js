import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    try {
      const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY&units=metric`);
      setWeather(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeather();
  };

  return (
    <div className="App">
      <h1>Weather App</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Enter city name" 
          value={city} 
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {weather && (
        <div>
          <h2>{weather.name}</h2>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Description: {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default App;
