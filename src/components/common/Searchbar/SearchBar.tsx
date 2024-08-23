import React from "react";

const SearchBar: React.FC = () => {
  return (
    <div className="w-full bg-white p-9">
      <div className="inner w-[1200px] mx-auto ">
        <div className="flex items-center">
          <div className="cursor-pointer hover:underline">
            <a href="">
              <img src="./info_logo.gif" />
            </a>
          </div>
          <div className="Search_form mx-auto">
            <ul className="flex text-[0.9rem] justify-start pb-1 divide-x divide-gray-300 text-gray-400">
              <li className="px-2">
                <a href="">시리즈</a>
              </li>
              <li className="px-2">
                <a href="">가구</a>
              </li>
              <li className="px-2">
                <a href="">수영복</a>
              </li>
              <li className="px-2">
                <a href="">스마트</a>
              </li>
              <li className="px-2">
                <a href="">수영복</a>
              </li>
            </ul>
            <form className="w-[20rem]">
              <input className="w-[16rem] border-2 border-red-500 p-1" />
              <button className="w-[3rem] border-2 border-red-500 bg-red-500 text-center text-white p-1">
                검색
              </button>
            </form>
          </div>
          <div className="right_banner">
            <a className="">
              <img className="scale-125" src="./SearchBanner.png" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
