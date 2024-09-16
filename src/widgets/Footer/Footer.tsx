import React from "react";
import { FaEnvelope, FaArrowUp } from "react-icons/fa";

const Footer: React.FC = () => {
    return (
        <div className="bg-zinc-800 text-gray-400 text-xs p-4 md:p-6">
            <div className="border-b border-gray-700 pb-4 md:pb-6">
                <div className="container mx-auto">
                    <div className="flex flex-wrap justify-between items-center">
                        <ul className="flex flex-wrap space-x-2 md:space-x-4 text-[10px] md:text-xs">
                            <li>
                                <a
                                    href="html_file.php?file=user_company.html"
                                    className="hover:underline"
                                >
                                    회사소개
                                </a>
                            </li>
                            <li>
                                <a
                                    href="html_file.php?file=user_stipulation.html"
                                    className="hover:underline"
                                >
                                    이용약관
                                </a>
                            </li>
                            <li>
                                <a
                                    href="html_file.php?file=user_defend.html"
                                    className="hover:underline"
                                >
                                    <strong className="text-yellow-300">
                                        개인정보취급방침
                                    </strong>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="bbs_list.php?tb=board_banner"
                                    className="hover:underline"
                                >
                                    광고문의
                                </a>
                            </li>
                            <li>
                                <a
                                    href="bbs_list.php?tb=board_member"
                                    className="hover:underline"
                                >
                                    제휴/입점안내
                                </a>
                            </li>
                            <li>
                                <a
                                    href="html_file.php?file=user_community.html"
                                    className="hover:underline"
                                >
                                    커뮤니티
                                </a>
                            </li>
                            <li>
                                <a
                                    href="html_file.php?file=user_customer.html"
                                    className="hover:underline"
                                >
                                    고객센터
                                </a>
                            </li>
                            <li className="cursor-pointer hover:underline">
                                관리자쪽지
                            </li>
                            <li>
                                <a
                                    href="html_file.php?file=site_guide.html"
                                    className="hover:underline"
                                >
                                    이용가이드
                                </a>
                            </li>
                        </ul>
                        <div className="flex space-x-1 md:space-x-2 mt-4 md:mt-0 text-[10px] md:text-xs">
                            <a
                                href="happy_inquiry.php"
                                className="flex items-center bg-zinc-700 border border-gray-600 text-gray-400 py-1 md:py-2 px-3 md:px-4 rounded-md hover:bg-gray-700 transition duration-200"
                            >
                                <FaEnvelope className="mr-1" />
                                문의하기
                            </a>
                            <a
                                href="#top"
                                className="flex items-center bg-zinc-700 border border-gray-600 text-gray-400 py-1 md:py-2 px-2 md:px-3 rounded-md hover:bg-gray-700 transition duration-200"
                            >
                                <FaArrowUp className="mr-1" /> 맨 위로
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-700 pt-4 md:pt-6">
                <div className="container mx-auto">
                    <p className="text-[10px] md:text-xs leading-5 md:leading-6">
                        상호명 : HAPPYAUCTION | 대표자 : 홍길동 | 이메일주소 :
                        gon@happcgi.com | 사업자등록번호: 000-00-00000
                        <br />
                        등록일 : 2015. 09. 7 | 통신판매업신고번호 : 대구시 제
                        000호 | 주소 : 서울특별시 중구 세종대로 776-9번지
                        태정빌딩 3층
                        <br />
                        대표전화 : 1234-1234 | FAX : 053-000-0000 |
                        <a
                            href="//www.cgimall.co.kr/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-red-400 hover:underline"
                        >
                            {" "}
                            Hosting by CGIMALL
                        </a>
                        <br />
                        Copyright 2024 해피온라인경매 Ver3.5 All rights
                        reserved.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
