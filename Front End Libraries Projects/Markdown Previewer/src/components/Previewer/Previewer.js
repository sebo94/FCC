import React from "react";
import Marked from "marked";
import Toolbar from "../../UI/Toolbar/Toolbar";
import './Previewer.css';

const previewer = (props) => {
    console.log(props.fullScreen)
  const myClasses = props.fullScreen
    ? ["Previewer", "Fullscreen"]
    : ["Previewer"];
  return (
    <div className={myClasses.join(" ")}>
      <Toolbar
        name={props.name}
        maximized={props.fullScreen}
        toggleSize={props.toggleSize}
      />
      <div
        dangerouslySetInnerHTML={{
          __html: Marked(props.markdown),
        }}
        className={"PreviewerBody"}
      ></div>
    </div>
  );
};

export default previewer;
