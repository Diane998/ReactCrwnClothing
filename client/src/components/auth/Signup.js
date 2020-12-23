import React, { useState } from 'react';
import styled from 'styled-components';
import InputField from '../fields/InpuField';
import Button from '../buttons/Button';

const SignupContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;

  @media screen and (max-width: 800px) {
    width: 85vw;
  }
`;

const Title = styled.h2`
  margin: 10px 0;
`;

const Signup = ({ signUpStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleSubmit = async e => {
    e.preventDefault();

    if (password !== confirmPassword) return;
    signUpStart({ displayName, email, password });
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <SignupContainer>
      <Title>I do not have an account</Title>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <InputField
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Display Name"
          required
        />
        <InputField
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />
        <InputField
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required
        />
        <InputField
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />
        <Button style={{ width: '100%' }} type="submit">
          SIGN UP
        </Button>
      </form>
    </SignupContainer>
  );
};

export default Signup;
