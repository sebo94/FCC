import React, { Component } from "react";
import Controls from "../components/Controls/Controls";
import DrumPads from "../components/DrumPads/DrumPads";
import classes from "./App.module.css";

const bankOne = [
  {
    keyTrigger: "Q",
    id: "Heater-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  },
  {
    keyTrigger: "W",
    id: "Heater-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  },
  {
    keyTrigger: "E",
    id: "Heater-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  },
  {
    keyTrigger: "A",
    id: "Heater-4",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  },
  {
    keyTrigger: "S",
    id: "Clap",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  },
  {
    keyTrigger: "D",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  },
  {
    keyTrigger: "Z",
    id: "Kick-n'-Hat",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  },
  {
    keyTrigger: "X",
    id: "Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  },
  {
    keyTrigger: "C",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  },
];

const bankTwo = [
  {
    keyTrigger: "Q",
    id: "Chord-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
  },
  {
    keyTrigger: "W",
    id: "Chord-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
  },
  {
    keyCode: 69,
    keyTrigger: "E",
    id: "Chord-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
  },
  {
    keyTrigger: "A",
    id: "Shaker",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
  },
  {
    keyTrigger: "S",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
  },
  {
    keyTrigger: "D",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
  },
  {
    keyTrigger: "Z",
    id: "Punchy-Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
  },
  {
    keyTrigger: "X",
    id: "Side-Stick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
  },
  {
    keyTrigger: "C",
    id: "Snare",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
  },
];

class App extends Component {
  state = {
    soundBank: bankOne,
    bankName: "Heater Kit",
    display: "",
    power: true,
    volume: 1,
  };

  displayUpdated = (newDisplay) => {
    this.setState({ display: newDisplay });
  };

  togglePowerHandler = () => {
    this.setState((prevState) => {
      return { power: !prevState.power, display: "" };
    });
  };

  soundBankChangedHandler = () => {
    const bankName = this.state.bankName;
    if (bankName === "Heater Kit") {
      this.setState({
        soundBank: bankTwo,
        bankName: "Smooth Piano Kit",
        display: "Smooth Piano Kit",
      });
    } else {
      this.setState({
        soundBank: bankOne,
        bankName: "Heater Kit",
        display: "Heater Kit",
      });
    }
  };

  changeVolumeHandler = (event) => {
    this.setState({ volume: event.target.value, display: 'volume: ' + event.target.value });
    setTimeout(() => {
      this.setState({display: ''})
    }, 600);
  };

  render() {
    return (
      <div className={classes.App}>
        <DrumPads
          soundBank={this.state.soundBank}
          displayUpdated={this.displayUpdated}
          power={this.state.power}
          volume={this.state.volume}
        />
        <Controls
          sampleName={this.state.display}
          togglePower={this.togglePowerHandler}
          power={this.state.power}
          changeSoundBank={this.soundBankChangedHandler}
          volume={this.state.volume}
          changeVolume={this.changeVolumeHandler}
        />
      </div>
    );
  }
}

export default App;
