import { api, IAuction } from "@/shared";
import { useEffect, useState } from "react";
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
        setAuction(data.data);
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
export default useAuctionQuery;
