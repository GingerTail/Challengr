import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => state;

class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      minutes: 0,
      seconds: 0,
      totalSeconds: 0,
      end: false
    };
  }
  componentDidMount = () => {
    console.log("MOUNTED");
    if (this.props.toDoQuiz.time !== undefined) {
      this.setState({ totalSeconds: this.props.toDoQuiz.time });
    }
  };

  getTime = totalSeconds => {
    setTimeout(() => {
      let minutes = Math.floor(totalSeconds / 60);
      let seconds = minutes >= 1 ? totalSeconds - minutes * 60 : totalSeconds;
      totalSeconds -= 1;
      this.setState({ minutes, seconds, totalSeconds });
    }, 1000);
    return `${this.state.minutes}:${
      this.state.seconds < 10 ? `0${this.state.seconds}` : this.state.seconds
    }`;
  };

  render() {
    return (
      this.state.totalSeconds !== 0 && this.getTime(this.state.totalSeconds)
    );
  }
}

export default connect(mapStateToProps)(Timer);
