import React,{Component} from "react"
import {steps} from "./Wizards/Wizard";
import MultiStep from 'react-multistep';
import "./Wizards/css/custom.css"
import "./Wizards/css/normalized.css"
import "./Wizards/css/prog-tracker.css"
import "./Wizards/css/skeleton.css"

export default class CreateChallenge extends Component{

    render(){
        return(
            <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 text-center">
            <h1>CREATE CHALLENGE</h1>
                    </div>
                <div className="col-12 text-center">
            <div>
      <MultiStep steps={steps} />
    </div>

                </div>
                </div>
            </div>
            </>
        )
    }
}