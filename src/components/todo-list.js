import React from 'react';
import ToDoListItem from './todo-list-item';

const ToDoList = ({ todoData }) => {

  const items = todoData.map((item) => {

    const { id, ...itemProps } = item;

    return (
      <li key={id}>
        <ToDoListItem {...itemProps} />
      </li>)
  })
  return (
    <ul>
      {items}
    </ul>
  );
}

export default ToDoList;