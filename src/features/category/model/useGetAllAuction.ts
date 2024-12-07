import { useQuery } from "@tanstack/react-query";
import { IAuction } from "@/shared/types/product.types";
import { httpClient } from "@/shared/api/httpClient";

const fetchAuctions = async (): Promise<IAuction[]> => {
<<<<<<< HEAD
  const { data } = await httpClient.get("/api/v1/auction");
=======
  const { data } = await httpClient.get(`/api/v1/auction`);
>>>>>>> fd1367a3363c5f5e06e86893f28dc289cf53337b
  return data.data.content;
};

export const useGetAllAuction = () => {
  const {
    data: auctions,
    isLoading: auctionIsLoading,
    isError: auctionIsError,
  } = useQuery({
    queryKey: ["auctions"],
    queryFn: fetchAuctions,
  });

  return { auctionIsLoading, auctionIsError, auctions };
};
