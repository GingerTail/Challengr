import React, { Component } from "react";
import { connect } from "react-redux";
import "../Quiz/Quiz.module.css";
import { handleAddQuestion } from "../../../Actions/handleAddQuestion";

const mapStateToProps = reduxStore => {
  return reduxStore;
};

const mapDispatchToProps = dispatch => ({
  addQuestion: question => dispatch(handleAddQuestion(question))
});

class QuizFrom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: "",
      question: {
        title: "",
        correct: "",
        answers: [""]
      }
    };
  }

  showstore = () => {
    console.log(this.props.quiz);
  };

  SubmitQuestion = () => {
    let wrongAnswers = this.state.question.answers;
    let correctAnswer = this.state.question.correct;
    let title = this.state.inputText;
    let question = {
      text: title,
      answers: wrongAnswers, //strings
      correctAnswer: correctAnswer
    };
    console.log(question);
    this.props.addQuestion(question);
  };

  updateCorrectAnswer = event => {
    let correct = event.target.value;
    if (correct !== null) {
      this.setState(prevState => ({
        question: {
          ...prevState.question,
          correct: correct
        }
      }));
    }
  };

  updateWrongAnswer = event => {
    let answers = this.state.question.answers;
    answers[event.target.name] = event.target.value;
    this.setState(prevState => ({
      question: {
        ...prevState.question,
        answers: answers
      }
    }));
  };

  addWrongAnswer = () => {
    let answers = this.state.question.answers;
    answers.push("");
    this.setState(prevState => ({
      question: {
        ...prevState.question,
        answers: answers
      }
    }));
  };

  render() {
    return (
      <>
        <div className="row">
          <div className="col-sm-12 col-lg-6 align-self-end">
            <label>Question </label>
            <input
              className="d-inline"
              name="title"
              type="text"
              value={this.state.inputText}
              onChange={e => this.setState({ inputText: e.target.value })}
            />
          </div>
          <div className="col-sm-12 col-lg-6 text-center mb-5">
            <img
              src="http://telugukshatriyamatrimony.com/img/no_image_startup.png"
              className=""
              width="150px"
            />
          </div>
          <div className="col-sm-12 col-lg-6">
            <p className="d-inline pl-4">Correct</p>
            <input
              className="d-inline"
              index="correct"
              type="text"
              onChange={e => this.updateCorrectAnswer(e)}
            />
          </div>
          {this.state.question.answers.map((answer, index) => {
            return (
              <div className="col-sm-12 col-lg-6" key={index}>
                <p className="d-inline pl-4">Wrong</p>
                <input
                  className="d-inline"
                  name={index}
                  type="text"
                  onChange={e => this.updateWrongAnswer(e)}
                />
              </div>
            );
          })}
        </div>
        <div className="d-inline mr-4">
          <button className="btn btn-primary" onClick={this.SubmitQuestion}>
            + Add to list
          </button>
        </div>
        <div className="d-inline">
          <button className="btn btn-primary" onClick={this.addWrongAnswer}>
            add wrong answer
          </button>
        </div>
        <div className="">
          <button className="btn btn-primary" onClick={this.showstore}>
            Test reduxquiz
          </button>
        </div>
        <hr />
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizFrom);
