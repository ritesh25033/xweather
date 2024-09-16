// import React, { useState } from 'react';
// import axios from 'axios';
// import './App.css';

// const API_KEY = 'c422583f1c7c42f8ab8170234241609'; // Replace with your API key

// function App() {
//   const [city, setCity] = useState('');
//   const [weatherData, setWeatherData] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const fetchWeatherData = async () => {
//     setLoading(true);
//     setError(null);
//     setWeatherData(null);

//     try {
//       const response = await axios.get(
//         `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`
//       );
//       setWeatherData(response.data);
//     } catch (err) {
//       setError(alert('Failed to fetch weather data'));
//     }

//     setLoading(false);
//   };

//   return (
//     <div className='App'>
  
//       <input
//         type='text'
//         value={city}
//         onChange={(e) => setCity(e.target.value)}
//         placeholder='Enter city name'
//       />
//       <button onClick={fetchWeatherData}>Search</button>

//       {loading && <p>Loading data…</p>}
//       {error && <p>{error}</p>}
//       {weatherData && (
//         <div className='weather-cards'>
//           <div className='weather-card'>
//             <h3>Temperature: {weatherData.current.temp_c}°C</h3>
//           </div>
//           <div className='weather-card'>
//             <h3>Humidity: {weatherData.current.humidity}%</h3>
//           </div>
//           <div className='weather-card'>
//             <h3>Condition: {weatherData.current.condition.text}</h3>
//           </div>
//           <div className='weather-card'>
//             <h3>Wind Speed: {weatherData.current.wind_kph} kph</h3>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;


import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const API_KEY = 'c422583f1c7c42f8ab8170234241609'; // Replace with your API key

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeatherData = async () => {
    if (!city) return; // Prevent empty city name fetch

    setLoading(true);
    setError(null);
    setWeatherData(null);

    try {
      const response = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`
      );
      setWeatherData(response.data);
    } catch (err) {
      setError(alert('Failed to fetch weather data'));
    }

    setLoading(false);
  };

  return (
    <div className='App'>
      <input
        type='text'
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder='Enter city name'
      />
      <button onClick={fetchWeatherData}>Search</button>

      {/* Loading message */}
      {loading && <p>Loading data...</p>}
      
      {/* Error message */}
      {error && <p>{error}</p>}

      {/* Weather Data */}
      {weatherData && (
        <div className='weather-cards'>
          <div className='weather-card'>
            <h3>Temperature: {weatherData.current.temp_c}°C</h3>
          </div>
          <div className='weather-card'>
            <h3>Humidity: {weatherData.current.humidity}%</h3>
          </div>
          <div className='weather-card'>
            <h3>Condition: {weatherData.current.condition.text}</h3>
          </div>
          <div className='weather-card'>
            <h3>Wind Speed: {weatherData.current.wind_kph} kph</h3>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
