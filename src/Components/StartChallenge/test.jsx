import React, { Component } from "react";
import { connect } from "react-redux";

const mapStateToProps = reduxStore => {
  return reduxStore;
};

class displayChallenge extends Component {
  render() {
    return (
      /*  <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <h5>
              <strong>Author: </strong> {this.props.challengeList[0].author}
            </h5>
          </div>

          <div className="col-12">
            <h4>Description:</h4>
            <p>{this.props.challengeList[0].description}</p>
            <h4>Difficulty: </h4>
            <p>{this.props.challengeList[0].difficulty}</p>
            <h4>Languages: </h4>
            {this.props.challengeList[0].languages.map((language, index) => {
              return (
                <p key={index} className="d-inline mr-3">
                  {language}
                </p>
              );
            })}
          </div>
        </div>
      </div> */
      <></>
    );
  }
}

export default connect(mapStateToProps, null)(displayChallenge);
