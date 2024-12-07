import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { MENU_CATEGORIES } from "shared/config/menu.constants";

interface MobileMenuToggleComponentProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

export const MobileMenuToggleComponent: React.FC<
  MobileMenuToggleComponentProps
> = ({ isOpen, toggleMenu }) => {
  const [openSubMenu, setOpenSubMenu] = useState<{ [key: string]: boolean }>(
    {},
  );

  const toggleSubMenu = (menuTitle: string) => {
    setOpenSubMenu((prev) => ({
      ...prev,
      [menuTitle]: !prev[menuTitle],
    }));
  };

  return (
    <div
      className={`fixed top-0 left-0 h-full bg-white shadow-lg z-20 w-56 transition-transform duration-300 ease-in-out transform ${
        isOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
      }`}
    >
      <button
        type="button"
        onClick={toggleMenu}
        className="flex items-center text-red-600 font-bold text-lg p-4 transition duration-200 w-full text-left bg-white border-b-2 border-red-600 shadow-md hover:bg-red-100"
      >
        <FaTimes className="mr-2 text-xl" />
      </button>
      <ul className="mt-2 space-y-2 p-4">
        {MENU_CATEGORIES.map(
          (menu) =>
            menu.subMenu.length > 0 && (
              <li key={menu.title} className="relative">
                <button
                  type="button"
                  className="my-4 text-red-600 font-semibold text-sm mb-1 cursor-pointer transition duration-200 hover:text-red-700"
                  onClick={() => toggleSubMenu(menu.title)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      toggleSubMenu(menu.title);
                    }
                  }}
                >
                  {menu.title}
                </button>
                <ul
                  className={`pl-2 transition-max-height duration-300 ease-in-out ${
                    openSubMenu[menu.title] ? "max-h-40" : "max-h-0"
                  } overflow-hidden`}
                >
                  {menu.subMenu.map((subitem) => (
                    <li key={subitem} className="mb-1">
                      <a
                        href="/"
                        className="text-gray-800 block px-3 py-2 text-sm rounded transition duration-200 hover:bg-red-100 hover:shadow-md"
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
