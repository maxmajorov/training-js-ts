import { action } from "@storybook/addon-actions";
import React from "react";
import { UncontrolledOnOff } from "./UncontrolledOnOff";

export default {
  title: "uncontrolled/UncontrolledOnOff",
  component: UncontrolledOnOff,
};

export const OnPress = () => (
  <UncontrolledOnOff defaultOn={true} onClick={action("clicked")} />
);

export const OffPress = () => (
  <UncontrolledOnOff defaultOn={false} onClick={action("clicked")} />
);
