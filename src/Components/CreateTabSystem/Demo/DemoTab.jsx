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
    }),
  setCurrentTab: currentTab =>
    dispatch({
      type: "SET_CURRENT_TAB",
      payload: currentTab
    })
});
class DemoTab extends Component {
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

  uploadDemoDescription = event => {
    this.props.getDescription(event.target.value);
  };

  render() {
    return (
      <>
        <div className="mb-4 demoTab-container">
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
                onChange={event => this.uploadDemoDescription(event)}
                rows="2"
              ></textarea>
            </div>
          </div>
          <div className="text-center">
            <button
              onClick={() => this.props.setCurrentTab("2")}
              className="custom-btn disabled-link mr-1 d-inline"
            >
              Previous
            </button>
            <button
              onClick={() => this.props.setCurrentTab("4")}
              /* onClick={event => this.allowLink(event)} */
              className="custom-btn disabled-link ml-1 d-inline"
            >
              Next
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DemoTab);
