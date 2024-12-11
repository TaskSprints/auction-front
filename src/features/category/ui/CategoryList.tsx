import { useState, useEffect } from "react";
import { Pagination } from "antd";
import { TimerStore } from "entities/timer/model";
import { useGetAllAuction, useGetAllProduct } from "features/category/model";

import { CategoryBoardCard } from "./CategoryBoardCard";

export const CategoryList = () => {
  const [selected, setSelected] = useState(0);
  const [isMdSize, setisMdSize] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const { productsIsLoading, products } = useGetAllProduct();
  const { auctionIsLoading, auctions } = useGetAllAuction();
  const { startTimer, stopTimer } = TimerStore();

  useEffect(() => {
    startTimer();
    return () => stopTimer();
  }, []);

  useEffect(() => {
    const isMdSizehandler = () => {
      if (window.innerWidth > 768) {
        setisMdSize(true);
      } else {
        setisMdSize(false);
      }
    };

    window.addEventListener("resize", isMdSizehandler);
    isMdSizehandler();
    return () => window.removeEventListener("resize", isMdSizehandler);
  }, []);

  const getProductByAuctionId = (auctionId: number) => {
    const product = products?.find((item) => auctionId === item.data.auctionId);
    return product;
  };

  const menus: string[] = [
    "인기순",
    "신상품순",
    "판매가 낮은순",
    "브랜드 별",
    "카테고리 별",
  ];

  // 현재 페이지의 경매 항목만 표시하기 위한 계산
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentAuctions = auctions?.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="container mx-auto w-full">
      {!productsIsLoading && !auctionIsLoading ? (
        <div className="inner">
          <div className="menu_select flex items-center scrollbar-hide mt-14">
            <div className="menu_list flex overflow-x-auto  whitespace-nowrap scrollbar-hide">
              <ul className="my-auto flex whitespace-nowrap scrollbar-hide md:justify-around">
                {menus.map((menu, subIndex) => (
                  <li key={menu} className="mr-7 ml-3 pb-1">
                    <button
                      type="button"
                      onClick={() => setSelected(subIndex)}
                      className={`cursor-pointer text-xl ${selected === subIndex ? "font-bold border-black border-b-2  " : ""}`}
                    >
                      {menu}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="board_list border-t-2 w-full">
            {currentAuctions?.map((data) => {
              const product = getProductByAuctionId(data.id);
              return product ? (
                <CategoryBoardCard
                  key={data.id}
                  auction={data}
                  product={product.data}
                  isMdSize={isMdSize}
                />
              ) : (
                <div className="w-full bg-gray-300 rounded-lg animate-pulse mb-3" />
              );
            })}
          </div>
          <div className="flex justify-center mt-4 mb-8">
            <Pagination
              current={currentPage}
              total={auctions?.length || 0}
              pageSize={itemsPerPage}
              onChange={handlePageChange}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
};
