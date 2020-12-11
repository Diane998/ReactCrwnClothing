import React from 'react';
import './Button.scss';

const Button = ({ children, isSignedinGoogle, ...otherProps }) => (
  <button
    className={`${isSignedinGoogle ? 'google-sign-in' : ''} custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default Button;
