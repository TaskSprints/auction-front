import { useQueries } from "@tanstack/react-query";
import { IProductResponse } from "shared/types/product.types";
import { httpClient } from "shared/api/httpClient";
import { useGetAllAuction } from "features/category/model";

const fetchProductById = async (id: number): Promise<IProductResponse> => {
  const { data } = await httpClient.get<IProductResponse>(
    `/api/v1/product?auctionId=${id}`,
  );
  return data;
};

export const useGetAllProduct = () => {
  const { auctionIsLoading, auctions } = useGetAllAuction();

  const auctionProductsQueries = useQueries({
    queries:
      !auctionIsLoading && auctions
        ? auctions.map((data) => ({
            queryKey: ["product", data.id],
            queryFn: () => fetchProductById(data.id),
          }))
        : [],
  });

  const productsIsLoading =
    auctionIsLoading || auctionProductsQueries.some((query) => query.isLoading);
  const productsIsError = auctionProductsQueries.some((query) => query.isError);
  const products = auctionProductsQueries
    .map((query) => query.data)
    .filter((product): product is IProductResponse => product !== undefined);
  return { productsIsLoading, productsIsError, products };
};
