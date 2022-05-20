import React, { useEffect, useState } from "react";

export const KeysTracker = () => {
  const [text, setText] = useState<string>("");

  const state = {
    count: 10,
    chel: {
      name: "Max",
      age: 32,
    },
  };

  console.log(state);
  console.log({ ...state, chel: { ...state.chel, name: "Maxim" } });

  useEffect(() => {
    const pressHandler = (event: KeyboardEvent) => {
      console.log(event.key);
      // setText((state) => state + event.key);
      setText(text + event.key);
    };

    window.addEventListener("keypress", pressHandler);

    // ==== ОТПИСКА ==> Должны передать туже функцию

    return () => window.removeEventListener("keypress", pressHandler);
  }, [text]);

  return (
    <div>
      <h1 className="useInfo">Typing text === {text}</h1>
    </div>
  );
};
