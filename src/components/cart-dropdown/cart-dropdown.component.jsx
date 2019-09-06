import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';

import './cart-dropdown.styles.scss';

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
})

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const CartDropdown = ({ cartItems, toggleCartHidden, history }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {cartItems.length ?
                cartItems.map(item => (
                    <CartItem key={item.id} item={item} />
                )) : (
                    <span className='empty-message'>Your Cart is empty</span>
                )}
        </div>
        <CustomButton onClick={() => {history.push('/checkout'); toggleCartHidden()} } >Go to Checkout</CustomButton>
    </div>
)


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown));