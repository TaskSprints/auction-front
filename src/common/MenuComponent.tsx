import React, { useState } from "react";
import { FaBars } from "react-icons/fa"; // FontAwesome 아이콘 사용

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

  const menus = [
    { title: "패션의류", submenu: ["남성 의류", "여성 의류", "신발"] },
    { title: "뷰티", submenu: ["스킨케어", "메이크업", "헤어"] },
    { title: "가구&침구", submenu: ["침대", "소파", "식탁"] },
    { title: "가전", submenu: ["TV", "냉장고", "세탁기"] },
    { title: "디지털", submenu: ["스마트폰", "태블릿", "노트북"] },
    { title: "일반상품", submenu: ["문구", "가전 악세서리"] },
    { title: "커뮤니티", submenu: ["게시판", "Q&A"] },
    { title: "마이페이지", submenu: ["내 정보", "주문 내역"] },
  ];

  return (
    <div className="relative">
      <div className="flex space-x-4 bg-gradient-to-r from-red-600 to-red-400 p-3 items-center justify-center shadow-lg rounded-lg">
        <button
          className="text-white text-2xl hover:bg-red-700 focus:outline-none p-2 rounded transition-transform transform hover:scale-110"
          onClick={toggleMenu}
        >
          <FaBars />
        </button>
        {menus.map((menu) => (
          <div
            key={menu.title}
            className={`relative group ${isHoverDisabled ? "pointer-events-none" : ""}`}
            onMouseEnter={() => handleMouseEnter(menu.title)}
            onMouseLeave={handleMouseLeave}
          >
            <button className="text-white text-sm px-3 py-2 rounded hover:bg-red-700 focus:outline-none transition duration-300">
              {menu.title}
            </button>
            {activeMenu === menu.title && !isHoverDisabled && (
              <ul className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg z-10 transition-opacity duration-200 opacity-100">
                {menu.submenu.map((subitem) => (
                  <li key={subitem}>
                    <a
                      href="#"
                      className="text-gray-700 hover:bg-red-100 block px-4 py-2 text-sm transition duration-200 rounded"
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

      {isOpen && (
        <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 bg-white shadow-lg rounded-lg z-10 w-3/4 max-w-md transition-opacity duration-300">
          <ul className="grid grid-cols-3 gap-4 p-4 justify-items-center">
            {menus.map((menu) => (
              <li key={menu.title} className="relative text-center">
                <div className="text-red-600 font-bold text-lg mb-2 border-b-2 border-red-600 pb-1">
                  {menu.title}
                </div>
                <ul className="pl-0">
                  {menu.submenu.map((subitem) => (
                    <li key={subitem}>
                      <a
                        href="#"
                        className="text-gray-700 hover:bg-red-100 block px-3 py-2 text-sm rounded transition duration-200"
                      >
                        {subitem}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MenuComponent;
