interface ToDoInputProps {
  placeholder: string;
  value: string;
  onChange(value: string): void;
}

export default function TodoInput(props: ToDoInputProps) {
  return (
    <input
      className="todo-input"
      type="text"
      placeholder={props.placeholder}
      value={props.value}
      onChange={(event) => props.onChange(event.target.value)}
    />
  )
}
