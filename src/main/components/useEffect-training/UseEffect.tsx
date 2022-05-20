import React, { ChangeEvent, useEffect, useState } from "react";

export const UseEffect = () => {
  const [count, setCount] = useState<number>(0);
  const [name, setName] = useState<string>();
  const onClickCountHandler = () => {
    setCount(count + 1);
  };

  const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value);
  };

  useEffect(() => {
    console.log("useEffect");

    setInterval(() => {
      setCount((state) => state + 1);
    }, 1000);

    const useSpanInfo = document.getElementsByClassName("useInfo");

    useSpanInfo[0].textContent = `${name}, Вы кликнули ${count} раз`;
    document.title = `${name}, Вы кликнули ${count} раз`;
  }, [name, count]);

  return (
    <div>
      <h1>useEffect === {count}</h1>
      <div>
        <input type="text" onChange={onChangeInputHandler} />
        <button onClick={onClickCountHandler}>CLICK COUNT</button>
        <span className="useInfo"></span>
      </div>
    </div>
  );
};
