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
    currentValue: "0",
    previousValue: "",
    expression: "",
    controlsBank: BUTTONS,
    evaluated: false,
  };

  updateDisplay = (event) => {
    const isOperator = /[+\-*/]/;
    const isSign = /[+-]/;
    const isDivMult = /[*/]/;
    const keyPressed = event.target.textContent;
    this.setState((prevState) => {
      const { previousValue, currentValue, expression } = prevState;
      // Make one calculation per = press
      if (expression.includes("=")) {
        const previousResult = expression.split("=").pop();
        if (isOperator.test(keyPressed)) {
          return {
            previousValue: keyPressed,
            currentValue: keyPressed,
            expression: previousResult + keyPressed,
            evaluated: false,
          };
        } else {
          return {
            previousValue: keyPressed,
            currentValue: keyPressed,
            expression: keyPressed,
            evaluated: false,
          };
        }
      }
      // If the current value is 0 do not concat unless we are pressing a "."
      if (currentValue === "0") {
        if (keyPressed === ".") {
          if (expression !== "0") {
            return {
              previousValue: keyPressed,
              currentValue: currentValue + keyPressed,
              expression: "0" + expression + keyPressed,
              evaluated: false,
            };
          }
        } else {
          return {
            previousValue: keyPressed,
            currentValue: keyPressed,
            expression: keyPressed,
            evaluated: false,
          };
        }
      }
      // Handle "." press
      if (keyPressed === ".") {
        // After an operator is pressed, if we have no number add a 0
        if (isOperator.test(previousValue)) {
          return {
            previousValue: keyPressed,
            currentValue: "0" + keyPressed,
            expression: expression + "0" + keyPressed,
            evaluated: false,
          };
        }
        // If we already have a "."
        if (currentValue.includes(".")) {
          return {
            previousValue: keyPressed,
            currentValue: currentValue,
            expression: expression,
            evaluated: false,
          };
        } else {
          return {
            previousValue: keyPressed,
            currentValue: currentValue + keyPressed,
            expression: expression + keyPressed,
            evaluated: false,
          };
        }
      }
      // Handle operator press
      if (isOperator.test(keyPressed)) {
        // If we press a sign, we want to be able to concat, otherwise we replace the char
        if (isSign.test(keyPressed)) {
          // If we chain more than two operators, nothing happens
          if (
            isOperator.test(expression.charAt(expression.length - 1)) &&
            isOperator.test(expression.charAt(expression.length - 2))
          ) {
            return {
              previousValue: keyPressed,
              currentValue: currentValue,
              expression: expression,
              evaluated: false,
            };
          } else {
            return {
              previousValue: keyPressed,
              currentValue: keyPressed,
              expression: expression + keyPressed,
              evaluated: false,
            };
          }
        } else {
          // If the last and second to last are not operators replace that, otherwise cut and replace
          const lastChar = expression.charAt(expression.length - 1);
          const secondToLastChar = expression.charAt(expression.length - 2);
          if (
            !(isOperator.test(lastChar) && isOperator.test(secondToLastChar))
          ) {
            let newExpression = isOperator.test(previousValue)
              ? expression.replace(/.$/, keyPressed)
              : expression + keyPressed;
            return {
              previousValue: keyPressed,
              currentValue: keyPressed,
              expression: newExpression,
              evaluated: false,
            };
          } else {
            let newExpression = expression.substring(0, expression.length - 2);
            console.log(newExpression);
            return {
              previousValue: keyPressed,
              currentValue: keyPressed,
              expression: newExpression + keyPressed,
              evaluated: false,
            };
          }
        }
      }
      // Handle number press
      if (!Number.isNaN(keyPressed)) {
        let nextValue = isOperator.test(previousValue)
          ? keyPressed
          : currentValue + keyPressed;
        return {
          previousValue: keyPressed,
          currentValue: nextValue,
          expression: expression + keyPressed,
          evaluated: false,
        };
      }
    });
  };

  performCalculus = () => {
    this.setState((prevState) => {
      if (!this.state.evaluated) {
        let { expression } = prevState;
        const regex = /[+\-*/.]/;
        const isDivMult = /[*/]/;
        // If we end on an operation sign, remove it before calculating
        if (regex.test(expression.charAt(expression.length - 1))) {
          if (regex.test(expression.charAt(expression.length - 2))) {
            expression = expression.substring(0, expression.length - 1);
          }
          expression = expression.substring(0, expression.length - 1);
        }
        // If we start with an operation sign or we only have one operation sign, return invalid
        if (
          (regex.test(expression) && expression.length === 1) ||
          isDivMult.test(expression.charAt(0))
        ) {
          return {
            display: "NaN",
            expression: "NaN",
          };
        } else {
          const result =
            Math.round(1000000000000 * eval(expression)) / 1000000000000;
          return {
            currentValue: result,
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
      this.setState({ currentValue: "0", expression: "", evaluated: false });
    }
  };

  render() {
    return (
      <div className={classes.App}>
        <Expression currentExpression={this.state.expression} />
        <Display currentDisplay={this.state.currentValue} />
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
