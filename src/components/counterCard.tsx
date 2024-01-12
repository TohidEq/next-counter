"use client";

import { useState } from "react";

type Props = {
  x: number;
  y?: number;
};

export default function CounterCard({ x, y }: Props) {
  const [number, setNumber] = useState<number>(0);

  const click = () => {
    setNumber(number + 1);
  };

  return (
    <button className="counter-card w-full" onClick={() => click()}>
      {`${number}`}
    </button>
  );
}
