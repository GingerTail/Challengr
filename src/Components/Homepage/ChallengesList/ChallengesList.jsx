import React, { Component } from "react";
import "../ChallengesList/challengeslist.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const mapStateToProps = reduxStore => reduxStore;
const mapDispatchToProps = dispatch => ({
  fetchChallenges: skip => dispatch(handleFetchChallenges(skip)),
  StoreContent: content =>
    dispatch({
      type: "STORE_CONTENT",
      payload: content
    })
});

const handleFetchChallenges = (skip = 0) => {
  return async function(dispatch, getState) {
    let response = await fetch(
      `http://localhost:3015/challenge?limit=8&skip=${skip}`,
      {
        headers: {
          Authorization:
            "Bearer " +
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGRiZWJiOGNhODcyMjFkMjgxOGQzNjYiLCJpYXQiOjE1NzQ5NTM2MDMsImV4cCI6MTU3NTA0MDAwM30.4L4VrFLafZ3VYw0btp6exwriZRRvrW8sC-ea8-tfKBg"
        }
      }
    );
    if (response.ok) {
      let { challenges, numberOfChallenges } = await response.json();
      dispatch({
        type: "STORE_DATA",
        challenges,
        numberOfChallenges
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

  handleChangePage = pageNumber => {
    let pagesToSkip = (pageNumber - 1) * 8; //-1 because skip starts from 0
    this.props.fetchChallenges(pagesToSkip);
  };

  getContentInfo = challenge => {
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

  getPagination = () => {
    if (this.props.challengeList.numberOfChallenges != undefined) {
      let pagesArray = [];
      let totalPages = Math.floor(
        this.props.challengeList.numberOfChallenges / 8
      );
      if (this.props.challengeList.numberOfChallenges > 0) {
        for (let i = 1; i <= totalPages; i++) {
          pagesArray.push(i);
        }
      }
      return pagesArray;
    } else return [1];
  };
  storeContent = event => {
    console.log(event.currentTarget.id);
    let challengeContent = this.props.challengeList.challenges.filter(
      challenge => {
        return event.currentTarget.id == challenge._id;
      }
    );
    this.props.StoreContent(challengeContent);
  };

  getDifficulty = difficulty => {
    switch (difficulty) {
      case 1:
        return "Easy";
      case 2:
        return "Normal";
      case 3:
        return "Hard";
      default:
        return "NA";
    }
  };

  render() {
    let pagesArray = this.getPagination();
    return (
      <>
        <Link className="create-btn mb-5" to="create">
          + Add Challenge
        </Link>
        <div className="list-container">
          <div className="row">
            {this.props.challengeList.challenges && (
              <>
                <div className="col-sm-6 col-lg-12">
                  {this.props.challengeList.challenges.map(
                    (singleChallenge, index) => {
                      return (
                        <Link
                          className="challenge-link"
                          to={`/start/${singleChallenge._id}`}
                          onClick={event => this.storeContent(event)}
                          id={singleChallenge._id}
                        >
                          <div className="card-challenge-container mt-1">
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
                                <strong>Difficulty: </strong>
                                {this.getDifficulty(singleChallenge.difficulty)}
                              </p>
                            </div>
                          </div>
                        </Link>
                      );
                    }
                  )}
                  <div className="d-flex justify-content-center">
                    {pagesArray.map(el => (
                      <input
                        onClick={() => this.handleChangePage(el)}
                        type="button"
                        className="custom-btn px-0 py-0 d-block"
                        value={el}
                      />
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChallengesList);
