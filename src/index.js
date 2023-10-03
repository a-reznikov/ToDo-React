import React from 'react';
import ReactDOM from 'react-dom/client';
import ToDoList from './components/todo-list';
import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';

const App = () => {
  return (
    <section>
      <AppHeader />
      <SearchPanel />
      <ToDoList />
    </section>
  )
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);