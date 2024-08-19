import React from "react";
import { menus } from "./constants";

const MenuComponentToggle: React.FC = () => {
  return (
    <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 bg-white shadow-lg rounded-lg z-10 w-full max-w-4xl transition-opacity duration-300">
      <ul className="grid grid-cols-5 gap-8 p-8 justify-items-center">
        {menus.map(
          (menu) =>
            menu.subMenu.length > 0 && ( // 서브메뉴가 있는 경우만 렌더링
              <li key={menu.title} className="relative text-center">
                <div className="text-red-600 font-bold text-sm mb-2 border-b-2 border-red-600 pb-1 transition duration-300 hover:scale-105">
                  {menu.title}
                </div>
                <ul className="pl-0">
                  {menu.subMenu.map((subitem) => (
                    <li key={subitem} style={{ fontSize: "10px" }}>
                      <a
                        href="#"
                        className="text-gray-800 hover:bg-red-100 block px-8 py-2 rounded transition duration-200  hover:shadow-md w-full"
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

export default MenuComponentToggle;
