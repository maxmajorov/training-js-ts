import React, { useEffect, useState } from "react";

export const SetTimeOutUseEffect = () => {
  const [count, setCount] = useState<number>(0);
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    console.log("useEffect");
    setInterval(() => {
      setCount((state) => state + 1);
    }, 1000);
    // setTimeout(() => alert(`Вы кликнули ${count} раз`), 2000);

    // ==== CLOCK ====

    const clockID = setInterval(() => {
      console.log("tick");
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(clockID); //демонтирует часы ==> функция зачистки useEffect
    };
  }, []);

  return (
    <div>
      <h1>useEffect === {count}</h1>
      <span>TIME: {time}</span>
    </div>
  );
};
