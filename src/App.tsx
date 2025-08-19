import React from 'react';
import './App.css';
import TodoHeader from './Header/TodoHeader';
import TodoInput from './Input/TodoInput';
import TodoListTools from './Tools/TodoListTools';
import Divider from './Divider/Divider';
import TodoList from './List/TodoList';

function App() {
  return (
    <main className="App">
      <TodoHeader></TodoHeader>
      <TodoInput></TodoInput>
      <TodoListTools></TodoListTools>
      <Divider></Divider>
      <TodoList></TodoList>
    </main>
  );
}

export default App;
