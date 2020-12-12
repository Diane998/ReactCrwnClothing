import React from 'react';
import './Button.scss';

const Button = ({ children, isSignedinGoogle, inverted, ...otherProps }) => (
  <button
    className={`${
      inverted ? 'inverted' : isSignedinGoogle ? 'google-sign-in' : ''
    } custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default Button;
