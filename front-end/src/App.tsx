import { useEffect, useState } from 'react';
import './styles/app.css';
import Page from './components/page/Page';
import Todo from './models/Todo';
import { 
  createTodo,
  getTodos,
  updateTodo,
  deleteTodo
} from './services/TodosService';

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [newTodoTitle, setNewTodoTitle] = useState<string>("")

  useEffect(() => {
    getTodos().then(response => setTodos(response))
  }, [])

  function toggleTodo(id: string, completed: boolean) {
    updateTodo(id, completed).then(() => {
      setTodos(todos.map (item => {
        const updatedItem = { ...item, completed }

        return (item.id === id) ? updatedItem : item
      }))
    })
  }

  function excludeTodo(id: string) {
    deleteTodo(id).then(() => {
      setTodos(todos.filter(item => item.id !== id))
    })
  }

  function addNewTodo() {
    const newTodo = {
      id: null,
      title: newTodoTitle,
      completed: false
    } as Todo

    createTodo(newTodo).then(response => setTodos([...todos, response]))
    setNewTodoTitle("")
  }

  return (
    <Page
      todos={todos}
      newTodoTitle={newTodoTitle}
      toggleTodo={toggleTodo}
      excludeTodo={excludeTodo}
      addNewTodo={addNewTodo}
      setNewTodoTitle={setNewTodoTitle}
    />
  );
}
