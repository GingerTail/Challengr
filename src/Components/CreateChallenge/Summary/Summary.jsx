import React, { Component } from "react";
import { connect } from "react-redux";
import { handleGetQuiz } from "../../../Actions/CreateChallengeActions";

const mapStateToProps = reduxStore => {
  return reduxStore;
};
const mapDispatchToProps = dispatch => ({
  getQuizContent: quiz => dispatch(handleGetQuiz(quiz))
});

class Summary extends Component {
  submitChallenge = async () => {
    this.props.getQuizContent(this.props.quiz);
    console.log(this.props.generalSettings.content);
  };
  render() {
    return (
      <>
        <div className="summary-container text-left">
          <div className="row">
            <div className="col-12" id="general-section">
              <h3 className="text-center">General Settings</h3>
              <p>
                <strong>Description: </strong> <br />
                {this.props.generalSettings.description}
              </p>
              <p>
                <strong>Difficulty:</strong> <br />
                {this.props.generalSettings.difficulty}
              </p>
              <p>
                <strong>Languages: </strong>
              </p>
              {this.props.generalSettings.languages.map(language => {
                return <p className="d-inline mr-3">{language}</p>;
              })}
              <hr></hr>
            </div>
            <div className="col-12" id="quiz-section">
              <h3 className="text-center">Quiz</h3>
              {this.props.quiz.questions.map((question, index) => {
                console.log(question);
                return (
                  <div key={index}>
                    <p>
                      {" "}
                      <strong> Q.{index + 1}</strong> {question.question.text}
                    </p>
                    <p className="d-inline px-1">{question.correctAnswer}</p>
                    {question.answers.map((answer, index) => {
                      return (
                        <p key={index} className="d-inline px-1">
                          {answer}
                        </p>
                      );
                    })}
                  </div>
                );
              })}
            </div>
            {this.props.pdf.pdf && (
              <div className="col-12" id="demo-section">
                <h3 className="text-center">Demo</h3>
                <p>
                  <strong>Description: </strong>
                  descrizione random
                </p>
                <p>
                  <strong>File Uploaded:</strong> <br />
                  <strong>Name: </strong>
                  {this.props.pdf.pdf.path}
                </p>
              </div>
            )}
          </div>
          <button onClick={this.submitChallenge}>Submit</button>
        </div>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Summary);
