import { createSelector } from 'reselect';

export const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectCollectionByName = collectionUrlParam => createSelector(
    [selectShopCollections],
    collections => collections[collectionUrlParam]
) 