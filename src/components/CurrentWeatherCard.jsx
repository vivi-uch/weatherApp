import WeatherIcon from "./WeatherIcon";

export default function CurrentWeatherCard({ location, weather }) {
  const current = weather.current;

  return (
    <div className="bg-neutral-800 p-6 rounded text-center">
      <h2>
        {location.name}, {location.country}
      </h2>

      <div className="flex justify-center mt-3">
        <WeatherIcon code={current.weather_code} size="w-20 h-20" />
      </div>

      <p className="text-4xl mt-3">{Math.round(current.temperature_2m)}°</p>
    </div>
  );
}