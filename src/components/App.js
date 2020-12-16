import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import './App.css';
import AuthenticationPage from './pages/AuthenticationPage';
import HomePage from './pages/HomePage';
import ShopPageContainer from '../containers/ShopPageContainer';
import HeaderContainer from '../containers/HeaderContainer';
import CheckoutPageContainer from '../containers/CheckoutPageContainer';

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <BrowserRouter>
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
