import React from "react";
import "./BtnSwitch.css";

const btnSwitch = (props) => {
  return (
    <>
      <p>Power</p>
      <input
        checked={props.isOn}
        onChange={props.handleToggle}
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
      />
      <label
        style={{ background: props.isOn && "darkseagreen" }}
        className="react-switch-label"
        htmlFor={`react-switch-new`}
      >
        <span className={`react-switch-button`} />
      </label>
    </>
  );
};

export default btnSwitch;
