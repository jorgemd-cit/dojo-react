interface CheckBoxProps {
  checked?: boolean;
  onCheck(): void;
}

export default function CheckBox(props: CheckBoxProps) {
  return (
    <input
      className="checkbox"
      type="checkbox"
      checked={props.checked}
      onChange={props.onCheck}
    />
  )
}
