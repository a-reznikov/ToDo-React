import React from 'react';
import ReactDOM from 'react-dom/client';
import ToDoList from './components/todo-list';
import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';

const App = () => {

  const todoData = [
    { label: 'Drink Coffee', important: false, id: 1 },
    { label: 'Make Awesome App', important: true, id: 2 },
    { label: 'Have a Lunch', important: false, id: 3 },
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