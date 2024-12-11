export function BrandGrid() {
  const brands = [
    ["Rebecca", "Luella", "Armani", "PLAGET", "Marni"],
    ["Dalsline"],
  ];

  return (
    <div className="border rounded-lg overflow-hidden">
      {brands.map((row) => (
        <div key={`row-${row}`} className="flex divide-x border-b">
          {row.map((brand) => (
            <button
              type="button"
              key={`${row}-${brand}`}
              className="flex-1 p-4 text-center hover:bg-gray-50 transition-colors text-lg"
            >
              {brand}
            </button>
          ))}
          {/* Fill empty cells with empty divs to maintain grid structure */}
          {row.length < brands[0].length &&
            Array.from({ length: brands[0].length - row.length }).map(
              (list) => (
                <div key={`empty-${list}`} className="flex-1 p-4 bg-gray-50" />
              ),
            )}
        </div>
      ))}
    </div>
  );
}
