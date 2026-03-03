import WeatherIcon from "./WeatherIcon";

export default function DailyForecast({ weather }) {
  const daily = weather.daily;
  return (
    <div>
      <h3 className="text-lg font-semibold text-white mt-16 mb-4">
        Daily forecast
      </h3>
      <div className="grid grid-cols-3 sm:grid-cols-7 gap-3 sm:gap-4 ">
        {daily.time.map((date, i) => (
          <div
            key={date}
            className=" w-26 sm:w-24 bg-neutral-800 rounded-xl p-4 border border-neutral-700/50 text-center"
          >
            <p className="text-white text-sm font-medium">
              {new Date(date).toLocaleDateString(undefined, {
                weekday: "short",
              })}
            </p>
            <div className="flex justify-center my-2">
              <WeatherIcon code={daily.weather_code[i]} size="w-8 h-8" />
            </div>
            <p className="text-white text-sm">
              <span className="font-semibold">
                {Math.round(daily.temperature_2m_max[i])}°
              </span>
              <span className="text-neutral-400 mx-1">/</span>
              <span>{Math.round(daily.temperature_2m_min[i])}°</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
