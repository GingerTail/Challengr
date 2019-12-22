import React, { Component } from "react"
import FilterNav from "../FilterNav/FilterNav";
import "../Challenges/challenges.css"
import ChallengesList from "../ChallengesList/ChallengesList";

export default class Challenges extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <>
                <h1 className="h1">Challenges</h1>
                <hr width="50%" />
                <div className="container mb-4">
                    <div className="row mt-5" >
                        <div className="col-sm-12 col-md-12 col-lg-4 mt-3">
                            <FilterNav />
                        </div>
                        <div className="col-sm-12 col-lg-8 mt-4">
                            <ChallengesList />
                        </div>
                    </div>
                </div>
            </>

        )
    }
}