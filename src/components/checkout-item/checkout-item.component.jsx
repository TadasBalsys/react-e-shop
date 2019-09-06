import React from 'react';
import { connect } from 'react-redux';

import { clearItem } from '../../redux/cart/cart.actions';

import './checkout-item.styles.scss';

const mapsDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItem(item))
})

const CheckoutItem = ({ item, clearItem }) => {
    const { name, price, quantity, imageUrl } = item;
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt='product' />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>{quantity}</span>
            <span className='price'>${price}</span>
            <div className='remove-button' onClick={() => clearItem(item)}>&#10005;</div>
        </div>
    )
}

export default connect(null, mapsDispatchToProps)(CheckoutItem);