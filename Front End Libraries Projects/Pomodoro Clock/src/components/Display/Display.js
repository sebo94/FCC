import React from "react";

const display = (props) => (
  <div>
    <p>{props.session ? "Session" : "Break"}</p>
    {props.currentValue}
  </div>
);

export default display;
