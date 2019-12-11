import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./redirectpage.css";

export default class RedirectPage extends Component {
  state = {
    timer: 10
  };
  componentDidMount = () => {
    setInterval(() => {
      this.setState(({ timer }) => ({
        timer: timer - 1
      }));
    }, 1000);
    setTimeout(() => {
      window.location = "/";
    }, 10000);
  };
  render() {
    return (
      <>
        <div className="redirect-container">
          <h3>Thanks for submitting</h3>
          <p>
            our staff will check that your challenge meets the publication
            standards. <br />
            In the meantime you will be redirected to the homepage.... <br />
            {this.state.timer}
            <br />
            If it doesn't work:{" "}
          </p>
          <Link to="/">Click Here</Link>
        </div>
      </>
    );
  }
}
