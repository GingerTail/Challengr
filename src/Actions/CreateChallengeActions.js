export const handleGetQuiz = quiz => {
  return async function(dispatch, getState) {
    try {
      var response = await fetch("http://localhost:3015/quiz", {
        headers: {
          "content-type": "application/json",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGU5M2U5OWJjNjk4MjI4ZDgzMGUzZDIiLCJpYXQiOjE1NzU4ODg2MTMsImV4cCI6MTU3NTk3NTAxM30.5YEV5TeRvE3fqZHqewH6hKrX5FNUcgKcw_k-LZGChd8"
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
  return async function(dispatch, getState) {
    try {
      var response = await fetch(
        "http://localhost:3015/quiz/upload_question_images",
        {
          headers: {
            authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGU5M2U5OWJjNjk4MjI4ZDgzMGUzZDIiLCJpYXQiOjE1NzU4ODg2MTMsImV4cCI6MTU3NTk3NTAxM30.5YEV5TeRvE3fqZHqewH6hKrX5FNUcgKcw_k-LZGChd8"
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

export const handleGetPdf = formData => {
  return async function(dispatch, getState) {
    try {
      var response = await fetch(
        "http://localhost:3015/demoChallenge/upload_demo_pdf",
        {
          headers: {
            authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGU5M2U5OWJjNjk4MjI4ZDgzMGUzZDIiLCJpYXQiOjE1NzU4ODg2MTMsImV4cCI6MTU3NTk3NTAxM30.5YEV5TeRvE3fqZHqewH6hKrX5FNUcgKcw_k-LZGChd8"
          },
          body: formData,
          method: "POST"
        }
      );
      if (response.ok) {
        let json = await response.json();
        if (json.success) {
          dispatch({
            type: "ADD_PDF_LINK",
            pdfLink: json.pdfLink
          });
        }
      } else throw new Error("response not success");
    } catch (err) {
      console.log(err);
    }
  };
};

export const handleGetDemo = demo => {
  return async function(dispatch, getState) {
    try {
      var response = await fetch("http://localhost:3015/demoChallenge", {
        headers: {
          "content-type": "application/json",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGU5M2U5OWJjNjk4MjI4ZDgzMGUzZDIiLCJpYXQiOjE1NzU4ODg2MTMsImV4cCI6MTU3NTk3NTAxM30.5YEV5TeRvE3fqZHqewH6hKrX5FNUcgKcw_k-LZGChd8"
        },
        body: JSON.stringify(demo),
        method: "POST"
      });
      if (response.ok) {
        let json = await response.json();
        if (json.success) {
          dispatch({
            type: "CREATE_DEMO_CONTENT",
            payload: json.content
          });
        }
      } else throw new Error("response not success");
    } catch (err) {
      console.log(err);
    }
  };
};

export const handleCreateChallengr = generalSettings => {
  return async function(dispatch, getState) {
    try {
      var response = await fetch("http://localhost:3015/challenge", {
        headers: {
          "content-type": "application/json",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGU5M2U5OWJjNjk4MjI4ZDgzMGUzZDIiLCJpYXQiOjE1NzU4ODg2MTMsImV4cCI6MTU3NTk3NTAxM30.5YEV5TeRvE3fqZHqewH6hKrX5FNUcgKcw_k-LZGChd8"
        },
        body: JSON.stringify(generalSettings),
        method: "POST"
      });
      if (response.ok) {
        let json = await response.json();
        if (json.success) {
          console.log(json);
        }
      } else throw new Error("response not success");
    } catch (err) {
      console.log(err);
    }
  };
};
