// OpenWeatherMap API Configuration
const API_KEY = "YOUR_API_KEY_HERE";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

/**
 * Fetches weather data for a given city name
 * @param {string} cityName - The name of the city to fetch weather for
 * @returns {Promise<Object>} Weather data from OpenWeatherMap API
 * @throws {Error} If the API request fails or city is not found
 */
export const fetchWeatherByCity = async (cityName) => {
  try {
    // Construct the API URL with query parameters
    const url = `${BASE_URL}?q=${encodeURIComponent(cityName)}&units=metric&appid=${API_KEY}`;
    
    // Make the API request
    const response = await fetch(url);
    
    // Validate response status
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error("City not found. Please check the spelling and try again.");
      } else if (response.status === 401) {
        throw new Error("API key error. Please configure your API key.");
      } else if (response.status === 500) {
        throw new Error("Server error. Please try again later.");
      } else {
        throw new Error("Something went wrong. Please try again.");
      }
    }
    
    // Parse and return the JSON data
    const data = await response.json();
    return data;
    
  } catch (error) {
    // Handle network errors or re-throw API errors
    if (error.message.includes("City not found") || 
        error.message.includes("API key error") || 
        error.message.includes("Server error")) {
      throw error;
    }
    throw new Error("Network error. Please try again.");
  }
};
