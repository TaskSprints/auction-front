import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import axios from "axios";
import { TimerStore } from "@/shared/store/timer-store";
import { IMainCategoryImage, IAuction } from "@/shared/types/products";
import { CategoryAuctionCard } from "./CategoryAuctionCard";
import { CustomArrow } from "./CustomArrow";
import { useProductQuery } from "../../hooks/useProductQuery";
import { useAuctionQuery } from "../../hooks/useAuctionQuery";

export const CategoryAuction: React.FC = () => {
  const [isMdSize, setisMdSize] = useState<boolean>(false);
  const [bgImage, setBgImage] = useState<IMainCategoryImage[]>([]);
  const { productIsLoading, products } = useProductQuery();
  const { auctionIsLoading, auction } = useAuctionQuery();
  const [formatCategory, setFormatCategory] = useState<IAuction[][] | null>();
  const [cardNumber, setCardNumber] = useState<number>(8);
  const [isLoading, setIsLoading] = useState(true);
  const { startTimer, stopTimer } = TimerStore();
  useEffect(() => {
    startTimer();

    return () => stopTimer();
  }, []);
  const loadBgImages = async () => {
    try {
      const data = await axios.get("http://localhost:8080/api1");
      setBgImage(data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!productIsLoading && !auctionIsLoading && !isLoading) {
      setFormatCategory(auction ? categoryArray(auction, cardNumber) : []);
    }
  }, [productIsLoading, auctionIsLoading, cardNumber]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setCardNumber(8);
        setisMdSize(true);
      } else {
        setCardNumber(2);
        setisMdSize(false);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    loadBgImages();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const categoryArray = <T,>(array: T[], size: number): T[][] => {
    const arr: T[][] = [];
    for (let i = 0; i < array.length; i += size) {
      arr.push(array.slice(i, i + size));
    }
    return arr;
  };

  const getProduct = (auctionId: number) => {
    const product =
      products?.find((product) => auctionId === product.auctionId) || null;
    return product;
  };

  return (
    <div className="container mx-auto mt-9">
      <span className="block md:hidden mb-4 ml-2 font-semibold text-2xl text-shadow-md whitespace-pre-line">
        디지털 전자기기
      </span>
      <div className=" category_auction w-auto max-w-[1306px] h-full flex flex-grow border-b-2 border-t-2 border-red-400 ">
        <div className="title_section  md:min-w-[180px]  ">
          <span className="hidden md:block font-semibold text-4xl text-shadow-md whitespace-pre-line">
            디지털 <br />
            <span className="">전자기기</span>
            <br />
          </span>
        </div>
        <div className="img_section w-[325px] h-[580px] hidden md:block">
          <div className="swiper_image max-w-lg mx-auto">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              loop
              pagination={{ clickable: true }}
              navigation
              autoplay={{ delay: 3000 }}
            >
              {bgImage.map((data) => (
                <SwiperSlide key={data.key}>
                  <img src={data.image} alt={data.title} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        {!productIsLoading && !auctionIsLoading ? (
          isMdSize ? (
            <div className="w-[700px] md:w-[800px]">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={10}
                slidesPerView={1}
                loop
                pagination={{ clickable: true }}
                navigation={{
                  prevEl: ".swiper-button-prev-custom",
                  nextEl: ".swiper-button-next-custom",
                }}
                autoplay={false}
                className="m-auto group"
              >
                <div className="swiper-button-prev-custom opacity-0 group-hover:opacity-100">
                  <CustomArrow direction="left" />
                </div>
                <div className="swiper-button-next-custom opacity-0 group-hover:opacity-100">
                  <CustomArrow direction="right" />
                </div>
                {formatCategory?.map((data, index) => (
                  <SwiperSlide className="" key={index}>
                    <div className="mx-auto w-[800px] h-[450px] md:h-[600px] flex flex-wrap">
                      {data.map((item) => {
                        if (item) {
                          const product = getProduct(item.id);
                          return product ? (
                            <CategoryAuctionCard
                              auction={item}
                              product={product}
                              key={item.id}
                            />
                          ) : null;
                        }
                      })}
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          ) : (
            <div className="  w-[600px]">
              <div className="  my-auto overflow-x-auto   h-[470px] flex flex-col flex-wrap ">
                {formatCategory?.map((data, index) => (
                  <div key={index}>
                    {data.map((item) => {
                      if (item) {
                        const product = getProduct(item.id);
                        return product ? (
                          <CategoryAuctionCard
                            auction={item}
                            product={product}
                            key={item.id}
                          />
                        ) : null;
                      }
                    })}
                  </div>
                ))}
              </div>
            </div>
          )
        ) : null}
      </div>
    </div>
  );
};
