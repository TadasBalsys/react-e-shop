import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { fetchShopData } from '../../redux/shop/shop.actions';

import WithSpinner from '../../components/with-spinner/with-spinner.component';
import CollectionPage from '../collection/collection.component';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionsPageWithSpinner = WithSpinner(CollectionPage);

const mapDispatchToProps = dispatch => ({
    setShopData: collections => dispatch(fetchShopData(collections))
})

// because inside in App.js ShopPage component is nested by Route, Route pass location, history, match object to nested components (comnponent={ShopPage}) as props 
class ShopPage extends Component {
    constructor() {
        super()
        this.state = {
            isLoading: true
        }
    }
    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const { setShopData } = this.props;
        const collectionRef = firestore.collection('collections');
        this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
            const collectionsMap = await convertCollectionsSnapshotToMap(snapshot);
            setShopData(collectionsMap);
            this.setState({ isLoading: false });
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromSnapshot();
    }

    render() {
        const { match } = this.props;
        const { isLoading } = this.state;
        return (
            <div className='shop-page'>
                <Route
                    exact path={match.path}
                    render={(props) => <CollectionsOverviewWithSpinner isLoading={isLoading} {...props} />}
                />
                <Route
                    path={`${match.path}/:collectionId`}
                    render={(props) => <CollectionsPageWithSpinner isLoading={isLoading} {...props} />}
                />
            </div>
        )
    }
}

export default connect(null, mapDispatchToProps)(ShopPage);