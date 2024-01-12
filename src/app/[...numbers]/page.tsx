"use client";

import CounterRow from "@/components/counterRow";
import { useParams } from "next/navigation";

export default function ExampleClientComponent() {
  const { numbers }: any = useParams<{
    numbers: []; // 0->
  }>();

  const content: any = [];

  console.log(numbers);

  for (let i = numbers[0]; i > 0; i--) {
    content.push(<CounterRow x={numbers[0]} y={numbers[1]} />);
  }

  return <div className={`grid grid-cols-none h-screen`}>{content}</div>;
}
