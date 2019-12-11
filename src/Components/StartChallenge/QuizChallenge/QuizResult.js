import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

let contentExist = false;
export const QuizResult = props => {
  const [checkContent, getContent] = useState("");
  const store = useSelector(state => state.start);
  useEffect(() => {
    contentExist = store.challenge.content.some(
      content => content["resourceType"] === "demoId"
    );
    if (contentExist) {
      getContent(
        "Now you can test yourself by continuing the challenge or submit to see the result"
      );
    } else {
      getContent("Submit to see the result");
    }

    console.log(contentExist);
  }, []);
  return (
    <div className="container text-center mt-4 resultQuiz-container">
      <h2>CONGRATULATIONS!</h2>
      {/* <img
        src="http://clipart-library.com/newimages/confetti-clip-art-16.png"
        width="400px"
        height="200px"
      /> */}
      <p>
        <strong>Thanks for having completed the quiz</strong>
        <br />
        {checkContent}
      </p>
    </div>
  );
};
