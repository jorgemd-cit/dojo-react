interface InputProps {
  value: string;
  placeholder: string;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
}

export default function Input(props: InputProps) {
  return (
    <input
      className="input"
      type="text"
      placeholder={props.placeholder}
      onChange={props.onChange}
    />
  )
}
