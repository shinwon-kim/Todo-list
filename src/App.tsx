import { useState } from "react";
import './App.css';
import TodoHeader from './Header/TodoHeader';
import TodoInput from './Input/TodoInput';
import TodoListTools from './Tools/TodoListTools';
import Divider from './Divider/Divider';
import TodoList from './List/TodoList';

function App() {
  const [text, setText] = useState("");

  const handleTextChange = (text:string) => {
    setText(text);
  }

  const handleSubmit = () => {
    console.log("submit");
  }

  return (
    <main className="App">
      <TodoHeader></TodoHeader>
      <TodoInput text={text} onTextChange={handleTextChange} onSubmit={handleSubmit}></TodoInput>
      <TodoListTools></TodoListTools>
      <Divider></Divider>
      <TodoList></TodoList>
    </main>
  );
}

export default App;
