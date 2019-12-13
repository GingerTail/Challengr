import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import Homepage from "./Homepage/Homepage";
import Navbar from "./Navbar/Navbar";
import { TabMenu } from "./CreateTabSystem/TabMenu";
//import CreateChallenge from "./CreateChallenge/CreateChallenge";
//import DemoProject from "./DemoProject/DemoProject";
import login from "./LogIn/LogIn";
import FreeUserRegistration from "./FreeUserRegistration/FreeUserRegistration";
import FreeUserDashboard from "./FreeUserDashboard/FreeUserDashboard";
//import Quiz from "./CreateChallenge/Quiz/Quiz";
//import GeneralSettings from "./CreateChallenge/GeneralSettings/GeneralSettings";
//import Demo from "./CreateChallenge/Demo/Demo";
//import Summary from "./CreateChallenge/Summary/Summary";
import MainPage from "./QuizPlay/MainPage";
//import displayChallenge from "./StartChallenge/test";
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
        <Route path="/playQuiz/:id" component={MainPage} />
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
