import { combineReducers } from 'redux';

/* Reducers */
import AppReducer from '../view/Reducer';

const rootReducer = combineReducers({
  app: AppReducer,
});

export default rootReducer;
