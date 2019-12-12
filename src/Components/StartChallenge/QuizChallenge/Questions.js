import React, { Component } from "react";
import { QuizResult } from "./QuizResult";

class Questions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ready: false,
      pages: 0,
      time: "",
      questions: [{}],
      author: "",
      score: 0,
      isChecked: false,
      checkedId: ""
    };
  }

  componentDidMount = () => {
    console.log(this.props.quiz);
    const { time, questions, author } = this.props.quiz;
    this.setState({ time, questions, author, ready: true });
  };

  nextQuestion = () => {
    if (!this.state.isChecked) {
      alert("You are leaving a question blank");
    }
    this.setState({
      ...this.state,
      pages: this.state.pages + 1,
      isChecked: false,
      checkedId: ""
    });
  };

  saveAnswer = event => {
    if (
      event.target.value ===
      this.state.questions[this.state.pages].correctAnswer
    ) {
      this.setState({ score: this.state.score + 1 });
    }
  };

  toggleChange = event => {
    this.setState({
      isChecked: !this.state.isChecked,
      checkedId: !this.state.isChecked ? parseInt(event.target.id) : "" //if checked remove the checkId on uncheck else put the checkID on check
    });
  };

  render() {
    const { time, questions, author } = this.state;
    return (
      <>
        {this.state.ready && this.state.pages < questions.length && (
          <div id="quiz">
            <h4>
              <span className="badge badge-info question-badge">
                Question {this.state.pages + 1} of {questions.length}.
              </span>
            </h4>
            <div className="container text-center">
              <h3 className="font-weight-normal">
                {this.state.pages + 1}.{" "}
                {questions[this.state.pages].question.text}
              </h3>{" "}
              <br />
              {questions[this.state.pages].question.image !== "" && (
                <div className="text-center">
                  <img
                    src={questions[this.state.pages].question.image}
                    alt="question image"
                    width="300px"
                    style={{ maxHeight: "60vh" }}
                  />
                </div>
              )}
              <div className="row text-left options mt-3">
                {questions[this.state.pages].answers.map((answer, index) => (
                  <div key={index} className="col-6">
                    <div className="option">
                      <label
                        className="font-weight-normal questions-label"
                        htmlFor={index}
                      >
                        <input
                          id={index}
                          onClick={this.saveAnswer}
                          value={answer}
                          type="checkbox"
                          checked={
                            this.state.checkedId === index
                              ? this.state.isChecked
                              : false
                          }
                          onChange={this.toggleChange}
                          disabled={
                            this.state.checkedId === index ||
                            this.state.checkedId === ""
                              ? false
                              : true
                          }
                        />
                        {answer}
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <hr />
            <div className="text-center">
              <button
                id="next"
                className="custom-btn px-3 mx-auto"
                onClick={this.nextQuestion}
              >
                Next
              </button>
            </div>
          </div>
        )}
        {this.state.pages >= questions.length && <QuizResult />}
      </>
    );
  }
}

export default Questions;
