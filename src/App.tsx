import { useState } from "react";
import './App.css';
import TodoHeader from './Header/TodoHeader';
import TodoInput from './Input/TodoInput';
import TodoListTools from './Tools/TodoListTools';
import Divider from './Divider/Divider';
import TodoList from './List/TodoList';

export type TodoType = {
  id: number;
  text: string;
  isChecked: boolean;
}

function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState<TodoType[]>([]);

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
      <TodoList todos={todos}></TodoList>
    </main>
  );
}

export default App;
