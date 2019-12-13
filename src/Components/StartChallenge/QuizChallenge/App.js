import React, { Component } from "react";
import "./App.css";
import Quiz from "./Quiz";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { handleGetQuizFromDB } from "../../../Actions/ToDoChallengeActions";
import { getToken, refreshToken } from "../../../Actions/fetchParams";

const mapStateToProps = reduxStore => {
  return reduxStore;
};
const mapDispatchToProps = dispatch => ({
  getQuiz: quizId => dispatch(handleGetQuizFromDB(quizId))
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quiz: null,
      quizStarted: false,
      redirectTo: "",
      allowAccess: true
    };
  }

  componentDidMount = async () => {
    let token = getToken();
    let allowAccess = await refreshToken(token);
    this.setState({ allowAccess });
    this.props.getQuiz(this.props.quizId);
  };
  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.toDoQuiz !== this.props.toDoQuiz) {
      this.setState({ quiz: this.props.toDoQuiz });
    }
    if (this.state.quizStarted) {
      this.props.startTimer(true);
    }
  };

  render() {
    return this.state.allowAccess ? (
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
                onClick={() => this.setState({ quizStarted: true })}
                className="custom-btn px-3"
              >
                Start
              </button>
            </div>
          </div>
        )}
      </div>
    ) : (
      <Redirect to="/login" />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
