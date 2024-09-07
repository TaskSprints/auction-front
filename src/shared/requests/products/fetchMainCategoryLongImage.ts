import apiInstance from "../apisInstance";
import ImainCategoryImage from "../../types/IMainCategoryImage";

export const fetchMainCategoryLongImage = async (): Promise<
  ImainCategoryImage[]
> => {
  try {
    const response = await apiInstance.get<ImainCategoryImage[]>("/api1");
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export default fetchMainCategoryLongImage;
