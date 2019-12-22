import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import LogoLogo from "./img/LogoChallengr.png";
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
      <nav className="navbar">
        <Link to="/"><img src={LogoLogo} width='150px' href="/" mt-5 style={{ textDecoration: 'none' }} /></Link>

        <a className="navbar-logo" />
        <div className="justify-content-start">
          {!this.state.login ? (
            <form class="form-inline">
              <>
                <button className="btn-navbar"><Link to="/FreeUserRegistration" style={{ textDecoration: 'none', color: '#fff' }}>Sign up</Link></button>
                <button className="btn-navbar"><Link to="/login" style={{ textDecoration: 'none', color: '#fff' }}>Log In</Link></button>

              </>
            </form>
          ) : (
              <>
                <Link to="/">{this.props.loggedUser.username} </Link>
                <button className="btn  ml-3" type="submit">Log Out</button>
              </>
            )}

        </div>


      </nav>
    );
  }
}
















export default connect(mapStateToProps)(Navbar);
