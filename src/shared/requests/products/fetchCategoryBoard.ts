import apiInstance from "../apisInstance";
import ICategoryPageBoard from "../../types/ICategoryPageBoard";

export const fetchCategoryBoard = async (): Promise<ICategoryPageBoard[]> => {
  try {
    const response = await apiInstance.get<ICategoryPageBoard[]>("/api3");
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export default fetchCategoryBoard;
