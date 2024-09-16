import React from "react";
import { menus } from "./constants";

const MenuToggleComponent: React.FC = () => {
    return (
        <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 bg-white shadow-lg rounded-lg z-10 w-full max-w-4xl transition-opacity duration-300">
            <ul className="grid grid-cols-3 md:grid-cols-5 gap-4 md:gap-8 p-4 md:p-8 justify-items-center">
                {menus.map(
                    (menu) =>
                        menu.subMenu.length > 0 && ( // 서브메뉴가 있는 경우만 렌더링
                            <li
                                key={menu.title}
                                className="relative text-center"
                            >
                                <div className="text-red-600 font-bold text-xs md:text-sm mb-1 md:mb-2 border-b-2 border-red-600 pb-1 transition duration-300 hover:scale-105">
                                    {menu.title}
                                </div>
                                <ul className="pl-0">
                                    {menu.subMenu.map((subitem) => (
                                        <li
                                            key={subitem}
                                            className="mb-1 md:mb-2"
                                        >
                                            <a
                                                href="#"
                                                className="text-gray-800 block px-4 md:px-8 py-1 md:py-2 text-xs md:text-sm rounded transition duration-200 hover:bg-red-100 hover:shadow-md w-full"
                                            >
                                                {subitem}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ),
                )}
            </ul>
        </div>
    );
};

export default MenuToggleComponent;
