export function CategoryGrid() {
  const categories = [
    ["미러리스", "DSLR", "디카", "MP3/PMP/사전", "게임기/타이틀"],
    ["휴대폰/스마트폰"],
  ];

  return (
    <div className="border rounded-lg overflow-hidden">
      {categories.map((row) => (
        <div key={`row-${row}`} className="flex divide-x border-b">
          {row.map((category) => (
            <button
              type="button"
              key={`${row}-${category}`}
              className="flex-1 p-4 text-center hover:bg-gray-50 transition-colors text-lg"
            >
              {category}
            </button>
          ))}
          {/* Fill empty cells with empty divs to maintain grid structure */}
          {row.length < categories[0].length &&
            Array.from({ length: categories[0].length - row.length }).map(
              (list) => (
                <div key={`empty-${list}`} className="flex-1 p-4 bg-gray-50" />
              ),
            )}
        </div>
      ))}
    </div>
  );
}
