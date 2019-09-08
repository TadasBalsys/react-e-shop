import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollectionByName } from '../../redux/shop/shop.selectors';
import { addItem } from '../../redux/cart/cart.actions';

import CollectionItem from '../../components/collection-item/collection-item.component';

import './collection.styles.scss';

const mapStateToProps = (state, ownProps) => createStructuredSelector({
    collection: selectCollectionByName(ownProps.match.params.collectionId)
})

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

const CollectionPage = ({ collection, addItem }) => {
    const { title, items } = collection;
    return (
        <div className='collection-page'>
            <h2 className='title'>{title}</h2>
            <div className='items'>
                {items.map((item, i) => (
                    <CollectionItem key={i} item={item} addItem={addItem} />
                ))}

            </div>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(CollectionPage);