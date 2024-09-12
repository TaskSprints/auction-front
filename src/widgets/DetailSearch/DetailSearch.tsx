import React, { useState } from "react";
import { Slider } from "antd";

const DetailSearch: React.FC = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [salesType, setSalesType] = useState("auction");
    const [bidMethod1, setBidMethod1] = useState("currentBidDisplay");
    const [bidMethod2, setBidMethod2] = useState("bidAmountMethod");
    const [brand, setBrand] = useState("all");
    const [region, setRegion] = useState("all");
    const [category, setCategory] = useState("all");
    const [priceRange, setPriceRange] = useState<[number, number]>([
        10000, 1000000,
    ]);
    const [activeSlider, setActiveSlider] = useState<null | number>(null);
    const [checkboxOptions, setCheckboxOptions] = useState({
        b2bMember: false,
        newProduct: false,
        usedProduct: false,
    });

    const toggleExpanded = () => {
        setIsExpanded(!isExpanded);
    };

    const handleSliderChange = (value: number[]) => {
        // setPriceRange(value as [number, number]);
        if (value.length === 2) {
            setPriceRange([value[0], value[1]]);
        } else {
            console.error(
                "Invalid slider value. Expected an array with exactly two numbers.",
            );
        }
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target;
        setCheckboxOptions((prevOptions) => ({
            ...prevOptions,
            [name]: checked,
        }));
    };

    const handleSearch = () => {
        // Handle the search logic here
        console.log({
            salesType,
            bidMethod1,
            bidMethod2,
            brand,
            region,
            category,
            priceRange,
            checkboxOptions,
        });
    };

    return (
        <div className="p-6 bg-white rounded-lg shadow-md max-w-[80%] mx-auto my-9">
            <div className="flex justify-between items-center border-b border-gray-300 pb-2 mb-4">
                <h2 className="text-lg font-semibold">
                    상세검색
                    <span role="img" aria-label="search">
                        🔍
                    </span>
                </h2>
                <button
                    onClick={toggleExpanded}
                    className="flex items-center px-3 py-1 border border-gray-400 text-gray-600 rounded hover:bg-gray-100 transition-colors"
                >
                    <span className="mr-1">{isExpanded ? "-" : "+"}</span>
                    {isExpanded ? "상세검색 닫기" : "상세검색 열기"}
                </button>
            </div>

            {isExpanded && (
                <div className="space-y-4">
                    <div className="mb-4">
                        <div className="flex items-center">
                            <label className="font-semibold mr-3 w-32">
                                판매방식
                            </label>
                            <div className="flex space-x-4 flex-1">
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="salesType"
                                        value="auction"
                                        checked={salesType === "auction"}
                                        onChange={() => setSalesType("auction")}
                                        className="mr-1"
                                    />
                                    <span
                                        className={"text-red-600 font-semibold"}
                                    >
                                        경매판매
                                    </span>
                                </label>
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="salesType"
                                        value="general"
                                        checked={salesType === "general"}
                                        onChange={() => setSalesType("general")}
                                        className="mr-1"
                                    />
                                    <span
                                        className={
                                            "text-gray-700 font-semibold"
                                        }
                                    >
                                        일반판매
                                    </span>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-left">
                        <label className="font-semibold mr-3 w-32 whitespace-nowrap">
                            낙찰방식
                        </label>
                        <div className="flex space-x-2 flex-1 max-w-[60%]">
                            <select
                                className="flex-1 p-2 border border-gray-300 rounded"
                                value={bidMethod1}
                                onChange={(e) => setBidMethod1(e.target.value)}
                            >
                                <option value="currentBidDisplay">
                                    현재입찰가표시
                                </option>
                                <option value="highestBidDisplay">
                                    최고입찰금액표시
                                </option>
                                <option value="nextHighestBidDisplay">
                                    차순위입찰금액표시
                                </option>
                            </select>
                            <select
                                className="flex-1 p-2 border border-gray-300 rounded"
                                value={bidMethod2}
                                onChange={(e) => setBidMethod2(e.target.value)}
                            >
                                <option value="bidAmountMethod">
                                    낙찰금액방식
                                </option>
                                <option value="highestBidWinning">
                                    최고입찰금액 낙찰
                                </option>
                                <option value="nextHighestBidWinning">
                                    차순위입찰금액 낙찰
                                </option>
                            </select>
                        </div>
                    </div>
                    <div className="flex items-center justify-left">
                        <label className="font-semibold mr-3 w-32 whitespace-nowrap">
                            브랜드 & 지역
                        </label>
                        <div className="flex space-x-2 flex-1 max-w-[60%]">
                            <select
                                className="w-full p-2 border border-gray-300 rounded"
                                value={brand}
                                onChange={(e) => setBrand(e.target.value)}
                            >
                                <option value="all">전체</option>
                                <option value="nike">나이키</option>
                                <option value="adidas">아디다스</option>
                                <option value="gucci">구찌</option>
                            </select>
                            <select
                                className="w-full p-2 border border-gray-300 rounded"
                                value={region}
                                onChange={(e) => setRegion(e.target.value)}
                            >
                                <option value="all">전국</option>
                                <option value="seoul">서울</option>
                                <option value="gyeonggi">경기도</option>
                                <option value="incheon">인천</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex items-center justify-left">
                        <label className="font-semibold mr-3 w-32 whitespace-nowrap">
                            카테고리 검색
                        </label>
                        <div className="flex space-x-2 flex-1 max-w-[30%]">
                            <select
                                className="w-full p-2 border border-gray-300 rounded"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                            >
                                <option value="all">전체</option>
                                <option value="digital">디지털</option>
                                <option value="fashion_clothing">
                                    패션의류
                                </option>
                                <option value="fashion_accessories">
                                    패션잡화
                                </option>
                            </select>
                        </div>
                    </div>

                    <div className="flex items-center justify-left">
                        <label className="font-semibold mr-3 w-32 whitespace-nowrap">
                            조건별
                        </label>
                        <div className="flex flex-wrap space-x-4">
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    name="b2bMember"
                                    checked={checkboxOptions.b2bMember}
                                    onChange={handleCheckboxChange}
                                    className="mr-2"
                                />
                                B2B회원
                            </label>
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    name="newProduct"
                                    checked={checkboxOptions.newProduct}
                                    onChange={handleCheckboxChange}
                                    className="mr-2"
                                />
                                새제품
                            </label>
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    name="usedProduct"
                                    checked={checkboxOptions.usedProduct}
                                    onChange={handleCheckboxChange}
                                    className="mr-2"
                                />
                                중고제품
                            </label>
                        </div>
                    </div>

                    {/* 가격별 검색 */}
                    <div className="flex items-center">
                        <label className="font-semibold mr-3 my-6 w-32 whitespace-nowrap">
                            가격별 검색
                        </label>
                        <div className="flex-1 relative">
                            <div className="flex justify-between items-center mb-2">
                                <div className="absolute -top-6 left-0">
                                    <div className="bg-orange-400 text-white px-3 py-1 rounded">
                                        {priceRange[0].toLocaleString()} 원
                                    </div>
                                </div>
                                <div className="absolute -top-6 right-0">
                                    <div className="bg-orange-400 text-white px-3 py-1 rounded">
                                        {priceRange[1].toLocaleString()} 원
                                    </div>
                                </div>
                            </div>

                            <Slider
                                range
                                min={10000}
                                max={1000000}
                                step={500}
                                value={priceRange}
                                onChange={handleSliderChange}
                            />
                        </div>
                    </div>
                    <button
                        onClick={handleSearch}
                        className="bg-gray-800 text-white py-2 px-3 rounded hover:bg-gray-700 transition-colors text-sm font-semibold"
                    >
                        검색하기
                    </button>
                </div>
            )}
        </div>
    );
};

export default DetailSearch;
