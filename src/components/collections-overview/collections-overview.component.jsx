import React from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../collection-preview/collection-preview.component';

import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

import './collections-overview.styles.scss';

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview,
})

const CollectionsOverview = ({ collections }) => (
    <div className='collections-overview'>
        {collections.map(({ id, ...otherProps }) => (
            <CollectionPreview key={id} {...otherProps} />
        )
        )}
    </div>
)

export default connect(mapStateToProps)(CollectionsOverview);