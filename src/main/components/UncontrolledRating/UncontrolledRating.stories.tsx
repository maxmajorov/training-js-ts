import { action } from "@storybook/addon-actions";
import React from "react";
import { UncontrolledRating } from "./UncontrolledRating";

export default {
  title: "uncontrolled/Uncontroll Rating",
  component: UncontrolledRating,
};

const callback = action("Change values inside component");

export const EmptyStar = () => (
  <UncontrolledRating defaultValue={0} onChange={callback} />
);
export const OneStar = () => (
  <UncontrolledRating defaultValue={1} onChange={callback} />
);
export const TwoStars = () => (
  <UncontrolledRating defaultValue={2} onChange={callback} />
);
export const threeStars = () => (
  <UncontrolledRating defaultValue={3} onChange={callback} />
);
export const FourStars = () => (
  <UncontrolledRating defaultValue={4} onChange={callback} />
);
export const FiveStars = () => (
  <UncontrolledRating defaultValue={5} onChange={callback} />
);
