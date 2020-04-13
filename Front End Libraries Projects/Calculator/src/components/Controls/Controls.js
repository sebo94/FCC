import React from "react";
import Control from "./Control/Control";
import './Controls.css';

const controls = (props) => {
  let className = "";
  let action = null;
  const controls = props.controls.map((control) => {
    switch (control.toLowerCase()) {
      case "ac":
        className = "Cancel";
        action= props.resetDisplay;
        break;
      case "0":
        className = "Zero Number";
        action= props.updateDisplay;
        break;
      case "=":
        className = "Equal";
        action= props.performCalculus;
        break;
      case "-":
        className = "Minus Operator";
        action= props.updateDisplay;
        break;
      case "+":
        className = "Plus Operator";
        action= props.updateDisplay;
        break;
      case "/":
        className = "Divide Operator";
        action= props.updateDisplay;
        break;
      case "*":
        className = "Multiply Operator";
        action= props.updateDisplay;
        break;
      default:
        className = "Number";
        action= props.updateDisplay;
        break;
    }
    return (
      <Control
        key={control}
        id={control}
        name={control}
        className={className}
        action={action}
      ></Control>
    );
  });
  return <div className={"Controls"}>{controls}</div>;
};
export default controls;
