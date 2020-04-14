import React from "react";

const controls = (props) => {
  return (
    <div>
      <button onClick={props.startTimer}>Start Timer</button>
      <button onClick={props.pauseTimer}>Pause Timer</button>
      <button onClick={props.resetTimer}>Reset Timer</button>
    </div>
  );
};

export default controls;