import { createStore, applyMiddleware, compose } from 'redux';

/* Middlewares */

/* Reducers */
import reducers from './Reducers';

export default (initialState = {}, devTools = f => f, isServer = false) => {
  const middlewares = compose(applyMiddleware(), devTools);
  return createStore(reducers, initialState, middlewares);
};
