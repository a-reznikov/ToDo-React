import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';

import './app.css';

export default class App extends Component {

  state = {
    todoData: [
      { label: 'Learn React', important: true, id: 1 },
      { label: 'Make Awesome App', important: false, id: 2 },
      { label: 'Read Book', important: false, id: 3 }
    ],
  }

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const index = todoData.findIndex((element) => element.id === id);
      console.log(index);
      return {
        todoData: todoData.toSpliced(index, 1),
      }
    })
  }

  render() {
    const { todoData } = this.state;

    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>

        <TodoList todos={todoData}
          onDeleted={this.deleteItem} />
      </div>
    );
  }
};
