import React, { Component } from "react";
import AnimatedMulti from "./Dropdown/Dropdown";

export default class GeneralSettings extends Component {
  render() {
    return (
      <div className="container text-left mb-5 animated fadeIn">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <div class="form-group">
              <label for="exampleFormControlTextarea1">Description:</label>
              <textarea class="form-control rounded-0" id="exampleFormControlTextarea1" rows="10"></textarea>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 mt-4 pl-5">
            <div id="difficulty">
              <label for="exampleFormControlTextarea1">Difficulty: </label>
              <div class="custom-control custom-radio">
                <input type="radio" class="custom-control-input" id="defaultGroupExample1" name="groupOfDefaultRadios"/>
                <label class="custom-control-label" for="defaultGroupExample1">
                  Easy
                </label>
              </div>

              <div class="custom-control custom-radio">
                <input type="radio" class="custom-control-input" id="defaultGroupExample2" name="groupOfDefaultRadios"/>
                <label class="custom-control-label" for="defaultGroupExample2">
                  Normal
                </label>
              </div>

              <div class="custom-control custom-radio">
                <input type="radio" class="custom-control-input" id="defaultGroupExample3" name="groupOfDefaultRadios"/>
                <label class="custom-control-label" for="defaultGroupExample3">
                  Hard
                </label>
              </div>
            </div>
            <div id="languages" className="mt-4">
              <label for="exampleFormControlTextarea1">Languages </label>
                <AnimatedMulti/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
