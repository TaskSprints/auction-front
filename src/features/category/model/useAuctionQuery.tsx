import { useQuery } from "@tanstack/react-query";
import { IAuction } from "@/shared/types/product.types";
import { httpClient } from "@/shared/api/httpClient";

const fetchAuctions = async (): Promise<IAuction[]> => {
  const { data } = await httpClient.get(`/api/v1/auction`);
  return data.data.content;
};

export const useAuctionQuery = () => {
  const {
    data: auction,
    isLoading: auctionIsLoading,
    isError: auctionIsError,
  } = useQuery({
    queryKey: ["auctions"],
    queryFn: fetchAuctions,
  });

  return { auctionIsLoading, auctionIsError, auction };
};
