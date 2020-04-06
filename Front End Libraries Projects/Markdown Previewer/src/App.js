import React from "react";
import Marked from "marked";
import Radium from "radium";
import "./App.css";

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

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`;

class App extends React.Component {
  state = {
    markdown: textToRender,
    showEditor: true,
    editorFull: false,
    editorClass: 'Editor',
    showPreviewer: true,
    previewerFull: false,
    previewerClass: 'Previewer'
  };

  changeHandler = (event) => {
    this.setState({
      markdown: event.target.value,
    });
  };

  editorSizeHandler = () => {
    if(this.state.editorFull) {
      this.setState({ showPreviewer: true, editorClass: 'Editor', editorFull: false });  
    } else {
    this.setState({ showPreviewer: false, editorClass: 'Editor-fullscreen', editorFull: true });
    }
  };

  previewerSizeHandler = () => {
    if(this.state.editorFull) {
      this.setState({ showPreviewer: true, editorClass: 'Editor', editorFull: false });  
    } else {
    this.setState({ showPreviewer: false, editorClass: 'Editor-fullscreen', editorFull: true });
    }
  };

  render() {
    return (
      <div className="App">
        {this.state.showEditor ? (
          <div className={this.state.editorClass}>
            <div className="container-toolbar">
              <div>
                <h2>Toolbar</h2>
              </div>
              <h2 onClick={this.editorSizeHandler}>fullscreen</h2>
            </div>
            <textarea
              id="editor"
              value={this.state.markdown}
              onChange={this.changeHandler}
            ></textarea>
          </div>
        ) : null}
        {this.state.showPreviewer ? (
          <div className="Previewer">
            <div className="container-toolbar">
              <div>
                <h2>Toolbar</h2>
              </div>
              <h2 onClick={this.previewerSizeHandler}>fullscreen</h2>
            </div>
            <div
              id="preview"
              dangerouslySetInnerHTML={{
                __html: Marked(this.state.markdown),
              }}
            />
          </div>
        ) : null}
      </div>
    );
  }
}

export default Radium(App);
