interface ListProps {
  list: number[];
  name: string;
}

export default function List(props: ListProps) {
  return <div>{props.name}: {props.list.join(", ")}</div>;
}
