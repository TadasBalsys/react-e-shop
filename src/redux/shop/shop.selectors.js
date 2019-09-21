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

/**
 *  Selects collections which are stored in Object data type. Gets collections names which are the keys(property names) for collection.
 *  Maps thru keys array and returns collections by collections names
 */
export const selectCollectionsForPreview = createSelector(
    [selectShopCollections],
    collections => Object.keys(collections).map(key => collections[key])
)