import { CategoryGrid } from "./CategoryGrid";
import { BrandGrid } from "./BrandGrid";

export function CategoryContainer() {
  return (
    <div className="space-y-8">
      <div>
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold">디지털</h1>
          <span className="text-sm text-gray-500">
            해피옥션에서 경매로 입찰하실 수 있습니다.
          </span>
        </div>
        <CategoryGrid />
      </div>
      <div>
        <h2 className="text-lg font-bold mb-4">BRAND</h2>
        <BrandGrid />
      </div>
    </div>
  );
}
