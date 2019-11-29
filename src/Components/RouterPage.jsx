import React,{Component} from "react"
import { BrowserRouter as Router, Route } from "react-router-dom";
import {connect} from "react-redux"
import Homepage from "./Homepage/Homepage";
import Navbar from "./Navbar/Navbar";
import CreateChallenge from "./CreateChallenge/CreateChallenge";

const mapStateToProps = reduxStore => {
    return reduxStore;
  };
  
  const mapDispatchToProps = dispatch => ({
        fetchData:()=>
        dispatch(handleFetchData())
  })

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
  }
  

class RouterPage extends Component{


    componentWillMount = async () =>{  
        await this.props.fetchData();
    
    } 


        render(){
            return(
              <Router>
                 <Navbar/>
                <Route exact path="/" component={Homepage}/>
                <Route exact path="/create" component={CreateChallenge}/>
              </Router>
            )
        }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(RouterPage);