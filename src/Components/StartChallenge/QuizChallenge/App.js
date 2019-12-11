import React, { Component } from "react";
import "./App.css";
import Quiz from "./Quiz";
import { token } from "../../../Actions/fetchParams";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quiz: null
    };
  }

  componentDidMount = async () => {
    const quiz = await this.fetchQuiz(this.props.quizId);
    this.setState({ quiz });
  };

  fetchQuiz = async quizId => {
    try {
      let response = await fetch("http://localhost:3015/quiz/" + quizId, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + token
        }
      });
      if (response.ok) {
        let json = await response.json();
        if (json.success) {
          return json.quiz;
        } else console.log(json.error);
      }
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <div className="container">
        {this.state.quiz != null && <Quiz quiz={this.state.quiz} />}
      </div>
    );
  }
}

export default App;
