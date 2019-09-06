import React from 'react';
import { connect } from 'react-redux';

import { clearItem, addItem, removeItem } from '../../redux/cart/cart.actions';

import './checkout-item.styles.scss';

const mapsDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItem(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
})

const CheckoutItem = ({ item, clearItem, addItem, removeItem }) => {
    const { name, price, quantity, imageUrl } = item;
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt='product' />
            </div>
            <span className='name'>{name}</span>
            <div className='quantity'>
                <div className='arrow' onClick={() => removeItem(item)} >&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={() => addItem(item)} >&#10095;</div>
            </div>
            <span className='price'>${price}</span>
            <div className='remove-button' onClick={() => clearItem(item)}>&#10005;</div>
        </div>
    )
}

export default connect(null, mapsDispatchToProps)(CheckoutItem);