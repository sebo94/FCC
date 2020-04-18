import React from "react";
import classes from "./BreakSettings.module.css";

const breakSettings = (props) => {
  return (
    <div>
      <h4>Break Length</h4> 
      <div>
        <img
          id="breakUp"
          src="https://img.icons8.com/android/24/000000/thick-arrow-pointing-up.png"
          onClick={props.updateBreak}
          disabled={props.paused}
          alt="Arrow Up"
          className={classes.Arrow}
        />
        <p className={classes.Length}>{props.breakLenght}</p>
        <img
          id="breakDown"
          src="https://img.icons8.com/android/24/000000/thick-arrow-pointing-down.png"
          onClick={props.updateBreak}
          disabled={props.paused}
          alt="Arrow Down"
          className={classes.Arrow}
        />
      </div>
    </div>
  );
};

export default breakSettings;
