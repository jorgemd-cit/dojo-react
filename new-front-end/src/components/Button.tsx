interface ButtonProps {
  label: string;
  isSmall?: boolean;
  onClick(): void;
}

export default function Button(props: ButtonProps) {
  return (
    <button
      className={props.isSmall ? `button button--small` : `button`}
      type="button"
      onClick={props.onClick}
    >
      {props.label}
    </button>
  )
}
