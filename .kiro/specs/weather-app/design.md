# Weather App Design Document

## Overview

The Weather App is a single-page React application that provides real-time weather information through an intuitive, modern interface. The application follows a component-based architecture with clear separation of concerns, utilizing React hooks for state management and the Fetch API for data retrieval from OpenWeatherMap.

## Architecture

### High-Level Architecture

```
┌─────────────────────────────────────┐
│           App.jsx                   │
│  (Main Controller & Layout)         │
│                                     │
│  ┌───────────────────────────────┐ │
│  │     SearchBar.jsx             │ │
│  │  (Input + Search Button)      │ │
│  └───────────────────────────────┘ │
│                                     │
│  ┌───────────────────────────────┐ │
│  │     Loader.jsx                │ │
│  │  (Loading Animation)          │ │
│  └───────────────────────────────┘ │
│                                     │
│  ┌───────────────────────────────┐ │
│  │   WeatherCard.jsx             │ │
│  │  (Weather Display)            │ │
│  └───────────────────────────────┘ │
│                                     │
│  ┌───────────────────────────────┐ │
│  │   ErrorMessage.jsx            │ │
│  │  (Error Display)              │ │
│  └───────────────────────────────┘ │
└─────────────────────────────────────┘
```

### Data Flow

1. User enters city name in SearchBar component
2. SearchBar triggers search event, passing query to App component
3. App component updates state and initiates API call
4. During fetch, Loader component is displayed
5. On success, weather data is passed to WeatherCard component
6. On error, ErrorMessage component is displayed with error details

### Technology Stack

- **Framework**: React 18+ with functional components
- **Language**: JavaScript (ES6+)
- **HTTP Client**: Fetch API
- **Styling**: Custom CSS with CSS variables for theming
- **State Management**: React useState and useEffect hooks
- **API**: OpenWeatherMap Current Weather API v2.5

## Components and Interfaces

### App.jsx

**Purpose**: Main application controller managing state and orchestrating child components

**State Variables**:
- `weatherData` (object | null): Stores fetched weather information
- `loading` (boolean): Tracks API request status
- `error` (string | null): Stores error messages
- `city` (string): Current search query

**Key Functions**:
- `fetchWeather(cityName)`: Async function to fetch weather data from API
- `handleSearch(searchQuery)`: Handles search submission from SearchBar
- `handleGeolocation()`: Handles browser geolocation for auto-detection
- `getBackgroundClass(weatherCondition)`: Returns CSS class based on weather

**Props Passed to Children**:
- SearchBar: `onSearch`, `onGeolocation`
- WeatherCard: `weatherData`
- Loader: none
- ErrorMessage: `message`

### SearchBar.jsx

**Purpose**: User input interface for city search

**Props**:
- `onSearch` (function): Callback when search is triggered
- `onGeolocation` (function): Callback for location detection

**State Variables**:
- `inputValue` (string): Current input field value

**Key Functions**:
- `handleSubmit(e)`: Handles form submission
- `handleKeyPress(e)`: Handles Enter key press
- `handleLocationClick()`: Triggers geolocation

**UI Elements**:
- Text input field with placeholder "Enter city name..."
- Search button
- Location detection button (optional feature)

### WeatherCard.jsx

**Purpose**: Displays weather information in a formatted card

**Props**:
- `weatherData` (object): Weather information from API
  - `main.temp`: Current temperature
  - `main.feels_like`: Feels like temperature
  - `main.humidity`: Humidity percentage
  - `wind.speed`: Wind speed
  - `weather[0].description`: Weather condition text
  - `weather[0].icon`: Icon code
  - `name`: City name

**Key Functions**:
- `getIconUrl(iconCode)`: Constructs OpenWeatherMap icon URL

**UI Elements**:
- City name header
- Large temperature display
- Weather icon
- Weather description
- Feels like temperature
- Humidity display
- Wind speed display

### Loader.jsx

**Purpose**: Visual feedback during data loading

**Props**: None

**UI Elements**:
- Animated spinner using CSS animations
- Centered in viewport

### ErrorMessage.jsx

**Purpose**: Display error messages to users

**Props**:
- `message` (string): Error message to display

**UI Elements**:
- Error icon or symbol
- Error message text
- Styled with red accent for visibility

## Data Models

### Weather Data Structure (from API)

```javascript
{
  "coord": {
    "lon": -0.1257,
    "lat": 51.5085
  },
  "weather": [
    {
      "id": 800,
      "main": "Clear",
      "description": "clear sky",
      "icon": "01d"
    }
  ],
  "main": {
    "temp": 15.5,
    "feels_like": 14.2,
    "temp_min": 13.0,
    "temp_max": 17.0,
    "pressure": 1013,
    "humidity": 72
  },
  "wind": {
    "speed": 3.5,
    "deg": 230
  },
  "name": "London"
}
```

### Application State Model

```javascript
{
  weatherData: {
    cityName: string,
    temperature: number,
    feelsLike: number,
    description: string,
    humidity: number,
    windSpeed: number,
    icon: string
  } | null,
  loading: boolean,
  error: string | null,
  city: string
}
```

## Styling and Design System

### Color Palette

