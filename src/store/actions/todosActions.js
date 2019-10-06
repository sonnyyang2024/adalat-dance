/* eslint-disable import/prefer-default-export */

import { ADD_TODO_ITEM, TOGGLE_TODO_ITEM } from '../types';

export const addTodoItem = (text) => ({
  type: ADD_TODO_ITEM,
  text
});

export const toggleTodoItem = (text) => ({
  type: TOGGLE_TODO_ITEM,
  text
});
