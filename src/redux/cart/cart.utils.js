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
