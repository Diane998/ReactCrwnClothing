import React from 'react';
import './InputField.scss';

const InputField = ({ handleChange, label, ...otherProps }) => (
  <div className="group">
    <input
      className="form-input"
      type="text"
      onChange={handleChange}
      {...otherProps}
    />
    {label ? (
      <label
        className={`${
          otherProps.value.length ? 'shrink' : ''
        } form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default InputField;
