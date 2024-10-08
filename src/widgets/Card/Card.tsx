import React from "react";

const Card: React.FC = () => {
  const auctionTime = "남은 시간: 02:30:00"; // 경매 시간 예시

  return (
    <div className="bg-gray-400 rounded-lg shadow-lg overflow-hidden w-full h-auto max-w-xs mx-auto">
      <div className="relative img_container w-full aspect-square bg-black flex justify-center items-center">
        <img
          src="https://auction3.cgimall.co.kr/upload/happy_thumb/310x310_90/wys2/file_attach/2016/01/12/1452578069-78-0_N_7_310x310_90_2_2.jpg"
          alt="상품 이미지"
          className="w-full h-full object-cover" // 이미지가 카드에 맞게 조정
        />
        <div className="absolute top-2 left-2 h-5 sm:h-auto bg-red-600 bg-opacity-75 text-white text-[6px] sm:text-xs p-2 rounded-lg shadow">
          <span className="flex items-center">
            <img
              src="https://img.icons8.com/ios-filled/20/ffffff/clock.png"
              alt="시계 아이콘"
              className="sm:w-auto w-2 mr-1"
            />
            {auctionTime}
          </span>
        </div>
      </div>
      <div className="p-2">
        <div className="text-[6px] font-semibold truncate sm:text-xs md:whitespace-normal md:text-sm lg:text-base">
          <span>상품 이름: 자동차</span>
        </div>
        <div className="text-[6px] truncate sm:text-xs md:whitespace-normal md:text-xs lg:text-sm">
          <span>가격: 200,000 원</span>
        </div>
      </div>
      <div className="flex">
        <div className="bg-gray-500 flex-1 flex justify-center sm:h-[2rem] items-center text-white h-[1rem] hover:bg-gray-600 transition">
          <span className="text-[6px] sm:text-xs">정보 보기</span>
        </div>
        <div className="bg-red-500 flex-1 flex justify-center sm:h-[2rem] items-center text-white h-[1rem] hover:bg-red-600 transition">
          <span className="text-[6px] sm:text-xs">입찰하기</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
