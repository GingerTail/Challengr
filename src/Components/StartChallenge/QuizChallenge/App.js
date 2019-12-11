import React, { Component } from "react";
import "./App.css";
import Quiz from "./Quiz";
import { token } from "../../../Actions/fetchParams";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quiz: null,
      quizStarted: false
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
      <div className="container-fluid mb-4">
        {this.state.quizStarted === true ? (
          this.state.quiz != null && <Quiz quiz={this.state.quiz} />
        ) : (
          <div className="row">
            <div className="col-12">
              <h3>
                Before you go on with the quiz
                <br />
                remember that the timer will start after you clicked on the
                button
              </h3>
              <h4>When you are ready click the button</h4>
              <button
                onClick={this.setState({ quizStarted: true })}
                className="custon-btn px-3"
              >
                Start
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;
