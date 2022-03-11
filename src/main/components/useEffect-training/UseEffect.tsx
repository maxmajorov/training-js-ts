import React, { ChangeEvent, useEffect, useState } from "react";

const UseEffect = () => {
  const [count, setCount] = useState<number>(0);
  const [name, setName] = useState<string>();
  const onClickCountHandler = () => {
    setCount(count + 1);
  };

  const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value);
  };

  const useSpanInfo = document.getElementsByClassName("useInfo");

  console.log(useSpanInfo[0]);

  useEffect(() => {
    useSpanInfo[0].textContent = `${name}, Вы кликнули ${count} раз`;
    document.title = `${name}, Вы кликнули ${count} раз`;
  });

  return (
    <div>
      <h1>useEffect == {count}</h1>
      <div>
        <input type="text" onChange={onChangeInputHandler} />
        <button onClick={onClickCountHandler}>CLICK COUNT</button>
        <span className="useInfo"></span>
      </div>
    </div>
  );
};

export default UseEffect;
