import React from "react";

const Header: React.FC = () => {
    return (
        <div className="w-full bg-gray-50 h-[2.5rem] pt-3 flex justify-center items-center">
            <div className="nav w-full max-w-[1200px] px-4 flex justify-between text-xs sm:text-sm">
                <ul className="left-nav flex space-x-2 sm:space-x-4 items-center">
                    <li className="cursor-pointer hover:underline">
                        <a href="">❤️ 즐겨찾기</a>
                    </li>
                    <li className="cursor-pointer hover:underline">
                        <a href="">🏠 시작페이지로</a>
                    </li>
                </ul>
                <ul className="right-nav flex space-x-2 sm:space-x-4 items-center">
                    <li className="cursor-pointer hover:underline">
                        <a href="/login">🔒 로그인</a>
                    </li>
                    <li className="cursor-pointer hover:underline relative">
                        <a href="">🛒 장바구니</a>
                        <span className="absolute top-[-0.5rem] right-[-0.75rem] bg-red-600 w-[1rem] h-[1rem] flex justify-center items-center rounded-full text-white text-[0.75rem]">
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
