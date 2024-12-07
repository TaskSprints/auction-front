import { Button } from "antd";

export function BiddingTitle() {
  return (
    <div className="bg-gray-100 p-4 rounded-lg mb-6">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-xl font-bold mb-2">
            [푸시캣돌스] [작수원] 과자류의 명품! 해피 덕셔리 쿠키세트!
          </h1>
          <p className="text-gray-600">
            과자의 명품을 맛보세요. 후회하시지 않으실 맛을 느끼실 수 있습니다.
          </p>
        </div>
        <div className="flex gap-4">
          <Button type="primary" className="bg-green-600">
            입찰하기
          </Button>
          <Button>입찰하기 포기</Button>
        </div>
      </div>
      <div className="flex gap-6 mt-4 text-sm text-gray-600">
        <span>상품번호: 48</span>
        <span>조회수: 42</span>
        <span>관심상품등록수: 1</span>
      </div>
    </div>
  );
}