```css
:root {
  --color-background: #000000;
  --color-text-primary: #FFFFFF;
  --color-accent: #1E90FF;
  --color-card-bg: #FFFFFF;
  --color-error: #FF4444;
  --color-shadow: rgba(30, 144, 255, 0.2);
}
```

### Typography

- **Font Family**: 'Inter', 'Poppins', or system fallback
- **Temperature**: 64px, bold, white
- **City Name**: 32px, semi-bold, black
- **Labels**: 14px, regular, gray
- **Values**: 18px, medium, black

### Layout Specifications

- **Container**: Max-width 1200px, centered
- **Weather Card**: 
  - Width: 400px (desktop), 90% (mobile)
  - Padding: 32px
  - Border-radius: 16px
  - Box-shadow: 0 8px 32px var(--color-shadow)
- **Spacing**: 16px base unit for consistent spacing

### Responsive Breakpoints

- **Mobile**: < 768px
- **Desktop**: >= 768px

### Animation Specifications

- **Fade-in**: 0.3s ease-in-out
- **Hover transitions**: 0.2s ease
- **Background transitions**: 0.5s ease for weather-based changes

### Weather-Based Background Classes

```css
.bg-clear { background: linear-gradient(135deg, #000000 0%, #1a1a2e 100%); }
.bg-rain { background: linear-gradient(135deg, #000428 0%, #004e92 100%); }
.bg-clouds { background: linear-gradient(135deg, #0f0c29 0%, #302b63 100%); }
.bg-default { background: #000000; }
```

## API Integration

### OpenWeatherMap API Configuration

**Base URL**: `https://api.openweathermap.org/data/2.5/weather`

**Query Parameters**:
- `q`: City name (required)
- `units`: "metric" (fixed)
- `appid`: API key (required)

**Icon URL Format**: `https://openweathermap.org/img/wn/{iconCode}@2x.png`

### API Request Flow

1. Validate city input (non-empty string)
2. Construct URL with query parameters
3. Execute fetch request with try-catch
4. Check response.ok status
5. Parse JSON response
6. Extract required fields
7. Update state with weather data

### Error Scenarios

- **Invalid city**: API returns 404 → Display "City not found"
- **Network error**: Fetch fails → Display "Network error. Please try again"
- **API key invalid**: API returns 401 → Display "API configuration error"
- **Empty input**: Prevent request → Display "Please enter a city name"

## Error Handling

### Error Handling Strategy

1. **Input Validation**: Check for empty strings before API call
2. **Try-Catch Blocks**: Wrap all fetch operations
3. **Response Validation**: Check response.ok before parsing
4. **User-Friendly Messages**: Convert technical errors to readable messages
5. **State Management**: Clear previous errors on new search

### Error Message Mapping

```javascript
const errorMessages = {
  404: "City not found. Please check the spelling and try again.",
  401: "API key error. Please configure your API key.",
  500: "Server error. Please try again later.",
  default: "Something went wrong. Please try again."
};
```

## Testing Strategy

### Component Testing Focus

1. **SearchBar Component**:
   - Input value updates correctly
   - Search triggers on button click
   - Search triggers on Enter key
   - Geolocation button triggers callback

2. **WeatherCard Component**:
   - Displays all weather data fields correctly
   - Icon URL constructs properly
   - Handles missing data gracefully

3. **App Component**:
   - State updates correctly on search
   - Loading state toggles appropriately
   - Error state displays on API failure
   - Weather data populates on success

4. **Error Handling**:
   - Invalid city shows error message
   - Network failure shows error message
   - Empty input prevents API call

5. **Responsive Design**:
   - Layout adapts to mobile screens
   - Card sizing adjusts appropriately
   - Touch interactions work on mobile

### Manual Testing Checklist

- [ ] Search for valid city displays weather
- [ ] Search for invalid city shows error
- [ ] Loading spinner appears during fetch
- [ ] Enter key triggers search
- [ ] Geolocation button works (if implemented)
- [ ] Responsive layout on mobile
- [ ] Hover effects work on interactive elements
- [ ] Background changes based on weather
- [ ] Fade-in animation on data load

## Implementation Notes

### Project Structure

```
weather-app/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── App.jsx
│   │   ├── SearchBar.jsx
│   │   ├── WeatherCard.jsx
│   │   ├── Loader.jsx
│   │   └── ErrorMessage.jsx
│   ├── styles/
│   │   ├── App.css
│   │   ├── SearchBar.css
│   │   ├── WeatherCard.css
│   │   ├── Loader.css
│   │   └── ErrorMessage.css
│   ├── utils/
│   │   └── api.js
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

### Key Design Decisions

1. **Custom CSS over Tailwind**: Provides more control over the specific black-white-blue theme and allows for easier maintenance of the color system through CSS variables

2. **Separate API utility**: Isolates API logic for better testability and reusability

3. **Conditional rendering in App**: Centralizes display logic for loader, error, and weather card states

4. **Controlled components**: SearchBar uses controlled input for better state management

5. **Optional geolocation**: Implemented as bonus feature without blocking core functionality

### Performance Considerations

- Debounce search input if implementing auto-search
- Cache recent searches in localStorage (future enhancement)
- Lazy load weather icons
- Minimize re-renders with proper state management
