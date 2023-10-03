import React from 'react';
import ReactDOM from 'react-dom/client';

import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';
import ItemStatusFilter from './components/item-status-filter';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => {

  const todoData = [
    { label: 'Learn React', important: true, id: 1 },
    { label: 'Make Awesome App', important: false, id: 2 },
    { label: 'Read Book', important: false, id: 3 }
  ];

  return (
    <div className="todo-app">
      <AppHeader toDo={1} done={3} />
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>

      <TodoList todos={todoData} />
    </div>
  );
};

root.render(<App />);