import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import { selectIsFetching, selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';

import WithSpinner from '../../components/with-spinner/with-spinner.component';
import CollectionPage from '../collection/collection.component';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionsPageWithSpinner = WithSpinner(CollectionPage);

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsFetching,
    isCollectionsLoaded: selectIsCollectionsLoaded
})

const mapDispatchToProps = dispatch => ({
    getShopData: () => dispatch(fetchCollectionsStartAsync())
})

// because inside in App.js ShopPage component is nested by Route, Route pass location, history, match object to nested components (comnponent={ShopPage}) as props 
class ShopPage extends Component {
    componentDidMount() {
        this.props.getShopData();
    }

    render() {
        const { match, isLoading, isCollectionsLoaded } = this.props;
        return (
            <div className='shop-page'>
                <Route
                    exact path={match.path}
                    render={(props) => <CollectionsOverviewWithSpinner isLoading={isLoading} {...props} />}
                />
                <Route
                    path={`${match.path}/:collectionId`}
                    render={(props) => <CollectionsPageWithSpinner isLoading={!isCollectionsLoaded} {...props} />}
                />
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);