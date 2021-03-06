import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
// storage let's to use window.localStorage
import storage from 'redux-persist/lib/storage';

import userReducer from '../redux/user/user.reducer';
import cartReducer from '../redux/cart/cart.reducers';
import directoryReducer from '../redux/directory/directory.reducers';
import shopReducer from '../redux/shop/shop.reducers';

// whitelist - in this case the only reducer which redux-persist will persist is cartReducer
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
});
 
export const persistedRootReducer = persistReducer(persistConfig, rootReducer)