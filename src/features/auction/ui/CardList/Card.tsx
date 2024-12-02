import React from "react";

export const Card: React.FC = () => {
  return (
    <div className="container relative w-[17rem] h-auto bg-gray-400 mx-auto">
      <div className="img_container w-full aspect-square bg-black flex justify-center items-center">
        <span className="text-white">여기는 이미지 입니다</span>
      </div>
      <div className="auction_info_container h-1/7">
        <div>
          <span>상품이름 자동차</span>
        </div>
        <div>
          <span>가격 200000</span>
        </div>
      </div>
      <div className="button_container flex h-[2.5rem]">
        <div className="bg-gray-500 flex flex-1 justify-center items-center text-white">
          <a href="http://localhost:3000/">정보보기</a>
        </div>
        <div className="bg-red-500 flex flex-1 justify-center items-center text-white">
          <a href="http://localhost:3000/">입찰하기</a>
        </div>
      </div>
    </div>
  );
};
