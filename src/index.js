import React from 'react';
import {render} from 'react-dom';
import {Router, hashHistory} from 'react-router';
import {Provider} from 'react-redux';
import {syncHistoryWithStore} from 'react-router-redux';

import LanguageProvider from './components/LanguageProvider';
import routes from './base/routes';
import configureStore from './base/configureStore.js';

import './styles/main.css';

main();

function main() {
  const initialState = {};
  const store = configureStore(initialState);
  const history = syncHistoryWithStore(hashHistory, store);

  const root = document.getElementById('root');
  const app = (
    
      <LanguageProvider>
    <Provider store={store}>
        <Router history={history} routes={routes} />
    </Provider>
    </LanguageProvider>
  );

  render(app, root);
}
