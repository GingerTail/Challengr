import React,{Component} from "react"
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export default class Homepage extends Component{
    constructor(props){
        super(props);
        this.state={}    
    }

    render(){
        return(
            <>
            <Navbar/>
            <h1>HELLO</h1>
            <Footer/>
            </>
        )
    }


}