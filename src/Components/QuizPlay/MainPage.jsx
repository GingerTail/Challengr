import React, { Component } from "react";
import "./MainPage.css";
import Quiz from "./Quiz";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quizId:"5de92b0493a9a3088054f383",
      quiz:null
    };
  }

  componentDidMount = async ()=> {
  console.log(this.props.match.params)
  const quiz = await this.fetchQuiz(this.state.quizId)
  this.setState({quiz})
  }
  
  fetchQuiz = async (quizId) => {
   try{
    let response = await fetch("http://localhost:3015/quiz/"+quizId,{
      headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGU5MmFlZjkzYTlhMzA4ODA1NGYzODEiLCJpYXQiOjE1NzU1NjE5NzcsImV4cCI6MTU3NTY0ODM3N30.YF3tVV3f8qo3T-ecD81xeunuqVTbadD8jeMJuc7DT18"
      }
    })
    if(response.ok){
      let json = await response.json()
      if(json.success){
       return json.quiz
      }else console.log(json.error)
    }
   }catch(err){
     console.log(err)
   }
  }

  render() {
    return (
      <div className="container">
      {this.state.quiz != null && 
        <Quiz
          quiz={this.state.quiz}
        />
      }
      </div>
    );
  }
}

export default App;