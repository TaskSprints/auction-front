import React from "react";

export const CustomerSatisfaction: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-5 gap-4 text-center">
        <div>
          <div className="text-2xl font-bold mb-2">4.8</div>
          <div className="text-sm text-gray-600">상품</div>
        </div>
        <div>
          <div className="text-2xl font-bold mb-2">4.7</div>
          <div className="text-sm text-gray-600">가격</div>
        </div>
        <div>
          <div className="text-2xl font-bold mb-2">4.9</div>
          <div className="text-sm text-gray-600">배송</div>
        </div>
        <div>
          <div className="text-2xl font-bold mb-2">4.8</div>
          <div className="text-sm text-gray-600">서비스</div>
        </div>
        <div>
          <div className="text-2xl font-bold mb-2">4.7</div>
          <div className="text-sm text-gray-600">기타</div>
        </div>
      </div>

      <div>
        <h3 className="font-bold mb-4">상품평</h3>
        <div className="text-center py-8 text-gray-500">
          등록된 상품평이 없습니다.
        </div>
      </div>
    </div>
  );
};
