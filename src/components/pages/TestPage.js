import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { addTodoItem, toggleTodoItem } from '../../store/actions/todosActions';

import './TestPage.scss';

const AddTodoField = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const inputElement = useRef();

  const handleInputChange = (e) => setInput(e.target.value);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    dispatch(addTodoItem(input));

    inputElement.current.value = '';
    inputElement.current.focus();
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        onChange={handleInputChange}
        ref={inputElement}
      />
      <input type="submit" />
    </form>
  );
};

const TodoItem = ({
  text,
  isComplete
}) => {
  const dispatch = useDispatch();

  const handleCheckboxChange = () => {
    dispatch(toggleTodoItem(text));
  };

  return (
    <div className="todo-item">
      <div>
        <input
          type="checkbox"
          checked={isComplete}
          onChange={handleCheckboxChange}
        />
      </div>
      <div
        className={classNames('todo-item__text', {
          'todo-item__text--is-complete': isComplete
        })}
      >
        {text}
      </div>
    </div>
  );
};

TodoItem.propTypes = {
  text: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired
};

const TodoList = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.text}
          text={todo.text}
          isComplete={todo.isComplete}
        />
      ))}
    </div>
  );
};

const TestPage = () => (
  <div>
    <AddTodoField />
    <TodoList />
    <TodoList />
  </div>
);

export default TestPage;
