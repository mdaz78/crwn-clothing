import React from 'react';
import {
  CartItemContainer,
  ImageContainer,
  ItemDetailsContainer,
  SpanContainer,
} from './cart-item.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  return (
    <CartItemContainer>
      <ImageContainer src={imageUrl} alt='item' />
      <ItemDetailsContainer>
        <SpanContainer className='name'>{name}</SpanContainer>
        <SpanContainer className='price'>
          {quantity} x ${price}
        </SpanContainer>
      </ItemDetailsContainer>
    </CartItemContainer>
  );
};

export default CartItem;
