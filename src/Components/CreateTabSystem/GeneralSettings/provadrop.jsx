import React, { Component } from "react";
import Select from "react-select";
import { connect } from "react-redux";

const options = [
  { value: "C#", label: "C#" },
  { value: "Javascript", label: "Javascript" },
  { value: "NodeJs", label: "NodeJS" }
];

const mapDispatchToProps = dispatch => ({
  addLanguage: event =>
    dispatch({
      type: "UPDATE_LANGUAGES",
      payload: event
    })
});

class DropdownMenu extends Component {
  state = {
    optionsList: []
  };
  handleChange = selectedOption => {
    let check = this.state.optionsList.includes(selectedOption.value);
    if (check) {
    } else {
      this.setState({
        optionsList: this.state.optionsList.concat(selectedOption.value)
      });
      this.props.addLanguage(selectedOption.value);
    }
  };
  render() {
    return (
      <div className="mb-3">
        <Select
          onChange={this.handleChange}
          autoFocus={true}
          options={options}
        />
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(DropdownMenu);
