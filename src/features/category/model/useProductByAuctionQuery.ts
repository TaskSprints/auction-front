import { useQuery } from "@tanstack/react-query";
import { IProduct } from "@/shared/types/product.types";
import { httpClient } from "@/shared/api/httpClient";

export const useProductByAuctionQuery = (auctionId: string) => {
  const {
    data: product, // 성공적으로 가져온 데이터
    isLoading: productIsLoading, // 로딩 상태
    isError: productIsError, // 에러 상태
  } = useQuery<IProduct>({
    queryKey: ["product", auctionId], // 캐시 키로 사용됨
    queryFn: async () => {
      // 데이터 fetch 함수
      const { data } = await httpClient.get(`/api/v1/product/${auctionId}`);
      return data;
    },
  });

  return { productIsLoading, productIsError, product };
};
