import { useState, useEffect } from "react";
import { IProduct } from "@/shared/types/products";
import { api } from "@/shared/api";

export const useProductQuery = (auctionId: number) => {
  const [productIsLoading, productSetIsLoading] = useState<boolean>(false);
  const [productIsError, productSetIsError] = useState<boolean>(false);
  const [products, setProducts] = useState<IProduct[] | null>();

  useEffect(() => {
    const fetchData = () => {
      api
        .get(`/api/v1/product?auctionId=${auctionId}`)
        .then((data) => {
          setProducts(data.data);
        })
        .catch(() => {
          productSetIsError(true);
        })
        .finally(() => {
          productSetIsLoading(false);
        });
    };

    productSetIsError(false);
    productSetIsLoading(true);
    fetchData();
  }, []);
  return { productIsLoading, productIsError, products };
};
