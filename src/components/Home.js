import React, { Component } from 'react';
import './Home.scss';
import Directory from './Directory';

class Home extends Component {
  render() {
    return (
      <div className="homepage">
        <Directory />
      </div>
    );
  }
}

export default Home;
