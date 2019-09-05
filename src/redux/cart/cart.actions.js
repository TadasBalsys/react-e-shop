import { cartActionTypes } from './cart.types';

export const toggleCartHidden = () => ({
    type: cartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = item => { 
    console.log(item);
    return {
    type: cartActionTypes.ADD_ITEM,
    payload: item
}}