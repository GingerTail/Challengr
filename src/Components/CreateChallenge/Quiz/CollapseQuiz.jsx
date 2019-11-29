import React, { Component } from 'react';

class CollapseQuiz extends Component{


  render(){
    return(
      <>
             <div id="prova">
            <p>
  <a class="btn btn-primary" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
    Link with href
  </a>
</p>
<div class="collapse" id="collapseExample">
  <div class="card card-body">
    answers list
  </div>
</div>
            </div>
      </>
    )
  }
}
export default CollapseQuiz;
