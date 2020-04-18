import React from "react";
import classes from './Display.module.css';

const display = (props) => (
  <div>
    <p className={classes.Title}>{props.session ? "Session" : "Break"}</p>
    <p className={classes.Value}>{props.currentValue}</p>
  </div>
);

export default display;
