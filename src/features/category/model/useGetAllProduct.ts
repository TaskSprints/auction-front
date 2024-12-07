import { useQueries } from "@tanstack/react-query";
import { IProduct } from "shared/types/product.types";
import { httpClient } from "shared/api/httpClient";
import { useGetAllAuction } from "features/category/model";

const fetchProductById = async (id: number): Promise<IProduct> => {
<<<<<<< HEAD
  const { data } = await httpClient.get<IProduct>(
    `/api/v1/product?auctionId=${id}`,
  );
=======
  const { data } = await httpClient.get<IProduct>(`/products/${id}`);
>>>>>>> fd1367a3363c5f5e06e86893f28dc289cf53337b
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
    .filter((product): product is IProduct => product !== undefined);

  return { productsIsLoading, productsIsError, products };
};
