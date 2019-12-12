import React, { Component } from "react";
import "./createchallenge.css";
import { Link } from "react-router-dom";

export default class CreateChallenge extends Component {
  redirectPage = () => {
    window.location = "/create/quiz";
  };
  render() {
    return (
      <>
        <div className="create-challenge-container px-5">
          <div className="row">
            <div className="col-12">
              <h1>CREATE CHALLENGE</h1>
              <h4>Rules: </h4>
              <p>
                <strong>Quiz: </strong> <br />
              </p>
              <ul>
                <li>
                  At least <strong>5 questions</strong> or more
                </li>
                <li>
                  At least <strong>50 characters</strong> for every question
                  title
                </li>
              </ul>
              <p>
                <strong>Demo: </strong> <br />
              </p>
              <ul>
                <li>
                  At least <strong>50 characters</strong> for the description
                </li>
                <li>
                  You must upload a <strong>PDF file</strong>
                </li>
              </ul>
              <p>
                <strong>General Settings: </strong> <br />
              </p>
              <ul>
                <li>
                  At least <strong>50 characters</strong> for the description
                </li>
                <li>
                  languages and difficulty are <strong>Required</strong>
                </li>
              </ul>
              <p>
                <strong>Other: </strong> <br />
              </p>
              <ul>
                <li>
                  do not refer to:{" "}
                  <strong>
                    Violence, Pornopgraphy, Racism and any content that may be
                    offensive
                  </strong>
                </li>
              </ul>
              <h4 className="mb-4">Everything clear?</h4>
              <button onClick={this.redirectPage} className="custom-btn p-2">
                Create Challenge
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
