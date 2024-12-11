import { useState } from "react";
import { Carousel, Card, Button } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { formatTime } from "shared/lib/util/format";
import { Link } from "react-router-dom";

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
    image: "/SampleProducts/sample3.png",
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
];

export const ProductCarousel = () => {
  const [carousel, setCarousel] = useState<any>();

  const next = () => carousel?.next();
  const previous = () => carousel?.prev();

  return (
    <div className="relative group mt-8 mb-8 px-10">
      {/* Navigation Arrows */}
      <button
        type="button"
        onClick={previous}
        className="absolute left-12 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-r shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <LeftOutlined className="text-xl" />
      </button>
      <button
        type="button"
        onClick={next}
        className="absolute right-12 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-l shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <RightOutlined className="text-xl" />
      </button>

      {/* Carousel */}
      <Carousel
        ref={setCarousel}
        slidesToShow={4}
        slidesToScroll={1}
        dots={false}
        infinite
        autoplay
        responsive={[
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 1,
            },
          },
        ]}
      >
        {products.map((product) => (
          <div key={product.id} className="px-1">
            <Card
              className="relative"
              cover={
                <div className="relative aspect-[3/2]">
                  {/* START Badge */}
                  <div className="absolute top-0 left-0 z-10 bg-red-500 text-white px-1.5 py-0.5 text-xl transform -rotate-12 translate-x-2 translate-y-2">
                    EVENT
                  </div>
                  {/* Timer */}
                  <div className="absolute top-0 left-0 right-0 bg-black/50 text-white text-center py-0.5 text-xl">
                    {formatTime(product.timeLeft)}
                  </div>
                  <Link to="/bidding/{id}">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-contain"
                    />
                  </Link>
                </div>
              }
              bodyStyle={{ padding: "8px" }}
            >
              <h3 className="text-xl font-medium mb-2 truncate">
                {product.title}
              </h3>
              <div className="space-y-1">
                <div className="text-gray-500 line-through font-bold text-sm ">
                  {product.originalPrice.toLocaleString()}원
                </div>
                <div className="text-red-500 text-2xl">
                  {product.currentPrice.toLocaleString()}원
                </div>
                <div className="grid grid-cols-2 gap-1">
                  <Button size="small" href="/bidding/{id}">
                    정보 보기
                  </Button>
                  <Button
                    size="small"
                    type="primary"
                    className="bg-red-500"
                    href="/bidding/{id}"
                  >
                    입찰하기
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </Carousel>
    </div>
  );
};
