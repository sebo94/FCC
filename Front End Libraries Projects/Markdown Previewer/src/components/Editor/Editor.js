import React from "react";
import Toolbar from "../../UI/Toolbar/Toolbar";
import "./Editor.css";

const editor = (props) => {
  const myClasses = props.fullScreen ? ["Editor", "Fullscreen"] : ["Editor"];
  return (
    <div className={myClasses.join(" ")}>
      <Toolbar
        name={props.name}
        maximized={props.fullScreen}
        toggleSize={props.toggleSize}
      />
      <textarea
        id="editor"
        value={props.markdown}
        onChange={props.changeHandler}
      ></textarea>
    </div>
  );
};

export default editor;
