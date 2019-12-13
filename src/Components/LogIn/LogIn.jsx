import React from "react";
import { Redirect } from "react-router-dom";
import "./LogIn.css";

class login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      redirectTo: ""
    };
  }
  handleSubmit = async e => {
    e.preventDefault();
    let logInCredentials = {};
    let formData = new FormData(e.target);
    for (var [key, value] of formData) {
      logInCredentials[key.toLowerCase()] = value;
    }
    await this.postLogIn(logInCredentials);
  };

  postLogIn = async credentials => {
    console.log(credentials);
    try {
      let response = await fetch("http://localhost:3015/user/login", {
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(credentials)
      });
      if (response.ok) {
        let json = await response.json();
        if (json.success) {
          localStorage.setItem("token", json.token);
          this.setState({ redirectTo: "/" });
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <>
        {this.state.redirectTo !== "" && (
          <Redirect to={this.state.redirectTo} />
        )}
        <div className="form-box">
          <h2 className="text-center m-4">Log in</h2>
          <div className="social-icons">
            <i className="fab fa-github" id="social-icons"></i>
            <i className="fab fa-facebook" id="social-icons"></i>
            <i className="fab fa-google" id="social-icons"></i>
            <hr />
          </div>
          <form className="form-group" onSubmit={this.handleSubmit}>
            <label htmlFor="email"></label>
            <input
              type="email"
              name="Email"
              className="input-field"
              placeholder="Email"
              required
            ></input>
            <label htmlFor="password"></label>
            <input
              type="password"
              name="Password"
              className="input-field"
              placeholder="Enter Password"
              required
            ></input>
            <span href="/#">Forgot Password ?</span>
            <button type="submit" className="btn-Register">
              Log in
            </button>
          </form>
          <div className="form-group">
            <button type="button" className="btn-Register">
              Register Now
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default login;
