import React,{Component} from "react"
import "../ChallengesList/challengeslist.css"

export default class ChallengesList extends Component{
        constructor(props){
            super(props);
            this.state={}
        }

        render(){
            return(
                <>
                <div className="list-container">
                    <div className="row">
                        <div className="col-12">
                            <div className="card-challenge-container">
                                <div className="row">
                                    <div className="col-10">
                                <p><strong>QUIZ/CODE/DEMO</strong><br/>
                                username<br/>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, eum.<br/>
                                <strong>HTML - CSS</strong>
                                </p>
                                </div>
                                <div className="col-2">
                                    <p>Upvotes</p>
                                    <p>star icons</p>
                                    <p><strong>Difficulty:</strong> Easy</p>
                                </div>
                                    </div>
                            </div>
                            <div className="card-challenge-container">
                                <div className="row">
                                    <div className="col-10">
                                <p><strong>QUIZ/CODE/DEMO</strong><br/>
                                username<br/>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, eum.<br/>
                                <strong>HTML - CSS</strong>
                                </p>
                                </div>
                                <div className="col-2">
                                    <p>Upvotes</p>
                                    <p>star icons</p>
                                    <p><strong>Difficulty:</strong> Easy</p>
                                </div>
                                    </div>
                            </div>
                            <div className="card-challenge-container">
                                <div className="row">
                                    <div className="col-10">
                                <p><strong>QUIZ/CODE/DEMO</strong><br/>
                                username<br/>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, eum.<br/>
                                <strong>HTML - CSS</strong>
                                </p>
                                </div>
                                <div className="col-2">
                                    <p>Upvotes</p>
                                    <p>star icons</p>
                                    <p><strong>Difficulty:</strong> Easy</p>
                                </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
                </>
            )
        }
}