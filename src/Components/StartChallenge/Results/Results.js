import React, { useState, useEffect } from "react";
import "./results.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";

export const Results = () => {
  const [upVote, checkUpvote] = useState(false);
  const [result, checkResult] = useState(false);

  const submitUpvote = () => {
    checkUpvote(true);
  };
  const displayResults = () => {
    checkResult(true);
  };

  const submitChallenge = () => {
    alert("Alert: Submitting the challenge you can't do it again");
  };
  const homeRedirect = () => {
    window.location = "/";
  };
  return (
    <>
      <div className="result-container pl-4">
        {result === false ? (
          upVote === false ? (
            <div className="complete-section">
              <h4>Did you enjoy the challenge?</h4>
              <p>Let us know</p>
              <h3>Submit your upvote</h3>
              <FontAwesomeIcon
                onClick={submitUpvote}
                className="m-2 custom-icon1"
                icon={faThumbsUp}
                size="2x"
              />
              <FontAwesomeIcon
                onClick={submitUpvote}
                className="m-2 custom-icon2"
                icon={faThumbsDown}
                size="2x"
              />
            </div>
          ) : (
            <div className="complete-section">
              <h4>Did you finish the challenge?</h4>
              <p>See the result!</p>
              <button onClick={displayResults} className="custom-btn mx-auto">
                Result
              </button>
            </div>
          )
        ) : (
          <div className="complete-section">
            <h3>Congratulation, you completed the challenge</h3>
            <h4 className="mt-2 text-left">Final Results</h4>
            <h5 className="mt-1 text-left">
              <strong>Quiz Result:</strong> 6/10
            </h5>
            <h5 className="mt-1 text-left">
              <strong>Your Repository:</strong>http://www.repository.fake
            </h5>
            <button onClick={homeRedirect} className="custom-btn mx-auto mt-4">
              Back to Home
            </button>
          </div>
        )}
      </div>
    </>
  );
};
