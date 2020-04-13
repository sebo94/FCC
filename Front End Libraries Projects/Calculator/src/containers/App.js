import React, { Component } from "react";
import Display from "../components/Display/Display";
import Expression from "../components/Expression/Expression";
import Controls from "../components/Controls/Controls";
import classes from "./App.module.css";

const BUTTONS = [
  "7",
  "8",
  "9",
  "4",
  "5",
  "6",
  "1",
  "2",
  "3",
  "0",
  "+",
  "-",
  "*",
  "/",
  ".",
  "AC",
  "=",
];

class App extends Component {
  state = {
    display: "0",
    expression: "",
    controlsBank: BUTTONS,
  };

  updateDisplay = (event) => {
    const keyPressed = event.target.textContent;
    this.setState((prevState) => {
      const previousDisplay = prevState.display;
      const previousExpression = prevState.expression;
      const lastChar = previousExpression.substr(previousExpression.length - 1);
      // Avoid consecutive operator signs
      if (
        (lastChar === "+" && keyPressed === lastChar) ||
        (lastChar === "-" && keyPressed === lastChar) ||
        (lastChar === "*" && keyPressed === lastChar) ||
        (lastChar === "/" && keyPressed === lastChar)
      ) {
        return { display: previousDisplay, expression: previousExpression };
      }
      let nextDisplay = "";
      // If we are already showing an operation sign
      if (
        previousDisplay === "+" ||
        previousDisplay === "-" ||
        previousDisplay === "*" ||
        previousDisplay === "/"
      ) {
        return {
          display: keyPressed,
          expression: previousExpression + keyPressed,
        };
      }
      // If the keypressed is an operation sign
      if (
        keyPressed === "+" ||
        keyPressed === "-" ||
        keyPressed === "*" ||
        keyPressed === "/"
      ) {
        return {
          display: keyPressed,
          expression: previousExpression + keyPressed,
        };
      }

      // If we start with a 0, do not concat the display, unless we put a "."
      if (previousDisplay === "0") {
        nextDisplay =
          keyPressed === "."
            ? (nextDisplay = previousDisplay + keyPressed)
            : (nextDisplay = keyPressed);
        return {
          display: nextDisplay,
          expression: previousExpression + keyPressed,
        };
      }
      // Check if the display already contains a "." character
      if (keyPressed === ".") {
        nextDisplay = previousDisplay.includes(keyPressed)
          ? previousDisplay
          : previousDisplay + keyPressed;
        return {
          display: nextDisplay,
          expression: previousExpression + keyPressed,
        };
      } else {
        nextDisplay = previousDisplay + keyPressed;
        return {
          display: nextDisplay,
          expression: previousExpression + keyPressed,
        };
      }
    });
  };

  resetDisplay = (event) => {
    const keyPressed = event.target.textContent;
    if (keyPressed === "AC") {
      this.setState({ display: "0", expression: "" });
    }
  };

  performCalculus = () => {
    this.setState((prevState) => {
      const expression = this.state.expression;
      const result = eval(expression);
      return { display: result, expression: expression + "=" + result };
    });
  };

  render() {
    return (
      <div className={classes.App}>
        <Expression currentExpression={this.state.expression} />
        <Display currentDisplay={this.state.display} />
        <Controls
          controls={this.state.controlsBank}
          updateDisplay={this.updateDisplay}
          performCalculus={this.performCalculus}
          resetDisplay={this.resetDisplay}
        />
      </div>
    );
  }
}

export default App;
