import React from "react";
import classes from "./Controls.module.css";

const controls = (props) => {
  return (
    <div>
      <img
        src="https://img.icons8.com/android/24/000000/play.png"
        alt="Play Button"
        onClick={props.startTimer}
        disabled={props.paused}
        className={classes.Control}
      />
      <img
        src="https://img.icons8.com/android/24/000000/pause.png"
        alt="Pause Button"
        onClick={props.pauseTimer}
        disabled={!props.paused}
        className={classes.Control}
      />
      <img
        src="https://img.icons8.com/android/24/000000/recurring-appointment.png"
        alt="Reset Button"
        onClick={props.resetTimer}
        className={classes.Control}
      />
    </div>
  );
};

export default controls;
