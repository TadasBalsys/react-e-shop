import React, { Component } from 'react'

import CollectionPreview from "../collection-preview/collection-preview.component"
import SHOP_DATA from './shop.data'

class ShopPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            collections: SHOP_DATA
        }
        this.state.collections.map(collection => console.log(collection))
        // this.state.collections.map(collection => collection.items.map(item => console.log(item)))
   }   


   render() {
       return (
           <div className='shop-page'>
               {this.state.collections.map(({id, ...otherProps}) => (
                   <CollectionPreview key={id} {...otherProps}/>
               ) )}
           </div>
       )
   }
    
}

export default ShopPage;