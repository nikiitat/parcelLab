import { Request, Response } from 'express';
import { IncomingData } from './incomingDataType';

const dataHandler = async (req: Request, res: Response) => {
  const incomingData: IncomingData = req.body;
  const parcelLabData = mapToParcelLabData(incomingData);

  res.send(parcelLabData);
};

const mapToParcelLabData = (incomingData: IncomingData) => {
  return {
    tracking_number: incomingData.orderTrackData,
    courier: incomingData.carrierName,
    zip_code: incomingData.postCode,
    deliveryNo: incomingData.order_no,
    destination_country_iso3: incomingData.country_code,
    city: incomingData.city,
    street: incomingData.address1,
    recipient: incomingData.first_name + incomingData.second_name,
    recipient_notification: incomingData.first_name + incomingData.second_name,
    email: incomingData.email,
    articles: incomingData.productItems.map((item) => {
      return {
        articleNo: item.product_id,
        articleName: item.product_name,
        articleImage: item.image,
        articleUrl: item.url,
        quantity: item.quantity,
      };
    }),
  };
};

export default dataHandler;
