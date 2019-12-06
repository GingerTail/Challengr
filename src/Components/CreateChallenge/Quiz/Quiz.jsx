import React, { Component, Fragment } from "react";
import QuizFrom from "./QuizForm";
import QuizList from "./QuizList";
import { connect } from "react-redux";
import style from "./Quiz.module.css";
import { handleAddQuestion } from "../../../Actions/handleAddQuestion";

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
      }
    };
  }

  componentDidMount = () => {
    this.setState({ isLoaded: true });
  };

  AddQuestion = () => {
    this.props.addQuestion(this.state.question);
  };

  render() {
    return (
      <>
        <div
          className={`${style.quizContainer} text-left mb-5 ${
            this.state.isLoaded ? style.fadeIn : ""
          }`}
        >
          <div className="row">
            {this.props.quiz.questions.map((question, index) => {
              return (
                <div className="col-12" key={index}>
                  <QuizFrom index={index} />
                </div>
              );
            })}
            <button className="btn btn-primary" onClick={this.AddQuestion}>
              Add Question
            </button>
            <div className="col-12">
              <QuizList />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
