import React,{Component} from "react"
import CollapseQuiz from "./CollapseQuiz"
import {connect} from "react-redux"

const mapStateToProps = reduxStore => {
    return reduxStore;
  };
  

 class QuizList extends Component{
     constructor(props){
         super(props);
     }

    render(){
        return(
                    <div className="row">
                         <div className="col-12">
                          {this.props.quiz.map((singleQuiz, index) =>{
                                    return(
                                        <CollapseQuiz
                                        question={"what?"}
                                        correct={"ciao"}
                                        id={index}
                                    />

                                    )
            })}
            </div>
                    </div>
        )
    }
}

export default connect(mapStateToProps)(QuizList)