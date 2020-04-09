import React, { Component } from "react";
import classes from "./DrumPad.module.css";

class DrumPad extends Component {
  state = {
    innerPadStyle: classes.DrumPadInner,
    padStyle: classes.DrumPad,
  };

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }

  handleKeyDown = (event) => {
    const keyTrigger = this.props.keyTrigger;
    if (keyTrigger.charCodeAt(0) === event.keyCode) {
      this.playSound();
    }
  };

  changeStyling = (innerStyles, padStyles) => {
    this.setState({
      innerPadStyle: innerStyles.join(" "),
      padStyle: padStyles.join(" "),
    });
    setTimeout(() => {
      this.setState({
        innerPadStyle: classes.DrumPadInner,
        padStyle: classes.DrumPad,
      });
    }, 100);
  };

  playSound = () => {
    const innerStyles = [classes.DrumPadInner, classes.DrumPadInnerClicked];
    if (this.props.power) {
      const audio = document.getElementById(this.props.keyTrigger);
      audio.currentTime = 0;
      audio.play();
      audio.volume = this.props.volume
      const padStyles = [
        classes.DrumPad,
        classes.DrumPadClicked,
        classes.Orange,
      ];
      this.changeStyling(innerStyles, padStyles);
      this.props.updateDisplay(this.props.name);
    } else {
      const padStyles = [classes.DrumPad, classes.DrumPadClicked];
      this.changeStyling(innerStyles, padStyles);
      this.props.updateDisplay("");
    }
  };

  render() {
    console.log(this.props.volume);
    return (
      <div
        className={this.state.padStyle}
        id={this.props.name}
        onClick={this.playSound}
      >
        <div className={this.state.innerPadStyle}>
          <audio
            className="sample"
            id={this.props.keyTrigger}
            src={this.props.audioUrl}
          ></audio>
          {this.props.keyTrigger}
        </div>
      </div>
    );
  }
}

export default DrumPad;
