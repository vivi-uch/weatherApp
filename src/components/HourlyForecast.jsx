import WeatherIcon from "./WeatherIcon";

export default function HourlyForecast({ weather }) {
  const hours = weather.hourly.time.slice(0, 12);

  return (
    <div className="bg-neutral-800 p-4 rounded">
      <h3>Hourly</h3>

      <div className="flex gap-4 overflow-x-auto">
        {hours.map((time, i) => (
          <div key={time} className="text-center">
            <p>{new Date(time).getHours()}:00</p>
            <WeatherIcon code={weather.hourly.weather_code[i]} />
            <p>{Math.round(weather.hourly.temperature_2m[i])}°</p>
          </div>
        ))}
      </div>
    </div>
  );
}