import WeatherIcon from "./WeatherIcon";
// import bgTodaylg from "../assets/bg-today-large.svg";
import bgTodaysm from "../assets/bg-today-small.svg";

export default function CurrentWeatherCard({ location, weather }) {
  const current = weather.current;

  return (
    <div
      className="relative rounded-2xl shadow-xl py-12 sm:py-22 px-4 sm:px-6 bg-cover"
      style={{ backgroundImage: `url(${bgTodaysm})` }}
    >
      <div className="relative flex flex-col sm:flex-row items-center sm:justify-between gap-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            {location.name}, {location.country}
          </h2>
          <p className="text-neutral-400 text-sm mt-1">Monnday, Feb 16, 2026</p>
        </div>

        <div className="flex items-center gap-4 sm:gap-6">
          <div className="flex justify-center sm:justify-end">
            <WeatherIcon
              code={current.weather_code}
              size="w-16 h-16 sm:w-20 sm:h-20"
            />
          </div>
          <p className="text-5xl sm:text-6xl font-bold text-white tabular-nums">
            {Math.round(current.temperature_2m)}°
          </p>
        </div>
      </div>
    </div>
  );
}
