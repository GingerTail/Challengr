import React,{Component, Fragment} from "react"
import QuizFrom from "./QuizForm"
import QuizList from "./QuizList"
import "../Quiz/quiz.css"

export default class Quiz extends Component{


    render(){

        return(
            <>
            <div className="quiz-container text-left mb-5">
                <div className="row">
                    <div className="col-6">
                        <QuizList/>

                    </div>
                    <div className="col-6">
                        <QuizFrom/>
                        
                        </div>
                </div>

            </div>
            <style jsx>{``}</style>
            </>
        )
    }
}