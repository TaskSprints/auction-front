import React from "react";
import { IMainCategoryProducts } from "../../../../shared";

interface CategoryAuctionCardProps {
    data: IMainCategoryProducts;
    key: string;
}
const CategoryAuctionCard: React.FC<CategoryAuctionCardProps> = ({ data }) => {
    const formatKRW = Intl.NumberFormat("ko-kr", {
        style: "decimal",
    }).format(data.price);
    return (
        <div className=" w-[140px] md:w-[182px] h-[230px]  md:h-[290px] ml-2 hover:cursor-pointer hover:underline">
            <div className="img_section aspect-square ">
                <img
                    alt="fsdfsd"
                    src={data.image}
                    className="aspect-square w-[140px] md:w-[182px] "
                />
            </div>
            <div className="left_time">
                <span className="text-xs"> {data.leftTime} </span>
            </div>
            <div className="left_time mt-[0.2rem]">
                <span className="text-md"> {data.title}</span>
            </div>
            <div className="left_time mt-[0.2rem]">
                <span className="text-lg">{formatKRW}원</span>
            </div>
        </div>
    );
};

export default CategoryAuctionCard;
