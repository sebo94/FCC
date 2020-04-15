import React from "react";
import classes from "./Toolbar.module.css";

const toolbar = (props) => {
  const src = props.maximized
    ? "https://img.icons8.com/officel/16/000000/minimize-window.png"
    : "https://img.icons8.com/officel/16/000000/maximize-window.png";
  return (
    <div className={classes.Toolbar}>
      <h2>{props.name}</h2>
      <img onClick={props.toggleSize} src={src} alt="Icon" />
    </div>
  );
};

export default toolbar;
