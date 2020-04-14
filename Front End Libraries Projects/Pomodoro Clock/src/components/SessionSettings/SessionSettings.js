import React from "react";

const sessionSettings = (props) => (
  <div>
    <button onClick={props.updateSession} disabled={props.playing}>
      Up
    </button>
    {props.sessionLenght}
    <button onClick={props.updateSession} disabled={props.playing}>
      Down
    </button>
  </div>
);

export default sessionSettings;
