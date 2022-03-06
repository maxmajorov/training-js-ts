import React, { ChangeEvent, useState } from "react";

type FullInputPropsType = {
  title: string;
  addMessage: (mes: string) => void;
};

const FullInput: React.FC<FullInputPropsType> = (props) => {
  let [mes, setMes] = useState("");

  const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setMes(e.currentTarget.value);
  };

  const onClickButtonHandler = () => {
    props.addMessage(mes);
    setMes(""); //Очищаем строку
  };

  return (
    <div>
      <h2>{props.title}</h2>
      <input value={mes} onChange={onChangeInputHandler} />
      <button onClick={onClickButtonHandler}>+</button>
    </div>
  );
};

export default FullInput;
