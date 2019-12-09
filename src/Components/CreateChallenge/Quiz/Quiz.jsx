import React, { Component, Fragment } from "react";
import QuizFrom from "./QuizForm";
import QuizList from "./QuizList";
import { connect } from "react-redux";
import style from "./Quiz.module.css";
import { handleAddQuestion } from "../../../Actions/handleAddQuestion";
import { Link } from "react-router-dom";

const mapStateToProps = reduxStore => {
  return reduxStore;
};

const mapDispatchToProps = dispatch => ({
  addQuestion: question => dispatch(handleAddQuestion(question))
});

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      question: {
        question: {
          text: "",
          image: ""
        },
        correctAnswer: "",
        answers: [""]
      },
      nextPage: false
    };
  }

  componentDidMount = () => {
    this.setState({ isLoaded: true });
  };

  AddQuestion = () => {
    this.props.addQuestion(this.state.question);
  };

  allowLink = event => {
    if (this.props.quiz.questions.length <= 4) {
      event.preventDefault();
    }
  };

  render() {
    return (
      <>
        <div
          className={`${style.quizContainer} container-fluid text-left mb-5 ${
            this.state.isLoaded ? style.fadeIn : ""
          }`}
        >
          <h3 className="text-center">Quiz</h3>
          <div className="row">
            {this.props.quiz.questions.map((question, index) => {
              return (
                <div className="col-12" key={index}>
                  <QuizFrom index={index} />
                </div>
              );
            })}
            <div className="col-12 text-center">
              <button
                className="custom-btn float-left"
                onClick={this.AddQuestion}
              >
                Add Question
              </button>
              <Link
                to="/create/demo"
                /*   onClick={event => this.allowLink(event)} */
                className="custom-btn disabled-link"
              >
                Next
              </Link>
            </div>
            {/* <div className="col-12 mt-3">
              <QuizList />
            </div> */}
          </div>
        </div>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
