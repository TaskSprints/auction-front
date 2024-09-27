// import create from "zustand";
// import { IMainCategoryProducts, ProductsApiClient } from "../..";

// const fetchProducts = new ProductsApiClient();

// interface Iproducts {
//     products: IMainCategoryProducts[];
//     loading: boolean;
//     setProducts: (data: IMainCategoryProducts[]) => void;
//     loadProductsData: () => Promise<IMainCategoryProducts[]>;
// }

// export const productsStore = create<Iproducts>((set) => ({
//     products: [],
//     loading: false,
//     setProducts: (data) => set(() => ({ products: data })),
//     loadProductsData: async () => {
//         set(() => ({ loading: true }));
//         try {
//             const data = await fetchProducts.fetchMainCategoryProduct();
//             set({ products: data });
//             return data;
//         } catch (error) {
//             set(() => ({ loading: false }));
//             console.log(error);
//             return [];
//         }
//     },
// }));

// export default productsStore;

export {};
