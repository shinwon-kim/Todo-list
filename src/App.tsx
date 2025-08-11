import React from 'react';
import './App.css';
import TodoHeader from './Header/TodoHeader';
import TodoInput from './Input/TodoInput';

function App() {
  return (
    <main className="App">
      <TodoHeader></TodoHeader>
      <TodoInput></TodoInput>
    </main>
  );
}

export default App;
