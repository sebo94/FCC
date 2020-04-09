import React from "react";
import classes from "./Controls.module.css";
import Slider from "../UI/Slider/Slider";

const controls = (props) => {
  return (
    <div className={classes.Controls}>
      <p>Controls</p>
      <p>{props.sampleName}</p>
      <button
        className={props.power ? classes.PowerOn : classes.PowerOff}
        onClick={props.togglePower}
      >
        Power
      </button>
      <button onClick={props.changeSoundBank} disabled={!props.power}>
        Change Sounds
      </button>
      <Slider
        volume={props.volume}
        changeVolume={props.changeVolume}
        disabled={!props.power}
      />
    </div>
  );
};

export default controls;
