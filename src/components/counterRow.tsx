import CounterCard from "./counterCard";

type Props = {
  x: number;
  y?: number;
};

export default function CounterRow({ x, y }: Props) {
  const content = [];
  for (let i = y || 1; i > 0; i--) {
    content.push(<CounterCard x={x} y={y} />);
  }
  return <div className={"flex justify-evenly"}>{content}</div>;
}
