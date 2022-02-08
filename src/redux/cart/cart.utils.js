export const addItemToCart = (itemsInCart, itemToAdd) => {
  const existingCartItem = itemsInCart.find(
    (itemInCart) => itemInCart.id === itemToAdd.id,
  );

  if (existingCartItem) {
    return itemsInCart.map((itemInCart) => {
      return itemInCart.id === itemToAdd.id
        ? {
            ...itemInCart,
            quantity: itemInCart.quantity + 1,
          }
        : itemInCart;
    });
  }

  return [...itemsInCart, { ...itemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (itemsInCart, itemToRemove) => {
  const existingCartItem = itemsInCart.find(
    (itemInCart) => itemInCart.id === itemToRemove.id,
  );

  if (existingCartItem.quantity === 1) {
    return clearItemFromCart(itemsInCart, itemToRemove);
  } else {
    return itemsInCart.map((itemInCart) => {
      return itemInCart.id === itemToRemove.id
        ? {
            ...itemInCart,
            quantity: itemInCart.quantity - 1,
          }
        : itemInCart;
    });
  }
};

export const clearItemFromCart = (itemsInCart, itemToClear) => {
  return itemsInCart.filter((item) => item.id !== itemToClear.id);
};
