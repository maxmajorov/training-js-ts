import React, { useState } from "react";
import { action } from "@storybook/addon-actions";
import ControlledAccordion from "../ControlledAccordion/ControlledAccordion";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "controlled/ControlledAccordion",
  component: ControlledAccordion,
} as ComponentMeta<typeof ControlledAccordion>;

const Template: ComponentStory<typeof ControlledAccordion> = (args) => (
  <ControlledAccordion {...args} />
);

export const Collapsed = Template.bind({});
Collapsed.args = {
  title: "Menu",
  collapsed: true,
  setAccordion: action("clicked to collapsed"),
};

export const UnCollapsed = Template.bind({});
UnCollapsed.args = {
  title: "Tasks",
  collapsed: false,
  setAccordion: action("clicked to collapsed"),
};

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
