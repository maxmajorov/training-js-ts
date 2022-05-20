import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { Clock } from "./Clock";
import { TimeZone, ZoneItemType } from "./TimeZone";
import classes from "./AnalogClock.module.css";

export const AnalogClock = () => {
  // useEffect(() => {
  //   // ==== CLOCK ====

  //   const clockID = setInterval(() => {
  //     console.log("tick");
  //     setTime(new Date().toLocaleTimeString());
  //   }, 1000);

  //   return () => {
  //     clearInterval(clockID); //демонтирует часы ==> функция зачистки useEffect
  //   };
  // }, []);

  // return (
  //   <div>
  //     <span>{analogClock}</span>
  //   </div>
  // );

  const [timezone, setTimezone] = useState([
    {
      value: "0.0",
      label: '(GMT+00:00) London": "Europe/London"',
      location: "Europe/London",
    },
  ]);

  console.log(timezone);

  const setTimezoneCallback = (zone: Array<ZoneItemType>) => {
    let addTimeZone = [...timezone, ...zone];
    setTimezone(addTimeZone);
  };

  const handleClick = (zone: ZoneItemType) => {
    const index = timezone.findIndex((x) => x.label === zone.label);
    const copyArray = [...timezone];
    copyArray.splice(index, 1);
    setTimezone(copyArray);
  };

  return (
    <div className={classes.clockSection}>
      <TimeZone setTimezone={setTimezoneCallback} timezone={timezone} />
      <Clock timezone={timezone} handleClick={handleClick} />
    </div>
  );
};
