import apisInstance from "../apisInstance";
import ImainCategoryProducts from "../../types/ImainCategoryProducts";

export const fetchMainCategoryPro = async (): Promise<
  ImainCategoryProducts[]
> => {
  try {
    const response = await apisInstance.get<ImainCategoryProducts[]>("/api2");

    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export default fetchMainCategoryPro;
