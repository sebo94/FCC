import React, { Component } from "react";
import classes from "./App.module.css";

const symbols = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  ".",
  "+",
  "-",
  "/",
  "*",
];

class App extends Component {
  state = {
    display: "",
    result: "",
  };

  updateDisplayHandler = (event) => {
    const inputChar = event.target.id;
    switch (inputChar) {
      case "+":
        this.setState({ result: "+" });
        break;
      case "-":
        this.setState({ result: "-" });
        break;
      case "*":
        this.setState({ result: "*" });
        break;
      case "/":
        this.setState({ result: "/" });
        break;
      case ".":
        this.setState((prevState) => {
          console.log(prevState.result)
          return { result: prevState.result + inputChar };
        });
        break;
      default:
        this.setState((prevState) => {
          const regex = /[+-/*]/;
          const nextState = regex.test(prevState.result)
            ? ""
            : prevState.result;
          return { result: nextState + inputChar };
        });
        break;
    }

    this.updateResultHandler(inputChar);
    
  };

  updateResultHandler = (inputChar) => {
    this.setState((prevState) => {
      const prevDisplay = prevState.display;
      if (prevDisplay.slice(-1) === inputChar) {
        return;
      } else {
        return {
          display: prevDisplay + inputChar,
        };
      }
    });
  }

  performCalculus = () => {
    const regex = /[.+-/*]/;
    const myVar = this.state.display.split(regex);
    console.log(myVar);
  };

  render() {
    return (
      <div className={classes.App}>
        <div className={classes.Display}>{this.state.display}</div>
        <div className={classes.Result}>{this.state.result}</div>
        <button onClick={this.performCalculus}>=</button>
        <div className={classes.NumbersGrid}>
          {symbols.map((number) => {
            return (
              <div
                key={number}
                onClick={this.updateDisplayHandler}
                className={classes.Number}
                id={number}
              >
                {number}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
