import React, { Component } from "react";
import AnimatedMulti from "./Dropdown/Dropdown";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import DropdownMenu from "../provadrop";

const mapStateToProps = reduxStore => {
  return reduxStore;
};

const mapDispatchToProps = dispatch => ({
  addGeneralSettings: (event, typeAction) =>
    dispatch({
      type: typeAction,
      payload: event
    })
});

class GeneralSettings extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  updateDifficulty = e => {
    this.props.addGeneralSettings(e.target.value, "UPDATE_DIFFICULTY");
  };

  updateDescription = e => {
    this.props.addGeneralSettings(e.target.value, "UPDATE_DESCRIPTION");
  };

  render() {
    return (
      <>
        <h3 className="text-center">General Settings</h3>
        <div className="container text-left mb-5 animated fadeIn">
          <div className="row">
            <div className="col-sm-12 col-md-12">
              <div className="htmlForm-group">
                <label>Description:</label>
                <textarea
                  className="form-control rounded-0"
                  id="examplehtmlFormControlTextarea1"
                  onChange={e => this.updateDescription(e)}
                  rows="10"
                ></textarea>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 mt-4 pl-5">
              <div className="row">
                <div className="col-sm-12 col-md-6">
                  <div id="difficulty">
                    <label>Difficulty: </label>
                    <div className="custom-control custom-radio">
                      <input
                        type="radio"
                        onClick={e => this.updateDifficulty(e)}
                        className="custom-control-input"
                        id="defaultGroupExample1"
                        name="groupOfDefaultRadios"
                        value="easy"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="defaultGroupExample1"
                      >
                        Easy
                      </label>
                    </div>

                    <div className="custom-control custom-radio">
                      <input
                        type="radio"
                        onClick={e => this.updateDifficulty(e)}
                        className="custom-control-input"
                        id="defaultGroupExample2"
                        name="groupOfDefaultRadios"
                        value="normal"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="defaultGroupExample2"
                      >
                        Normal
                      </label>
                    </div>

                    <div className="custom-control custom-radio">
                      <input
                        type="radio"
                        onClick={e => this.updateDifficulty(e)}
                        className="custom-control-input"
                        id="defaultGroupExample3"
                        name="groupOfDefaultRadios"
                        value="hard"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="defaultGroupExample3"
                      >
                        Hard
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6">
                  <div id="languages">
                    <label htmlFor="examplehtmlFormControlTextarea1">
                      Languages{" "}
                    </label>
                    <DropdownMenu />
                    {this.props.generalSettings.languages.map(
                      (language, index) => {
                        return (
                          <p key={index} className="d-inline mr-3">
                            {language}
                          </p>
                        );
                      }
                    )}
                    {/* <AnimatedMulti /> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 mt-4 text-center">
              <Link
                to="/create/demo"
                className="btn btn-primary disabled-link mr-1"
              >
                Previous
              </Link>
              <Link
                to="/create/summary"
                /* onClick={event => this.allowLink(event)} */
                className="btn btn-primary disabled-link ml-1"
              >
                Next
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GeneralSettings);
