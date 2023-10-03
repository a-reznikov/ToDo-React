import React from 'react';
import ReactDOM from 'react-dom/client';
import ToDoList from './components/todo-list';
import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';

const App = () => {

  const todoData = [
    { label: 'Drink Coffee', important: false },
    { label: 'Make Awesome App', important: true },
    { label: 'Have a Lunch', important: false },
  ]
  return (
    <section>
      <AppHeader />
      <SearchPanel />
      <ToDoList todoData={todoData} />
    </section>
  )
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);