import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import { persistedRootReducer} from './root-reducer';

const middlewares = [thunk];

if(process.env.NODE_ENV === 'development'){
    middlewares.push(logger)
}

const store = createStore(persistedRootReducer, applyMiddleware(...middlewares));
const persistor = persistStore(store);

export { store, persistor };