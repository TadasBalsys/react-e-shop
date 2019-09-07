import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import './index.css';
import App from './App';
import { store, persistor } from './redux/store';
import * as serviceWorker from './serviceWorker';

// BrowserRouter component provides all methods from react-route-dom to App  
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <PersistGate loading={null} persistor={persistor} >
                <App />
            </PersistGate>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
