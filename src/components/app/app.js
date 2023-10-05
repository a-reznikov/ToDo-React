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
      this.createTodoItem('Read Book'),
      this.createTodoItem('Make Awesome App'),
    ],
    term: '',
    filter: 'all'
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

  search(todoData, term) {
    const foundItems = todoData.filter((element) => element.label.toLowerCase().includes(term.toLowerCase()))
    return !term ? todoData : foundItems;
  }

  filter(items, filter) {
    switch (filter) {
      case 'active': return items.filter((element) => !element.done);
      case 'done': return items.filter((element) => element.done);
      case 'all': return items;
      default: return items;
    }
  }

  onSearchItems = (term) => {
    this.setState(({ term }))
  }

  onFilterChange = (filter) => {
    this.setState(({ filter }));
  }

  render() {
    const { todoData, term, filter } = this.state;
    const doneCount = todoData.filter((elem) => elem.done).length;
    const todoCount = todoData.length - doneCount;
    const searchItems = this.search(todoData, term);
    const visibleItems = this.filter(searchItems, filter);

    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel
            showSearchItems={this.onSearchItems} />
          <ItemStatusFilter filter={filter}
            onFilterChange={this.onFilterChange} />
        </div>
        <TodoList todos={visibleItems}
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone} />
        <ItemAddForm onItemAdded={this.addItem} />
      </div>
    );
  }
};
