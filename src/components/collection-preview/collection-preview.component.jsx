import React from 'react'

import CollectionItem from '../collection-item/collection-item.component'
import './collection-preview.styles.scss'

// items.filter() filters thru items array and returns value(in this case item) until i is less than 4.
const CollectionPreview = ({ title, items }) => (
    <div className='collection-preview'>
        <h2 className='title'>{title.toUpperCase()}</h2>
        <div className='preview'>
            {items
                .filter((item, i) => i < 4)
                .map((item) => (
                    <CollectionItem key={item.id} item={item} />
                ))}
        </div>
    </div>
)

export default CollectionPreview;