import React, { Component } from "react";
import { connect } from "react-redux";
import "../Quiz/Quiz.module.css";

const mapStateToProps = reduxStore => {
  return reduxStore;
};

const mapDispatchToProps = dispatch => ({
  addQuestion: (event, typeAction) =>
    dispatch({
      type: typeAction,
      payload: event
    })
});

class QuizFrom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      answers: [],
      title: "",
      correct: ""
    };
  }

  //UPDATE THE VALUE OF THE CORRECT ANSWER
  updateCorrectAnswer = event => {
    this.setState({ correct: event.target.value });
    let payload = {
      value: event.target.value,
      id: this.props.index
    };
    console.log(payload);
    this.props.addQuestion(payload, "ADD_CORRECT");
  };

  //UPDATE THE VALUE OF THE WRONG ANSWER
  updateWrongAnswer = event => {
    let answers = [...this.state.answers];
    answers[event.target.name].value = event.target.value;
    this.setState({ answers });
    this.props.addQuestion(event.target, "ADD_WRONG");
  };

  updateTitle = event => {
    let payload = {
      value: event.target.value,
      id: this.props.index
    };
    this.props.addQuestion(payload, "ADD_TITLE");
  };

  //  ADD NEW ANSWER TO THE QUESTION
  addWrongAnswer = () => {
    let answer = {
      id: this.props.index, //MI SERVE PER PRENDERMI POI DAL REDUCER L'INDEX DI OGNI QUESTION
      key: this.state.counter, //MI SERVE PER PRENDERMI DAL REDUCER LA POSIZIONE DELLA ANSWER DAL REDUCER
      value: ""
    };
    this.setState({
      answers: [...this.state.answers, answer]
    });
    this.setState({ counter: (this.state.counter += 1) });
  };

  render() {
    return (
      <>
        <div className="row">
          <div className="col-sm-12 col-lg-6 text-center mb-5">
            <img
              src="http://telugukshatriyamatrimony.com/img/no_image_startup.png"
              className=""
              width="150px"
            />
          </div>
          <div className="col-sm-12 col-lg-6 align-self-end">
            <label>Question </label>
            <input
              className="d-inline"
              name="title"
              type="text"
              value={this.state.inputText}
              onChange={e => this.updateTitle(e)}
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
          {this.state.answers.map((answer, index) => {
            return (
              <div className="col-sm-12 col-lg-6" key={index}>
                <p className="d-inline pl-4">Wrong</p>
                <input
                  className="d-inline"
                  name={index}
                  id={this.props.index}
                  type="text"
                  onChange={e => this.updateWrongAnswer(e)}
                />
              </div>
            );
          })}
        </div>
        <div className="d-inline">
          <button className="btn btn-primary" onClick={this.addWrongAnswer}>
            add wrong answer
          </button>
        </div>
        <hr />
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizFrom);
