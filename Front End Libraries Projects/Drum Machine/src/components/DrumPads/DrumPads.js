import React from "react";
import DrumPad from "./DrumPad/DrumPad";

const drumPads = (props) => {
  let drumPadCollection = null;
  drumPadCollection = props.soundBank.map((drumPadElement) => {
    return (
      <DrumPad
        key={drumPadElement.id}
        keyTrigger={drumPadElement.keyTrigger}
        audioUrl={drumPadElement.url}
      />
    );
  });
  return <div>{drumPadCollection}</div>;
};

export default drumPads;
