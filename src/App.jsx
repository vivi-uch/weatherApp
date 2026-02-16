import { useState, useEffect } from "react";
import { getWeather } from "./utils/api";

import LocationSearch from "./components/LocationSearch";
import UnitsToggle from "./components/UnitsToggle";
import CurrentWeatherCard from "./components/CurrentWeatherCard";
import WeatherDetailsGrid from "./components/WeatherDetailsGrid";
import HourlyForecast from "./components/HourlyForecast";
import DailyForecast from "./components/Dailyforecast";

export default function App() {
  const [location, setLocation] = useState({
    name: "Berlin",
    country: "Germany",
    latitude: 52.52,
    longitude: 13.41,
  });

  const [weather, setWeather] = useState(null);
  const [units, setUnits] = useState({
    temperature: "celsius",
    wind: "kmh",
    precipitation: "mm",
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    getWeather(location.latitude, location.longitude, units)
      .then((data) => setWeather(data))
      .catch(() => setError("Something went wrong"))
      .finally(() => setLoading(false));
  }, [location, units]);

  return (
    <div className="min-h-screen bg-neutral-900 text-white p-4">
      <LocationSearch onSelect={setLocation} />

      <UnitsToggle unit={units} setUnit={setUnits} />

      {loading && <p className="mt-6 text-center">Loading...</p>}

      {error && <p className="mt-6 text-center">{error}</p>}

      {!loading && weather && (
        <div className="mt-6 space-y-6">
          <CurrentWeatherCard location={location} weather={weather} />
          <WeatherDetailsGrid weather={weather} />
          <HourlyForecast weather={weather} />
          <DailyForecast weather={weather} />
        </div>
      )}
    </div>
  );
}
