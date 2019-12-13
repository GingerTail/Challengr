import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import Homepage from "./Homepage/Homepage";
import Navbar from "./Navbar/Navbar";
import { TabMenu } from "./CreateTabSystem/TabMenu";
import login from "./LogIn/LogIn";
import FreeUserRegistration from "./FreeUserRegistration/FreeUserRegistration";
import FreeUserDashboard from "./FreeUserDashboard/FreeUserDashboard";
import { StartChallenge } from "./StartChallenge/StartChallenge";

const mapStateToProps = reduxStore => {
  return reduxStore;
};

class RouterPage extends Component {
  componentWillMount = async () => {
    //await this.props.fetchData();
  };

  render() {
    return (
      <Router>
        <Navbar />
        <Route exact path="/" component={Homepage} />
        <Route exact path="/create" component={TabMenu} />
        <Route exact path="/start/:id" component={StartChallenge} />
        <Route exact path="/login" component={login} />
        <Route
          exact
          path="/FreeUserRegistration"
          component={FreeUserRegistration}
        />
        <Route exact path="/FreeUserDashboard" component={FreeUserDashboard} />
      </Router>
    );
  }
}

export default connect(mapStateToProps /* mapDispatchToProps */)(RouterPage);
