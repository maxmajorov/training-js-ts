import React from "react";

type ControlONPropsType = {
  current: boolean;
  onChange: (current: boolean) => void;
};

const ControlOnOff: React.FC<ControlONPropsType> = (props) => {
  const onButtonStyle = {
    height: "30px",
    width: "100px",
    backgroundColor: props.current ? "green" : "white",
  };

  const offButtonStyle = {
    height: "30px",
    width: "100px",
    backgroundColor: props.current ? "white" : "red",

    marginRight: "20px",
  };

  const circleStyle = {
    height: "20px",
    width: "20px",
    border: "2px solid black",
    borderRadius: "15px",
    backgroundColor: props.current ? "green" : "red",
  };

  return (
    <div>
      <h1>useState - Controlled ON_OFF</h1>
      <div>
        <button style={onButtonStyle} onClick={() => props.onChange(true)}>
          ON
        </button>
        <button style={offButtonStyle} onClick={() => props.onChange(false)}>
          OFF
        </button>
        <button style={circleStyle}></button>
      </div>
    </div>
  );
};

export default ControlOnOff;
