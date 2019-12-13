import { getToken } from "./fetchParams";

export const handleGetQuizFromDB = quizId => {
  return async function(dispatch, getState) {
    try {
      let response = await fetch("http://localhost:3015/quiz/" + quizId, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + getToken()
        }
      });
      if (response.ok) {
        let json = await response.json();
        console.log("INSIDE HANDLEGETQUIZFROMDB", json.quiz);
        if (json.success) {
          dispatch({
            type: "GET_TO_DO_QUIZ",
            payload: json.quiz
          });
        } else console.log(json.error);
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const handleFetchChallenges = (skip = 0) => {
  return async function(dispatch, getState) {
    let response = await fetch(
      `http://localhost:3015/challenge?limit=8&skip=${skip}`
    );
    if (response.ok) {
      let { challenges, numberOfChallenges } = await response.json();
      dispatch({
        type: "STORE_DATA",
        challenges,
        numberOfChallenges
      });
    }
  };
};
