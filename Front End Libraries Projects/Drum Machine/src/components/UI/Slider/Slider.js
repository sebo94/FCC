import React from "react";
import classes from "./Slider.module.css";

const slider = (props) => (
  <div>
    <div className={classes.Slidecontainer}>
      <p>Custom range slider:</p>
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={props.volume}
        onChange={props.changeVolume}
        className={classes.Slider}
        disabled={props.disabled}
      />
    </div>
  </div>
);

export default slider;
