import { useState, useEffect } from "react";
import { getWeather } from "./utils/api";

import LocationSearch from "./components/LocationSearch";
import UnitsToggle from "./components/UnitsToggle";
import CurrentWeatherCard from "./components/CurrentWeatherCard";
import WeatherDetailsGrid from "./components/WeatherDetailsGrid";
import HourlyForecast from "./components/HourlyForecast";
import DailyForecast from "./components/DailyForecast";
import weatherLogo from "./assets/logo.svg";
import loadingImage from "./assets/icon-loading.svg";

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
    <div className="min-h-screen bg-[#1a1e31] text-white">
      <header className="flex sm:flex-row flex-col gap-4 sm:items-center justify-between px-4 py-4 sm:px-6 lg:px-8 border-b border-neutral-800/50">
        <div className="flex items-center gap-2">
          <img src={weatherLogo} alt="weatherLogo" />
        </div>
        <UnitsToggle units={units} setUnits={setUnits} />
      </header>

      <div className="px-4 py-6 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <LocationSearch setLocation={setLocation} />

        {loading && (
          <div className="flex justify-center items-center gap-2 mt-8">
            <img
              src={loadingImage}
              alt="LoadingImage"
              className="w-15 animate-spin 2s"
            />
          </div>
        )}
        {error && <p className="mt-6 text-center text-red-400">{error}</p>}

        {!loading && weather && !error && (
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <CurrentWeatherCard location={location} weather={weather} />
              <WeatherDetailsGrid weather={weather} units={units} />
              <DailyForecast weather={weather} />
            </div>

            <div className="lg:col-span-1">
              <HourlyForecast weather={weather} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
