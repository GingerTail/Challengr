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
                    <div>
                        <h1>quizlist</h1>
                        {this.props.quiz.map((singleQuiz, index) =>{
                                    return(
                                        <CollapseQuiz
                                        question={"what?"}
                                        correct={"ciao"}
                                    />
                                    )
            })}
                    </div>
        )
    }
}

export default connect(mapStateToProps)(QuizList)