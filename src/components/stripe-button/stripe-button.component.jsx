import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51KQoRXSGLwpYDdUF2R49Lp5NhyrsXs9qTLwPKwHuhRh4cFPI6klRQkBmsok42dAjZzWV1QHMvQoV6lR3RbdTAOCu00qoIqmr75';

  const onToken = (token) => {
    console.log(token);
    alert('Payment Successful');
  };

  return (
    <StripeCheckout
      currency='USD'
      amount={priceForStripe}
      label={'Pay Now'}
      name='CRWN Clothing'
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
      billingAddress
      shippingAddress
      allowRememberMe
    />
  );
};

export default StripeCheckoutButton;
