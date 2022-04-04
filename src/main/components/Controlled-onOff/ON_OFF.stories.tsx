import React, { useState } from "react";
import ControlOnOff from "./Control_ON_OFF";
import { action } from "@storybook/addon-actions";

export default {
  title: "ControlOnOff",
  component: ControlOnOff,
};

export const OnMode = () => (
  <ControlOnOff current={true} onChange={action("clicked")} />
);
export const OffMode = () => (
  <ControlOnOff current={false} onChange={action("clicked")} />
);

export const ChangeValue = () => {
  const [value, setValue] = useState<boolean>(true);
  return <ControlOnOff current={value} onChange={setValue} />;
};
