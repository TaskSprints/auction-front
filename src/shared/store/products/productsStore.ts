import create from "zustand";
import ImainCategoryProducts from "../../types/ImainCategoryProducts";

interface Iproducts {
  products: ImainCategoryProducts[];
  setProducts: (data: ImainCategoryProducts[]) => void;
}

export const productsStore = create<Iproducts>((set) => ({
  products: [],
  setProducts: (data) => set(() => ({ products: data })),
}));

export default productsStore;
