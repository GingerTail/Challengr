import React, { Component } from 'react';

export default class Navbar extends Component{
  constructor(props){
    super(props)
    this.state={
      login: false
    }

  }

  componentWillMount = () =>{
    if(localStorage.getItem.token != null){
      this.setState({login: true})
    }
  }

render(){
  return(
    <nav className="navbar navbar-light bg-light">
  <a className="navbar-brand" href="#">
    <img src="/docs/4.3/assets/brand/bootstrap-solid.svg" width="30" height="30" className="d-inline-block align-top" alt=""/>
    Challengr
  </a>
  <div className="float-right">
    {this.state.login == false ? 
    <>
    <a href="#" className="mr-2">Login</a>
    <a href="#">Signup</a>
    </>
    :
    <a href="#">Account</a>
    }
  </div>
</nav>
  )
}
}
