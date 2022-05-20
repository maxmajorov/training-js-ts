import React, { useEffect, useState } from "react";

export const ResetEffect = () => {
  console.log("Component render");
  const [count, setCount] = useState<number>(0);

  const onClickCountHandler = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log("useEffect");

    return () => {
      console.log("RESET EFFECT"); //Умирает после того как отрисуется новая компонента ==> cleanup
    };
  }, []);

  return (
    <div>
      <h1>useEffect === {count}</h1>
      <button onClick={onClickCountHandler}>CLICK COUNT</button>
    </div>
  );
};
