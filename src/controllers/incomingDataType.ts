export type IncomingData = {
  orderTrackData: string;
  carrierName: string;
  postCode: string;
  order_no: string;
  country_code: string;
  city: string;
  address1: string;
  first_name: string;
  second_name: string;
  email: string;
  productItems: ProductItems[];
};

export type ProductItems = {
  product_id: string;
  product_name: string;
  image: string;
  url: string;
  quantity: number;
};
