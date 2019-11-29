import React,{Component} from "react"
import "../ChallengesList/challengeslist.css"
import {connect} from "react-redux"

const mapStateToProps = reduxStore => {
    return reduxStore;
  };

class ChallengesList extends Component{
        constructor(props){
            super(props);
            this.state={
                challenges:[]
            }
        }

        componentDidMount = () => {
            this.setState({ challenges: this.props.challengeList });
          };

        render(){
            return(
                <>
                <div className="list-container">
                    <div className="row">
                        {this.props.challengeList && 
                        <>
                        {this.props.challengeList.map((singleChallenge, index) =>{
                            return(
                                <div className="col-sm-6 col-lg-12">
                                <div className="card-challenge-container">
                                    <div className="row">
                                        <div className="col-12 col-lg-10">
                                    <p><strong>QUIZ/CODE/DEMO</strong><br/>
                                    author name<br/>
                                     Description: <br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, eum.<br/>
                                    <strong>HTML - CSS</strong>
                                    </p>
                                    </div>
                                    <div className="col-12 col-lg-2">
                                        <p>Upvotes: </p>
                                        
                                        <p><strong>Difficulty:</strong> Easy</p>
                                    </div>
                                        </div>
                                </div>
                                </div>
                            )
                        })}
                        </>
                        }                    
                    </div>
                </div>
                </>
            )
        }
}

export default connect(mapStateToProps)(ChallengesList)