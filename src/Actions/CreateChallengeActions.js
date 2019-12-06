export const handleGetQuiz = quiz => {
  return async function(dispatch, getState) {
    console.log(quiz);
    try {
      var response = await fetch("http://localhost:3015/quiz", {
        headers: {
          "content-type": "application/json",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGU5M2U5OWJjNjk4MjI4ZDgzMGUzZDIiLCJpYXQiOjE1NzU1NjcwMzIsImV4cCI6MTU3NTY1MzQzMn0.uDUnGQ7vip5JWIYRVPMrSfvGnhIos-ocqHP5kU_ldNc"
        },
        body: JSON.stringify(quiz),
        method: "POST"
      });
      if (response.ok) {
        let json = await response.json();
        if (json.success) {
          console.log(json.content);
          dispatch({
            type: "CREATE_QUIZ_CONTENT",
            payload: json.content
          });
        }
      } else throw new Error("response not success");
    } catch (err) {
      console.log(err);
    }
  };
};

export const uploadImageQuiz = (formData, index) => {
  console.log(formData);
  return async function(dispatch, getState) {
    try {
      var response = await fetch(
        "http://localhost:3015/quiz/upload_question_images",
        {
          headers: {
            authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGU5M2U5OWJjNjk4MjI4ZDgzMGUzZDIiLCJpYXQiOjE1NzU1NjcwMzIsImV4cCI6MTU3NTY1MzQzMn0.uDUnGQ7vip5JWIYRVPMrSfvGnhIos-ocqHP5kU_ldNc"
          },
          body: formData,
          method: "POST"
        }
      );
      if (response.ok) {
        let json = await response.json();
        if (json.success) {
          dispatch({
            type: "ADD_IMAGE_QUESTION",
            imageUrl: json.imageLink,
            id: index
          });
        }
      } else throw new Error("response not success");
    } catch (err) {
      console.log(err);
    }
  };
};
