import React, { useState } from "react";
import { action } from "@storybook/addon-actions";
import UncontrolledAccordion from "./Accordion";

export default {
  title: "Uncontrolled/UncontrolledAccordion",
  component: UncontrolledAccordion,
};

export const ChangeCollapsed = () => <UncontrolledAccordion />;
