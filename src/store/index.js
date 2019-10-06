import { createStore, combineReducers } from 'redux';
import preferences from './reducers/preferences';

const store = createStore(
  combineReducers({
    preferences
  })
);

export default store;
