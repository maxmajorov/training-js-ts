import React, { useEffect, useState } from "react";
import classes from "./DigitClock.module.css";

export const DigitClock = () => {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    // ==== CLOCK ====

    const clockID = setInterval(() => {
      console.log("tick");
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(clockID); //демонтирует часы ==> функция зачистки useEffect
    };
  }, []);

  return (
    <div className={classes.clockSection}>
      <span className={classes.time}>TIME: {time}</span>
    </div>
  );
};
