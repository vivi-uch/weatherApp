const GEO_URL = "https://geocoding-api.open-meteo.com/v1/search";
const WEATHER_URL = "https://api.open-meteo.com/v1/forecast";

export async function searchCity(name) {
  const res = await fetch(`${GEO_URL}?name=${name}`);
  const data = await res.json();
  return data.results || [];
}

export async function getWeather(lat, lon, units) {
  const url = `${WEATHER_URL}?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m&hourly=temperature_2m,weather_code&daily=temperature_2m_max,temperature_2m_min,weather_code&temperature_unit=${units.temperature}&wind_speed_unit=${units.wind}&precipitation_unit=${units.precipitation}&timezone=auto`;

  const res = await fetch(url);
  const data = await res.json();
  return data;
}
