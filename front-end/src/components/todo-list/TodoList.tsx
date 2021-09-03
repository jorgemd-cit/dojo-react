import Todo from "../../models/Todo";
import TodoItem from "../todo-item/TodoItem";

interface TodoListProps {
  todos: Todo[];
  onToggle(todoId: string | null, completed: boolean): void;
  onExclude(todoId: string | null): void;
}

export default function TodoList(props: TodoListProps) {
  return (
    <div className="todo-list">
      {props.todos.length ? props.todos.map(item => (
        <TodoItem
          title={item.title}
          completed={item.completed}
          onToggle={(completed: boolean) => props.onToggle(item.id, completed)}
          onExclude={() => props.onExclude(item.id)}
        />
      )) : (
        <p>Nenhuma tarefa por enquanto :)</p>
      )}
    </div>
  )
}
