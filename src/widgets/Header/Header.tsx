import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Layout as AntLayout, Input, Button, Avatar, Dropdown } from "antd";
import {
  BellOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

const categoryFilters = [
  { key: "series", label: <Link to="/">시리즈</Link> },
  { key: "furniture", label: <Link to="/">가구</Link> },
  { key: "swimwear", label: <Link to="/">수영복</Link> },
  { key: "smartphone", label: <Link to="/">스마트폰</Link> },
  { key: "computer", label: <Link to="/">컴퓨터</Link> },
  { key: "appliances", label: <Link to="/">가전제품</Link> },
];

const { Header: AntHeader } = AntLayout;

export const Header: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    // setIsLoggedIn(true);
    navigate("/login");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const userMenu = [
    {
      key: "profile",
      label: "Profile",
    },
    {
      key: "orders",
      label: "My Orders",
    },
    {
      key: "settings",
      label: "Settings",
    },
    {
      key: "logout",
      label: "Logout",
      icon: <LogoutOutlined />,
      onClick: handleLogout,
    },
  ];

  return (
    <AntHeader className="flex items-center justify-between bg-white px-24 shadow-sm h-32">
      {/* Logo and Search Section */}
      <div className="flex items-center gap-8">
        <Link to="/" className="flex items-center gap-2">
          <div className="relative w-12 h-12">
            <img
              src="/SmartDeal.png"
              alt="Smart Deal"
              className="object-contain"
            />
          </div>
          <span className="text-2xl font-bold text-green-600">SMART DEAL</span>
        </Link>
        <div className="flex-1 max-w-2xl">
          {/* Category Filters */}
          <div className="flex gap-4 mb-2">
            {categoryFilters.map((filter) => (
              <button
                type="button"
                key={filter.key}
                className="text-sm text-gray-600 hover:text-green-600 bg-transparent border-none cursor-pointer"
                onClick={() => navigate(`#${filter.key}`)}
              >
                {filter.label}
              </button>
            ))}
          </div>
          <Input.Search
            placeholder="Search for smart deals..."
            className="w-full"
            size="large"
            enterButton={
              <Button
                type="primary"
                className="bg-green-500 hover:bg-green-600"
              >
                검색
              </Button>
            }
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Button type="text" icon={<HeartOutlined />} />
        {isLoggedIn ? (
          <>
            {/* <Badge count={3}> */}
            <Button type="text" icon={<BellOutlined />} />
            {/* </Badge> */}
            {/* <Badge count={2}> */}
            <Button type="text" icon={<ShoppingCartOutlined />} />
            {/* </Badge> */}
            <Dropdown menu={{ items: userMenu }} placement="bottomRight">
              <Avatar
                icon={<UserOutlined />}
                className="bg-green-600 cursor-pointer"
              />
            </Dropdown>
          </>
        ) : (
          <Button type="primary" onClick={handleLogin}>
            Login
          </Button>
        )}
      </div>
    </AntHeader>
  );
};
