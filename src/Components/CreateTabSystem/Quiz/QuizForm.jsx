import React, { Component } from "react";
import { connect } from "react-redux";
import style from "../Quiz/Quiz.module.css";
import { uploadImageQuiz } from "../../../Actions/CreateChallengeActions";

const mapStateToProps = reduxStore => {
  return reduxStore;
};

const mapDispatchToProps = dispatch => ({
  addQuestion: (event, typeAction) =>
    dispatch({
      type: typeAction,
      payload: event
    }),
  uploadImage: (formData, index) => dispatch(uploadImageQuiz(formData, index))
});

class QuizFrom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      answers: [],
      title: "",
      correct: "",
      file: null
    };
  }

  //UPDATE THE VALUE OF THE CORRECT ANSWER
  updateCorrectAnswer = event => {
    let payload = {
      value: event.target.value,
      index: 0,
      id: this.props.index
    };
    this.props.addQuestion(payload, "ADD_CORRECT");
    this.props.addQuestion(payload, "ADD_WRONG");
  };

  //UPDATE THE VALUE OF THE WRONG ANSWER
  updateWrongAnswer = (event, index) => {
    let payload = {
      value: event.target.value, //TEXT OF THE ANSWER
      index, //INDEX OF THE QUESTION
      id: this.props.index //ID OF THE ANSWER
    };
    this.props.addQuestion(payload, "ADD_WRONG");
  };

  //UPDATE THE TITLE OF THE QUESTION
  updateTitle = event => {
    let payload = {
      value: event.target.value,
      image: "",
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

  //UPLOAD IMAGE IN REDUX
  uploadImage = async file => {
    console.log(file.target.files[0]);
    var formData = new FormData();
    formData.append("question_images", file.target.files[0]);
    for (var key of formData.entries()) {
      console.log(key[0] + ", " + key[1]);
    }
    this.props.uploadImage(formData, this.props.index);
  };

  render() {
    return (
      <>
        <div className="container-fluid">
          <div className={`row ${style.quizformContainer}`} col-lg-12>
            <div className="col-sm-12 col-lg-6 text-center mb-5">
              <p className="">
                <h3><strong>Upload an Image:</strong></h3>
              </p>
              {this.props.quiz.questions[this.props.index].question.image !==
                "" ? (
                  <img
                    src={this.props.quiz.questions[this.props.index].question.image}
                    alt="image question"
                    width="200px"
                  />
                ) : (
                  <img
                    src="http://telugukshatriyamatrimony.com/img/no_image_startup.png"
                    alt="empty image"
                    width="200px"
                  />
                )}
              <input
                className={style.inputUpload}
                type="file"
                name="pic"
                accept=".jpg, .png, .jpeg"
                onChange={e => this.uploadImage(e)}
              />
            </div>
            <div className="col-sm-12 col-lg-6">
              <div className="row">
                <div className="col-12">
                  <h3 className="title"><label>Question {this.props.index + 1} </label></h3>
                  <input
                    className="d-block"
                    name="title"
                    type="text"
                    value={this.state.inputText}
                    onChange={e => this.updateTitle(e)}
                  />
                </div>
                <div className="col-12 mt-4">
                  <p>
                    <strong>Answers List</strong>
                  </p>
                </div>
                <div className="col-4 mt-2">
                  <p className="d-inline pl-4 ">Correct</p>
                  <input
                    className="d-inline"
                    index="correct"
                    type="text"
                    onChange={e => this.updateCorrectAnswer(e)}
                  />
                </div>
                {this.state.answers.map((answer, index) => {
                  return (
                    <div className="col-4 mt-2" key={index}>
                      <p className="d-inline pl-4">Wrong</p>
                      <input
                        className="d-inline"
                        id={this.props.index}
                        type="text"
                        onChange={e => this.updateWrongAnswer(e, index + 1)}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <div>
              <button
                className="btn mt-4 mb-4 pl-2 pr-2"
                onClick={this.addWrongAnswer}
              >
                Add wrong answer
            </button>
            </div>
          </div>
          <hr />
        </div>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizFrom);
