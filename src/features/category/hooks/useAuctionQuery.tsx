import { useEffect, useState } from "react";
import { IAuction } from "@/shared/types/products";
import { api } from "@/shared/api";

export const useAuctionQuery = () => {
  const [auction, setAuction] = useState<IAuction[] | null>([]);
  const [auctionIsLoading, auctionSetIsLoading] = useState<boolean>(false);
  const [auctionIsError, auctionSetIsError] = useState<boolean>(false);

  useEffect(() => {
    auctionSetIsLoading(true);
    auctionSetIsError(false);
    api
      .get(`/api/v1/auction`)
      .then((data) => {
        setAuction(data.data.data.content);
      })
      .catch(() => {
        auctionSetIsError(true);
      })
      .finally(() => {
        auctionSetIsLoading(false);
      });
  }, []);

  return { auctionIsLoading, auctionIsError, auction };
};
