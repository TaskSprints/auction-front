import create from "zustand";
import { IMainCategoryProducts, ProductsApiClient } from "../../../shared";

const fetchProducts = new ProductsApiClient();

interface Iproducts {
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
      const data = await fetchProducts.fetchMainCategoryProduct();
      set({ products: data });
      return data;
    } catch (error) {
      console.log(error);
      return [];
    }
  },
}));

export default productsStore;
