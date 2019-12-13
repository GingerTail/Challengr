import React, { Component } from "react";
import "../ChallengesList/challengeslist.css";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { refreshToken } from "../../../Actions/fetchParams";
import { handleFetchChallenges } from "../../../Actions/ToDoChallengeActions";
import { handleGetLoggedUser } from "../../../Actions/userActions";

const mapStateToProps = reduxStore => reduxStore;
const mapDispatchToProps = dispatch => ({
  fetchChallenges: (skip, token) =>
    dispatch(handleFetchChallenges(skip, token)),
  StoreContent: content =>
    dispatch({
      type: "STORE_CONTENT",
      payload: content
    }),
  startChallenge: start =>
    dispatch({
      type: "START_CHALLENGE",
      payload: start
    }),
  removeLoggedUser: () => {
    dispatch({
      type: "REMOVE_LOGGED_USER"
    });
  },
  getLoggedUser: token => {
    dispatch(handleGetLoggedUser(token));
  }
});

class ChallengesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      challenges: [],
      allowAccess: false,
      redirectTo: ""
    };
  }

  componentDidMount = async () => {
    console.log("MOUNTED");
    let start = {
      check: false,
      tab: "1"
    };
    this.props.startChallenge(start);
    this.props.fetchChallenges();
    let token = localStorage.getItem("token");
    if (token !== null) {
      let allowAccess = await refreshToken(token);
      if (allowAccess) {
        this.props.getLoggedUser(token);
        this.setState({ allowAccess });
      }
    } else {
      this.setState({ allowAccess: false });
    }
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
    this.props.StoreContent({});
    let challengeContent = this.props.challengeList.challenges.filter(
      challenge => {
        return event.currentTarget.id == challenge._id;
      }
    )[0];
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
                          to={
                            this.state.allowAccess
                              ? `/start/${singleChallenge._id}`
                              : "/login"
                          }
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
                                  {this.getDifficulty(
                                    singleChallenge.difficulty
                                  )}
                                </p>
                              </div>
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
