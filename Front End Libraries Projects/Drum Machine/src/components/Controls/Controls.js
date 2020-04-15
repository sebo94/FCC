import React from "react";
import classes from "./Controls.module.css";
import Slider from "../UI/Slider/Slider";
import BtnSwitch from "../UI/Button/BtnSwitch/BtnSwitch";

const controls = (props) => {
  return (
    <div className={classes.Controls}>
      <div className={classes.SampleName}>{props.sampleName}</div>
      <div className={classes.BtnSwitch}>
        <BtnSwitch isOn={props.power} handleToggle={props.togglePower} />
      </div>
      <button onClick={props.changeSoundBank} disabled={!props.power}>
        Bank
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
