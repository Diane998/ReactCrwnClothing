import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import Header from './Header';
import AuthenticationPage from './pages/AuthenticationPage';
import { auth, createUserProfile } from '../config/firebase';

class App extends Component {
  state = { currentUser: null };

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfile(userAuth);

        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          });
        });
      } else {
        this.setState({ currentUser: null });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <BrowserRouter>
        <Header currentUser={this.state.currentUser} />
        <div>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/shop" exact component={ShopPage} />
            <Route
              path="/authentication"
              exact
              component={AuthenticationPage}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
