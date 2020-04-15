import React, { Component } from "react";
import classes from "./App.module.css";
import BreakSettings from "../components/BreakSettings/BreakSettings";
import SessionSettings from "../components/SessionSettings/SessionSettings";
import Display from "../components/Display/Display";
import Controls from "../components/Controls/Controls";
import audio from "../assets/audio/alarm.wav";

const initialState = {
  breakLenght: 5,
  sessionLenght: 25,
  display: "25:00",
  paused: false,
  session: true,
  btnStart: false,
  reset: false,
};

class App extends Component {
  state = initialState;

  updateBreak = (event) => {
    const action = event.target.innerHTML;
    this.setState((prevState) => {
      const currentBreakLenght = prevState.breakLenght;
      if (currentBreakLenght < 60 && currentBreakLenght > 1) {
        const nextBreakLenght =
          action === "Up" ? currentBreakLenght + 1 : currentBreakLenght - 1;
        return { breakLenght: nextBreakLenght };
      }
    });
  };

  updateSession = (event) => {
    const action = event.target.innerHTML;
    this.setState((prevState) => {
      const currentSessionLenght = prevState.sessionLenght;
      if (currentSessionLenght < 60 && currentSessionLenght > 1) {
        const nextSessionLenght =
          action === "Up" ? currentSessionLenght + 1 : currentSessionLenght - 1;
        return {
          sessionLenght: nextSessionLenght,
          display: nextSessionLenght.toString() + ":00",
        };
      }
    });
  };

  countDown = (minutes, seconds, interrupted) => {
    console.log(minutes, seconds)
    if (interrupted === undefined) {
    console.log("what the heck is going on here")
    } else {
      interrupted ? this.tick(minutes, seconds) : this.tick(minutes - 1, 60);
    }
  };

  tick = (minutes, seconds) => {
    if (!this.state.paused) {
      seconds--;
      const newTime =
        minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
      this.setState({ display: newTime });
      if (minutes === 0 && seconds === 0) {
        const alarm = new Audio(audio);
        alarm.play();
        if (this.state.session) {
          this.setState(
            (prevState) => {
              return {
                display: prevState.breakLenght.toString() + ":00",
                session: false,
              };
            },
            () => this.startTimer()
          );
        } else {
          this.setState(
            (prevState) => {
              return {
                display: prevState.sessionLenght.toString() + ":00",
                session: false,
              };
            },
            () => this.startTimer()
          );
        }
      }
      if (seconds > 0) {
        setTimeout(() => this.tick(minutes, seconds), 1000);
      } else {
        if (minutes > 1) {
          this.countDown(minutes - 1);
        }
      }
    }
  };

  startTimer = () => {
    const intValues = this.state.display
      .split(":")
      .map((value) => Number.parseInt(value));
    const minutes = intValues[0];
    const seconds = intValues[1];
    this.setState({ btnStart: true });
    this.state.paused
      ? this.setState(
          (prevState) => {
            return { paused: !prevState.paused };
          },
          () => this.countDown(minutes, seconds, true)
        )
      : this.countDown(minutes, seconds, false);
  };

  pauseTimer = () => {
    this.setState({ paused: !this.state.paused, btnStart: false });
  };

  resetTimer = () => {
    this.setState({
      reset: false,
      paused: true,
      btnStart: false,
      breakLenght: 5,
      sessionLenght: 25,
      display: "25:00",
    });
  };

  render() {
    return (
      <div className={classes.App}>
        Pomodoro Clock
        <BreakSettings
          breakLenght={this.state.breakLenght}
          updateBreak={this.updateBreak}
          paused={this.state.reset}
        />
        <SessionSettings
          sessionLenght={this.state.sessionLenght}
          updateSession={this.updateSession}
          paused={this.state.reset}
        />
        <Display
          currentValue={this.state.display}
          session={this.state.session}
        />
        <Controls
          startTimer={this.startTimer}
          pauseTimer={this.pauseTimer}
          resetTimer={this.resetTimer}
          paused={this.state.btnStart}
        />
      </div>
    );
  }
}

export default App;
