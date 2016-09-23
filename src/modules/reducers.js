import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import clientReducer from './client/reducers';

const rootReducer = combineReducers({
  client: clientReducer,
  routing: routerReducer
});

export default rootReducer;