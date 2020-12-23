import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import AuthenticationPage from './pages/AuthenticationPage';
import HomePage from './pages/HomePage';
import ShopPageContainer from '../containers/ShopPageContainer';
import HeaderContainer from '../containers/HeaderContainer';
import CheckoutPageContainer from '../containers/CheckoutPageContainer';

import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Open Sans Condensed';
    padding: 20px 60px;

    @media screen and (max-width: 1240px) {
      padding: 10px;
    }
  }

  a {
    text-decoration: none;
    color: black;
  }

  * {
    box-sizing: border-box;
  }
`;

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <BrowserRouter>
      <GlobalStyles />
      <HeaderContainer />
      <div>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/shop" component={ShopPageContainer} />
          <Route
            path="/authentication"
            exact
            render={() =>
              currentUser ? <Redirect to="/" /> : <AuthenticationPage />
            }
          />
          <Route path="/checkout" exact component={CheckoutPageContainer} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
