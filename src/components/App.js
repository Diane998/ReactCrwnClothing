import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import './App.css';
import AuthenticationPage from './pages/AuthenticationPage';
import HomePage from './pages/HomePage';
import ShopPageContainer from '../containers/ShopPageContainer';
import HeaderContainer from '../containers/HeaderContainer';
import CheckoutPageContainer from '../containers/CheckoutPageContainer';

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    // this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    //   if (userAuth) {
    //     const userRef = await createUserProfile(userAuth);
    //     userRef.onSnapshot(snapshot => {
    //       setCurrentUser({
    //         id: snapshot.id,
    //         ...snapshot.data()
    //       });
    //     });
    //   }
    //   setCurrentUser(null);
    // });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
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
                this.props.currentUser ? (
                  <Redirect to="/" />
                ) : (
                  <AuthenticationPage />
                )
              }
            />
            <Route path="/checkout" exact component={CheckoutPageContainer} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
