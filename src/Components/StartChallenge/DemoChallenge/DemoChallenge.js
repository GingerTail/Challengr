import React, { useState, useEffect } from "react";
import { token } from "../../../Actions/fetchParams";

export const DemoChallenge = props => {
  const demoId = props.demoId;
  const [demo, getDemo] = useState({});

  //We are getting the demoId from the props and passing to demoId
  useEffect(() => {
    fetchDemo(demoId);
  }, []);

  const fetchDemo = async demoId => {
    try {
      let response = await fetch(
        "http://localhost:3015/demoChallenge/" + demoId,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer " + token
          }
        }
      );
      if (response.ok) {
        let json = await response.json();
        if (json.success) {
          await getDemo(json.demoChallenge);

          return json.demo;
        } else console.log(json.error);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container demoChallenge-container mt-4">
      <div className="row">
        <div className="col-12 text-center pb-4">
          <div className="info-demo-section mb-5">
            <h4>Description: </h4>
            <p>{demo.description}</p>
            <p>
              <strong>Download the PDF and start the challenge!</strong>
            </p>
            <a href={demo.pdfLink} target="_blank" className="custom-btn">
              Get PDF
            </a>
          </div>
          <hr />
          <div className="repository-section mt-5">
            <p>
              Did you complete it? <strong>Share your repository link</strong>
            </p>
            <div class="input-group input-group-sm mb-3 w-50 mx-auto">
              <div className="input-group-prepend">
                <span
                  className="input-group-text m-0"
                  id="inputGroup-sizing-sm"
                >
                  Repository
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
