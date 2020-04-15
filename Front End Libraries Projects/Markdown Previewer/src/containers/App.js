import React from "react";
import Editor from "../components/Editor/Editor";
import Previewer from "../components/Previewer/Previewer";
import classes from "./App.module.css";

const textToRender = `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com)

`;

const initialState = {
  markdown: textToRender,
  editorMaximized: false,
  previewerMaximized: false,
};

class App extends React.Component {
  state = initialState;

  changeHandler = (event) => {
    this.setState({
      markdown: event.target.value,
    });
  };

  toggleEditor = () => {
    this.setState((prevState) => {
      return { editorMaximized: !prevState.editorMaximized };
    });
  };

  togglePreviewer = () => {
    this.setState((prevState) => {
      return { previewerMaximized: !prevState.previewerMaximized };
    });
  };

  render() {
    const editor = (
      <Editor
        name="Editor"
        markdown={this.state.markdown}
        changeHandler={this.changeHandler}
        fullScreen={this.state.editorMaximized}
        toggleSize={this.toggleEditor}
      />
    );
    const previewer = (
      <Previewer
        name="Previewer"
        markdown={this.state.markdown}
        fullScreen={this.state.previewerMaximized}
        toggleSize={this.togglePreviewer}
      />
    );
    return (
      <div className={classes.App}>
        {!this.state.previewerMaximized ? editor : null}
        {!this.state.editorMaximized ? previewer : null}
      </div>
    );
  }
}

export default App;
