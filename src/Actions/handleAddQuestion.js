export const handleAddQuestion = question => {
  return function(dispatch, getState) {
    console.log(question);
    dispatch({
      type: "ADD_QUESTION",
      payload: question
    });
  };
};
