import React, { Component } from "react";
import { connect } from "react-redux";
import "./introduction.css";

const mapStateToProps = reduxStore => {
  return reduxStore;
};

const mapDispatchToProps = dispatch => ({
  startChallenge: start =>
    dispatch({
      type: "START_CHALLENGE",
      payload: start
    })
});

class Introduction extends Component {
  state = {
    start: {
      check: true,
      tab: "2"
    }
  };

  /*  componentDidMount = () => {
    this.setState(prevState => ({
      start: {
        ...prevState.start, // copy all other key-value pairs of food object
        check: false,
        tab: "1"
      }
    }));
    this.props.startChallenge(this.state.start);
  }; */

  triggerStart = event => {
    this.props.startChallenge(this.state.start);
    event.target.className = "d-none";
    console.log(event.target.className);
  };
  render() {
    return (
      <>
        <div className="introduction-container mt-3">
          <h3 className="text-center">Introduction</h3>
          <div className="row">
            <div className="col-12 ml-3 mt-3 ">
              <h5>Author: </h5>
              <p>Author Name</p>
              <h5>Description: </h5>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
                repellat explicabo aliquam aliquid, aut, et quasi atque libero
                amet odit recusandae. Atque asperiores rem iusto est totam alias
                perferendis temporibus exercitationem non nihil odio autem,
                maxime deserunt laborum quam ipsum officiis veniam esse
                blanditiis dolor voluptates rerum? Similique, ullam reiciendis?
              </p>
              <h5>Difficulty:</h5>
              <p>Normal</p>
              <h5>Languages</h5>
              <p>CSS JAVASCRIPT</p>
              <h5>Time:</h5>
              <p>1.20h</p>
              <h5>Rules:</h5>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus aut ad nemo natus qui, dolorem et laborum reiciendis
                voluptatibus cum?
              </p>
            </div>
            <button
              onClick={event => this.triggerStart(event)}
              className="custom-btn start-btn mt-3 p-2"
            >
              Start Challenge
            </button>
          </div>
        </div>
      </>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Introduction);
