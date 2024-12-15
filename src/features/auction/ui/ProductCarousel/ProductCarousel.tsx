import Slider from "react-slick";
import { Button } from "antd";
import { useCountdown } from "shared/lib/hooks";
import { Link } from "react-router-dom";
import { useState } from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const products = [
  {
    id: 1,
    title: "골프대여 캐논렌즈 SDS400-650",
    image: "/SampleProducts/sample1.png",
    originalPrice: 188100,
    currentPrice: 171000,
    timeLeft: 302343, // seconds
    bidCount: 8,
  },
  {
    id: 2,
    title: "폰케이스/핸드폰케이스/아이폰/삼성",
    image: "/SampleProducts/sample2.png",
    originalPrice: 123500,
    currentPrice: 113000,
    timeLeft: 302343,
    bidCount: 4,
  },
  {
    id: 3,
    title: "재림대규빅센써 I road T4040",
    image: "/SampleBid/sample3.png",
    originalPrice: 198000,
    currentPrice: 73000,
    timeLeft: 302343,
    bidCount: 7,
  },
  {
    id: 4,
    title: "두르바움 아이구슬 아동복",
    image: "/SampleProducts/sample4.png",
    originalPrice: 190000,
    currentPrice: 170000,
    timeLeft: 302343,
    bidCount: 8,
  },
].concat([
  {
    id: 5,
    title: "골프대여 캐논렌즈 SDS400-650",
    image: "/SampleProducts/sample1.png",
    originalPrice: 188100,
    currentPrice: 171000,
    timeLeft: 302343,
    bidCount: 8,
  },
  {
    id: 6,
    title: "폰케이스/핸드폰케이스/아이폰/삼성",
    image: "/SampleProducts/sample2.png",
    originalPrice: 123500,
    currentPrice: 113000,
    timeLeft: 302343,
    bidCount: 4,
  },
  {
    id: 7,
    title: "재림대규빅센써 I road T4040",
    image: "/SampleBid/sample3.png",
    originalPrice: 198000,
    currentPrice: 73000,
    timeLeft: 302343,
    bidCount: 7,
  },
  {
    id: 8,
    title: "두르바움 아이구슬 아동복",
    image: "/SampleProducts/sample4.png",
    originalPrice: 190000,
    currentPrice: 170000,
    timeLeft: 302343,
    bidCount: 8,
  },
]);

const NextArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    type="button"
    className="absolute right-[-50px] top-1/2 transform -translate-y-1/2 z-10 bg-white/80 rounded-full p-2 shadow-md hover:bg-white"
    onClick={onClick}
  >
    <RightOutlined style={{ fontSize: "20px" }} />
  </button>
);

NextArrow.defaultProps = {
  onClick: () => {},
};

const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    type="button"
    className="absolute left-[-50px] top-1/2 transform -translate-y-1/2 z-10 bg-white/80 rounded-full p-2 shadow-md hover:bg-white"
    onClick={onClick}
  >
    <LeftOutlined style={{ fontSize: "20px" }} />
  </button>
);

PrevArrow.defaultProps = {
  onClick: () => {},
};

const CountdownDisplay = ({ timeLeft }: { timeLeft: number }) => {
  const countdown = useCountdown(timeLeft);
  const { days, hours, minutes, seconds } = countdown;

  return (
    <div className="absolute top-4 right-3 bg-black/50 text-white px-3 py-1 rounded-lg z-10">
      {`${days}:${hours}:${minutes}:${seconds}`}
    </div>
  );
};

export const ProductCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    beforeChange: (current: number, next: number) => {
      setActiveSlide(next);
    },
  };

  return (
    <div className="container max-w-[88rem] mx-auto mt-8 mb-8">
      <div className="w-full px-6">
        <Slider {...settings}>
          {products.map((product, index) => (
            <div key={product.id} className="px-3 pt-2 pb-2">
              <div
                className={`relative ${
                  activeSlide === index
                    ? "outline outline-2 outline-red-500 rounded-lg p-[2px]"
                    : ""
                }`}
              >
                <div className="absolute top-4 left-0 bg-red-500 text-white px-4 py-1 rounded-r-lg z-10">
                  <span className="text-sm font-medium">EVENT</span>
                </div>
                <CountdownDisplay timeLeft={product.timeLeft} />
                <Link to="/bidding" state={{ product }}>
                  <img
                    src={product.image}
                    alt={product.title}
                    width={400}
                    height={400}
                    className="w-full aspect-square object-cover rounded-lg"
                  />
                </Link>
              </div>
              <div className="mt-4">
                <h3 className="text-sm font-medium line-clamp-2">
                  {product.title}
                </h3>
                <div className="mt-2">
                  <span className="text-gray-500 line-through text-sm">
                    {product.originalPrice.toLocaleString()}원
                  </span>
                  <div className="text-red-500 font-bold text-xl">
                    {product.currentPrice.toLocaleString()}원
                  </div>
                </div>
              </div>
              <div className="mt-4 flex gap-2">
                <Button type="default" className="flex-1 rounded-md">
                  <Link to="/bidding" state={{ product }}>
                    정보 보기
                  </Link>
                </Button>
                <Button type="primary" danger className="flex-1 rounded-md">
                  <Link to="/bidding" state={{ product }}>
                    입찰하기
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
