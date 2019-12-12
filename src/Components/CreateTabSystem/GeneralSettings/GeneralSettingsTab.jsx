import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import DropdownMenu from "./provadrop";
import "./generalsettings.css";

const mapStateToProps = reduxStore => {
  return reduxStore;
};

const mapDispatchToProps = dispatch => ({
  addGeneralSettings: (event, typeAction) =>
    dispatch({
      type: typeAction,
      payload: event
    }),
  setCurrentTab: currentTab =>
    dispatch({
      type: "SET_CURRENT_TAB",
      payload: currentTab
    })
});

class GeneralSettingsTab extends Component {
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
        <div className="container general-settings-container text-left mb-5 animated fadeIn">
          <h3 className="text-center">General Settings</h3>
          <div className="row">
            <div className="col-sm-12 col-md-12">
              <div className="htmlForm-group">
                <label>
                  <strong>Description</strong>
                </label>
                <textarea
                  className="form-control m-0"
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
                    <label>
                      <strong>Difficulty: </strong>{" "}
                    </label>
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
                      <strong>Languages: </strong>{" "}
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
              <button
                onClick={() => this.props.setCurrentTab("3")}
                className="custom-btn disabled-link mr-1 d-inline"
              >
                Previous
              </button>
              <button
                onClick={() => this.props.setCurrentTab("5")}
                /* onClick={event => this.allowLink(event)} */
                className="custom-btn disabled-link ml-1 d-inline"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GeneralSettingsTab);
