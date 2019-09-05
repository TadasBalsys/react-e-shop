import { createSelector} from 'reselect';

// selectCart - Input selector are selector that only returns a piece of the state.
const selectCart = state => state.cart;

// this function returns cartItems
export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);

// this function returns sum of quantity of items in cart
export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
        (accumulator, cartItem) => accumulator + cartItem.quantity,
        0
    )
);

// The flow: 
// When selectCartItemsCount() is called, first it checks for [selectedCartItems] - it invokes selectCartItems() where first thing this method does is
// checking [selectCart] and this is reference to function selectCart which is invoked at that moment. selectCart takes state 
// and returns part of the state - cart. Then "flow" goes to selectCartItems, invokes second argument - function cart => cart.cartItems,
// this function returns cartItems array and then pass it back to selectCartItemsCount function, where it pass it tu reduce() method.