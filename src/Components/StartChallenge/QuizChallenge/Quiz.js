import React, { Component } from 'react';
import Questions from './Questions';


class Quiz extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div>
                {this.props.quiz != null &&
               <Questions quiz={this.props.quiz}/>
                }
            </div>
        )
    }
}

export default Quiz