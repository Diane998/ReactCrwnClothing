import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCurrentUser } from '../redux/actions';
import { createStructuredSelector } from 'reselect';

import AuthenticationPage from './pages/AuthenticationPage';
import { auth, createUserProfile } from '../config/firebase';

import './App.css';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import Header from './Header';
import { selectCurrentUser } from '../redux/selectors/userSelector';
import CheckoutPage from './pages/CheckoutPage';

class App extends Component {
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfile(userAuth);

        userRef.onSnapshot(snapshot => {
          this.props.setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          });
        });
      } else {
        this.props.setCurrentUser(null);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <BrowserRouter>
        <Header />
        <div>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/shop" component={ShopPage} />
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
            <Route path="/checkout" exact component={CheckoutPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps, { setCurrentUser })(App);
