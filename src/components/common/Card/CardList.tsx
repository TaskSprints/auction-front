import React from "react";
import Slider from "react-slick";
import Card from "./Card"; // Card 컴포넌트 경로 확인
import CustomArrow from "./CustomArrow"; // 사용자 정의 화살표 컴포넌트
// Props 로 Card 에 대한 list 정보 받아서

const CardList: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // 기본적으로 3개 표시
    slidesToScroll: 3, // 스크롤할 카드 수
    nextArrow: <CustomArrow direction="right" />, // 사용자 정의 오른쪽 화살표
    prevArrow: <CustomArrow direction="left" />, // 사용자 정의 왼쪽 화살표
    responsive: [
      {
        breakpoint: 1024, // 태블릿 이상에서 3개 표시
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768, // 768px 이상에서 2개 표시
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 640, // 모바일 화면에서 3개만 표시
        settings: {
          slidesToShow: 3, // 모바일에서도 3개 표시
          slidesToScroll: 3,
          centerMode: true, // 카드 중앙 정렬
          centerPadding: "10px", // 양쪽 패딩 추가
        },
      },
    ],
  };

  return (
    <div className="relative w-full">
      <Slider
        {...settings}
        className="bg-gray-100 container w-full flex justify-center pt-8 mx-auto"
      >
        {/* 카드를 반복 생성 */}
        {[...Array(8)].map((_, index) => (
          <div className="p-1" key={index}>
            <Card />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardList;
