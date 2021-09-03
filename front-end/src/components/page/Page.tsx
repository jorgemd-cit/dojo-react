import Todo from "../../models/Todo";
import Button from "../button/Button";
import Input from "../input/Input";
import Title from "../title/Title";
import TodoList from "../todo-list/TodoList";

interface PageProps {
  todos: Todo[];
  newTodoTitle: string;
  toggleTodo(todoId: string, checked: boolean): void;
  excludeTodo(todoId: string): void;
  setNewTodoTitle(title: string): void;
  addNewTodo(): void;
}

export default function Page(props: PageProps) {
  return (
    <div className="page">
      <Title text="Tarefas a fazer:" />

      <TodoList
        todos={props.todos}
        onToggle={(todoId: string, checked: boolean) => props.toggleTodo(todoId, checked)}
        onExclude={(todoId: string) => props.excludeTodo(todoId)}
      />

      <Input
        placeholder="Nova tarefa"
        value={props.newTodoTitle}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.setNewTodoTitle(e.target.value)}
      />

      <Button
        label="Adicionar"
        onClick={props.addNewTodo}
      />
    </div>
  );
}
