import React, { Component } from "react";
import "../ChallengesList/challengeslist.css";
import { connect } from "react-redux";

const mapStateToProps = reduxStore => reduxStore;
const mapDispatchToProps = dispatch => ({
  fetchChallenges: () => dispatch(handleFetchChallenges())
});

const handleFetchChallenges = () => {
  return async function(dispatch, getState) {
    let response = await fetch("http://localhost:3015/challenge?limit=8", {
      headers: {
        Authorization:
          "Bearer " +
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGRiZWJiOGNhODcyMjFkMjgxOGQzNjYiLCJpYXQiOjE1NzQ5NTM2MDMsImV4cCI6MTU3NTA0MDAwM30.4L4VrFLafZ3VYw0btp6exwriZRRvrW8sC-ea8-tfKBg"
      }
    });
    if (response.ok) {
      let json = await response.json();

      dispatch({
        type: "STORE_DATA",
        payload: json.challenges
      });
    }
  };
};

class ChallengesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      challenges: []
    };
  }

  componentDidMount = () => {
    //this.setState({ challenges: this.props.challengeList });
    this.props.fetchChallenges();
  };

  getContentInfo = challenge => {
    console.log(challenge);
    var finalString = "";
    challenge.content.map(el => {
      switch (el.resourceType) {
        case "quizId":
          finalString = finalString + "QUIZ/";
          break;
        case "demoId":
          finalString = finalString + "DEMO/";
        default:
          break;
      }
    });
    return finalString;
  };

  render() {
    return (
      <>
        <div className="list-container">
          <div className="row">
            {this.props.challengeList && (
              <>
                {this.props.challengeList.map((singleChallenge, index) => {
                  return (
                    <div className="col-sm-6 col-lg-12">
                      <div className="card-challenge-container">
                        <div className="row">
                          <div className="col-12 col-lg-10">
                            <p>
                              <strong>
                                {this.getContentInfo(singleChallenge)}
                              </strong>
                              <br />
                              <strong>Author:</strong>{" "}
                              {singleChallenge.author || "no author"}
                              <br />
                              <strong>Description:</strong> <br />
                              {singleChallenge.description}
                              <br />
                              <strong>
                                {singleChallenge.languages.join(" - ")}
                              </strong>
                            </p>
                          </div>
                          <div className="col-12 col-lg-2">
                            <p>Upvotes: </p>

                            <p>
                              <strong>Difficulty:</strong> Easy
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </>
            )}
          </div>
        </div>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChallengesList);
