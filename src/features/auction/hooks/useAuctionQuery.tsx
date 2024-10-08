import api from "@/shared/api";
import { useEffect, useState } from "react";
interface Auction {}
export const useAuctionQuery = () => {
  const [auction, setAuction] = useState<Auction | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    api
      .get(`/api/v1/auction`)
      .then((data) => {
        setAuction(data.data);
      })
      .catch(() => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return { isLoading, isError, auction };
};
export default useAuctionQuery;
