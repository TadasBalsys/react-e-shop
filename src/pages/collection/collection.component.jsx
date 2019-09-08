import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectShopCollections } from '../../redux/shop/shop.selectors';
import { addItem } from '../../redux/cart/cart.actions';
 
import CollectionItem from '../../components/collection-item/collection-item.component';

import './collection.styles.scss';

const mapStateToProps = createStructuredSelector({
    collections: selectShopCollections
})

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})


const CollectionPage = ({ match, collections, addItem }) => {
    const selectedCollection = collections.find(collection => collection.routeName === match.params.collectionId)
    return (
        <div className='collection-page'> 
            {selectedCollection.items.map((item, i) => (
                <CollectionItem key={i} item={item} addItem={addItem}/>
            ))}
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(CollectionPage);