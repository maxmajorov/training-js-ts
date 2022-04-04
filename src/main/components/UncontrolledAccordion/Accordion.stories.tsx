import React, { useState } from "react";
import { action } from "@storybook/addon-actions";
import UncontrolledAccordion from "./Accordion";

export default {
  title: "UncontrolledAccordion",
  component: UncontrolledAccordion,
};

export const Collapsed = () => {
  return (
    <div onClick={action("clicked to change")}>
      <h3>===Uncontrolled Accardion===</h3>
    </div>
  );
};

export const UnCollapsed = () => (
  <div onClick={action("clicked to change")}>
    <h3>===Uncontrolled Accardion===</h3>
    <ul>
      <li>React</li>
      <li>TypeScript</li>
      <li>Redux</li>
    </ul>
  </div>
);

export const ChangeCollapsed = () => {
  const [collaps, setCollapse] = useState<boolean>(true);
  const onClickCollapsedHandler = () => {
    collaps ? setCollapse(false) : setCollapse(true);
  };
  return (
    <div onClick={onClickCollapsedHandler}>
      <h3>===Uncontrolled Accardion===</h3>
      {!collaps ? (
        <ul>
          <li>React</li>
          <li>TypeScript</li>
          <li>Redux</li>
        </ul>
      ) : null}
    </div>
  );
};
