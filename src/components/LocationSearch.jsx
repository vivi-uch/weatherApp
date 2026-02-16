import { useState, useEffect } from "react";
import { searchCity } from "../utils/api";

export default function LocationSearch({ onSelect }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (query.length < 2) return;

    const timer = setTimeout(() => {
      searchCity(query).then(setResults);
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);

  function handleSelect(place) {
    onSelect({
      name: place.name,
      country: place.country,
      latitude: place.latitude,
      longitude: place.longitude,
    });

    setQuery("");
    setResults([]);
  }

  return (
    <div className="relative max-w-xl mx-auto">
      <input
        type="text"
        placeholder="Search city..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full p-3 rounded bg-neutral-800"
      />

      {results.length > 0 && (
        <ul className="absolute w-full bg-neutral-800 mt-1 rounded">
          {results.map((place) => (
            <li key={place.id}>
              <button
                onClick={() => handleSelect(place)}
                className="w-full text-left p-2 hover:bg-neutral-700"
              >
                {place.name}, {place.country}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}