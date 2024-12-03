import React, { useState, useEffect } from "react";
import { MenuOutlined } from "@ant-design/icons";
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
    <>
      <div className="bg-[#2E7D32]">
        <div className="container mx-auto px-6">
          <div className="flex items-center">
            <button
              type="button"
              className="text-white text-2xl hover:bg-green-700 focus:outline-none p-2 rounded transition-transform transform hover:scale-110"
              onClick={() => toggleMenu()}
            >
              <MenuOutlined />
            </button>

            {/* 데스크탑 메뉴 버튼 */}
            {/* TODO */}
            {!isMobile && (
              <div className="hidden md:flex space-x-4 ml-4">
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
        </div>
      </div>

      {/* Black Info Bar */}
      <div className="bg-gray-900 text-white py-2">
        <div className="container mx-auto px-6 flex items-center justify-between text-sm">
          <div className="flex items-center gap-4">
            <span>73건 경매진행중</span>
            <span>12건 경매진행</span>
            <span>24건 경매대기</span>
          </div>
          <div>2024년 12월 02일(월)</div>
        </div>
      </div>

      {/* 모바일 토글 메뉴: 모바일에서만 보이도록 조건부 렌더링 */}
      {isMobile && isOpen && (
        <MobileMenuToggleComponent isOpen={isOpen} toggleMenu={toggleMenu} />
      )}

      {/* 데스크탑 메뉴 토글: 모바일이 아닐 때 */}
      {!isMobile && isOpen && <MenuToggleComponent />}
    </>
  );
};
