import React, { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import HomePage from './pages/HomePage';
import HeaderContainer from '../containers/HeaderContainer';
import Spinner from './Spinner';
import ErrorBoundary from './Errorboundary';

import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Open Sans Condensed';
    padding: 20px 60px;

    @media screen and (max-width: 800px) {
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

const ShopPageContainer = lazy(() => import('../containers/ShopPageContainer'));
const AuthenticationPage = lazy(() => import('./pages/AuthenticationPage'));
const CheckoutPageContainer = lazy(() =>
  import('../containers/CheckoutPageContainer')
);

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
          <ErrorBoundary>
            <Suspense fallback={<Spinner />}>
              <Route path="/shop" component={ShopPageContainer} />
              <Route
                path="/authentication"
                exact
                render={() =>
                  currentUser ? <Redirect to="/" /> : <AuthenticationPage />
                }
              />
              <Route path="/checkout" exact component={CheckoutPageContainer} />
            </Suspense>
          </ErrorBoundary>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
