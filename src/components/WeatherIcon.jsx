import sunny from "../assets/icon-sunny.webp";
import fog from "../assets/icon-fog.webp";
import storm from "../assets/icon-storm.webp";
import snow from "../assets/icon-snow.webp";
import overcast from "../assets/icon-overcast.webp";
import partly from "../assets/icon-partly-cloudy.webp";

export default function WeatherIcon({ code }) {
  let src = sunny;

  if (code >= 1 && code <= 3) src = partly;
  else if (code >= 45 && code <= 48) src = fog;
  else if (code >= 51 && code <= 82) src = storm;
  else if (code >= 71 && code <= 86) src = snow;
  else if (code > 3) src = overcast;

  return <img src={src} className="w-10 h-10" alt="weather icon" />;
}
