import { createStore, combineReducers } from 'redux';

import todosReducer from './reducers/todosReducer';

const store = createStore(
  combineReducers({
    todos: todosReducer
  })
);

export default store;
