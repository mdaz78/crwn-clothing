import { createContext, useState } from "react";

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  cartTotal: 0,
});

const getExistingCartItem = (cartItems, product) =>
  cartItems.find((cartItem) => cartItem.id === product.id);

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = getExistingCartItem(cartItems, productToAdd);

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, productToRemove) => {
  const existingCartItem = getExistingCartItem(cartItems, productToRemove);

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === productToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (cartItems, cartItemToClear) =>
  cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (product) => {
    const updatedCartItems = addCartItem(cartItems, product);
    setCartItems(updatedCartItems);
  };

  const removeItemFromCart = (product) => {
    const updatedCartItems = removeCartItem(cartItems, product);
    setCartItems(updatedCartItems);
  };

  const clearItemFromCart = (product) => {
    const updatedCartItems = clearCartItem(cartItems, product);
    setCartItems(updatedCartItems);
  };

  const cartCount = cartItems.reduce(
    (sum, cartItem) => (sum += cartItem.quantity),
    0
  );

  const cartTotal = cartItems.reduce(
    (total, cartItem) => (total += cartItem.price * cartItem.quantity),
    0
  );

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart,
    cartCount,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
