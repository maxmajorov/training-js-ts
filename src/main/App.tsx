import React, { useState } from "react";
import { User } from "../test/test_06_callback/test_06";
import { ManComponent } from "../test/test_07_destructuring-assigment/ManComponent";
import { manProps } from "../test/test_07_destructuring-assigment/test_07.test";
import s from "./App.module.css";
import Rating from "./components/ControlledRating/Rating";
import UncontrolledAccordion from "./components/UncontrolledAccordion/Accordion";
import FullInput from "./components/universal-input/FullInput";
import Button from "./components/universal-input/InputButton/Button";
import Input from "./components/universal-input/InputButton/Input";
// import UseEffect from "./components/useEffect-training/UseEffect";

function App() {
  let [messages, setMessages] = useState([
    { id: 1, message: "Hello" },
    { id: 2, message: "How are you?" },
    { id: 3, message: "What are you doing now?" },
    { id: 4, message: "Bye!" },
  ]);

  let [mes, setMes] = useState("");
  const [ratingVal, setRatingVal] = useState<number>(0);

  const addMessage = (mes: string) => {
    let newMessage = { id: 5, message: mes };
    setMessages([newMessage, ...messages]);
  };

  const callbackButtonHandler = () => {
    addMessage(mes);
    setMes("");
  };

  return (
    <div className={s.App}>
      <div>Training JS/TS for students by Dimych</div>
      {/* <User />
      <ManComponent title="Hello" man={manProps} /> */}
      {/* <FullInput title="Universal FullInput" addMessage={addMessage} /> */}
      {/* <Input name="Input + Button" mes={mes} setMes={setMes} /> */}
      {/* <Button name="+" callback={callbackButtonHandler} /> */}
      {/* {messages.map((el) => (
        <div>{el.message}</div>
      ))} */}
      <UncontrolledAccordion />
      {/* <UncontrolledRating /> */}
      {/* <UseEffect /> */}\
      <Rating value={ratingVal} onClick={setRatingVal} />
    </div>
  );
}

export default App;
