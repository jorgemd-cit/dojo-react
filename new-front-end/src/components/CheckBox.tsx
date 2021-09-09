interface CheckBoxProps {
  checked?: boolean;
  onCheck(): void;
}

export default function CheckBox(props: CheckBoxProps) {
  return (
    <input
      checked={props.checked}
      className="checkbox"
      type="checkbox"
      onChange={props.onCheck}
    />
  )
}
