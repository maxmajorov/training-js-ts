import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { AnalogClock } from "./AnalogClock/AnalogClock";
import { DigitClock } from "./DigitClock/DigitClock";

export const AnalogDigitalClock = () => {
  const [choise, setChoise] = useState<string>("analog");

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setChoise("digital")}
      >
        Digit
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => setChoise("analog")}
      >
        Analog
      </Button>
      {choise === "analog" ? <AnalogClock /> : <DigitClock />}
    </div>
  );
};
