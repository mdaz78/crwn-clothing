import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cart.selectors';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  CheckoutHeaderBlocksContainer,
  TotalContainer,
  TestWarningContainer,
} from './checkout.styles';

const CheckoutPage = ({ cartItems, totalPrice }) => {
  return (
    <CheckoutPageContainer>
      <CheckoutHeaderContainer>
        <CheckoutHeaderBlocksContainer>
          <span>Product</span>
        </CheckoutHeaderBlocksContainer>
        <CheckoutHeaderBlocksContainer>
          <span>Description</span>
        </CheckoutHeaderBlocksContainer>
        <CheckoutHeaderBlocksContainer>
          <span>Quantity</span>
        </CheckoutHeaderBlocksContainer>
        <CheckoutHeaderBlocksContainer>
          <span>Price</span>
        </CheckoutHeaderBlocksContainer>
        <CheckoutHeaderBlocksContainer>
          <span>Remove</span>
        </CheckoutHeaderBlocksContainer>
      </CheckoutHeaderContainer>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}

      <TotalContainer>
        <span>TOTAL: ${totalPrice}</span>
      </TotalContainer>
      <TestWarningContainer>
        **Please Use the following test credit card for payment**
        <br />
        4242 4242 4242 4242 - Exp: 01/23 - CVV: 123
      </TestWarningContainer>
      <StripeCheckoutButton price={totalPrice} />
    </CheckoutPageContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalPrice: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
