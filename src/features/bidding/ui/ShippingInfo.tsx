import React from "react";

export const ShippingInfo: React.FC = () => {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="font-bold mb-4">배송정보</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="border rounded-lg p-4">
            <h4 className="font-bold mb-2">배송방법은 어떻게 되나요?</h4>
            <p className="text-sm text-gray-600">
              다양한 배송방법으로 국내배송부터 해외까지 배송가능합니다.
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>• 국내배송: 2-4일 소요</li>
              <li>• 해외배송: 7-15일 소요</li>
              <li>• 주문제작배송: 상품에 따라 다름</li>
            </ul>
          </div>
          <div className="border rounded-lg p-4">
            <h4 className="font-bold mb-2">이런경우 반품이 가능하세요!</h4>
            <p className="text-sm text-gray-600">
              구매후 이런 아니다싶은 상품이 있다면 반품하실 수 있습니다.
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>• 단순 변심</li>
              <li>• 배송된 상품의 사이즈 및 색상 불만족</li>
              <li>• 초기불량/하자 발견</li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <h3 className="font-bold mb-4">교환/반품 안내</h3>
        <table className="w-full border-t">
          <tbody>
            <tr className="border-b">
              <td className="py-3 px-4 bg-gray-50 w-1/4">교환/반품 비용</td>
              <td className="py-3 px-4">
                편도 3,000원 (최초 배송비 무료인 경우 6,000원 부과)
              </td>
            </tr>
            <tr className="border-b">
              <td className="py-3 px-4 bg-gray-50">교환/반품 신청 기간</td>
              <td className="py-3 px-4">상품 수령 후 7일 이내</td>
            </tr>
            <tr className="border-b">
              <td className="py-3 px-4 bg-gray-50">교환/반품 제한사항</td>
              <td className="py-3 px-4">
                포장 훼손 및 상품 가치 훼손 시 교환/반품이 불가능합니다.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
