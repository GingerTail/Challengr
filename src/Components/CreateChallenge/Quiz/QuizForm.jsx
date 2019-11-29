import React,{Component} from "react"
import {connect} from "react-redux"
import "../Quiz/quiz.css"

const mapStateToProps = reduxStore => {
    return reduxStore;
  };
  
  const mapDispatchToProps = dispatch => ({
        addQuestion:()=>
        dispatch(handleAddQuestion())
  })


  const handleAddQuestion= () =>{
    return async function(
        dispatch,
        getState
    ){
       
        dispatch({
            type:"ADD_QUESTION",
            payload: ""
        })
    }
  }


class QuizFrom extends Component{
    constructor(props){
        super(props);
        this.state={
            question:{
                title:"",
                correct:"",
                wrong1:"",
                wrong2:"",
                wrong3:""
            }
        }
    }

    render(){
        return(
            <>
                    <div className="row">
                    <div className="col-sm-12 col-lg-6 align-self-end">
                    <label for="exampleFormControlTextarea1">1. Question </label>
                    <input type="text"/>
                    </div>
                    <div className="col-sm-12 col-lg-6 text-center mb-5">
                    <img src="http://telugukshatriyamatrimony.com/img/no_image_startup.png" className="" width="150px"/>
                    </div>
                    <div className="col-sm-12 col-lg-6">
                    <p className="d-inline pl-4">Correct</p>
                    <input className="d-inline" value={this.state.question.wrong1} type="text" onChange={(e) => this.setState({question: this.state.question.wrong1 = e.target.value})}/>
                    </div>
                    <div className="col-sm-12 col-lg-6">
                    <p className="d-inline pl-4">Correct</p>
                    <input className="d-inline" type="text"/>
                    </div>
                    <div className="col-sm-12 col-lg-6">
                    <p className="d-inline pl-4">Correct</p>
                    <input className="d-inline" type="text"/>
                    </div>
                    <div className="col-sm-12 col-lg-6">
                    <p className="d-inline pl-4">Correct</p>
                    <input className="d-inline" type="text"/>
                    </div>
                        </div>
                        <div className="">
                        <button className="btn btn-primary">+ Add to list</button>
                        </div>
                        <hr/>
            </>
            
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(QuizFrom);