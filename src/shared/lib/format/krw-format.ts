export const formatKRW = (bid: number) => {
  return Intl.NumberFormat("ko-kr", {
    style: "decimal",
  }).format(bid);
};
