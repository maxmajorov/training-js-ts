import React, { useState } from "react";
import { action } from "@storybook/addon-actions";
import ControlledAccordion from "../ControlledAccordion/ControlledAccordion";

export default {
  title: "ControlledAccordion",
  component: ControlledAccordion,
};

export const Collapsed = () => (
  <ControlledAccordion
    title={"Menu"}
    collapsed={true}
    setAccordion={action("clicked to collapse")}
  />
);
export const UnCollapsed = () => (
  <ControlledAccordion
    title={"Tasks"}
    collapsed={false}
    setAccordion={action("clicked to collapse")}
  />
);

export const ChangeValue = () => {
  const [value, setValue] = useState<boolean>(true);
  return (
    <ControlledAccordion
      title={value.toString()}
      collapsed={value}
      setAccordion={() => setValue(!value)}
    />
  );
};
