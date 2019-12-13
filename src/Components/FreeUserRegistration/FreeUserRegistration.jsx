import React, { Component } from "react";
import "./FreeUserRegistration.css";
import { Link, Redirect } from "react-router-dom";

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};

class FreeUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: null,
      lastName: null,
      userName: null,
      gitHub: null,
      email: null,
      password: null,
      formErrors: {
        firstName: "",
        lastName: "",
        userName: "",
        gitHub: "",
        email: "",
        password: ""
      },
      redirectTo: ""
    };
  }

  handleSubmit = async e => {
    e.preventDefault();
    if (formValid(this.state)) {
      let newUser = {
        email: this.state.email,
        password: this.state.password,
        githubProfile: this.state.gitHub,
        username: this.state.userName,
        name: this.state.firstName,
        surname: this.state.lastName
      };
      this.createNewUser(newUser);
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

  createNewUser = async user => {
    try {
      let response = await fetch("http://localhost:3015/user/register", {
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(user)
      });
      let json = await response.json();
      if (response.status === 201) {
        if (json.success) {
          this.setState({ redirectTo: "/login" });
        }
      } else {
        console.log(json);
      }
    } catch (err) {
      console.log(err);
    }
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "firstName":
        formErrors.firstName =
          value.length < 3 ? "minimum 3 characters required" : "";
        break;
      case "lastName":
        formErrors.lastName =
          value.length < 3 ? "minimum 3 characters required" : "";
        break;
      case "userName":
        formErrors.userName =
          value.length < 3 ? "minimum 3 characters required" : "";
        break;
      case "gitHub":
        formErrors.gitHub =
          value.length < 3 ? "minimum 3 characters required" : "";
        break;
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "password":
        formErrors.password =
          value.length < 6 ? "minimum 6 characters required" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value });
  };

  render() {
    const { formErrors } = this.state;

    return (
      <>
        {this.state.redirectTo !== "" && (
          <Redirect to={this.state.redirectTo} />
        )}
        <div className="container-fluid" style={{ overflow: "hidden" }}>
          <div className="row">
            <div className="col-xs-12 col-sm-4 register-left offset-1">
              <h1>Free User</h1>
              <hr />
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Tempora fuga eos, vitae optio ratione nemo distinctio nulla
                soluta accusantium exercitationem culpa nesciunt repudiandae
                officia id maiores impedit incidunt ut repellat!
              </p>
            </div>
            <div className="col-xs-12 col-sm-7 register-right">
              <div className="wrapperForm">
                <div className="form-wrapper">
                  <h1>Register</h1>

                  <hr></hr>

                  <form onSubmit={this.handleSubmit} noValidate>
                    <div className="firstName">
                      <label htmlFor="firstName">First Name</label>
                      <input
                        className={
                          formErrors.firstName.length > 0 ? "error" : null
                        }
                        placeholder="First Name"
                        type="text"
                        name="firstName"
                        noValidate
                        onChange={this.handleChange}
                      />
                      {formErrors.firstName.length > 0 && (
                        <span className="errorMessage">
                          {formErrors.firstName}
                        </span>
                      )}
                    </div>
                    <div className="lastName">
                      <label htmlFor="lastName">Last Name</label>
                      <input
                        className={
                          formErrors.lastName.length > 0 ? "error" : null
                        }
                        placeholder="Last Name"
                        type="text"
                        name="lastName"
                        noValidate
                        onChange={this.handleChange}
                      />
                      {formErrors.lastName.length > 0 && (
                        <span className="errorMessage">
                          {formErrors.lastName}
                        </span>
                      )}
                    </div>
                    <div className="userName">
                      <label htmlFor="userName">Username</label>
                      <input
                        className={
                          formErrors.userName.length > 0 ? "error" : null
                        }
                        placeholder="username"
                        type="text"
                        name="userName"
                        noValidate
                        onChange={this.handleChange}
                      />
                      {formErrors.userName.length > 0 && (
                        <span className="errorMessage">
                          {formErrors.userName}
                        </span>
                      )}
                    </div>
                    <div className="gitHub">
                      <label htmlFor="gitHub">Github</label>
                      <input
                        className={
                          formErrors.gitHub.length > 0 ? "error" : null
                        }
                        placeholder="URL Github"
                        type="text"
                        name="gitHub"
                        noValidate
                        onChange={this.handleChange}
                      />
                      {formErrors.gitHub.length > 0 && (
                        <span className="errorMessage">
                          {formErrors.gitHub}
                        </span>
                      )}
                    </div>

                    <div className="email">
                      <label htmlFor="email">Email</label>
                      <input
                        className={formErrors.email.length > 0 ? "error" : null}
                        placeholder="Email"
                        type="email"
                        name="email"
                        noValidate
                        onChange={this.handleChange}
                      />
                      {formErrors.email.length > 0 && (
                        <span className="errorMessage">{formErrors.email}</span>
                      )}
                    </div>
                    <div className="password">
                      <label htmlFor="password">Password</label>
                      <input
                        className={
                          formErrors.password.length > 0 ? "error" : null
                        }
                        placeholder="Password"
                        type="password"
                        name="password"
                        noValidate
                        onChange={this.handleChange}
                      />
                      {formErrors.password.length > 0 && (
                        <span className="errorMessage">
                          {formErrors.password}
                        </span>
                      )}
                    </div>
                    <div className="createAccount">
                      <button type="submit">Submit</button>
                    </div>
                    <button type="btn" id="btn-facebook">
                      Sign in with Facebook
                    </button>
                    <button type="btn" id="btn-Google">
                      Sign in with Google
                    </button>
                    <Link to="/" className="createAccount">
                      Already Have an Account?{" "}
                    </Link>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default FreeUser;
