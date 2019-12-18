import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./navbar.css";

const mapStateToProps = state => state;

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false
    };
  }

  componentDidMount = () => {
    if (localStorage.getItem("token") !== null) {
      this.setState({ login: true });
    }
  };

  componentDidUpdate = prevProps => {
    if (
      prevProps.loggedUser !== this.props.loggedUser &&
      this.props.loggedUser !== {}
    ) {
      this.setState({ login: true });
    }
  };

  render() {
    return (
      <nav class="navbar">
        <a class="navbar-logo" href="/"><h3>Challengr</h3></a>
        <div className="justify-content-start">
          {!this.state.login ? (
            <form class="form-inline">
              <>
                <button className="btn-navbar"><Link className="Link" to="/FreeUserRegistration">Sign up</Link></button>

                <button className="btn-navbar"><Link className="Link" to="/login">Log In</Link></button>

              </>
            </form>
          ) : (
              <>
                <Link to="/">{this.props.loggedUser.username}</Link>
                <button className="btn  ml-3" type="submit">Log Out</button>
              </>
            )}

        </div>


      </nav>
    );
  }
}
















export default connect(mapStateToProps)(Navbar);
