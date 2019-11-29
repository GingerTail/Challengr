import React, { Component } from "react";
import "../FilterNav/filternav.css";
import { connect } from "react-redux";


const mapStateToProps = reduxStore => {
  return reduxStore;
};
const mapDispatchToProps = dispatch => ({
  createFilter: (event, typeName) =>
    dispatch(handleCreateFilter(event, typeName))
});

const handleCreateFilter = (event, typeName) => {
  return async function(dispatch, getState) {
    dispatch({
      type: typeName,
      payload: event
    });
  };
};

class FilterNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      languages: [],
      difficulty: [],
      type: []
    };
  }

  EditFilter = event => {
    let value = event.target.value;
    let checked = event.target.checked;
    let name = event.target.name;
    switch (name) {
      case "languages":
        if (checked == true) {
          this.setState({ languages: this.state.languages.concat([value]) });
        } else {
          let array = this.state.languages;
          let findIndex = array.indexOf(value);
          if (findIndex !== -1) {
            array.splice(findIndex, 1);
            this.setState({ languages: array });
          }
        }
        break;
      case "difficulty":
        if (checked == true) {
          this.setState({ difficulty: this.state.difficulty.concat([value]) });
        } else {
          let array = this.state.difficulty;
          let findIndex = array.indexOf(value);
          if (findIndex !== -1) {
            array.splice(findIndex, 1);
            this.setState({ difficulty: array });
          }
        }
        break;
      case "type":
        if (checked == true) {
          this.setState({ type: this.state.type.concat([value]) });
        } else {
          let array = this.state.type;
          let findIndex = array.indexOf(value);
          if (findIndex !== -1) {
            array.splice(findIndex, 1);
            this.setState({ type: array });
          }
        }
        break;
    }
  };

  SubmitFilter = async () => {
    await this.props.createFilter(this.state.languages, "FILTER_LANGUAGES");
    await this.props.createFilter(this.state.difficulty, "FILTER_DIFFICULTY");
    await this.props.createFilter(this.state.type, "FILTER_TYPE");
    await console.log("REDUX FILTERS: ");
    await console.log(this.props.languages);
    await console.log(this.props.difficulty);
    await console.log(this.props.type);
  };

  render() {
    return (
      <>
        <div className="filternav-container">
          <div className="row">
            <h4>Filter:</h4>
            <div className="col-12 text-left">
              <form action="/action_page.php">
                <p>
                  <strong>Languages</strong>
                </p>
                <input
                  type="checkbox"
                  name="languages"
                  value="javascript"
                  onClick={event => this.EditFilter(event)}
                />{" "}
               <p className="d-inline">Javascript</p>
                <br />
                <input
                  type="checkbox"
                  name="languages"
                  value="html"
                  onClick={event => this.EditFilter(event)}
                />{" "}
                HTML
                <br />
                <input
                  type="checkbox"
                  name="languages"
                  value="css"
                  onClick={event => this.EditFilter(event)}
                />{" "}
                CSS
                <br />
                <input
                  type="checkbox"
                  name="languages"
                  value="nodejs"
                  onClick={event => this.EditFilter(event)}
                />{" "}
                NodeJS
                <br />
                <br />
              </form>
            </div>
            <div className="col-12">
              <form action="/action_page.php">
                <p>
                  <strong>Difficulty</strong>
                </p>
                <input
                  type="checkbox"
                  name="difficulty"
                  value="1"
                  onClick={event => this.EditFilter(event)}
                />{" "}
                Easy
                <br />
                <input
                  type="checkbox"
                  name="difficulty"
                  value="2"
                  onClick={event => this.EditFilter(event)}
                />{" "}
                Normal
                <br />
                <input
                  type="checkbox"
                  name="difficulty"
                  value="3"
                  onClick={event => this.EditFilter(event)}
                />{" "}
                Hard
                <br />
                <br />
              </form>
            </div>
            <div className="col-12">
              <form action="/action_page.php">
                <p>
                  <strong>Type</strong>
                </p>
                <input
                  type="checkbox"
                  name="type"
                  value="quiz"
                  onClick={event => this.EditFilter(event)}
                />{" "}
                Quiz
                <br />
                <input
                  type="checkbox"
                  name="type"
                  value="code"
                  onClick={event => this.EditFilter(event)}
                />{" "}
                Code
                <br />
                <input
                  type="checkbox"
                  name="type"
                  value="demo"
                  onClick={event => this.EditFilter(event)}
                />{" "}
                Demo
                <br />
                <br />
              </form>
            </div>
            <button className="btn btn-primary" onClick={this.SubmitFilter}>
              Search
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterNav);
