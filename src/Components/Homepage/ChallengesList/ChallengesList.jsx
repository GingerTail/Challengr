import React,{Component} from "react"
import "../ChallengesList/challengeslist.css"
import MDBIcon from "mdbreact"

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
                        <div className="col-sm-6 col-lg-12">
                            <div className="card-challenge-container">
                                <div className="row">
                                    <div className="col-12 col-lg-10">
                                <p><strong>QUIZ/CODE/DEMO</strong><br/>
                                username<br/>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, eum.<br/>
                                <strong>HTML - CSS</strong>
                                </p>
                                </div>
                                <div className="col-12 col-lg-2">
                                    <p>Upvotes</p>
                                    <p><strong>6,350</strong><i className="fas fa-thumbs-up ml-2"></i> </p>
                                    <p><strong>Difficulty:</strong> Easy</p>
                                </div>
                                    </div>
                            </div>
                            </div>
                            <div className="col-sm-6 col-lg-12">
                            <div className="card-challenge-container">
                                <div className="row">
                                    <div className="col-12 col-lg-10">
                                <p><strong>QUIZ/CODE/DEMO</strong><br/>
                                username<br/>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, eum.<br/>
                                <strong>HTML - CSS</strong>
                                </p>
                                </div>
                                <div className="col-12 col-lg-2">
                                    <p>Upvotes</p>
                                    <p><strong>6,350</strong><i className="fas fa-thumbs-up ml-2"></i> </p>
                                    <p><strong>Difficulty:</strong> Easy</p>
                                </div>
                                    </div>
                            </div>
                            </div>
                       
                            <div className="col-sm-6 col-lg-12">
                            <div className="card-challenge-container">
                                <div className="row">
                                    <div className="col-12 col-lg-10">
                                <p><strong>QUIZ/CODE/DEMO</strong><br/>
                                username<br/>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, eum.<br/>
                                <strong>HTML - CSS</strong>
                                </p>
                                </div>
                                <div className="col-12 col-lg-2">
                                    <p>Upvotes</p>
                                    <p><strong>6,350</strong><i className="fas fa-thumbs-up ml-2"></i> </p>
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