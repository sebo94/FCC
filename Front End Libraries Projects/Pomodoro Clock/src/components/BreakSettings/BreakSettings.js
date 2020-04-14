import React from "react";

const breakSettings = (props) => {
  return (
    <div>
      <button onClick={props.updateBreak} disabled={props.playing}>
        Up
      </button>
      {props.breakLenght}
      <button onClick={props.updateBreak} disabled={props.playing}>
        Down
      </button>
    </div>
  );
};

export default breakSettings;
