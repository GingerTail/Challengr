import React,{Component} from "react"
import "./topchallenges.css"

export default class TopChallenges extends Component{

    render(){
        return(
            <>
            <div className="container mt-3" id="top-ch-container">
                <div className="row">
                    <div className="col-4">
                    <div className="card-container">
                        <h4>TEST1</h4>
                        <p><strong>QUIZ/CODE/DEMO</strong></p>
                        <p><strong>Author: </strong> username
                        <br/>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <p><strong>upvotes</strong> <br/>
                        icons</p>
                        <p><strong>HTML - CSS - JS</strong></p>
                        <button className="btn btn-primary">See more</button>
                        </div>
                    </div>
                    <div className="col-4">
                    <div className="card-container">
                        <h4>TEST1</h4>
                        <p><strong>QUIZ/CODE/DEMO</strong></p>
                        <p><strong>Author: </strong> username
                        <br/>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <p><strong>upvotes</strong> <br/>
                        icons</p>
                        <p><strong>HTML - CSS - JS</strong></p>
                        <button className="btn btn-primary">See more</button>
                        </div>
                    </div>
                    <div className="col-4">
                    <div className="card-container">
                        <h4>TEST1</h4>
                        <p><strong>QUIZ/CODE/DEMO</strong></p>
                        <p><strong>Author: </strong> username
                        <br/>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <p><strong>upvotes</strong> <br/>
                        icons</p>
                        <p><strong>HTML - CSS - JS</strong></p>
                        <button className="btn btn-primary">See more</button>
                        </div>
                    </div>                 
                </div>
            </div>
            <hr/>
            </>
        )
    }
}