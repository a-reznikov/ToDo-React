import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';

import './app.css';

export default class App extends Component {

  maxId = 1;

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++,
    }
  }

  state = {
    todoData: [
      this.createTodoItem('Learn React'),
      this.createTodoItem('Make Awesome Ap'),
      this.createTodoItem('Read Book'),
    ],
  }

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const index = todoData.findIndex((element) => element.id === id);
      return {
        todoData: todoData.toSpliced(index, 1),
      }
    })
  }

  addItem = (text) => {
    const newItem = this.createTodoItem(text);

    this.setState(({ todoData }) => {
      const newData = [...todoData, newItem];
      return {
        todoData: newData,
      }
    })
  }

  toggleProperty(id, propName) {
    this.setState(({ todoData }) => {
      const index = todoData.findIndex((element) => element.id === id);
      const newItem = { ...todoData[index], [propName]: !todoData[index][propName] }
      return {
        todoData: todoData.toSpliced(index, 1, newItem),
      }
    })
  }

  onToggleImportant = (id) => {
    this.toggleProperty(id, 'important');
  }

  onToggleDone = (id) => {
    this.toggleProperty(id, 'done');
  }

  render() {
    const { todoData } = this.state;
    const doneCount = todoData.filter((elem) => elem.done).length;
    const todoCount = todoData.length - doneCount;

    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList todos={todoData}
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone} />
        <ItemAddForm onItemAdded={this.addItem} />
      </div>
    );
  }
};
