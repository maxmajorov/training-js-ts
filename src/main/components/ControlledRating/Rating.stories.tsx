import React, { useState } from "react";

import Rating from "./Rating";

export default {
  title: "controlled/Controll Rating",
  component: Rating,
};

export const EmptyStar = () => <Rating value={0} onClick={() => {}} />;
export const OneStar = () => <Rating value={1} onClick={() => {}} />;
export const AllStars = () => <Rating value={5} onClick={() => {}} />;
export const ChangeRating = () => {
  const [rating, setRating] = useState(3);
  return <Rating value={rating} onClick={setRating} />;
};
