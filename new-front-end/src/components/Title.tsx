interface TitleProps {
  text: string;
}

export default function Title(props: TitleProps) {
  return (
    <h1 className="title">{props.text}</h1>
  )
}
