import React from "react";
import classes from "./Display.module.css";

const display = (props) => {
  return (
    <div className={classes.Display}>
      {props.currentDisplay}
    </div>
  );
};

export default display;
