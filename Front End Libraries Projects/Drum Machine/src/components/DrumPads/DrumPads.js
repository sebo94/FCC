import React from "react";
import DrumPad from "./DrumPad/DrumPad";
import classes from './DrumPads.module.css';

const drumPads = (props) => {
  let drumPadCollection = null;
  drumPadCollection = props.soundBank.map((drumPadElement) => {
    return (
      <DrumPad
        key={drumPadElement.id}
        name={drumPadElement.id}
        keyTrigger={drumPadElement.keyTrigger}
        audioUrl={drumPadElement.url}
        updateDisplay={props.displayUpdated}
        power={props.power}
        volume={props.volume}
      />
    );
  });
  return <div className={classes.DrumPads}
  >{drumPadCollection}</div>;
};

export default drumPads;
