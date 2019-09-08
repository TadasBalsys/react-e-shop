import React from 'react';
import { Route } from 'react-router-dom';

import CollectionPage from '../collection/collection.component';
import CollectionOverview from '../../components/collections-overview/collections-overview.component';

// because inside in App.js ShopPage component is nested by Route, Route pass location, history, match object to nested components (comnponent={ShopPage}) as props 
const ShopPage = ({ match }) => {
    return (
        <div className='shop-page'>
            <Route exact path={match.path} component={CollectionOverview} />
            <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
        </div>
    )
}

export default ShopPage;