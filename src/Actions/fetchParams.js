export const getToken = () => localStorage.getItem("token");

export const refreshToken = async token => {
  try {
    let response = await fetch("http://localhost:3015/user/refreshToken", {
      headers: {
        authorization: "Bearer " + token
      },
      method: "POST"
    });
    if (response.ok) {
      let { token } = await response.json();
      localStorage.setItem("token", token);
      return true;
    } else {
      localStorage.removeItem("token");
      return false;
    }
  } catch (err) {
    console.log(err);
  }
};
