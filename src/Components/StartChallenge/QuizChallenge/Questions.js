import React, { Component } from "react";

class Questions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ready: false,
      pages: 0,
      time: "",
      questions: [{}],
      author: "",
      score:0,
      isChecked:false,
      checkedId: ""
    };
  }

  componentDidMount = () => {
    console.log(this.props.quiz);
    const { time, questions, author } = this.props.quiz;
    this.setState({ time, questions, author, ready: true });
  };

  nextQuestion = () => {
    if(!this.state.isChecked){
        alert("You are leaving a question blank")
    }
    this.setState({ ...this.state, pages: this.state.pages + 1, isChecked: false, checkedId:"" });
  };

  saveAnswer = event => {
    if(event.target.value === this.state.questions[this.state.pages].correctAnswer){
        this.setState({score:this.state.score +1})
    }
  };

  toggleChange = (event) => {
    this.setState({
      isChecked: !this.state.isChecked,
      checkedId: !this.state.isChecked ? parseInt(event.target.id) : ""  //if checked remove the checkId on uncheck else put the checkID on check
    });
  }

  render() {
    const { time, questions, author } = this.state;
    return (
      <>
        {this.state.ready && this.state.pages < questions.length && (
          <div id="quiz">
            <h2 className="text-center font-weight-normal">{time}</h2>
            <hr />
            <div>
              <div className="badge badge-info">
                Question {this.state.pages + 1} of {questions.length}.
              </div>
              <h3 className="font-weight-normal">
                {this.state.pages + 1}.{" "}
                <span>{questions[this.state.pages].question.text}</span>
              </h3>{" "}
              <br />
              {questions[this.state.pages].question.image !== "" && (
                <img
                  src={questions[this.state.pages].question.image}
                  alt="question image"
                  width="100%"
                  style={{maxHeight:"60vh"}}
                />
              )}
              <div className="row text-left options">
                {questions[this.state.pages].answers.map((answer, index) => (
                  <div key={index} className="col-6">
                    <div className="option">
                      <label className="font-weight-normal" htmlFor={index}>
                        <input
                          id={index}
                          onClick={this.saveAnswer}
                          value={answer}
                          type="checkbox"
                          checked={this.state.checkedId === index ? this.state.isChecked : false}
                          onChange={this.toggleChange}
                          disabled={this.state.checkedId === index || this.state.checkedId === "" ? false: true}
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
                className="btn btn-primary"
                onClick={this.nextQuestion}
              >
                Next
              </button>
            </div>
          </div>
        )}
        {this.state.pages >= questions.length && <div>quiz finished score: {this.state.score}</div>}
      </>
    );
  }
}

export default Questions;
