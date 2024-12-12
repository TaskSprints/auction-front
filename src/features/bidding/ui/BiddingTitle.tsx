import React from "react";
import { Button } from "antd";

// TODO: 백엔드 API 연동 후, Id를 통해 데이터를 가져오도록 수정해야 한다.
interface BiddingTitleProps {
  title: string;
}

export const BiddingTitle: React.FC<BiddingTitleProps> = ({ title }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg mb-6">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-xl font-bold mb-2">{title}</h1>
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
};
