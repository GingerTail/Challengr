import React,{Component} from "react"
import FilterNav from "../FilterNav/FilterNav";
import "../Challenges/challenges.css"
import ChallengesList from "../ChallengesList/ChallengesList";

export default class Challenges extends Component{
    constructor(props){
        super(props);
        this.state = {}
    }
    render(){
        return(
            <>
            <div className="container-fluid mb-4">
            <h1>Challenges</h1>
                <div className="row mt-5">
                    <div className="col-3">
                      <FilterNav/>
                    </div>
                    <div className="col-9">
                       <ChallengesList/>
                    </div>
                </div>
            </div>
            </>
        )
    }
}