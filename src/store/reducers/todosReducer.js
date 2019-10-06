import { ADD_TODO_ITEM, TOGGLE_TODO_ITEM } from '../types';

const defaultTodos = [
  {
    text: 'Wake up',
    isComplete: true
  },
  {
    text: 'Eat dinner',
    isComplete: false
  },
  {
    text: 'Pet a kitty',
    isComplete: false
  }
];

const todosReducer = (todos = defaultTodos, action) => {
  switch (action.type) {
    case ADD_TODO_ITEM:
      return [
        ...todos,
        {
          text: action.text,
          isComplete: false
        }
      ];
    case TOGGLE_TODO_ITEM:
      return todos.map((todo) => {
        if (todo.text !== action.text) {
          return todo;
        }
        return {
          ...todo,
          isComplete: !todo.isComplete
        };
      });
    default:
      return todos;
  }
};

export default todosReducer;
