import Button from '../button/Button';
import CheckBox from '../checkbox/Checkbox';

interface TodoItemProps {
  title: string;
  completed?: boolean;
  onToggle(completed: boolean): void;
  onExclude(): void;
}

export default function TodoItem(props: TodoItemProps) {
  return (
    <div className={props.completed ? `todo-list__item todo-list__item--completed` : `todo-list__item`}>
      <CheckBox
        checked={props.completed}
        onCheck={() => props.onToggle(!props.completed)}
      />

      <p className="todo-list__item-title">{props.title}</p>

      <Button
        small
        label="excluir"
        onClick={props.onExclude}
      />
    </div>
  )
}
