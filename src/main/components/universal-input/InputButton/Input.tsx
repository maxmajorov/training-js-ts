import React, { ChangeEvent, useState } from "react";

type InputPropsType = {
  name: string;
  mes: string;
  setMes: (mes: string) => void;
};

const Input: React.FC<InputPropsType> = (props) => {
  const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    props.setMes(e.currentTarget.value);
  };
  return (
    <>
      <h2>{props.name}</h2>
      <input value={props.mes} onChange={onChangeInputHandler} />
    </>
  );
};

export default Input;
