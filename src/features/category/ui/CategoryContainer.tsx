import { CategoryGrid } from "./CategoryGrid";
import { BrandGrid } from "./BrandGrid";

export function CategoryContainer() {
  return (
    <div className="space-y-8">
      <div>
        <div className="flex items-center justify-between mb-3 mt-9">
          <h1 className="text-4xl font-bold">디지털</h1>
          <span className="text-sm text-gray-500">
            입찰페이지를 통하여 경매로 입찰하실 수 있습니다.
          </span>
        </div>
        <CategoryGrid />
      </div>
      <div>
        <h2 className="text-lg font-bold mb-3">BRAND</h2>
        <BrandGrid />
      </div>
    </div>
  );
}
