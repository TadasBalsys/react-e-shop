/**
 *  Utility function: 
 *  Checks if there is any existing item added in the Cart before( .find() method).
 *  If it's true,
 *  return new array; finds in cart array the item which quantity need to increase and increase it
 *  If fave not founded any existing item returns new array, where spreads old cart items and adds new cart item(cartItemToAdd) with new property - quantity : 1
 * 
 */
export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(item => item.id === cartItemToAdd.id);
    if (existingCartItem) {
        return cartItems.map(item =>
            item.id === cartItemToAdd.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
        )
    }
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
}

export const removeItemFromCart = (cartItems, carItemToRemove) => {
    const existingCartItem = cartItems.find(item => item.id === carItemToRemove.id);
    if (existingCartItem.quantity > 1) {
        return cartItems.map(item =>
            item.id === carItemToRemove.id
                ? { ...item, quantity: item.quantity - 1 }
                : item
        )
    }
    return cartItems.filter(item => item.id !== carItemToRemove.id)
}