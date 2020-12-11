import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <div>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/shop" exact component={ShopPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
