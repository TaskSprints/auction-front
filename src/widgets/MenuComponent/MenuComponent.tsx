import React, { useState, useEffect } from "react";
import { MenuOutlined, CalendarOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { menus } from "./constants";
import { MenuToggleComponent } from "./MenuToggleComponent"; // 데스크탑 메뉴
import { MobileMenuToggleComponent } from "./MobileMenuToggleComponent"; // 모바일 메뉴

const { SubMenu } = Menu;

interface MenuClickEvent {
  key: string;
}

export const MenuComponent: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [current, setCurrent] = useState<string>("");
  const [isMobile, setIsMobile] = useState<boolean>(false);
  // const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isHoverDisabled, setIsHoverDisabled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setIsHoverDisabled(!isOpen); // Toggle state for hover
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768); // 모바일 기준: 768px
  };

  const handleClick = (e: MenuClickEvent) => {
    setCurrent(e.key);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize(); // 초기 화면 크기 체크
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // const handleMouseEnter = (menu: string) => {
  //   if (!isHoverDisabled) {
  //     setActiveMenu(menu);
  //   }
  // };

  // const handleMouseLeave = () => {
  //   if (!isHoverDisabled) {
  //     setActiveMenu(null);
  //   }
  // };

  return (
    <>
      <div className="bg-[#2E7D32]">
        <div className="container mx-auto px-6">
          <div className="flex items-center">
            <button
              type="button"
              className="text-white text-2xl hover:bg-green-700 focus:outline-none p-2 rounded transition-transform transform hover:scale-100"
              onClick={() => toggleMenu()}
            >
              <MenuOutlined />
            </button>

            {/* 데스크탑 메뉴 버튼 */}
            {/* TODO */}
            {!isMobile && (
              <Menu
                onClick={handleClick}
                selectedKeys={[current]}
                mode="horizontal"
                className="hidden md:flex space-x-4 ml-4 bg-[#2E7D32]"
              >
                {menus.map((menu) => (
                  <SubMenu
                    key={menu.title}
                    title={menu.title}
                    className={isHoverDisabled ? "pointer-events-none" : ""}
                  >
                    {menu.subMenu.map((subitem) => (
                      <Menu.Item key={subitem}>
                        <a href="/category">{subitem}</a>
                      </Menu.Item>
                    ))}
                  </SubMenu>
                ))}
              </Menu>
            )}
          </div>
        </div>
      </div>

      {/* Black Info Bar */}
      <div className="bg-gray-900 text-white py-3">
        <div className="container mx-auto px-6 flex items-center justify-between text-sm">
          <div className="flex items-center gap-4">
            <span>
              <span className="text-red-500">73</span> 건 경매진행중
            </span>
            <span>
              <span className="text-yellow-500">12</span> 건 경매진행
            </span>
            <span>
              <span className="text-green-500">24</span> 건 경매대기
            </span>
          </div>

          <div className="flex items-center gap-2">
            <CalendarOutlined />
            <span>2024년 12월 02일(월)</span>
          </div>
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
