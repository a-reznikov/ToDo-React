import React from 'react';
import ToDoListItem from './todo-list-item';

const ToDoList = ({ todoData }) => {

  const items = todoData.map((item) => {
    return (<li>
      <ToDoListItem {...item} />
    </li>)
  })
  return (
    <ul>
      {items}
    </ul>
  );
}

export default ToDoList;