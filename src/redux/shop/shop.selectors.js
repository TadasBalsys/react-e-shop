import { createSelector } from 'reselect';

export const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectCollectionByName = collectionUrlParam => createSelector(
    [selectShopCollections],
    collections => collections ? collections[collectionUrlParam] : null
)

/**
 *  Selects collections which are stored in Object data type. Gets collections names which are the keys(property names) for collection.
 *  Maps thru keys array and returns collections by collections names
 */
export const selectCollectionsForPreview = createSelector(
    [selectShopCollections],
    collections => collections ? Object.keys(collections).map(key => collections[key]) : []
)

export const selectIsFetching = createSelector(
    [selectShop],
    shop => shop.isFetching
)

export const selectIsCollectionsLoaded = createSelector(
    [selectShop],
    // !! changes null to false
    shop => !!shop.collections
)