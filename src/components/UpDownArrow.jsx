import * as React from "react";
import * as classes from "./UpDownArrow.module.css";

export default function UpDownArrow({ direction }) {
  const up = direction === "up";

  return (
    <div className={classes.root}>
      <div
        className={classes.segment}
        style={{
          marginRight: -1,
          transformOrigin: "center right",
          transform: `rotate(${up ? "-" : "+"}45deg)`,
        }}
      />
      <div
        className={classes.segment}
        style={{
          marginLeft: -1,
          transformOrigin: "center left",
          transform: `rotate(${up ? "+" : "-"}45deg)`,
        }}
      />
    </div>
  );
}
