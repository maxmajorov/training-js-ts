import moment from "moment-timezone";
import React from "react";
import AnalogClock, { Themes } from "react-analog-clock";
import { ZoneItemType } from "./TimeZone";

// require("moment-timezone");

type ClockPropsType = {
  timezone: Array<ZoneItemType>;
  handleClick: (zone: ZoneItemType) => void;
};

export const Clock: React.FC<ClockPropsType> = ({ timezone, handleClick }) => {
  return (
    <div className="Clock container">
      {timezone.map((zone, ind) => (
        <div key={ind}>
          <div className="item">
            <div className="clock">
              <AnalogClock theme={Themes.dark} gmtOffset={zone.value} />
            </div>
            <div className="info">
              <label className="label-location">
                {moment().tz(zone.location).format("YYYY-MM-DD")}
              </label>{" "}
              <br />
              <label className="label-zone">{zone.label}</label> <br />
              <button className="button" onClick={() => handleClick(zone)}>
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
