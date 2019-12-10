import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import Homepage from "./Homepage/Homepage";
import Navbar from "./Navbar/Navbar";
import CreateChallenge from "./CreateChallenge/CreateChallenge";
import { StartChallenge } from "./StartChallenge/StartChallenge";
import login from "./LogIn/LogIn";
import FreeUser from "./FreeUser/FreeUser";
import Quiz from "./CreateChallenge/Quiz/Quiz";
import GeneralSettings from "./CreateChallenge/GeneralSettings/GeneralSettings";
import Demo from "./CreateChallenge/Demo/Demo";
import Summary from "./CreateChallenge/Summary/Summary";
import MainPage from "./QuizPlay/MainPage";

const mapStateToProps = reduxStore => {
  return reduxStore;
};

/* const mapDispatchToProps = dispatch => ({
  fetchData: () => dispatch({})
});
 */
/*
  const handleFetchData= () =>{
    return async function(
        dispatch,
        getState
    ){
        var response = await fetch("",  {method: "GET" });
        if(response.ok){
            console.log("Challenges List GET Successfully");
                var result= await response.json()
        }else{
            alert("Challenges List NOT GET Successfully");
        }
        dispatch({
            type:"STORE_DATA",
            payload: result
        })
    }
  } */

class RouterPage extends Component {
  componentWillMount = async () => {
    //await this.props.fetchData();
  };

  render() {
    return (
      <Router>
        <Navbar />
        <Route exact path="/" component={Homepage} />
        <Route exact path="/create/quiz" component={Quiz} />
        <Route exact path="/create/demo" component={Demo} />
        <Route
          exact
          path="/create/generalsettings"
          component={GeneralSettings}
        />
        <Route exact path="/create/summary" component={Summary} />
        <Route path="/playQuiz/:id" component={MainPage} />
        <Route exact path="/create" component={CreateChallenge} />
        <Route exact path="/start/:id" component={StartChallenge} />
        <Route exact path="/login" component={login} />
        <Route exact path="/FreeUser" component={FreeUser} />
      </Router>
    );
  }
}

export default connect(mapStateToProps /* mapDispatchToProps */)(RouterPage);
