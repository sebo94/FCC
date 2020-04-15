import React from "react";

const breakSettings = (props) => {
  return (
    <div>
      <button onClick={props.updateBreak} disabled={props.paused}>
        Up
      </button>
      {props.breakLenght}
      <button onClick={props.updateBreak} disabled={props.paused}>
        Down
      </button>
    </div>
  );
};

export default breakSettings;
