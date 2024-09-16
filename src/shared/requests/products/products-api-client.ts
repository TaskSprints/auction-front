import ApiClient from "../api-instance-client";

import {
    ICategoryPageBoard,
    IMainCategoryImage,
    IMainCategoryProducts,
} from "../..";
export class ProductsApiClient extends ApiClient {
    constructor() {
        super("http://localhost:8080");
    }

    fetchCategoryBoard = async (): Promise<ICategoryPageBoard[]> => {
        try {
            return await this.get<ICategoryPageBoard[]>("/api3");
        } catch (error) {
            console.log(error);
            return [];
        }
    };

    fetchMainCategoryLongImage = async (): Promise<IMainCategoryImage[]> => {
        try {
            return await this.get<IMainCategoryImage[]>("/api1");
        } catch (error) {
            console.log(error);
            return [];
        }
    };

    fetchMainCategoryProduct = async (): Promise<IMainCategoryProducts[]> => {
        try {
            return await this.get<IMainCategoryProducts[]>("/api2");
        } catch (error) {
            console.log(error);
            return [];
        }
    };
}

export default ProductsApiClient;
