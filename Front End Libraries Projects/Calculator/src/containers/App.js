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
    evaluated: false,
  };

  updateDisplay = (event) => {
    const isOperator = /[+\-*/]/;
    const keyPressed = event.target.textContent;
    this.setState((prevState) => {
      const previousDisplay = prevState.display;
      const previousExpression = prevState.expression;
      const lastChar = previousExpression.charAt(previousExpression.length - 1);
      // Make one calculation per = press
      if (previousExpression.includes("=")) {
        const result = previousExpression.split("=").pop();
        if (isOperator.test(keyPressed)) {
          return {
            display: keyPressed,
            expression: result + keyPressed,
            evaluated: false,
          };
        } else {
          return {
            display: keyPressed,
            expression: keyPressed,
            evaluated: false,
          };
        }
      }
      // Avoid consecutive operator
      if (isOperator.test(lastChar) && isOperator.test(keyPressed)) {
        // Implement case of minus and let them concat twice

        let splittedString = previousExpression.split("");
        splittedString.splice(splittedString.length - 1, 1);
        const nextExpression = splittedString.concat(keyPressed).join("");
        return {
          display: keyPressed,
          expression: nextExpression,
          evaluated: false,
        };
      }
      // If display or expression is an operation sign
      if (isOperator.test(previousDisplay) || isOperator.test(keyPressed)) {
        return {
          display: keyPressed,
          expression: previousExpression + keyPressed,
          evaluated: false,
        };
      }
      let nextDisplay = "";
      let nextExpression = "";
      // If we start with a 0, do not concat the display, unless we put a "."
      if (previousDisplay === "0" || previousExpression === "0") {
        nextDisplay =
          keyPressed === "."
            ? (nextDisplay = previousDisplay + keyPressed)
            : (nextDisplay = keyPressed);
        return {
          display: nextDisplay,
          expression: nextDisplay,
          evaluated: false,
        };
      }
      // Handle "." press
      if (keyPressed === ".") {
        
        nextDisplay = previousDisplay.includes(keyPressed)
          ? previousDisplay
          : previousDisplay + keyPressed;
        return {
          display: nextDisplay,
          expression: nextExpression,
          evaluated: false,
        };
      } else {
        nextDisplay = previousDisplay + keyPressed;
        return {
          display: nextDisplay,
          expression: previousExpression + keyPressed,
          evaluated: false,
        };
      }
    });
  };

  performCalculus = () => {
    this.setState((prevState) => {
      if (!this.state.evaluated) {
        let expression = prevState.expression;
        const regex = /[+\-*/.]/;
        // If we end on an operation sign, remove it before calculating
        if (regex.test(expression.charAt(expression.length - 1))) {
          const newExp = expression.split("");
          newExp.pop();
          expression = newExp.join("");
        }
        // If we start with an operation sign or we only have one operation sign, return invalid
        if (
          (regex.test(expression) && expression.length === 1) ||
          regex.test(expression.charAt(0))
        ) {
          return {
            display: "NaN",
            expression: "NaN",
          };
        } else {
          const result =
            Math.round(1000000000000 * eval(expression)) / 1000000000000;
          return {
            display: result,
            expression: expression + "=" + result,
            evaluated: true,
          };
        }
      }
    });
  };

  resetDisplay = (event) => {
    const keyPressed = event.target.textContent;
    if (keyPressed === "AC") {
      this.setState({ display: "0", expression: "", evaluated: false });
    }
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
