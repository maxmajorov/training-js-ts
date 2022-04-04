import React from "react";

type ButtonPropsType = {
  label: string;
  primary: boolean;
};

export const Button: React.FC<ButtonPropsType> = ({ label, primary }) => {
  return (
    <div>
      <button {...primary}>{label}</button>
    </div>
  );
};
