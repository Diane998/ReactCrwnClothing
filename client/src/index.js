import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';

import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

import AppContainer from './containers/AppContainer';

const client = new ApolloClient({
  uri: 'https://crwn-clothing.com',
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <AppContainer />
      </PersistGate>
    </Provider>
  </ApolloProvider>,
  document.querySelector('#root')
);
