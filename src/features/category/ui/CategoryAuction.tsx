import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { httpClient } from "@/shared/api/httpClient";
import { TimerStore } from "@/entities/timer/model/timerStore";
import {
  IMainCategoryImage,
  IAuction,
  IProduct,
} from "@/shared/types/product.types";
import { useGetAllAuction, useGetAllProduct } from "features/category/model";
import { CategoryAuctionCard } from "./CategoryAuctionCard";
import { CategoryArrow } from "./CategoryArrow";

const categoryArray = <T,>(array: T[], size: number): T[][] => {
  const arr: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    arr.push(array.slice(i, i + size));
  }
  return arr;
};

export const CategoryAuction: React.FC = () => {
  const [isMdSize, setisMdSize] = useState<boolean>(false);
  const [bgImage, setBgImage] = useState<IMainCategoryImage[]>([]);
  const { productsIsLoading, products } = useGetAllProduct();
  const { auctionIsLoading, auctions } = useGetAllAuction();
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
      const data = await httpClient.get("/api1");
      setBgImage(data.data);
    } catch (error) {
      // // eslint-disable-next-line no-alert
      // alert("Failed to load background images.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!productsIsLoading && !auctionIsLoading && !isLoading) {
      setFormatCategory(auctions ? categoryArray(auctions, cardNumber) : []);
    }
  }, [productsIsLoading, auctionIsLoading, cardNumber]);

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

  const getProduct = (auctionId: number) => {
    return (
      products?.find(
        (productItem: IProduct) => auctionId === productItem.auctionId,
      ) || null
    );
  };

  const renderContent = () => {
    if (productsIsLoading || auctionIsLoading) {
      return null;
    }

    if (isMdSize) {
      return (
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
              <CategoryArrow direction="left" />
            </div>
            <div className="swiper-button-next-custom opacity-0 group-hover:opacity-100">
              <CategoryArrow direction="right" />
            </div>
            {formatCategory?.map((data) => (
              <SwiperSlide className="" key={`category-${data[0].id}`}>
                <div className="mx-auto w-[800px] h-[450px] md:h-[600px] flex flex-wrap">
                  {data.map((item) => {
                    if (!item) return null;
                    const product = getProduct(item.id);
                    if (!product) return null;
                    return (
                      <CategoryAuctionCard
                        auction={item}
                        product={product}
                        key={item.id}
                      />
                    );
                  })}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      );
    }

    return (
      <div className="w-[600px]">
        <div className="my-auto overflow-x-auto h-[470px] flex flex-col flex-wrap">
          {formatCategory?.map((data) => (
            <div key={`category-${data[0]?.id}`}>
              {data.map((item) => {
                if (!item) return null;
                const product = getProduct(item.id);
                if (!product) return null;
                return (
                  <CategoryAuctionCard
                    auction={item}
                    product={product}
                    key={item.id}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>
    );
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
        {renderContent()}
      </div>
    </div>
  );
};
