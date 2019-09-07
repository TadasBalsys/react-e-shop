import React from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectShopCollections } from '../../redux/shop/shop.selectors';
import CollectionPreview from "../../components/collection-preview/collection-preview.component"

const mapStateToProps = createStructuredSelector({
    collections: selectShopCollections
})

const ShopPage = ({ collections }) => (
    <div className='shop-page'>
        {collections.map(({ id, ...otherProps }) => (
            <CollectionPreview key={id} {...otherProps} />
        ))}
    </div>
)

export default connect(mapStateToProps)(ShopPage);