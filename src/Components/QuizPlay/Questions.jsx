import React, { Component } from 'react';

class Questions extends Component {
   constructor(props) {
       super(props)
   
       this.state = {
            ready:false
       }
   }

   componentDidMount = ()=>{
       const {time,questions,author}= this.props.quiz
       this.setState({time,questions,author,ready:true})
   }

   nextQuestion=()=>{

   }

    render() {
        const {time,questions,author}= this.state
        console.log(questions)
        return (
            this.state.ready ? 
            <div id="quiz">
                <h2 className="text-center font-weight-normal">{time}</h2>
                <hr />
                {questions.map((q,index) =>
                    <div key={index}>
                        <div className="badge badge-info">Question {index + 1} of {questions.length}.</div>
                        <h3 className="font-weight-normal">{index + 1}. <span>{q.question.text}</span></h3> <br/>
                        {q.question.image !== "" && <image src={q.question.image} alt="question image" width="300px"/>}
                        <div className="row text-left options">
                            {
                                q.answers.map((answer,index) =>
                                    <div key={index} className="col-6">
                                        <div className="option">
                                            <label className="font-weight-normal" htmlFor={index}>
                                                <input id={index}  type="checkbox" />
                                                {answer}
                                            </label>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                )}
                <hr />
                <div className="text-center">
                    <button id="next" className="btn btn-primary" onClick={this.nextQuestion}>Next</button>
                </div>
            </div > : <p>loading</p>
        )
    }
}

export default Questions