import { Todo } from "../App";
import ToDoItem from "./ToDoItem";

interface ToDoListProps {
  todos: Todo[];
  toggleTodo(id: string): void;
  deleteItem(id: string): void;
}

export default function ToDoList(props: ToDoListProps) {
  // if (props.todos.length) {
  //   return props.todos.map(item => (
  //     <ToDoItem description={item} />
  //   ))
  // }

  // return <p>Ainda não existem tarefas :(</p>
  
  return (
    <div className="todo-list">
      {props.todos.length ? props.todos.map((item, index) => (
          <ToDoItem 
            key={`${item}-${index}`} 
            description={item.description}
            completed={item.completed}
            toggleTodo={(id: string) => props.toggleTodo(id)}
            deleteItem={(id: string) => props.deleteItem(id)}
          />
        )) : (
          <p>Ainda não existem tarefas :(</p>
        )
      }
    </div>
  )
}
