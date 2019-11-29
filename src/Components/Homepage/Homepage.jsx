import React, { Component } from "react"
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import TopChallenges from "./TopChallenges/TopChallenges";
import Challenges from "./Challenges/Challenges";

export default class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <>
            <TopChallenges/>
           <Challenges/>
         
            </>
        )
    }


}