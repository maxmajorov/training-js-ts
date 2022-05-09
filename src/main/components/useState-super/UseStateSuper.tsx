import React, { useState } from "react";

// useState умеет себя оптимизировать. В качестве initialValue может принимать функцию.
// которую react запустит всего один раз и запомнит значение и небуде ее вызывать каждый раз при перерисовке.

const generateData = () => {
  //.....code
  return 12345;
};

export const UseStateSuper = () => {
  const [count, setCount] = useState<number>(generateData);

  const onClickCountHandler = () => {
    setCount(count + 1);
  };

  return (
    <>
      <button onClick={onClickCountHandler}>set</button>
      <span>{count}</span>
    </>
  );
};
