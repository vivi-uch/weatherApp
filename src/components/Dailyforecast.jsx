import WeatherIcon from "./WeatherIcon";

export default function DailyForecast({ weather }) {
  return (
    <div className="bg-neutral-800 p-4 rounded">
      <h3>7 Days</h3>

      {weather.daily.time.map((date, i) => (
        <div key={date} className="flex justify-between items-center mt-3">
          <p>
            {new Date(date).toLocaleDateString(undefined, { weekday: "short" })}
          </p>

          <WeatherIcon code={weather.daily.weather_code[i]} />

          <p>
            {Math.round(weather.daily.temperature_2m_max[i])}° /
            {Math.round(weather.daily.temperature_2m_min[i])}°
          </p>
        </div>
      ))}
    </div>
  );
}