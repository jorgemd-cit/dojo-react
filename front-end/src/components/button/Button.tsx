interface ButtonProps {
  label: string;
  small?: boolean;
  onClick(): void;
}

export default function Button(props: ButtonProps) {
  return (
    <button
      className={props.small ? `button button--small` : `button`}
      type="button"
      onClick={props.onClick}
    >
      {props.label}
    </button>
  )
}
