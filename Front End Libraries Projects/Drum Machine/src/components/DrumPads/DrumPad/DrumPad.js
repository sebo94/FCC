import React from "react";
import classes from "./DrumPad.module.css";

const drumPad = (props) => {
  const audio = new Audio(props.audioUrl);
  const start = () => {
    audio.currentTime = 0;
    audio.play();
  }

  const keyPressHandler = (event) => {
      console.log("something is going on")
  }
  return (
    <div className={classes.DrumPad} onClick={start} onKeyPress={keyPressHandler}>
      <p>{props.keyTrigger}</p>
    </div>
  );
};

export default drumPad;
