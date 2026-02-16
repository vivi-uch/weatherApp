export default function WeatherDetailsGrid({ weather, units }) {
  const current = weather.current;
  const windUnit = units?.wind === "mph" ? " mph" : " km/h";
  const precipUnit = units?.precipitation === "inch" ? " in" : " mm";

  const items = [
    { name: "Feels Like", value: `${Math.round(current.apparent_temperature)}°` },
    { name: "Humidity", value: `${current.relative_humidity_2m}%` },
    { name: "Wind", value: `${current.wind_speed_10m}${windUnit}` },
    { name: "Precipitation", value: `${current.precipitation}${precipUnit}` },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
      {items.map(({ name, value }) => (
        <div
          key={name}
          className="bg-neutral-800 rounded-xl p-4 border border-neutral-700/50 shadow-sm"
        >
          <p className="text-neutral-400 text-sm">{name}</p>
          <p className="text-white font-semibold text-lg mt-1 tabular-nums">{value}</p>
        </div>
      ))}
    </div>
  );
}
  