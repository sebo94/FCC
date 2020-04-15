import React from "react";

const sessionSettings = (props) => (
  <div>
    <button onClick={props.updateSession} disabled={props.paused}>
      Up
    </button>
    {props.sessionLenght}
    <button onClick={props.updateSession} disabled={props.paused}>
      Down
    </button>
  </div>
);

export default sessionSettings;
