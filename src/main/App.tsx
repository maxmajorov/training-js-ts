import React from "react";
import { User } from "../test/test_06_callback/test_06";
import s from "./App.module.css";

function App() {
  return (
    <div className={s.App}>
      <div>Training JS/TS for students by Dimych</div>
      HELLO!
      <User />
    </div>
  );
}

export default App;
