import React, { useEffect, useState } from "react";
import ICategoryPageBoard from "../../../../shared/types/ICategoryPageBoard";

interface propsData {
  data: ICategoryPageBoard;
  isMdSize: boolean;
  key: string;
}

const CategoryBoardList: React.FC<propsData> = ({ data, isMdSize }) => {
  const format = (price: number) => {
    return Intl.NumberFormat("ko-kr", {
      style: "decimal",
    }).format(price);
  };

  return (
    <>
      {isMdSize ? (
        <div className="w-[55rem] h-[8rem] rounded-lg shadow-inner mt-1 flex">
          <div className="img_section w-[9rem] h-[7.5rem] ">
            <img
              src={data.image}
              alt=""
              className=" object-contain w-full h-full"
            />
          </div>
          <div className="contents_section p-3 w-[30rem] ml-[0.3rem]">
            <div className="title w-full truncate cursor-pointer">
              <span className="text-lg">{data.title}</span>
            </div>
            <div className="content w-full truncate cursor-pointer">
              <span className="text-gray-500 text-sm">{data.content}</span>
            </div>
            <div className="seller cursor-pointer">
              <span>판매자 {data.key}</span>
            </div>
            <div className="badge_section"></div>
          </div>
          <div className="w-[13rem] h-full border-2 ml-auto mr-3 flex justify-center items-center">
            <div className=" mx-auto ">
              <div className="standard_price ">
                <span className="text-gray-400 text-xs">
                  정상가 {format(data.price)}원
                </span>
              </div>
              <div>
                <span>현재가 {format(data.price)}원</span>
              </div>
              <div>
                <span className="text-xs text-red-500">입찰자 : 5명</span>
              </div>
              <div>
                <span className="bold">{data.leftTime}</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-screen h-[9rem] rounded-lg shadow-inner mt-1 flex items-center">
          <div className="img_section w-1/3 h-[7.5rem] ">
            <img
              src={data.image}
              alt=""
              className=" object-contain w-full h-full"
            />
          </div>
          <div className="contents_section p-3 w-2/3 ml-[0.3rem]">
            <div className="title w-full truncate cursor-pointer">
              <span className="text-lg">{data.title}</span>
            </div>
            <div className="content w-full truncate cursor-pointer">
              <span className="text-gray-500 text-sm">{data.content}</span>
            </div>

            <div className="badge_section"></div>

            <div className=" mx-auto ">
              <div className="standard_price ">
                <span className="text-gray-400 text-xs">
                  정상가 {format(data.price)}원
                </span>
              </div>

              <div>
                <span>현재가 {format(data.price)}원</span>
                <span className="text-xs text-red-500"> 입찰자 : 5명</span>
              </div>

              <div>
                <span className="bold text-sm">{data.leftTime}</span>
              </div>
              <div className="seller cursor-pointer">
                <span className="text-xs">판매자 {data.key}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CategoryBoardList;
