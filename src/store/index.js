import { createStore, combineReducers } from 'redux';

import todosReducer from './reducers/todosReducer';
import preferences from './reducers/preferences';

const store = createStore(
  combineReducers({
    todos: todosReducer,
    preferences
  })
);

export default store;
