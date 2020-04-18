import React from "react";
import classes from "./SessionSettings.module.css";

const sessionSettings = (props) => (
  <div>
    <h4>Session Length</h4>
    <div>
      <img
        id="breakUp"
        src="https://img.icons8.com/android/24/000000/thick-arrow-pointing-up.png"
        onClick={props.updateSession}
        disabled={props.paused}
        alt="Arrow Up"
        className={classes.Arrow}
      />
      <p className={classes.Length}>{props.sessionLenght}</p>
      <img
        id="breakDown"
        src="https://img.icons8.com/android/24/000000/thick-arrow-pointing-down.png"
        onClick={props.updateSession}
        disabled={props.paused}
        alt="Arrow Down"
        className={classes.Arrow}
      />
    </div>
  </div>
);

export default sessionSettings;
