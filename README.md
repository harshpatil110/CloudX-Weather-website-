# Weather App

A modern, responsive weather application built with React that provides real-time weather information for any city worldwide. Features a sleek black-white-blue themed interface with smooth animations and an intuitive user experience.

## Features

- **City Search**: Search for current weather conditions by city name
- **Real-time Data**: Get up-to-date weather information from OpenWeatherMap API
- **Comprehensive Weather Details**: View temperature, feels-like temperature, humidity, wind speed, and weather conditions
- **Weather Icons**: Visual weather condition indicators from OpenWeatherMap
- **Loading States**: Smooth loading animations during data fetching
- **Error Handling**: Clear, user-friendly error messages for invalid inputs or network issues
- **Responsive Design**: Optimized for both mobile and desktop devices
- **Dynamic Backgrounds**: Background changes based on current weather conditions
- **Modern UI**: Clean interface with smooth transitions and hover effects
- **Geolocation Support**: Optional auto-detection of user location (if implemented)

## Technologies Used

- **React 18+**: Modern React with functional components and hooks
- **JavaScript (ES6+)**: Latest JavaScript features
- **OpenWeatherMap API**: Real-time weather data provider
- **Fetch API**: Native browser API for HTTP requests
- **CSS3**: Custom styling with CSS variables and animations
- **React Scripts**: Build tooling and development server

## Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (version 14 or higher)
- **npm** (comes with Node.js)

## Installation

1. **Clone the repository** (or download the source code):
   ```bash
   git clone <repository-url>
   cd weather-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

## Configuration

### Setting up your OpenWeatherMap API Key

1. **Get an API key**:
   - Visit [OpenWeatherMap](https://openweathermap.org/api)
   - Sign up for a free account
   - Navigate to your API keys section
   - Copy your API key

2. **Add the API key to the application**:
   - Open the file `src/utils/api.js`
   - Find the line with `const API_KEY = "YOUR_API_KEY_HERE";`
   - Replace `"YOUR_API_KEY_HERE"` with your actual API key:
     ```javascript
     const API_KEY = "your_actual_api_key_here";
     ```
   - Save the file

**Important**: Never commit your API key to version control. Consider using environment variables for production deployments.

## Running the Application

1. **Start the development server**:
   ```bash
   npm start
   ```

2. **Open your browser**:
   - The application will automatically open at `http://localhost:3000`
   - If it doesn't open automatically, navigate to `http://localhost:3000` manually

3. **Use the application**:
   - Enter a city name in the search bar
   - Press Enter or click the search button
   - View the current weather information

## Building for Production

To create an optimized production build:

```bash
npm run build
```

The build files will be generated in the `build/` directory, ready for deployment.

## Project Structure

```
weather-app/
├── public/
│   └── index.html          # HTML template
├── src/
│   ├── components/
│   │   ├── App.jsx         # Main application component
│   │   ├── SearchBar.jsx   # Search input component
│   │   ├── WeatherCard.jsx # Weather display component
│   │   ├── Loader.jsx      # Loading animation component
│   │   └── ErrorMessage.jsx # Error display component
│   ├── styles/
│   │   ├── App.css         # Main app styles
│   │   ├── SearchBar.css   # Search bar styles
│   │   ├── WeatherCard.css # Weather card styles
│   │   ├── Loader.css      # Loader styles
│   │   └── ErrorMessage.css # Error message styles
│   ├── utils/
│   │   └── api.js          # API configuration and fetch functions
│   ├── index.js            # Application entry point
│   └── index.css           # Global styles and CSS variables
├── package.json            # Project dependencies and scripts
└── README.md              # This file
```

## Usage Tips

- **Valid City Names**: Use standard city names (e.g., "London", "New York", "Tokyo")
- **Error Messages**: If you see an error, check your spelling or try a different city name
- **API Limits**: Free OpenWeatherMap accounts have rate limits (60 calls/minute)
- **Metric Units**: All measurements are displayed in metric units (Celsius, m/s)

## Troubleshooting

### "City not found" error
- Check the spelling of the city name
- Try using the English name of the city
- Ensure you have an active internet connection

### API key errors
- Verify your API key is correctly added to `src/utils/api.js`
- Ensure your API key is active (new keys may take a few minutes to activate)
- Check that you haven't exceeded your API rate limits

### Application won't start
- Ensure all dependencies are installed: `npm install`
- Check that you're using Node.js version 14 or higher
- Try deleting `node_modules` and `package-lock.json`, then run `npm install` again

## License

MIT

## Acknowledgments

- Weather data provided by [OpenWeatherMap](https://openweathermap.org/)
- Built with [React](https://reactjs.org/)
