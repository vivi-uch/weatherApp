export default function UnitsToggle({ units, setUnits }) {
  function handleChange(type, value) {
    setUnits((prev) => ({ ...prev, [type]: value }));
  }

  return (
    <div className="flex items-center sm:gap-2">
      <span className="text-neutral-400 text-sm hidden sm:inline"> Units</span>

      <div className="flex flex-1 gap-4">
        <select
          value={units.temperature}
          onChange={(e) => handleChange("temperature", e.target.value)}
          className="bg-neutral-800 text-neutral-0 text-sm px-1 py-1 rounded-lg border border-neutral-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer"
        >
          <option value="celsius">°C</option>
          <option value="fahrenheit">°F</option>
        </select>
        <select
          value={units.wind}
          onChange={(e) => handleChange("wind", e.target.value)}
          className="bg-neutral-800 text-neutral-0 text-sm px-1 py-1 rounded-lg border border-neutral-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer"
        >
          <option value="kmh">km/h</option>
          <option value="mph">mph</option>
        </select>
        <select
          value={units.precipitation}
          onChange={(e) => handleChange("precipitation", e.target.value)}
          className="bg-neutral-800 text-neutral-0 text-sm px-1 py-1 rounded-lg border border-neutral-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer"
        >
          <option value="mm">mm</option>
          <option value="inch">inch</option>
        </select>
      </div>
    </div>
  );
}
