import { IMenuCategory } from "shared/types";

export const MENU_CATEGORIES: IMenuCategory[] = [
  {
    title: "패션의류",
    subMenu: [
      "여성 의류",
      "언더웨어/잠옷",
      "빅사이즈",
      "시니어의류",
      "남성의류",
    ],
  },
  {
    title: "뷰티",
    subMenu: ["해외화장품", "헤어", "국내화장품", "바디", "향수", "미용"],
  },
  {
    title: "가구&침구",
    subMenu: [
      "커튼",
      "가구",
      "생황",
      "장식소품",
      "수납용품",
      "주방",
      "인테리어",
      "침구",
    ],
  },
  {
    title: "가전",
    subMenu: [
      "TV",
      "냉장고",
      "세탁기",
      "주방/생활",
      "이미용가전",
      "청정/제습",
      "선풍기/에어컨",
    ],
  },
  {
    title: "디지털",
    subMenu: [
      "미러리스",
      "DSLR",
      "디카",
      "MP3/PMP/사전",
      "게임기/타이틀",
      "휴대폰/스마트폰",
      "노트북",
      "데스크탑",
      "모니터",
      "프린터",
    ],
  },
  { title: "일반상품", subMenu: [] },
  { title: "커뮤니티", subMenu: ["게시판", "Q&A"] },
  { title: "마이페이지", subMenu: ["내 정보", "주문 내역"] },
];
