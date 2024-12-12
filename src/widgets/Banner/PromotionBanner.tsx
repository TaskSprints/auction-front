// TODO: 리팩토링할 때, Carousel 컴포넌트를 커스텀 컴포넌트로 분리하여 사용하도록 변경. widgets layer는 공통 컴포넌트를 관리하는 곳이므로 features layer와 분리할 필요가 있다.
import { Carousel } from "antd";
import type { CarouselRef } from "antd/es/carousel";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const promos = [
  {
    id: 1,
    date: "2024.12.20",
    title: "HAND MADE",
    subtitle: "한땀한땀 정성을 들인 특별한 수공예품을 만나보세요 ^^",
    image: "/SampleBanner/sample1.png",
    bgColor: "bg-[#F5F5F5]",
  },
  {
    id: 2,
    date: "2024.12.21",
    title: "SPECIAL SALE",
    subtitle: "연말 특별한 가격으로 만나보세요",
    image: "/SampleBanner/sample2.png",
    bgColor: "bg-[#E8E8E8]",
  },
];

export function PromotionBanner() {
  const carouselRef = useRef<CarouselRef>(null);
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  return (
    <div className="relative group">
      <Carousel
        autoplay
        dots={false}
        effect="fade"
        ref={carouselRef}
        beforeChange={(from, to) => setCurrentSlide(to)}
      >
        {promos.map((promo) => (
          <div key={promo.id}>
            <Link to="/category" state="남성의류">
              <div
                className="relative h-[200px] overflow-hidden"
                style={{
                  backgroundImage: `url(${promo.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-black/30" />
                {/* 텍스트 가독성을 위한 어두운 오버레이 */}
                <div className="container mx-auto px-4 h-full relative">
                  <div className="flex items-center h-full">
                    <div className="space-y-4 max-w-lg z-10">
                      <div className="text-white">{promo.date}</div>
                      <h2 className="text-4xl font-bold text-white">
                        {promo.title}
                      </h2>
                      <p className="text-white text-lg">{promo.subtitle}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </Carousel>

      {/* Custom Navigation Arrows */}
      <button
        type="button"
        className="absolute left-16 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity z-20"
        onClick={() => {
          const prevSlide =
            currentSlide === 0 ? promos.length - 1 : currentSlide - 1;
          carouselRef.current?.goTo(prevSlide);
        }}
      >
        <LeftOutlined className="text-white text-4xl" />
      </button>
      <button
        type="button"
        className="absolute right-16 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity z-20"
        onClick={() => {
          const nextSlide =
            currentSlide === promos.length - 1 ? 0 : currentSlide + 1;
          carouselRef.current?.goTo(nextSlide);
        }}
      >
        <RightOutlined className="text-white text-4xl" />
      </button>
    </div>
  );
}
