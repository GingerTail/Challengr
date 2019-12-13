export const handleGetLoggedUser = token => {
  console.log("I've received this token", token);
  return async function(dispatch, getState) {
    try {
      let response = await fetch("http://localhost:3015/profile/personal/me", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + token
        }
      });
      if (response.ok) {
        let json = await response.json();
        if (json.success) {
          dispatch({
            type: "LOAD_LOGGED_USER",
            payload: json.profileMe
          });
        } else console.log(json.error);
      }
    } catch (err) {
      console.log(err);
    }
  };
};
