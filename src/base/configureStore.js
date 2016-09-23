import {createStore, applyMiddleware, compose} from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from '../modules/reducers';
import * as actionCreators from '../modules/actions';

const enchancer = compose(
  applyMiddleware(createLogger(), thunk),
  // redux devtools
  window.devToolsExtension ? 
    window.devToolsExtension({ actionCreators }) :
    f => f
);

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, enchancer);

  // 热替换reducer
  if (module.hot) {
    module.hot.accept('../modules/reducers', () => {
      store.replaceReducer(require('../modules/reducers').default);
    });
  }

  return store;
}