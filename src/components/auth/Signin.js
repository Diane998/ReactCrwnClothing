import React, { Component } from 'react';
import styled from 'styled-components';
import InputField from '../fields/InpuField';
import Button from '../buttons/Button';
import { auth, signInWithGoogle } from '../../config/firebase';

const SigninContainer = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  margin: 10px 0;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
`;

class Signin extends Component {
  state = { email: '', password: '' };

  handleSubmit = async e => {
    e.preventDefault();
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (err) {
      console.log(err);
    }
  };

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <SigninContainer>
        <Title>I already have an account</Title>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <InputField
            onChange={this.handleChange}
            type="email"
            name="email"
            label="Email"
            value={this.state.email}
            required
          />
          <InputField
            onChange={this.handleChange}
            type="password"
            name="password"
            label="Password"
            value={this.state.password}
            required
          />
          <Buttons>
            <Button type="submit">SIGN IN</Button>
            <Button onClick={signInWithGoogle} isSignedinGoogle>
              SIGN IN WITH GOOGLE
            </Button>
          </Buttons>
        </form>
      </SigninContainer>
    );
  }
}

export default Signin;
