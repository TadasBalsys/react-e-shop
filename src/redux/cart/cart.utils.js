/**
 *  Utility function: 
 *  Checks if there is any existing item added in the Cart before( .find() method).
 *  If it's true,
 *  return new array; finds in cart array the item which quantity need to increase and increase it
 *  If fave not founded any existing item returns new array, where spreads old cart items and adds new cart item(cartItemToAdd) with new property - quantity : 1
 * 
 */
export const addItemToCart = (cartItems, cartItemToAdd) => {
    // better to use uniq id(item.id), but now I use mock data from shop.data.js where items doesn't have uniq id.
    const existingCartItem = cartItems.find(item => item.id === cartItemToAdd.id)
    if (existingCartItem) {
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        )
    }
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
} 