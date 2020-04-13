import React from "react";
import "./Control.css";

const control = (props) => {
  return (
    <div
      className={[props.className, "Control"].join(" ")}
      onClick={props.action}
    >
      {props.name}
    </div>
  );
};

export default control;
