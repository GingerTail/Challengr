import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false
    };
  }

  componentWillMount = () => {
    if (localStorage.getItem.token != null) {
      this.setState({ login: true });
    }
  };

  render() {
    return (
      <nav className=" w-100 navbar bg-navbar fixed-top">
        <a className="navbar-brand" href="/">
          <img
            src="/docs/4.3/assets/brand/bootstrap-solid.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
          />
          Challengr
        </a>
        <div className="float-right link-box">
          {this.state.login == false ? (
            <>
              <Link to="/FreeUserRegistration" className="mr-2">
                Sign up
              </Link>
              <Link to="/login">Log In</Link>
            </>
          ) : (
            <a href="#">Account</a>
          )}
        </div>
      </nav>
    );
  }
}
