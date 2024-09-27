// import React, { useState, useEffect } from "react";
// import CategoryBoardList from "./CategoryBoardList";
// // import { ProductsApiClient, ICategoryPageBoard } from "../../../../shared";

// const CategoryList = () => {
//     const [selected, setSelected] = useState(0);
//     const [isMdSize, setisMdSize] = useState(false);
//     const [datas, setDatas] = useState<ICategoryPageBoard[]>([]);

//     const ProductsApi = new ProductsApiClient();
//     useEffect(() => {
//         const fetchdata = async () => {
//             try {
//                 const data = await ProductsApi.fetchCategoryBoard();
//                 setDatas(data);
//             } catch (error) {
//                 console.log(error);
//             }
//         };
//         fetchdata();
//     }, []);

//     useEffect(() => {
//         const isMdSizehandler = () => {
//             if (window.innerWidth > 768) {
//                 setisMdSize(true);
//             } else {
//                 setisMdSize(false);
//             }
//         };

//         window.addEventListener("resize", isMdSizehandler);
//         isMdSizehandler();
//         return () => window.removeEventListener("resize", isMdSizehandler);
//     }, []);

//     const menus: string[] = [
//         "인기순",
//         "신상품순",
//         "판매가 낮은순",
//         "브랜드 별",
//         "카테고리 별",
//     ];

//     return (
//         <div className="container mx-auto">
//             <div className="inner">
//                 <div className="menu_select flex   items-center w-screen md:w-[1200px] h-[50px] scrollbar-hide">
//                     <div className="menu_list md:w-[800px] flex overflow-x-auto  whitespace-nowrap scrollbar-hide">
//                         <ul className=" my-auto flex   whitespace-nowrap scrollbar-hide md:justify-around">
//                             {menus.map((menu, index) => (
//                                 <li
//                                     key={index}
//                                     onClick={() => setSelected(index)}
//                                     className={` mr-7 ml-3 cursor-pointer pb-1  ${selected === index ? "font-bold border-black border-b-2  " : ""}`}
//                                 >
//                                     {menu}
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                 </div>
//                 <div className="board_list  border-t-2 w-screen md:w-[70rem] h-[30rem] ">
//                     {datas.map((data) => (
//                         <CategoryBoardList
//                             key={data.key}
//                             data={data}
//                             isMdSize={isMdSize}
//                         />
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CategoryList;

export {};
