import React from "react";
import { User } from "../test/test_06_callback/test_06";
import { ManComponent } from "../test/test_07_destructuring-assigment/ManComponent";
import { manProps } from "../test/test_07_destructuring-assigment/test_07.test";

import s from "./App.module.css";

function App() {
  return (
    <div className={s.App}>
      <div>Training JS/TS for students by Dimych</div>
      HELLO!
      <User />
      <ManComponent title="Hello" man={manProps} />
    </div>
  );
}

export default App;
