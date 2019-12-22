import React, { Component, Fragment } from "react";
import QuizFrom from "./QuizForm";
import QuizList from "./QuizList";
import { connect } from "react-redux";
import "./Quiz.module.css";
import { handleAddQuestion } from "../../../Actions/handleAddQuestion";
import { Link } from "react-router-dom";

const mapStateToProps = reduxStore => {
  return reduxStore;
};

const mapDispatchToProps = dispatch => ({
  addQuestion: question => dispatch(handleAddQuestion(question)),
  setCurrentTab: currentTab =>
    dispatch({
      type: "SET_CURRENT_TAB",
      payload: currentTab
    })
});

class QuizTab extends Component {
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

  allowLink = (event, tab) => {
    /*  if (this.props.quiz.questions.length <= 4) {
      event.preventDefault();
    } */
    this.props.setCurrentTab(tab);
  };

  render() {
    return (
      <>
        <div className="text-left mb-5 mt-0">
          <div className="row">
            <div className="col-12">
              {this.props.quiz.questions.map((question, index) => {
                return (
                  <div className="col-12" key={index}>
                    <QuizFrom index={index} />
                  </div>
                );
              })}
              <div className="col-6 text-center">
                <button className="btn"
                  className="btn width='100%' float-left"
                  onClick={this.AddQuestion}
                >
                  Add Question
              </button>
                <button
                  onClick={event => this.allowLink(event, "1")}
                  className="btn mr-1 d-inline"
                >
                  Previous
              </button>
                <button
                  onClick={event => this.allowLink(event, "3")}
                  className="btn ml-1 d-inline"
                >
                  Next
              </button>
              </div>
              {/* <div className="col-12 mt-3">
              <QuizList />
            </div> */}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizTab);
