"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      const apiKey = process.env.NEXT_PUBLIC_API_KEY;
      console.log(apiKey)
      const url = `https://api.openweathermap.org/data/2.5/weather?q=ottawa&appid=${apiKey}`;
      try {
        const response = await axios.get(url);
        setWeatherData(response.data);
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeatherData();
  }, []);

  return (
    <div className="max-w-md mx-auto p-4 bg-gray-100 rounded-lg shadow-md">
      {weatherData ? (
        <div>
          <h2 className="text-2xl font-bold mb-2">Weather in {weatherData.name}</h2>
          <p className="text-lg text-blue-600">Temperature: {Math.round(weatherData.main.temp - 273.15)}°C</p>
          <p className="text-lg">Description: {weatherData.weather[0].description}</p>
          {/* Additional weather information */}
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};

export default Weather;
