import React, { Component } from "react";
import "./topchallenges.css";
import Logomicrosoft from "./img/microsoft-logo.png";
import Logoapple from "./img/apple-logo.png";
import Logofacebook from "./img/Facebook-logo-png.png"

export default class TopChallenges extends Component {
  render() {
    return (
      <>
        <div className="container-fluid" id="top-ch-container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-4">
              <div className="card-container">
                <h4>TEST</h4>
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
            <div className="col-sm-12 col-md-12 col-lg-4">
              <div className="card-container">
                <h4>TEST</h4>
                <p>
                  <strong>QUIZ/CODE/DEMO</strong>
                </p>
                <p>
                  <img src={Logomicrosoft} width='110px' height="125px"></img>
                  <br />



                </p>
                <p>
                  <strong>HTML - CSS - JS</strong>
                </p>
                <button className="btn">See more</button>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4">
              <div className="card-container">
                <h4>TEST</h4>
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

      </>
    );
  }
}
