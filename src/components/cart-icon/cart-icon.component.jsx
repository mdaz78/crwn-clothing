import React from 'react';

import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.action';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden, cartItems }) => (
  <div className='cart-icon' onClick={toggleCartHidden}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>{cartItems.length}</span>
  </div>
);

const mapStateToProps = ({ cart: { cartItems } }) => {
  return {
    cartItems,
  };
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
