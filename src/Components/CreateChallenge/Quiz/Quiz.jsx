import React, { Component, Fragment } from "react";
import QuizFrom from "./QuizForm";
import QuizList from "./QuizList";
import style from "./Quiz.module.css";

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
          className={ `${style.quizContainer} text-left mb-5 ${
            this.state.isLoaded ?  style.fadeIn  : ""
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
