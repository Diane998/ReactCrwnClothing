import React from 'react';
import axios from 'axios';

import StripeCheckout from 'react-stripe-checkout';
import logo from '../../assets/crown.svg';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51Hxnc3DhdNsUybZdKLR0cyelTOGTMYWf8G5Umw78zVC895bPkuhJUG6TpnSSAwWGabcP2SNBlmGuMJx2WAGFinu800F2giYVCs';

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    })
      .then(res => {
        alert('Payment successful');
      })
      .catch(err => {
        alert('Payment failure');
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image={logo}
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
