import React, { MouseEvent, ChangeEvent } from "react";
import { user } from "../test_02/test_02";

export const User = () => {
  const userHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e.currentTarget);

    e.currentTarget.name === "delete"
      ? console.log("del")
      : console.log("save");
    console.log(e);
  };

  //   const saveUser = () => {
  //     console.log("save");
  //   };

  const changeInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    console.log(e);
  };

  const onBlur = () => {
    console.log("BLUR");
  };

  return (
    <div>
      <textarea onChange={changeInput} onBlur={onBlur}>
        Max Predko
      </textarea>
      <hr />
      <input type="text" id="input" />
      <button name="delete" onClick={userHandler}>
        Delete
      </button>
      <button name="save" onClick={userHandler}>
        Save
      </button>
    </div>
  );
};
