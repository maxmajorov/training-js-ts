import React, { useState } from "react";
import { RatingValuesType } from "../ControlledRating/Rating";

type UncontrolledRatingPropsType = {
  defaultValue?: number;
  onChange: (value: number) => void;
};

export const UncontrolledRating: React.FC<UncontrolledRatingPropsType> = ({
  defaultValue,
  onChange,
}) => {
  const [value, setValue] = useState<number>(defaultValue ? defaultValue : 0);

  return (
    <div>
      <h1>Uncontrolled Rating</h1>
      <Star
        selected={value > 0}
        setValue={() => {
          setValue(1);
          onChange(1);
        }}
      />
      <Star
        selected={value > 1}
        setValue={() => {
          setValue(2);
          onChange(2);
        }}
      />
      <Star
        selected={value > 2}
        setValue={() => {
          setValue(3);
          onChange(3);
        }}
      />
      <Star
        selected={value > 3}
        setValue={() => {
          setValue(4);
          onChange(4);
        }}
      />
      <Star
        selected={value > 4}
        setValue={() => {
          setValue(5);
          onChange(5);
        }}
      />
    </div>
  );
};

type StarPropsType = {
  selected: boolean;
  setValue: () => void;
};

const Star: React.FC<StarPropsType> = ({ selected, setValue }) => {
  return selected ? (
    <b>
      <span onClick={setValue}>Star</span>
    </b>
  ) : (
    <span onClick={setValue}>Star</span>
  );
};
