import create from "zustand";
import { IMainCategoryProducts, ProductsApiClient } from "../../../shared";

const fetchProducts = new ProductsApiClient();

interface Iproducts {
  flag: boolean;
  products: IMainCategoryProducts[];
  setProducts: (data: IMainCategoryProducts[]) => void;
  loadProductsData: () => Promise<IMainCategoryProducts[]>;
}

export const productsStore = create<Iproducts>((set) => ({
  products: [],
  flag: false,
  setProducts: (data) => set(() => ({ products: data })),
  loadProductsData: async () => {
    try {
      set(() => ({ flag: true }));
      const data = await fetchProducts.fetchMainCategoryProduct();
      set({ products: data });
      set(() => ({ flag: false }));
      return data;
    } catch (error) {
      console.log(error);
      return [];
    }
  },
}));

export default productsStore;
