import React, { Component } from "react";
import AnimatedMulti from "./Dropdown/Dropdown";

import { connect } from "react-redux";
import DropdownMenu from "../provadrop";

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
      <div className="container text-left mb-5 animated fadeIn">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <div className="htmlForm-group">
              <label>Description:</label>
              <textarea
                className="htmlForm-control rounded-0"
                id="examplehtmlFormControlTextarea1"
                onChange={e => this.updateDescription(e)}
                rows="10"
              ></textarea>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 mt-4 pl-5">
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
            <div id="languages" className="mt-4">
              <label htmlFor="examplehtmlFormControlTextarea1">
                Languages{" "}
              </label>
              <DropdownMenu />
              {/* <AnimatedMulti /> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(GeneralSettings);
