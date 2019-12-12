import React, { Component } from "react";
import CollapseQuiz from "./CollapseQuiz";
import { connect } from "react-redux";

const mapStateToProps = reduxStore => {
  return reduxStore;
};

class QuizList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row">
        <div className="col-12">
          {this.props.quiz.questions.map((singleQuiz, index) => {
            return (
              <CollapseQuiz
                question={"what?"}
                correct={"ciao"}
                id={index + 1}
                key={index}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(QuizList);
