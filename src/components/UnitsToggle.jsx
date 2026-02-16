import { useState } from "react";

export default function UnitsToggle({ setUnits }) {
  const [open, setOpen] = useState(false);

  function updateUnit(type, value) {
    setUnits((prev) => ({
      ...prev,
      [type]: value,
    }));
  }

  return (
    <div className="absolute top-6 right-6">
      <button
        onClick={() => setOpen(!open)}
        className="bg-neutral-800 px-4 py-2 rounded-lg"
      >
        Units
      </button>

      {open && (
        <div className="mt-2 w-64 bg-neutral-800 p-4 rounded-xl space-y-4">
          
          {/* Temperature */}
          <div>
            <p className="text-sm text-neutral-400 mb-2">Temperature</p>
            <button
              onClick={() => updateUnit("temperature", "celsius")}
              className="block w-full text-left p-2 hover:bg-neutral-700 rounded"
            >
              Celsius (°C)
            </button>
            <button
              onClick={() => updateUnit("temperature", "fahrenheit")}
              className="block w-full text-left p-2 hover:bg-neutral-700 rounded"
            >
              Fahrenheit (°F)
            </button>
          </div>

          {/* Wind */}
          <div>
            <p className="text-sm text-neutral-400 mb-2">Wind Speed</p>
            <button
              onClick={() => updateUnit("wind", "kmh")}
              className="block w-full text-left p-2 hover:bg-neutral-700 rounded"
            >
              km/h
            </button>
            <button
              onClick={() => updateUnit("wind", "mph")}
              className="block w-full text-left p-2 hover:bg-neutral-700 rounded"
            >
              mph
            </button>
          </div>

          {/* Precipitation */}
          <div>
            <p className="text-sm text-neutral-400 mb-2">Precipitation</p>
            <button
              onClick={() => updateUnit("precipitation", "mm")}
              className="block w-full text-left p-2 hover:bg-neutral-700 rounded"
            >
              Millimeters (mm)
            </button>
            <button
              onClick={() => updateUnit("precipitation", "inch")}
              className="block w-full text-left p-2 hover:bg-neutral-700 rounded"
            >
              Inches
            </button>
          </div>

        </div>
      )}
    </div>
  );
}
