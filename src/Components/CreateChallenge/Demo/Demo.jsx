import React, { Component } from "react";
import MyDropzone from "./Dropzone";
import { connect } from "react-redux";
import "./demo.css";
import { Link } from "react-router-dom";

const mapStateToProps = reduxStore => {
  return reduxStore;
};

const mapDispatchToProps = dispatch => ({
  getDescription: text =>
    dispatch({
      type: "ADD_DEMO_DESCRIPTION",
      payload: text
    })
});
class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      validate: null,
      fileType: []
    };
  }

  allowLink = event => {
    if (this.props.quiz.questions.length <= 4) {
      event.preventDefault();
    }
  };

  uploadDemoDescription = () => {
    const text = document.querySelector("#exampleFormControlTextarea1").value;
    this.props.getDescription(text);
  };

  render() {
    return (
      <>
        <h3 className="text-center">Demo</h3>
        <div className="demo-container mb-4">
          <div className="row">
            <div className="col-12 text-center">
              <label>Upload PDF file: </label>
              <MyDropzone />
              <div id="validation-container">
                {this.props.validate !== null ? (
                  this.props.validate.validate === true ? (
                    <p id="valid-text">File uploaded</p>
                  ) : (
                    <p id="invalid-text">Invalid File, Upload a PDF </p>
                  )
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="col-12 text-center">
              <label>Description:</label>
              <textarea
                className="form-control rounded-0"
                id="exampleFormControlTextarea1"
                rows="2"
              ></textarea>
            </div>
          </div>
          <div className="text-center">
            <Link
              to="/create/quiz"
              className="btn btn-primary disabled-link mr-1"
            >
              Previous
            </Link>
            <Link
              onClick={this.uploadDemoDescription}
              to="/create/generalsettings"
              /* onClick={event => this.allowLink(event)} */
              className="btn btn-primary disabled-link ml-1"
            >
              Next
            </Link>
          </div>
        </div>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Demo);
