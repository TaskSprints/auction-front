import React from "react";
import { Layout as AntLayout } from "antd";
import { HomeOutlined, GiftOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Footer: AntFooter } = AntLayout;

export const Footer: React.FC = () => {
  return (
    <AntFooter className="bg-gray-800 text-gray-400">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-4 gap-8 py-12">
          <div>
            <h3 className="text-white font-medium mb-4">About Us</h3>
            <ul className="space-y-2">
              <Link to="html_file.php?file=user_company.html">
                <li>회사소개</li>
              </Link>
              <Link to="html_file.php?file=site_guide.html">
                <li>이용가이드</li>
              </Link>
              <Link to="html_file.php?file=user_customer.html">
                <li>고객센터</li>
              </Link>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-medium mb-4">Legal & Privacy</h3>
            <ul className="space-y-2">
              <Link to="html_file.php?file=user_stipulation.html">
                <li>이용약관</li>
              </Link>
              <Link to="html_file.php?file=user_defend.html">
                <li>개인정보취급방침</li>
              </Link>
              <Link to="happy_inquiry.php">
                <li>문의하기</li>
              </Link>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-medium mb-4">
              Community & Partnerships
            </h3>
            <ul className="space-y-2">
              <Link to="html_file.php?file=user_community.html">
                <li>커뮤니티</li>
              </Link>
              <Link to="bbs_list.php?tb=board_banner">
                <li>광고문의</li>
              </Link>
              <Link to="bbs_list.php?tb=board_member">
                <li>제휴/입점안내</li>
              </Link>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-medium mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <Link to="/gift">
                <GiftOutlined className="text-2xl" />
              </Link>
              <Link to="/contact">
                <HomeOutlined className="text-2xl" />
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 py-6 text-sm">
          Smart Deal ©{new Date().getFullYear()} All rights reserved
        </div>
      </div>
    </AntFooter>
  );
};
