export default function WeatherDetailsGrid({ weather }) {
  const current = weather.current;

  return (
    <div className="grid grid-cols-2 gap-4 bg-neutral-800 p-4 rounded text-center">
      <div>
        <p>Humidity</p>
        <p>{current.relative_humidity_2m}%</p>
      </div>

      <div>
        <p>Wind</p>
        <p>{current.wind_speed_10m}</p>
      </div>

      <div>
        <p>Precipitation</p>
        <p>{current.precipitation}</p>
      </div>

      <div>
        <p>Feels Like</p>
        <p>{Math.round(current.apparent_temperature)}°</p>
      </div>
    </div>
  );
}