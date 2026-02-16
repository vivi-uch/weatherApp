import WeatherIcon from "./WeatherIcon";

export default function HourlyForecast({ weather }) {
  const hours = weather.hourly.time.slice(0, 8);

  return (
    <div className="bg-neutral-800 rounded-2xl p-5 border border-neutral-700/50 shadow-sm">
      <h3 className="text-lg font-semibold text-white mb-4">Hourly forecast</h3>
      <div className="space-y-2 min-h-auto pr-1">
        {hours.map((time, i) => (
          <div
            key={time}
            className="flex items-center gap-4 py-2 px-3 rounded-lg bg-neutral-700 hover:bg-neutral-700/50"
          >
            <WeatherIcon code={weather.hourly.weather_code[i]} size="w-8 h-8" />
            <span className="text-white text-sm min-w-16">
              {new Date(time).toLocaleTimeString(undefined, {
                hour: "numeric",
                minute: "2-digit",
              })}
            </span>
            <span className="text-white font-medium  ml-auto">
              {Math.round(weather.hourly.temperature_2m[i])}°
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
