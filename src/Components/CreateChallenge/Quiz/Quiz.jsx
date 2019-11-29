import React, { Component, Fragment } from "react";
import QuizFrom from "./QuizForm";
import QuizList from "./QuizList";
import "../Quiz/quiz.css";

export default class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false
    };
  }

  componentDidMount = () => {
    this.setState({ isLoaded: true });
  };

  render() {
    return (
      <>
        <div
          className={`quiz-container text-left mb-5 ${
            this.state.isLoaded ? "fadeIn" : ""
          }`}
        >
          <div className="row">
            <div className="col-12">
              <QuizFrom />
            </div>
            <div className="col-12">
              <QuizList />
            </div>
          </div>
        </div>
        <style jsx>{``}</style>
      </>
    );
  }
}
