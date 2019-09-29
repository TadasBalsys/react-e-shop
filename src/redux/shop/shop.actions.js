import { shopActionTypes } from './shop.types';

export const fetchShopData = collections => ({
  type: shopActionTypes.FETCH_SHOP_DATA,
  payload: collections
})