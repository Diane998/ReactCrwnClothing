import React, { Component } from 'react';
import styled from 'styled-components';
import InputField from '../fields/InpuField';
import Button from '../buttons/Button';
import { auth, createUserProfile } from '../../config/firebase';

const SignupContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
`;

const Title = styled.h2`
  margin: 10px 0;
`;

class Signup extends Component {
  state = { displayName: '', email: '', password: '', confirmPassword: '' };

  handleSubmit = async e => {
    e.preventDefault();
    const { signUpStart } = this.props;
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) return;

    signUpStart({ displayName, email, password });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;

    return (
      <SignupContainer>
        <Title>I do not have an account</Title>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <InputField
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Display Name"
            required
          />
          <InputField
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          />
          <InputField
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            required
          />
          <InputField
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="Confirm Password"
            required
          />
          <Button type="submit">SIGN UP</Button>
        </form>
      </SignupContainer>
    );
  }
}

export default Signup;
