import React, { Component } from 'react';
import SHOP_DATA from './ShopData';
import CollectionPreview from '../collections/CollectionPreview';

class ShopPage extends Component {
  state = { collections: SHOP_DATA };

  render() {
    const { collections } = this.state;

    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherProps }) => (
          <CollectionPreview key={id} id={id} {...otherProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
