import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { menus } from "./constants";
import MenuComponentToggle from "./MenuComponentToggle";

const MenuComponent: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isHoverDisabled, setIsHoverDisabled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setIsHoverDisabled(!isOpen); // Toggle state for hover
  };

  const handleMouseEnter = (menu: string) => {
    if (!isHoverDisabled) {
      setActiveMenu(menu);
    }
  };

  const handleMouseLeave = () => {
    if (!isHoverDisabled) {
      setActiveMenu(null);
    }
  };

  return (
    <div className="relative">
      <div className="flex space-x-4 bg-gradient-to-r from-red-600 to-red-400 p-3 items-center justify-center shadow-lg rounded-lg">
        <button
          className="text-white text-2xl hover:bg-red-700 focus:outline-none p-2 rounded transition-transform transform hover:scale-110"
          onClick={toggleMenu}
        >
          <FaBars />
        </button>
        {menus.map((menu, idx) => (
          <div
            key={idx}
            className={`relative group ${isHoverDisabled ? "pointer-events-none" : ""}`}
            onMouseEnter={() => handleMouseEnter(menu.title)}
            onMouseLeave={handleMouseLeave}
          >
            <button className="text-white text-sm px-3 py-2 rounded hover:bg-red-700 focus:outline-none transition duration-300">
              {menu.title}
            </button>
            {activeMenu === menu.title && !isHoverDisabled && (
              <ul className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg z-10 transition-opacity duration-200 opacity-100 flex flex-col">
                {menu.subMenu.map((subitem, idx) => (
                  <li key={idx} className="flex-shrink-0">
                    <a
                      href="#"
                      className="text-gray-700 hover:bg-red-100 block px-4 py-1 text-xs transition duration-200 rounded whitespace-nowrap"
                    >
                      {subitem}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      {isOpen && <MenuComponentToggle />}
    </div>
  );
};

export default MenuComponent;
