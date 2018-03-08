import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import toastReducer from './toastReducer';

const store = createStore(
  combineReducers({ toasts: toastReducer }),
  {},
  applyMiddleware(createLogger()),
);

export default store;
