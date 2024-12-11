export interface IMainCategoryImage {
  title: string;
  image: string;
  price: number;
  key: string;
}

export interface ICategoryPageBoard {
  title: string;
  image: string;
  price: number;
  content: string;
  key: string;
  leftTime: string;
}

export interface IMainCategoryProducts {
  title: string;
  image: string;
  price: number;
  key: string;
  leftTime: string;
}

export interface IProduct {
  productId: number;
  name: string;
  description: string;
  category: string;
  ownerId: number;
  ownerNickName: string;
  auctionId: number;
  productImageList: string[];
}

export interface IProductResponse {
  data: IProduct;
}

export interface IAuction {
  id: number;
  startTime: string;
  endTime: string;
  category: string;
  status: string;
  startingBid: number;
  sellerId: number;
  sellerNickName: string;
}
