import React, { ChangeEvent, useEffect, useState } from "react";

export const SetTimeOutUseEffect = () => {
  const [count, setCount] = useState<number>(0);
  const [time, setTime] = useState<string>("");

  const onClickCountHandler = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log("useEffect");
    setInterval(() => {
      setCount((state) => state + 1);
    }, 1000);
    // setTimeout(() => alert(`Вы кликнули ${count} раз`), 2000);

    // ==== CLOCK ====

    setInterval(() => {
      setTime((state) => new Date().toLocaleTimeString());
    }, 1000);
  }, []);

  return (
    <div>
      <h1>useEffect === {count}</h1>
      <span>TIME: {time}</span>
    </div>
  );
};
