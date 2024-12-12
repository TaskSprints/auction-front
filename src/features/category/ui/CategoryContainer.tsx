import React from "react";
import { CategoryGrid } from "./CategoryGrid";
import { BrandGrid } from "./BrandGrid";

// TODO: 백엔드 API 연동 후, Id를 통해 데이터를 가져오도록 수정해야 한다.
interface CategoryContainerProps {
  category: string;
}

export const CategoryContainer: React.FC<CategoryContainerProps> = ({
  category,
}) => {
  return (
    <div className="space-y-8">
      <div>
        <div className="flex items-center justify-between mb-3 mt-9">
          <h1 className="text-4xl font-bold">{category}</h1>
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
};
