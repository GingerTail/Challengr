import React,{Component, Fragment} from "react"
import QuizFrom from "./QuizForm"
import QuizList from "./QuizList"
import "../Quiz/quiz.css"

export default class Quiz extends Component{


    render(){

        return(
            <>
            <div id="prova">
            <p>
  <a class="btn btn-primary" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
    Link with href
  </a>
  <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
    Button with data-target
  </button>
</p>
<div class="collapse" id="collapseExample">
  <div class="card card-body">
    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
  </div>
</div>
            </div>
            <div className="quiz-container text-left animated fadeIn mb-5">
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