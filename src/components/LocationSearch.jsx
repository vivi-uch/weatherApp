import { useState, useEffect } from "react";
import { searchCity } from "../utils/api";
import searhLogo from "../assets/icon-search.svg";

export default function LocationSearch({ setLocation }) {
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
    setLocation({
      name: place.name,
      country: place.country,
      latitude: place.latitude,
      longitude: place.longitude,
    });

    setQuery("");
    setResults([]);
  }

  function handleSearch(e) {
    e.preventDefault();
    if (results.length > 0) handleSelect(results[0]);
  }

  return (
    <div className="max-w-2xl mx-auto mt-8 relative">
      <h1 className="text-2xl sm:text-3xl font-bold text-white text-center mb-6">
        How&apos;s the sky looking today?
      </h1>

      <form
        onSubmit={handleSearch}
        className="flex rounded-xl flex-col sm:flex-row  gap-4 sm:gap-8"
      >
        <div className="flex items-center flex-1 pl-4 text-neutral-400 border border-neutral-700 rounded-2xl">
          <span className="text-lg">
            <img src={searhLogo} alt="searchLogo" />
          </span>
          <input
            type="text"
            placeholder="Search for a place..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className=" bg-transparent px-3 py-3.5 text-white placeholder-neutral-500 focus:outline-none"
          />
        </div>

        <div className="inline-block">
          <button
            type="submit"
            className="px-5 sm:px-6 py-3.5 w-full text-center bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-2xl"
          >
            Search
          </button>
        </div>
      </form>

      {results.length > 0 && (
        <ul className="absolute z-10 mt-1 w-full left-0 right-0 bg-neutral-800 rounded-xl border border-neutral-700 shadow-xl overflow-hidden">
          {results.map((place) => (
            <li key={place.id}>
              <button
                type="button"
                onClick={() => handleSelect(place)}
                className="w-full text-left px-4 py-3 text-white hover:bg-neutral-700 transition-colors"
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
