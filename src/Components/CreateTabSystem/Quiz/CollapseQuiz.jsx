import React, { Component } from "react";

class CollapseQuiz extends Component {
  render() {
    return (
      <>
        <p className="d-inline mr-2">
          <button
            className="btn btn-primary"
            type="button"
            data-toggle="collapse"
            data-target={`#collapse-${this.props.id}`}
            aria-expanded="false"
            aria-controls={`collapse-${this.props.id}`}
          >
            {this.props.id}
          </button>
        </p>
        <div className="collapse" id={`collapse-${this.props.id}`}>
          <div className="card card-body">answers list</div>
        </div>
      </>
    );
  }
}
export default CollapseQuiz;