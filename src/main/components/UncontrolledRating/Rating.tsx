import React, { useState } from "react";

const UncontrolledRating = () => {
  const [value, setValue] = useState(0);

  return (
    <div>
      <h1>Uncontrolled Rating</h1>
      <Star selected={value > 0} />
      <button onClick={() => setValue(1)}>1</button>

      <Star selected={value > 1} />
      <button onClick={() => setValue(2)}>2</button>
      <Star selected={value > 2} />
      <button onClick={() => setValue(3)}>2</button>
      <Star selected={value > 3} />
      <button onClick={() => setValue(4)}>2</button>
      <Star selected={value > 4} />
      <button onClick={() => setValue(5)}>2</button>
    </div>
  );
};

type StarPropsType = {
  selected: boolean;
};

const Star = (props: StarPropsType) => {
  return props.selected ? (
    <div>
      <b>
        <span>Star</span>
      </b>
    </div>
  ) : (
    <div>
      <span>Star</span>
    </div>
  );
};

export default UncontrolledRating;
