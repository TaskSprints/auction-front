import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { menus } from "./constants";
import { MenuToggleComponent } from "./MenuToggleComponent"; // 데스크탑 메뉴
import { MobileMenuToggleComponent } from "./MobileMenuToggleComponent"; // 모바일 메뉴

export const MenuComponent: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isHoverDisabled, setIsHoverDisabled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setIsHoverDisabled(!isOpen); // Toggle state for hover
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768); // 모바일 기준: 768px
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize(); // 초기 화면 크기 체크
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
      <div className="flex justify-between md:justify-center bg-gradient-to-r from-red-600 to-red-400 p-3 items-center shadow-lg md:rounded-lg">
        <div className="flex items-center">
          <button
            type="button"
            className="text-white text-2xl hover:bg-red-700 focus:outline-none p-2 rounded transition-transform transform hover:scale-110"
            onClick={() => toggleMenu()}
          >
            <FaBars />
          </button>
          <span className="text-white text-xl ml-2 font-semibold md:hidden">
            Auction
          </span>
        </div>

        {/* 데스크탑 메뉴 버튼 */}
        {/* TODO */}
        {!isMobile && (
          <div className="hidden md:flex space-x-4">
            {menus.map((menu) => (
              <div
                key={menu.title}
                className={`relative group ${isHoverDisabled ? "pointer-events-none" : ""}`}
                onMouseEnter={() => handleMouseEnter(menu.title)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  className="text-white text-sm px-3 py-2 rounded hover:bg-red-700 focus:outline-none transition duration-300"
                >
                  {menu.title}
                </button>
                {activeMenu === menu.title && !isHoverDisabled && (
                  <ul className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg z-10 transition-opacity duration-200 opacity-100 flex flex-col">
                    {menu.subMenu.map((subitem) => (
                      <li key={subitem} className="flex-shrink-0">
                        <a
                          href="/#"
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
        )}
      </div>

      {/* 모바일 토글 메뉴: 모바일에서만 보이도록 조건부 렌더링 */}
      {isMobile && isOpen && (
        <MobileMenuToggleComponent isOpen={isOpen} toggleMenu={toggleMenu} />
      )}

      {/* 데스크탑 메뉴 토글: 모바일이 아닐 때 */}
      {!isMobile && isOpen && <MenuToggleComponent />}
    </div>
  );
};
