import React, { Component } from "react";
import "./topchallenges.css";
import Logomicrosoft from "./img/microsoft-logo.png";
import Logoapple from "./img/apple-logo.png";
import Logofacebook from "./img/Facebook-logo-png.png"

export default class TopChallenges extends Component {
  render() {
    return (
      <>
        <div className="container" id="top-ch-container">
          <div className="row">
            <div className="col-4">
              <div className="card-container">
                <h4>TEST1</h4>
                <p>
                  <strong>QUIZ/CODE/DEMO</strong>
                </p>
                <p>
                  <img src={Logoapple} width='80px' height="85px"  ></img>
                  <br />
                  <br />
                </p>
                <p>

                </p>
                <p>
                  <strong>HTML - CSS - JS</strong>
                </p>
                <button className="btn">See more</button>
              </div>
            </div>
            <div className="col-4">
              <div className="card-container">
                <h4>TEST1</h4>
                <p>
                  <strong>QUIZ/CODE/DEMO</strong>
                </p>
                <p>
                  <img src={Logomicrosoft} width='110px'></img>
                  <br />



                </p>
                <p>
                  <strong>HTML - CSS - JS</strong>
                </p>
                <button className="btn">See more</button>
              </div>
            </div>
            <div className="col-4">
              <div className="card-container">
                <h4>TEST1</h4>
                <p>
                  <strong>QUIZ/CODE/DEMO</strong>
                </p>
                <p>
                  <img src={Logofacebook} width='80px' height="85px"></img>
                  <br />
                  <br />

                </p>
                <p>

                </p>
                <p>
                  <strong>HTML - CSS - JS</strong>
                </p>
                <button className="btn">See more</button>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </>
    );
  }
}
