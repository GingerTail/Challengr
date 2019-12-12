import {token} from "./fetchParams"
  
export const handleGetQuizFromDB = quizId => {
    return async function(dispatch, getState) {
    try {
      let response = await fetch("http://localhost:3015/quiz/" + quizId, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + token
        }
      });
      if (response.ok) {
        let json = await response.json();
        console.log("INSIDE HANDLEGETQUIZFROMDB", json.quiz)
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
  }}
