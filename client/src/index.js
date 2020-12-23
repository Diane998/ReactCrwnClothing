import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import * as serviceWorker from './serviceWorker.js';

import AppContainer from './containers/AppContainer';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <AppContainer />
    </PersistGate>
  </Provider>,
  document.querySelector('#root')
);

serviceWorker.register();
