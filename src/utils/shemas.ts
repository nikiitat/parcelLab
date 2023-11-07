import Ajv, { JSONSchemaType } from 'ajv';
import { IncomingData, ProductItems } from '../controllers/incomingDataType';

const productItemsSchema: JSONSchemaType<ProductItems[]> = {
  type: 'array',
  items: {
    type: 'object',
    required: ['product_id', 'product_name', 'image', 'url', 'quantity'],
    properties: {
      product_id: { type: 'string' },
      product_name: { type: 'string' },
      image: { type: 'string' },
      url: { type: 'string' },
      quantity: { type: 'number' },
    },
  },
};

const incomingDataSchema: JSONSchemaType<IncomingData> = {
  type: 'object',
  properties: {
    orderTrackData: { type: 'string' },
    carrierName: { type: 'string' },
    postCode: { type: 'string' },
    order_no: { type: 'string' },
    country_code: { type: 'string' },
    city: { type: 'string' },
    address1: { type: 'string' },
    first_name: { type: 'string' },
    second_name: { type: 'string' },
    email: { type: 'string' },
    productItems: productItemsSchema,
  },
  required: [
    'orderTrackData',
    'carrierName',
    'postCode',
    'order_no',
    'country_code',
    'city',
    'address1',
    'first_name',
    'second_name',
    'email',
    'productItems',
  ],
  additionalProperties: false,
};

const ajv = new Ajv();
export const validateIncomingData = ajv.compile(incomingDataSchema);
