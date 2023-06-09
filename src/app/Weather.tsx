"use client"
import React, { useState } from 'react';
import axios from 'axios';

const Weather: React.FC = () => {
  const [weatherData, setWeatherData] = useState<any>(null);
  const [searchInput, setSearchInput] = useState<any>('');

  const fetchWeatherData = async () => {
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&appid=${apiKey}`;
    try {
      console.log(url)
      const response = await axios.get(url);
      setWeatherData(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-gray-100 rounded-lg shadow-md">
    <div>
      <h2 className="text-2xl font-bold mb-2">Weather in:</h2>
      <input
        id="searchInput"
        type="text"
        placeholder="Search..."
        value={searchInput}
        onChange={handleInputChange}
        className="mb-4 w-full p-2 border-2 border-gray-200 rounded shadow-sm"
      />
    
      <div className="flex justify-center">
        <button 
          className="text-lg border-2 border-blue-500 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 mb-4" 
          onClick={fetchWeatherData}>
          Search
        </button>
      </div>
      {/* Render weather data */}
      {weatherData && (
        <div className="p-4 bg-blue-100 rounded-lg shadow-inner text-center">
            {/* Display weather information */}
            {/* Example: */}
            <p className="text-2xl font-bold text-blue-800">{Math.round(weatherData.main.temp - 273.15)}°C</p>
            <p className="text-xl text-gray-700 capitalize">{weatherData.weather[0].description}</p>
        </div>    
      )}
    </div>
  </div>
  );
};

export default Weather;
