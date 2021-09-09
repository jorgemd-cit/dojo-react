import Button from "./Button";
import CheckBox from "./CheckBox";

interface ToDoItemProps {
  description: string;
  completed: boolean;
  toggleTodo(id: string): void;
  deleteItem(id: string): void;
}

export default function ToDoItem(props: ToDoItemProps) {
  return (
    <div className={props.completed ? `todo-item todo-item--completed`: `todo-item`}>
      <CheckBox
        checked={props.completed}
        onCheck={() => props.toggleTodo(props.description)}
      />
      <p className="todo-item-title">{props.description}</p>
      <Button
        label="x"
        isSmall
        onClick={() => props.deleteItem(props.description)}
      />
    </div>
  )
}