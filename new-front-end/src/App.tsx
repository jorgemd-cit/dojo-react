import Button from "./components/Button";
import ToDoInput from "./components/ToDoInput";
import Title from "./components/Title";
import ToDoList from "./components/ToDoList";
import { useState } from "react";

export interface Todo {
  description: string;
  completed: boolean;
}

const initialTodos = [
  { description: "Tarefa número 1", completed: false },
  { description: "Tarefa número 2", completed: false },
  { description: "Tarefa número 3", completed: false },
  { description: "Tarefa número 4", completed: true }
] as Todo[];

function App() {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  const [newTodoDescription, setNewTodoDescription] = useState<string>("");

  function toggleTodo(id: string) {
    const updatedTodo = todos.map(todo => (
      todo.description === id ? { ...todo, completed: !todo.completed } : todo
    ))

    setTodos(updatedTodo)
  }

  function deleteTodo(id: string){
    const updatedTodo = todos.filter(item => item.description !== id)
    
    setTodos(updatedTodo)
  }

  function insertTodo(description: string){ 
    setTodos([...todos, { description, completed: false }] )
  }

  return (
    <div className="page">
      <Title text="Tarefas a fazer:" />
      <ToDoList
        todos={todos}
        toggleTodo={(id: string) => toggleTodo(id)}
        deleteItem={(id: string) => deleteTodo(id)}
      />

      <ToDoInput 
        value={newTodoDescription}
        placeholder="Adicionar nova tarefa"
        onChange={(value: string) => setNewTodoDescription(value)}
      />
      
      <Button
        label="Adicionar"
        onClick={() => insertTodo(newTodoDescription)}
      />
    </div>
  );
}

export default App;
