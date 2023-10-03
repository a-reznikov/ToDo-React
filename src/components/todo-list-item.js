import React from 'react';
import ControlItem from './control-item';

import './todo-list-item.css';

const TodoListItem = ({ label, important = false }) => {

  const style = {
    color: important ? 'steelblue' : 'black',
    fontWeight: important ? 'bold' : 'normal'
  };

  return (
    <span className="todo-list-item d-flex justify-content-between">
      <span
        className="todo-list-item-label"
        style={style}>
        {label}
      </span>
      <ControlItem />
    </span>
  );
};

export default TodoListItem;
