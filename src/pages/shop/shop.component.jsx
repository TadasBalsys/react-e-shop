import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';

import CollectionPageContainer from '../collection/collection.container';
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';

const mapDispatchToProps = dispatch => ({
    getShopData: () => dispatch(fetchCollectionsStartAsync())
})

// because inside in App.js ShopPage component is nested by Route, Route pass location, history, match object to nested components (comnponent={ShopPage}) as props 
class ShopPage extends Component {
    componentDidMount() {
        this.props.getShopData();
    }

    render() {
        const { match } = this.props;
        return (
            <div className='shop-page'>
                <Route
                    exact path={match.path}
                    render={(props) => <CollectionsOverviewContainer {...props} />}
                />
                <Route
                    path={`${match.path}/:collectionId`}
                    render={(props) => <CollectionPageContainer {...props} />}
                />
            </div>
        )
    }
}

export default connect(null, mapDispatchToProps)(ShopPage);
