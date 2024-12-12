import React from "react";

export const ProductDetails: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="border-b pb-4">
        <h3 className="font-bold mb-4">상품 상세정보</h3>
        <table className="w-full">
          <tbody>
            <tr className="border-t">
              <td className="py-2 px-4 bg-gray-50 w-1/4">품명/중량</td>
              <td className="py-2 px-4">제품 상세페이지 참조</td>
            </tr>
            <tr className="border-t">
              <td className="py-2 px-4 bg-gray-50">제조사</td>
              <td className="py-2 px-4">푸시캣돌스 / 국산</td>
            </tr>
            <tr className="border-t">
              <td className="py-2 px-4 bg-gray-50">원산지</td>
              <td className="py-2 px-4">국내산</td>
            </tr>
            <tr className="border-t">
              <td className="py-2 px-4 bg-gray-50">보관방법</td>
              <td className="py-2 px-4">실온보관</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div>
        <h3 className="font-bold mb-4">상품 설명</h3>
        <div className="prose max-w-none">
          <p>
            과자의 명품을 맛보세요. 후회하시지 않으실 맛을 느끼실 수 있습니다.
            최고급 원료로 만든 프리미엄 쿠키입니다.
          </p>
        </div>
      </div>
    </div>
  );
};
