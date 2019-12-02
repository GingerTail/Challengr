import React, { Component } from "react";
import MyDropzone from "./Dropzone";
import { connect } from "react-redux";
import "./demo.css";

const mapStateToProps = reduxStore => {
  return reduxStore;
};

class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      validate: null,
      fileType: []
    };
  }

  componentDidUpdate = () => {
    console.log(this.props.validate);
  };
  render() {
    return (
      <>
        <div className="demo-container mb-4">
          <h1>Demo</h1>
          <label>Description:</label>
          <textarea
            class="form-control rounded-0"
            id="exampleFormControlTextarea1"
            rows="2"
          ></textarea>
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
      </>
    );
  }
}

export default connect(mapStateToProps)(Demo);
