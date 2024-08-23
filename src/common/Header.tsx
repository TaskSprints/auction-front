import React from "react";

const Header: React.FC = () => {
  return (
    <div className="w-full bg-gray-50 h-[2.5rem]  flex justify-center items-center ">
      <div className="nav w-[1200px] flex justify-between text-sm ">
        <ul className="left-nav flex space-x-4 ">
          <li className="cursor-pointer hover:underline">
            <a href="">❤️ 즐겨찾기</a>
          </li>
          <li className="cursor-pointer hover:underline">
            <a href="">🏠 시작페이지로</a>
          </li>
        </ul>
        <ul className="right-nav flex space-x-4">
          <li className="cursor-pointer hover:underline">
            <a href="">🔒 로그인</a>
          </li>
          <li className="cursor-pointer hover:underline ">
            <a href="">🛒 장바구니</a>
            <span className=" bg-red-600 w-[0.9rem] rounded-md m-1 px-1 text-white">
              0
            </span>
          </li>
          <li className="cursor-pointer hover:underline">
            <a href="">커뮤니티</a>
          </li>
          <li className="cursor-pointer hover:underline">
            <a href="">고객센터</a>
          </li>
          <li className="cursor-pointer hover:underline">
            <a href="">MOBILE</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
